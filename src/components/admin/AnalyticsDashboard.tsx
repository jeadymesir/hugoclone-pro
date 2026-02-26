import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  BarChart3,
  TrendingUp,
  Eye,
  MousePointerClick,
  Percent,
  Hash,
  Download,
  Filter,
  X,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { JobPosting, getJobAnalytics, JobAnalytics, getActivityLog, ActivityLogEntry } from '@/pages/Careers';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from 'recharts';

interface AnalyticsDashboardProps {
  jobs: JobPosting[];
}

type DisplayMode = 'count' | 'percent';
type TimeFilter = 'all' | 'month' | 'year' | 'custom';

const CHART_COLORS = [
  'hsl(var(--primary))',
  'hsl(var(--accent))',
  '#f59e0b',
  '#10b981',
  '#8b5cf6',
  '#ec4899',
  '#06b6d4',
  '#f97316',
];

const AnalyticsDashboard = ({ jobs }: AnalyticsDashboardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayMode, setDisplayMode] = useState<DisplayMode>('count');
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('all');
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });
  const [selectedYear, setSelectedYear] = useState(() => String(new Date().getFullYear()));
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const departments = useMemo(() => [...new Set(jobs.map(j => j.department))], [jobs]);

  // Filter jobs based on selections
  const filteredJobs = useMemo(() => {
    let result = jobs;

    if (selectedDepartment !== 'all') {
      result = result.filter(j => j.department === selectedDepartment);
    }
    if (selectedStatus !== 'all') {
      result = result.filter(j => (j.status || 'published') === selectedStatus);
    }

    // Time-based filtering on createdAt
    if (timeFilter === 'month') {
      const [y, m] = selectedMonth.split('-').map(Number);
      result = result.filter(j => {
        const d = new Date(j.createdAt);
        return d.getFullYear() === y && d.getMonth() + 1 === m;
      });
    } else if (timeFilter === 'year') {
      const y = Number(selectedYear);
      result = result.filter(j => new Date(j.createdAt).getFullYear() === y);
    } else if (timeFilter === 'custom' && dateFrom && dateTo) {
      const from = new Date(dateFrom);
      const to = new Date(dateTo);
      to.setHours(23, 59, 59);
      result = result.filter(j => {
        const d = new Date(j.createdAt);
        return d >= from && d <= to;
      });
    }

    return result;
  }, [jobs, selectedDepartment, selectedStatus, timeFilter, selectedMonth, selectedYear, dateFrom, dateTo]);

  // Analytics data per job
  const jobAnalyticsData = useMemo(() => {
    return filteredJobs.map(job => {
      const a = getJobAnalytics(job.id);
      return {
        id: job.id,
        name: job.title.length > 20 ? job.title.slice(0, 20) + '…' : job.title,
        fullName: job.title,
        department: job.department,
        status: job.status || 'published',
        views: a.views,
        applyClicks: a.applyClicks,
        conversionRate: a.views > 0 ? Math.round((a.applyClicks / a.views) * 100) : 0,
      };
    });
  }, [filteredJobs]);

  // Totals
  const totals = useMemo(() => {
    const t = jobAnalyticsData.reduce(
      (acc, j) => ({ views: acc.views + j.views, clicks: acc.clicks + j.applyClicks }),
      { views: 0, clicks: 0 }
    );
    return { ...t, conversionRate: t.views > 0 ? Math.round((t.clicks / t.views) * 100) : 0 };
  }, [jobAnalyticsData]);

  // Bar chart data
  const barData = useMemo(() => {
    if (displayMode === 'percent' && totals.views > 0) {
      return jobAnalyticsData.map(j => ({
        ...j,
        views: Math.round((j.views / totals.views) * 100),
        applyClicks: totals.clicks > 0 ? Math.round((j.applyClicks / totals.clicks) * 100) : 0,
      }));
    }
    return jobAnalyticsData;
  }, [jobAnalyticsData, displayMode, totals]);

  // Pie chart data – views by department
  const deptPieData = useMemo(() => {
    const map: Record<string, number> = {};
    jobAnalyticsData.forEach(j => {
      map[j.department] = (map[j.department] || 0) + j.views;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [jobAnalyticsData]);

  // Activity log timeline
  const activityTimeline = useMemo(() => {
    const log = getActivityLog();
    const map: Record<string, number> = {};
    log.forEach(entry => {
      const day = new Date(entry.timestamp).toLocaleDateString('nl-NL', { day: '2-digit', month: 'short' });
      map[day] = (map[day] || 0) + 1;
    });
    return Object.entries(map).reverse().slice(0, 14).map(([date, count]) => ({ date, actions: count }));
  }, [isOpen]);

  // Export CSV
  const exportCSV = () => {
    const header = 'Job Title,Department,Status,Views,Apply Clicks,Conversion Rate\n';
    const rows = jobAnalyticsData
      .map(j => `"${j.fullName}","${j.department}","${j.status}",${j.views},${j.applyClicks},${j.conversionRate}%`)
      .join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rpbg-analytics-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <BarChart3 className="w-4 h-4 mr-2" />
          Analytics Dashboard
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Analytics Dashboard
          </DialogTitle>
        </DialogHeader>

        {/* Filters */}
        <div className="flex flex-wrap items-end gap-3 p-4 rounded-lg bg-muted/50 border border-border">
          <Filter className="w-4 h-4 text-muted-foreground mt-5" />

          {/* Time filter */}
          <div>
            <Label className="text-xs">Periode</Label>
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value as TimeFilter)}
              className="mt-1 h-9 rounded-md border border-input bg-background px-2 text-xs w-28"
            >
              <option value="all">Alles</option>
              <option value="month">Maand</option>
              <option value="year">Jaar</option>
              <option value="custom">Aangepast</option>
            </select>
          </div>

          {timeFilter === 'month' && (
            <div>
              <Label className="text-xs">Maand</Label>
              <Input
                type="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="mt-1 h-9 text-xs w-40"
              />
            </div>
          )}

          {timeFilter === 'year' && (
            <div>
              <Label className="text-xs">Jaar</Label>
              <Input
                type="number"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="mt-1 h-9 text-xs w-24"
                min="2020"
                max="2030"
              />
            </div>
          )}

          {timeFilter === 'custom' && (
            <>
              <div>
                <Label className="text-xs">Van</Label>
                <Input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="mt-1 h-9 text-xs w-36"
                />
              </div>
              <div>
                <Label className="text-xs">Tot</Label>
                <Input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="mt-1 h-9 text-xs w-36"
                />
              </div>
            </>
          )}

          {/* Department filter */}
          <div>
            <Label className="text-xs">Afdeling</Label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="mt-1 h-9 rounded-md border border-input bg-background px-2 text-xs w-36"
            >
              <option value="all">Alle afdelingen</option>
              {departments.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Status filter */}
          <div>
            <Label className="text-xs">Status</Label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="mt-1 h-9 rounded-md border border-input bg-background px-2 text-xs w-28"
            >
              <option value="all">Alle</option>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          {/* Display mode */}
          <div className="flex items-center gap-1 ml-auto">
            <Button
              size="sm"
              variant={displayMode === 'count' ? 'default' : 'outline'}
              onClick={() => setDisplayMode('count')}
              className="h-9 px-3 text-xs"
            >
              <Hash className="w-3 h-3 mr-1" />
              Aantal
            </Button>
            <Button
              size="sm"
              variant={displayMode === 'percent' ? 'default' : 'outline'}
              onClick={() => setDisplayMode('percent')}
              className="h-9 px-3 text-xs"
            >
              <Percent className="w-3 h-3 mr-1" />
              Procent
            </Button>
          </div>

          {/* Export */}
          <Button size="sm" variant="outline" onClick={exportCSV} className="h-9 px-3 text-xs">
            <Download className="w-3 h-3 mr-1" />
            CSV
          </Button>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <Eye className="w-5 h-5 mx-auto text-muted-foreground mb-1" />
            <p className="text-2xl font-bold">{totals.views}</p>
            <p className="text-xs text-muted-foreground">Totaal weergaven</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <MousePointerClick className="w-5 h-5 mx-auto text-primary mb-1" />
            <p className="text-2xl font-bold text-primary">{totals.clicks}</p>
            <p className="text-xs text-muted-foreground">Apply clicks</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <TrendingUp className="w-5 h-5 mx-auto text-green-600 mb-1" />
            <p className="text-2xl font-bold text-green-600">{totals.conversionRate}%</p>
            <p className="text-xs text-muted-foreground">Conversie</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar chart – views & clicks per job */}
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="font-medium text-sm mb-4">
              Views & Clicks per vacature {displayMode === 'percent' && '(%)'}
            </h3>
            {barData.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      borderColor: 'hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                  <Bar dataKey="views" name="Views" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="applyClicks" name="Apply Clicks" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-8">Geen data beschikbaar</p>
            )}
          </div>

          {/* Pie chart – views per department */}
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="font-medium text-sm mb-4">Views per afdeling</h3>
            {deptPieData.length > 0 && deptPieData.some(d => d.value > 0) ? (
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={deptPieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={40}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {deptPieData.map((_, i) => (
                      <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-8">Geen data beschikbaar</p>
            )}
          </div>
        </div>

        {/* Activity timeline */}
        {activityTimeline.length > 0 && (
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="font-medium text-sm mb-4">Activiteit (laatste 14 dagen)</h3>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={activityTimeline}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} allowDecimals={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Line type="monotone" dataKey="actions" name="Acties" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Data table */}
        <div className="rounded-xl bg-card border border-border overflow-hidden">
          <h3 className="font-medium text-sm px-4 pt-4 pb-2">Detail tabel</h3>
          <table className="w-full text-sm">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="text-left px-4 py-2 font-medium text-xs">Vacature</th>
                <th className="text-left px-4 py-2 font-medium text-xs">Afdeling</th>
                <th className="text-right px-4 py-2 font-medium text-xs">Views</th>
                <th className="text-right px-4 py-2 font-medium text-xs">Clicks</th>
                <th className="text-right px-4 py-2 font-medium text-xs">Conversie</th>
              </tr>
            </thead>
            <tbody>
              {jobAnalyticsData.map((j) => (
                <tr key={j.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-2.5 font-medium">{j.fullName}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{j.department}</td>
                  <td className="px-4 py-2.5 text-right">{displayMode === 'percent' && totals.views > 0 ? `${Math.round((j.views / totals.views) * 100)}%` : j.views}</td>
                  <td className="px-4 py-2.5 text-right text-primary font-medium">{displayMode === 'percent' && totals.clicks > 0 ? `${Math.round((j.applyClicks / totals.clicks) * 100)}%` : j.applyClicks}</td>
                  <td className="px-4 py-2.5 text-right">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${j.conversionRate >= 20 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : j.conversionRate >= 5 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : 'bg-muted text-muted-foreground'}`}>
                      {j.conversionRate}%
                    </span>
                  </td>
                </tr>
              ))}
              {jobAnalyticsData.length === 0 && (
                <tr><td colSpan={5} className="px-4 py-8 text-center text-muted-foreground text-xs">Geen vacatures gevonden met huidige filters</td></tr>
              )}
            </tbody>
            {jobAnalyticsData.length > 0 && (
              <tfoot className="bg-muted/30 border-t border-border font-medium">
                <tr>
                  <td className="px-4 py-2.5">Totaal</td>
                  <td className="px-4 py-2.5"></td>
                  <td className="px-4 py-2.5 text-right">{totals.views}</td>
                  <td className="px-4 py-2.5 text-right text-primary">{totals.clicks}</td>
                  <td className="px-4 py-2.5 text-right">{totals.conversionRate}%</td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnalyticsDashboard;
