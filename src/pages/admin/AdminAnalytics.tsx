import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
  FileText,
  ArrowLeft,
  LogOut,
  Calendar,
  Building2,
  Activity,
  Copy,
  Check,
} from 'lucide-react';
import { isAdminAuthenticated, adminLogout } from './AdminLogin';
import { JobPosting, getJobPostings, getJobAnalytics, getActivityLog } from '../Careers';
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
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { toPng } from 'html-to-image';

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

const AdminAnalytics = () => {
  const navigate = useNavigate();
  const [displayMode, setDisplayMode] = useState<DisplayMode>('count');
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('all');
  const [copiedChart, setCopiedChart] = useState<string | null>(null);
  const barChartRef = useRef<HTMLDivElement>(null);
  const pieChartRef = useRef<HTMLDivElement>(null);
  const lineChartRef = useRef<HTMLDivElement>(null);

  const copyChartAsImage = useCallback(async (ref: React.RefObject<HTMLDivElement>, chartName: string) => {
    if (!ref.current) return;
    try {
      const dataUrl = await toPng(ref.current, { backgroundColor: '#ffffff', pixelRatio: 2 });
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      setCopiedChart(chartName);
      setTimeout(() => setCopiedChart(null), 2000);
    } catch {
      // Fallback: download
      const dataUrl = await toPng(ref.current, { backgroundColor: '#ffffff', pixelRatio: 2 });
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `${chartName}.png`;
      a.click();
      setCopiedChart(chartName);
      setTimeout(() => setCopiedChart(null), 2000);
    }
  }, []);

  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });
  const [selectedYear, setSelectedYear] = useState(() => String(new Date().getFullYear()));
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const [jobs, setJobs] = useState<JobPosting[]>([]);

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      navigate('/admin');
      return;
    }
    setJobs(getJobPostings());
  }, [navigate]);

  const departments = useMemo(() => [...new Set(jobs.map(j => j.department))], [jobs]);

  const filteredJobs = useMemo(() => {
    let result = jobs;
    if (selectedDepartment !== 'all') result = result.filter(j => j.department === selectedDepartment);
    if (selectedStatus !== 'all') result = result.filter(j => (j.status || 'published') === selectedStatus);

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

  const totals = useMemo(() => {
    const t = jobAnalyticsData.reduce(
      (acc, j) => ({ views: acc.views + j.views, clicks: acc.clicks + j.applyClicks }),
      { views: 0, clicks: 0 }
    );
    return { ...t, conversionRate: t.views > 0 ? Math.round((t.clicks / t.views) * 100) : 0 };
  }, [jobAnalyticsData]);

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

  const deptPieData = useMemo(() => {
    const map: Record<string, number> = {};
    jobAnalyticsData.forEach(j => {
      map[j.department] = (map[j.department] || 0) + j.views;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [jobAnalyticsData]);

  const activityTimeline = useMemo(() => {
    const log = getActivityLog();
    const map: Record<string, number> = {};
    log.forEach(entry => {
      const day = new Date(entry.timestamp).toLocaleDateString('nl-NL', { day: '2-digit', month: 'short' });
      map[day] = (map[day] || 0) + 1;
    });
    return Object.entries(map).reverse().slice(0, 14).map(([date, count]) => ({ date, actions: count }));
  }, [jobs]);

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

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('RPBG - Vacature Analytics', 14, 20);
    doc.setFontSize(10);
    doc.text(`Gegenereerd op ${new Date().toLocaleDateString('nl-NL')}`, 14, 28);

    // Summary
    doc.setFontSize(12);
    doc.text('Samenvatting', 14, 40);
    doc.setFontSize(10);
    doc.text(`Totaal weergaven: ${totals.views}`, 14, 48);
    doc.text(`Totaal apply clicks: ${totals.clicks}`, 14, 54);
    doc.text(`Conversie: ${totals.conversionRate}%`, 14, 60);

    // Table
    autoTable(doc, {
      startY: 70,
      head: [['Vacature', 'Afdeling', 'Status', 'Views', 'Clicks', 'Conversie']],
      body: jobAnalyticsData.map(j => [
        j.fullName,
        j.department,
        j.status,
        String(j.views),
        String(j.applyClicks),
        `${j.conversionRate}%`,
      ]),
      styles: { fontSize: 9 },
      headStyles: { fillColor: [30, 58, 138] },
    });

    doc.save(`rpbg-analytics-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const handleLogout = () => {
    adminLogout();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-heading text-xl font-bold text-primary">rpbg</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/admin/careers" className="text-sm text-muted-foreground hover:text-foreground">Career Admin</Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">Analytics</span>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-6">
        {/* Page title + back */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-primary" />
              Analytics Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">Inzicht in vacature prestaties en activiteit</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/admin/careers">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar vacatures
            </Link>
          </Button>
        </div>

        {/* Filters */}
        <div className="p-5 rounded-xl bg-card border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filters</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-end">
            {/* Time filter */}
            <div>
              <Label className="text-xs flex items-center gap-1.5 mb-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Periode
              </Label>
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value as TimeFilter)}
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="all">Alles</option>
                <option value="month">Maand</option>
                <option value="year">Jaar</option>
                <option value="custom">Aangepast</option>
              </select>
            </div>

            {timeFilter === 'month' && (
              <div>
                <Label className="text-xs mb-1.5 block">Maand</Label>
                <Input type="month" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="h-9 text-sm" />
              </div>
            )}

            {timeFilter === 'year' && (
              <div>
                <Label className="text-xs mb-1.5 block">Jaar</Label>
                <Input type="number" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="h-9 text-sm" min="2020" max="2030" />
              </div>
            )}

            {timeFilter === 'custom' && (
              <>
                <div>
                  <Label className="text-xs mb-1.5 block">Van</Label>
                  <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="h-9 text-sm" />
                </div>
                <div>
                  <Label className="text-xs mb-1.5 block">Tot</Label>
                  <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="h-9 text-sm" />
                </div>
              </>
            )}

            {/* Department */}
            <div>
              <Label className="text-xs flex items-center gap-1.5 mb-1.5">
                <Building2 className="w-3.5 h-3.5" />
                Afdeling
              </Label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="all">Alle afdelingen</option>
                {departments.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            {/* Status */}
            <div>
              <Label className="text-xs mb-1.5 block">Status</Label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="all">Alle</option>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            {/* Actions */}
            <div className="flex items-end gap-2">
              <div className="flex rounded-md border border-input overflow-hidden">
                <button
                  onClick={() => setDisplayMode('count')}
                  className={`h-9 px-3 text-sm flex items-center gap-1.5 transition-colors ${displayMode === 'count' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-muted'}`}
                >
                  <Hash className="w-3.5 h-3.5" />
                  Aantal
                </button>
                <button
                  onClick={() => setDisplayMode('percent')}
                  className={`h-9 px-3 text-sm flex items-center gap-1.5 transition-colors ${displayMode === 'percent' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-muted'}`}
                >
                  <Percent className="w-3.5 h-3.5" />
                  Procent
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Export buttons */}
        <div className="flex justify-end gap-2">
          <Button size="sm" variant="outline" onClick={exportCSV}>
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
          <Button size="sm" variant="outline" onClick={exportPDF}>
            <FileText className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <Eye className="w-6 h-6 mx-auto text-muted-foreground mb-2" />
            <p className="text-3xl font-bold">{totals.views}</p>
            <p className="text-sm text-muted-foreground mt-1">Totaal weergaven</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <MousePointerClick className="w-6 h-6 mx-auto text-primary mb-2" />
            <p className="text-3xl font-bold text-primary">{totals.clicks}</p>
            <p className="text-sm text-muted-foreground mt-1">Apply clicks</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <TrendingUp className="w-6 h-6 mx-auto text-green-600 mb-2" />
            <p className="text-3xl font-bold text-green-600">{totals.conversionRate}%</p>
            <p className="text-sm text-muted-foreground mt-1">Conversie</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div ref={barChartRef} className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">
                Views & Clicks per vacature {displayMode === 'percent' && '(%)'}
              </h3>
              <Button variant="ghost" size="sm" onClick={() => copyChartAsImage(barChartRef, 'views-clicks')}>
                {copiedChart === 'views-clicks' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                <span className="ml-1.5 text-xs">{copiedChart === 'views-clicks' ? 'Gekopieerd!' : 'Kopiëren'}</span>
              </Button>
            </div>
            {barData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px', fontSize: '12px' }} />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="views" name="Views" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="applyClicks" name="Apply Clicks" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-12">Geen data beschikbaar</p>
            )}
          </div>

          <div ref={pieChartRef} className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Views per afdeling</h3>
              <Button variant="ghost" size="sm" onClick={() => copyChartAsImage(pieChartRef, 'dept-pie')}>
                {copiedChart === 'dept-pie' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                <span className="ml-1.5 text-xs">{copiedChart === 'dept-pie' ? 'Gekopieerd!' : 'Kopiëren'}</span>
              </Button>
            </div>
            {deptPieData.length > 0 && deptPieData.some(d => d.value > 0) ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={deptPieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={50}
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
              <p className="text-sm text-muted-foreground text-center py-12">Geen data beschikbaar</p>
            )}
          </div>
        </div>

        {/* Activity timeline */}
        {activityTimeline.length > 0 && (
          <div ref={lineChartRef} className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Activiteit (laatste 14 dagen)</h3>
              <Button variant="ghost" size="sm" onClick={() => copyChartAsImage(lineChartRef, 'activity')}>
                {copiedChart === 'activity' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                <span className="ml-1.5 text-xs">{copiedChart === 'activity' ? 'Gekopieerd!' : 'Kopiëren'}</span>
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={activityTimeline}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px', fontSize: '12px' }} />
                <Line type="monotone" dataKey="actions" name="Acties" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Data table */}
        <div className="rounded-xl bg-card border border-border overflow-hidden">
          <h3 className="font-medium px-6 pt-5 pb-3">Detail tabel</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left px-6 py-3 font-medium text-xs">Vacature</th>
                  <th className="text-left px-6 py-3 font-medium text-xs">Afdeling</th>
                  <th className="text-right px-6 py-3 font-medium text-xs">Views</th>
                  <th className="text-right px-6 py-3 font-medium text-xs">Clicks</th>
                  <th className="text-right px-6 py-3 font-medium text-xs">Conversie</th>
                </tr>
              </thead>
              <tbody>
                {jobAnalyticsData.map((j) => (
                  <tr key={j.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-3 font-medium">{j.fullName}</td>
                    <td className="px-6 py-3 text-muted-foreground">{j.department}</td>
                    <td className="px-6 py-3 text-right">{displayMode === 'percent' && totals.views > 0 ? `${Math.round((j.views / totals.views) * 100)}%` : j.views}</td>
                    <td className="px-6 py-3 text-right text-primary font-medium">{displayMode === 'percent' && totals.clicks > 0 ? `${Math.round((j.applyClicks / totals.clicks) * 100)}%` : j.applyClicks}</td>
                    <td className="px-6 py-3 text-right">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${j.conversionRate >= 20 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : j.conversionRate >= 5 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : 'bg-muted text-muted-foreground'}`}>
                        {j.conversionRate}%
                      </span>
                    </td>
                  </tr>
                ))}
                {jobAnalyticsData.length === 0 && (
                  <tr><td colSpan={5} className="px-6 py-12 text-center text-muted-foreground text-sm">Geen vacatures gevonden met huidige filters</td></tr>
                )}
              </tbody>
              {jobAnalyticsData.length > 0 && (
                <tfoot className="bg-muted/30 border-t border-border font-medium">
                  <tr>
                    <td className="px-6 py-3">Totaal</td>
                    <td className="px-6 py-3"></td>
                    <td className="px-6 py-3 text-right">{totals.views}</td>
                    <td className="px-6 py-3 text-right text-primary">{totals.clicks}</td>
                    <td className="px-6 py-3 text-right">{totals.conversionRate}%</td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminAnalytics;
