import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

import {
  Plus,
  Pencil,
  Trash2,
  LogOut,
  Briefcase,
  X,
  Save,
  ArrowLeft,
  History,
  BarChart3,
  TrendingUp,
} from 'lucide-react';
import { isAdminAuthenticated, adminLogout } from './AdminLogin';
import { JobPosting, getJobPostings, ActivityLogEntry, getActivityLog, addActivityLogEntry, getJobAnalytics } from '../Careers';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';


const emptyJob: Omit<JobPosting, 'id' | 'createdAt'> = {
  title: '',
  department: '',
  location: 'Paramaribo, Suriname',
  type: 'Full-time',
  description: '',
  requirements: [''],
  benefits: [''],
  salaryRange: '',
  deadline: '',
  status: 'draft',
};

const statusColors: Record<string, string> = {
  draft: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  published: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  closed: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
};

const statusLabels: Record<string, string> = {
  draft: 'Draft',
  published: 'Published',
  closed: 'Closed',
};

const AdminCareers = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<JobPosting | null>(null);
  const [formData, setFormData] = useState(emptyJob);
  const [activityLog, setActivityLog] = useState<ActivityLogEntry[]>([]);

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      navigate('/admin');
      return;
    }
    loadJobs();
    setActivityLog(getActivityLog());
  }, [navigate]);

  const loadJobs = () => {
    setJobs(getJobPostings());
  };

  const saveJobs = (updatedJobs: JobPosting[]) => {
    localStorage.setItem('rpbg-job-postings', JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
  };

  const refreshLog = () => setActivityLog(getActivityLog());

  const handleLogout = () => {
    adminLogout();
    navigate('/admin');
  };

  const openNewJobDialog = () => {
    setEditingJob(null);
    setFormData(emptyJob);
    setIsDialogOpen(true);
  };

  const openEditDialog = (job: JobPosting) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      description: job.description,
      requirements: job.requirements,
      benefits: job.benefits,
      salaryRange: job.salaryRange || '',
      deadline: job.deadline || '',
      status: job.status || 'published',
    });
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    const filteredRequirements = formData.requirements.filter((r) => r.trim());
    const filteredBenefits = formData.benefits.filter((b) => b.trim());

    const missingFields: string[] = [];
    if (!formData.title.trim()) missingFields.push('Job Title');
    if (!formData.department.trim()) missingFields.push('Department');
    if (!formData.location.trim()) missingFields.push('Location');
    if (!formData.type.trim()) missingFields.push('Employment Type');
    if (!formData.salaryRange?.trim()) missingFields.push('Salary Range');
    if (!formData.deadline?.trim()) missingFields.push('Application Deadline');
    if (!formData.description.trim()) missingFields.push('Job Description');
    if (filteredRequirements.length === 0) missingFields.push('Requirements (min. 1)');
    if (filteredBenefits.length === 0) missingFields.push('Benefits (min. 1)');

    if (missingFields.length > 0) {
      toast({
        title: 'Velden ontbreken',
        description: `Vul de volgende velden in: ${missingFields.join(', ')}`,
        variant: 'destructive',
      });
      return;
    }

    if (editingJob) {
      const updated = jobs.map((j) =>
        j.id === editingJob.id
          ? {
              ...j,
              ...formData,
              requirements: filteredRequirements,
              benefits: filteredBenefits,
              updatedAt: new Date().toISOString(),
            }
          : j
      );
      saveJobs(updated);
      addActivityLogEntry({ jobId: editingJob.id, jobTitle: formData.title, action: 'updated', details: 'Job posting updated' });
      toast({ title: 'Success', description: 'Job posting updated.' });
    } else {
      const newJob: JobPosting = {
        id: Date.now().toString(),
        ...formData,
        requirements: filteredRequirements,
        benefits: filteredBenefits,
        createdAt: new Date().toISOString(),
      };
      saveJobs([...jobs, newJob]);
      addActivityLogEntry({ jobId: newJob.id, jobTitle: formData.title, action: 'created', details: 'Job posting created' });
      toast({ title: 'Success', description: 'Job posting created.' });
    }

    refreshLog();
    setIsDialogOpen(false);
  };

  const handleDelete = (job: JobPosting) => {
    if (confirm('Are you sure you want to delete this job posting?')) {
      const updated = jobs.filter((j) => j.id !== job.id);
      saveJobs(updated);
      addActivityLogEntry({ jobId: job.id, jobTitle: job.title, action: 'deleted', details: 'Job posting deleted' });
      refreshLog();
      toast({ title: 'Deleted', description: 'Job posting removed.' });
    }
  };


  const changeStatus = (job: JobPosting, newStatus: 'draft' | 'published' | 'closed') => {
    const updated = jobs.map((j) =>
      j.id === job.id ? { ...j, status: newStatus, updatedAt: new Date().toISOString() } : j
    );
    saveJobs(updated);
    addActivityLogEntry({
      jobId: job.id,
      jobTitle: job.title,
      action: 'status_changed',
      details: `Status changed to ${statusLabels[newStatus]}`,
    });
    refreshLog();
    toast({ description: `Status changed to ${statusLabels[newStatus]}` });
  };

  const updateRequirement = (index: number, value: string) => {
    const updated = [...formData.requirements];
    updated[index] = value;
    setFormData({ ...formData, requirements: updated });
  };

  const addRequirement = () => {
    setFormData({ ...formData, requirements: [...formData.requirements, ''] });
  };

  const removeRequirement = (index: number) => {
    const updated = formData.requirements.filter((_, i) => i !== index);
    setFormData({ ...formData, requirements: updated });
  };

  const updateBenefit = (index: number, value: string) => {
    const updated = [...formData.benefits];
    updated[index] = value;
    setFormData({ ...formData, benefits: updated });
  };

  const addBenefit = () => {
    setFormData({ ...formData, benefits: [...formData.benefits, ''] });
  };

  const removeBenefit = (index: number) => {
    const updated = formData.benefits.filter((_, i) => i !== index);
    setFormData({ ...formData, benefits: updated });
  };

  const formatLogDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const actionIcons: Record<string, string> = {
    created: '🆕',
    updated: '✏️',
    deleted: '🗑️',
    status_changed: '🔄',
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-heading text-xl font-bold text-primary">
              rpbg
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">Career Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 inline mr-1" />
              View Public Page
            </Link>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold">Manage Job Postings</h1>
            <p className="text-muted-foreground mt-1">
              Create, edit, and delete career opportunities
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Analytics Dashboard */}
            <Button variant="outline" asChild>
              <Link to="/admin/analytics">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics Dashboard
              </Link>
            </Button>

            {/* Activity Log Button */}
            <Dialog open={isLogOpen} onOpenChange={setIsLogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" onClick={() => { refreshLog(); setIsLogOpen(true); }}>
                  <History className="w-4 h-4 mr-2" />
                  Activity Log
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Activity Log</DialogTitle>
                </DialogHeader>
                <div className="space-y-3 py-2">
                  {activityLog.length === 0 ? (
                    <p className="text-muted-foreground text-sm text-center py-8">No activity yet.</p>
                  ) : (
                    activityLog.map((entry) => (
                      <div key={entry.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border">
                        <span className="text-lg mt-0.5">{actionIcons[entry.action] || '📝'}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{entry.jobTitle}</p>
                          <p className="text-xs text-muted-foreground">{entry.details}</p>
                          <p className="text-xs text-muted-foreground mt-1">{formatLogDate(entry.timestamp)}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </DialogContent>
            </Dialog>

            {/* Add New Job Button */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={openNewJobDialog}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Job
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingJob ? 'Edit Job Posting' : 'Create New Job Posting'}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Job Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g., IT Support Specialist"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="department">Department *</Label>
                      <Input
                        id="department"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        placeholder="e.g., Technical Services"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="type">Employment Type *</Label>
                      <select
                        id="type"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                      >
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract</option>
                        <option>Internship</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="salary">Salary Range *</Label>
                      <Input
                        id="salary"
                        value={formData.salaryRange}
                        onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
                        placeholder="e.g., SRD 8,000 - 12,000"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="deadline">Application Deadline *</Label>
                      <Input
                        id="deadline"
                        type="date"
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Status */}
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <Label htmlFor="status">Status</Label>
                    <select
                      id="status"
                      value={formData.status || 'draft'}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' | 'closed' })}
                      className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                    >
                      <option value="draft">📝 Draft — opgeslagen, niet zichtbaar</option>
                      <option value="published">✅ Published — zichtbaar op de website</option>
                      <option value="closed">🔒 Closed — niet meer zichtbaar</option>
                    </select>
                    <p className="text-xs text-muted-foreground mt-2">
                      Alleen vacatures met status "Published" zijn zichtbaar op de website.
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="description">Job Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe the role and responsibilities..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label>Requirements *</Label>
                    <div className="flex flex-wrap gap-2 mt-2 mb-3">
                      {[
                        "Bachelor's degree in IT or related field",
                        "Strong communication skills",
                        "Team player",
                        "Problem-solving skills",
                        "2+ years of experience",
                        "Driver's license",
                        "Fluent in Dutch and English",
                        "Microsoft Office proficiency",
                      ].filter(s => !formData.requirements.includes(s)).map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => setFormData({ ...formData, requirements: [...formData.requirements.filter(r => r.trim()), suggestion] })}
                          className="px-3 py-1 text-xs rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/15 transition-colors"
                        >
                          + {suggestion}
                        </button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {formData.requirements.map((req, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            value={req}
                            onChange={(e) => updateRequirement(index, e.target.value)}
                            placeholder="Enter a requirement"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeRequirement(index)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                      <Button type="button" variant="outline" size="sm" onClick={addRequirement}>
                        <Plus className="w-4 h-4 mr-1" />
                        Add Requirement
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label>Benefits *</Label>
                    <div className="flex flex-wrap gap-2 mt-2 mb-3">
                      {[
                        "Competitive salary",
                        "Health insurance",
                        "Professional development",
                        "Flexible working hours",
                        "Training and certifications",
                        "Career growth opportunities",
                        "Team activities",
                        "Modern work environment",
                      ].filter(s => !formData.benefits.includes(s)).map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => setFormData({ ...formData, benefits: [...formData.benefits.filter(b => b.trim()), suggestion] })}
                          className="px-3 py-1 text-xs rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/15 transition-colors"
                        >
                          + {suggestion}
                        </button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {formData.benefits.map((benefit, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            value={benefit}
                            onChange={(e) => updateBenefit(index, e.target.value)}
                            placeholder="Enter a benefit"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeBenefit(index)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                      <Button type="button" variant="outline" size="sm" onClick={addBenefit}>
                        <Plus className="w-4 h-4 mr-1" />
                        Add Benefit
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave}>
                      <Save className="w-4 h-4 mr-2" />
                      {editingJob ? 'Update Job' : 'Create Job'}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Jobs List */}
        {jobs.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-2xl border border-border">
            <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold mb-2">No Job Postings Yet</h3>
            <p className="text-muted-foreground mb-6">
              Click "Add New Job" to create your first posting.
            </p>
          </div>
        ) : (
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left px-6 py-4 font-medium">Job Title</th>
                  <th className="text-left px-6 py-4 font-medium">Department</th>
                  <th className="text-left px-6 py-4 font-medium">Status</th>
                  <th className="text-left px-6 py-4 font-medium">
                    <span className="flex items-center gap-1.5">
                      <BarChart3 className="w-4 h-4" />
                      Analytics
                    </span>
                  </th>
                  <th className="text-left px-6 py-4 font-medium">Deadline</th>
                  <th className="text-right px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id} className="border-b border-border last:border-0">
                    <td className="px-6 py-4">
                      <span className="font-medium">{job.title}</span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{job.department}</td>
                    <td className="px-6 py-4">
                      <select
                        value={job.status || 'published'}
                        onChange={(e) => changeStatus(job, e.target.value as 'draft' | 'published' | 'closed')}
                        className={`px-2 py-1 text-xs rounded-full border-0 font-medium cursor-pointer ${statusColors[job.status || 'published']}`}
                      >
                        <option value="draft">📝 Draft</option>
                        <option value="published">✅ Published</option>
                        <option value="closed">🔒 Closed</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      {(() => {
                        const analytics = getJobAnalytics(job.id);
                        return (
                          <div className="flex items-center gap-3 text-xs">
                            <span className="flex items-center gap-1 text-muted-foreground" title="Page views">
                              👁 {analytics.views}
                            </span>
                            <span className="flex items-center gap-1 text-primary font-medium" title="Apply clicks">
                              📩 {analytics.applyClicks}
                            </span>
                          </div>
                        );
                      })()}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {job.deadline ? new Date(job.deadline).toLocaleDateString() : '—'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openEditDialog(job)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(job)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-sm text-muted-foreground text-center mt-8">
          ⚠️ Note: Data is stored in browser localStorage. Changes won't sync across devices.
          <br />
          For persistent data across devices, a database backend is required.
        </p>
      </main>
    </div>
  );
};

export default AdminCareers;
