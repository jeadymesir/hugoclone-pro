import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Simple password-based auth (NOT SECURE - for demo purposes only)
// In production, this should use proper authentication
const ADMIN_PASSWORD = 'rpbg2025';

export const isAdminAuthenticated = (): boolean => {
  return sessionStorage.getItem('rpbg-admin-auth') === 'true';
};

export const adminLogout = (): void => {
  sessionStorage.removeItem('rpbg-admin-auth');
};

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('rpbg-admin-auth', 'true');
      toast({
        title: 'Welcome!',
        description: 'You are now logged into the admin panel.',
      });
      navigate('/admin/careers');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-2xl font-bold">Admin Login</h1>
            <p className="text-muted-foreground text-sm mt-2">
              Marketing team access only
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="mt-1"
                required
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Contact IT if you need access credentials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
