import { useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Tractor, Package, Calendar, IndianRupee, Users, Settings, LogOut, 
  Plus, BarChart3, Bell, CheckCircle, Clock, Home, Loader2
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const OwnerDashboard = ({ profile }: { profile: { name: string } | null }) => {
  const stats = [
    { label: 'Total Equipment', value: '0', icon: Tractor, color: 'bg-primary/10 text-primary' },
    { label: 'Active Rentals', value: '0', icon: Calendar, color: 'bg-accent/10 text-accent-foreground' },
    { label: 'Pending Requests', value: '0', icon: Clock, color: 'bg-orange-100 text-orange-600' },
    { label: 'Total Earnings', value: '₹0', icon: IndianRupee, color: 'bg-green-100 text-green-600' },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Welcome, {profile?.name || 'Owner'}!
          </h1>
          <p className="text-muted-foreground">Manage your equipment and rental requests</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Equipment
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl p-6 shadow-card border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Requests */}
      <div className="bg-card rounded-xl shadow-card border border-border">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Recent Rental Requests</h2>
        </div>
        <div className="p-6">
          <div className="text-center py-12">
            <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No equipment listed yet</h3>
            <p className="text-muted-foreground mb-4">Start by adding your first equipment to receive rental requests.</p>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add Your First Equipment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RenterDashboard = ({ profile }: { profile: { name: string } | null }) => {
  const stats = [
    { label: 'Active Rentals', value: '0', icon: Tractor, color: 'bg-primary/10 text-primary' },
    { label: 'Pending Requests', value: '0', icon: Clock, color: 'bg-orange-100 text-orange-600' },
    { label: 'Completed Rentals', value: '0', icon: CheckCircle, color: 'bg-green-100 text-green-600' },
    { label: 'Total Spent', value: '₹0', icon: IndianRupee, color: 'bg-muted text-foreground' },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Welcome, {profile?.name || 'Renter'}!
          </h1>
          <p className="text-muted-foreground">Track your rentals and find new equipment</p>
        </div>
        <Link to="/equipment">
          <Button className="gap-2">
            <Tractor className="w-4 h-4" />
            Browse Equipment
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl p-6 shadow-card border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Rentals */}
      <div className="bg-card rounded-xl shadow-card border border-border">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Your Active Rentals</h2>
        </div>
        <div className="p-6">
          <div className="text-center py-12">
            <Tractor className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No active rentals</h3>
            <p className="text-muted-foreground mb-4">Browse available equipment and start renting today!</p>
            <Link to="/equipment">
              <Button className="gap-2">
                <Tractor className="w-4 h-4" />
                Browse Equipment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = ({ profile }: { profile: { name: string } | null }) => {
  const stats = [
    { label: 'Total Users', value: '0', icon: Users, color: 'bg-primary/10 text-primary' },
    { label: 'Equipment Listed', value: '0', icon: Package, color: 'bg-accent/10 text-accent-foreground' },
    { label: 'Active Rentals', value: '0', icon: Calendar, color: 'bg-green-100 text-green-600' },
    { label: 'Platform Revenue', value: '₹0', icon: BarChart3, color: 'bg-muted text-foreground' },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">Welcome back, {profile?.name || 'Admin'}</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Bell className="w-4 h-4" />
          Notifications
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl p-6 shadow-card border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-card rounded-xl shadow-card border border-border">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground text-center py-8">
              No recent activity to show.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-xl shadow-card border border-border">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Quick Actions</h2>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Users className="w-5 h-5" />
              Manage Users
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Package className="w-5 h-5" />
              All Equipment
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <BarChart3 className="w-5 h-5" />
              View Analytics
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Settings className="w-5 h-5" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard sub-pages
const DashboardEquipment = ({ role }: { role: string }) => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            {role === 'owner' ? 'My Equipment' : role === 'admin' ? 'All Equipment' : 'Browse Equipment'}
          </h1>
          <p className="text-muted-foreground">
            {role === 'owner' ? 'Manage your equipment listings' : 'View and manage equipment'}
          </p>
        </div>
        {role === 'owner' && (
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Equipment
          </Button>
        )}
      </div>
      
      <div className="bg-card rounded-xl shadow-card border border-border p-12 text-center">
        <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">No Equipment Yet</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          {role === 'owner' 
            ? 'Add your first equipment to start receiving rental requests.'
            : 'Equipment listings will appear here.'}
        </p>
      </div>
    </div>
  );
};

const DashboardRentals = ({ role }: { role: string }) => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Rentals</h1>
          <p className="text-muted-foreground">
            {role === 'owner' 
              ? 'Track rental requests for your equipment' 
              : role === 'admin' 
                ? 'Monitor all platform rentals' 
                : 'View your rental history'}
          </p>
        </div>
      </div>
      
      <div className="bg-card rounded-xl shadow-card border border-border p-12 text-center">
        <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">No Rentals Yet</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          {role === 'renter' 
            ? 'Your rental bookings will appear here once you rent equipment.'
            : 'Rental transactions will appear here.'}
        </p>
      </div>
    </div>
  );
};

const DashboardUsers = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Users</h1>
          <p className="text-muted-foreground">Manage platform users</p>
        </div>
      </div>
      
      <div className="bg-card rounded-xl shadow-card border border-border p-12 text-center">
        <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">User Management</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          View and manage all registered users on the platform.
        </p>
      </div>
    </div>
  );
};

const DashboardSettings = ({ profile }: { profile: { name: string; email: string; phone: string | null } | null }) => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings</p>
      </div>
      
      <div className="bg-card rounded-xl shadow-card border border-border">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Profile Information</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Full Name</p>
              <p className="font-medium text-foreground">{profile?.name || 'Not set'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="font-medium text-foreground">{profile?.email || 'Not set'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <p className="font-medium text-foreground">{profile?.phone || 'Not set'}</p>
            </div>
          </div>
          <Button variant="outline" className="mt-4">
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { role: urlRole, '*': subPath } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, profile, role: userRole, loading, signOut } = useAuth();

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  // Redirect to correct dashboard if role mismatch
  useEffect(() => {
    if (!loading && user && userRole && urlRole !== userRole) {
      navigate(`/dashboard/${userRole}`);
    }
  }, [user, userRole, urlRole, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !userRole) {
    return null;
  }

  const currentRole = userRole;

  const sidebarLinks = [
    { icon: Home, label: 'Dashboard', href: `/dashboard/${currentRole}`, path: '' },
    { 
      icon: Tractor, 
      label: currentRole === 'owner' ? 'My Equipment' : currentRole === 'admin' ? 'All Equipment' : 'Browse Equipment', 
      href: `/dashboard/${currentRole}/equipment`,
      path: 'equipment'
    },
    { icon: Calendar, label: 'Rentals', href: `/dashboard/${currentRole}/rentals`, path: 'rentals' },
    ...(currentRole === 'admin' ? [{ icon: Users, label: 'Users', href: `/dashboard/${currentRole}/users`, path: 'users' }] : []),
    { icon: Settings, label: 'Settings', href: `/dashboard/${currentRole}/settings`, path: 'settings' },
  ];

  const isActive = (path: string) => {
    const currentPath = subPath || '';
    return currentPath === path;
  };

  const renderContent = () => {
    const path = subPath || '';
    
    switch (path) {
      case '':
        if (currentRole === 'owner') return <OwnerDashboard profile={profile} />;
        if (currentRole === 'renter') return <RenterDashboard profile={profile} />;
        if (currentRole === 'admin') return <AdminDashboard profile={profile} />;
        break;
      case 'equipment':
        return <DashboardEquipment role={currentRole} />;
      case 'rentals':
        return <DashboardRentals role={currentRole} />;
      case 'users':
        if (currentRole === 'admin') return <DashboardUsers />;
        break;
      case 'settings':
        return <DashboardSettings profile={profile} />;
    }
    
    return (
      <div className="p-8">
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-foreground mb-2">Page Not Found</h2>
          <p className="text-muted-foreground mb-4">This page doesn't exist.</p>
          <Link to={`/dashboard/${currentRole}`}>
            <Button>Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-muted flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex-shrink-0 hidden md:flex flex-col">
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Tractor className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Agri<span className="text-primary">rent</span>
            </span>
          </Link>
        </div>
        <nav className="p-4 space-y-1 flex-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(link.path) 
                  ? 'bg-primary/10 text-primary font-medium' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
            onClick={handleSignOut}
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
