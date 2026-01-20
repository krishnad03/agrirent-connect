import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Tractor, Package, Calendar, IndianRupee, Users, Settings, LogOut, 
  Plus, BarChart3, Bell, CheckCircle, Clock, XCircle, Home
} from 'lucide-react';

const OwnerDashboard = () => {
  const stats = [
    { label: 'Total Equipment', value: '12', icon: Tractor, color: 'bg-primary/10 text-primary' },
    { label: 'Active Rentals', value: '5', icon: Calendar, color: 'bg-accent/10 text-accent-foreground' },
    { label: 'Pending Requests', value: '3', icon: Clock, color: 'bg-orange-100 text-orange-600' },
    { label: 'Total Earnings', value: '₹45,000', icon: IndianRupee, color: 'bg-green-100 text-green-600' },
  ];

  const recentRequests = [
    { id: 1, equipment: 'Mahindra 575 DI', renter: 'Rajesh Kumar', dates: 'Jan 25 - Jan 28', status: 'pending' },
    { id: 2, equipment: 'Rotavator 5ft', renter: 'Suresh Patel', dates: 'Jan 22 - Jan 24', status: 'approved' },
    { id: 3, equipment: 'Sprayer 500L', renter: 'Amit Singh', dates: 'Jan 20 - Jan 21', status: 'completed' },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome, Owner!</h1>
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
        <div className="divide-y divide-border">
          {recentRequests.map((request) => (
            <div key={request.id} className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Tractor className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{request.equipment}</p>
                  <p className="text-sm text-muted-foreground">{request.renter} • {request.dates}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                  request.status === 'pending' ? 'bg-orange-100 text-orange-600' :
                  request.status === 'approved' ? 'bg-green-100 text-green-600' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {request.status === 'pending' && <Clock className="w-3 h-3" />}
                  {request.status === 'approved' && <CheckCircle className="w-3 h-3" />}
                  {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                </span>
                {request.status === 'pending' && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="soft">Approve</Button>
                    <Button size="sm" variant="ghost">Reject</Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RenterDashboard = () => {
  const stats = [
    { label: 'Active Rentals', value: '2', icon: Tractor, color: 'bg-primary/10 text-primary' },
    { label: 'Pending Requests', value: '1', icon: Clock, color: 'bg-orange-100 text-orange-600' },
    { label: 'Completed Rentals', value: '8', icon: CheckCircle, color: 'bg-green-100 text-green-600' },
    { label: 'Total Spent', value: '₹32,500', icon: IndianRupee, color: 'bg-muted text-foreground' },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome, Renter!</h1>
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
          <p className="text-muted-foreground text-center py-8">
            You have 2 active rentals. Manage them from the Rentals section.
          </p>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users, color: 'bg-primary/10 text-primary' },
    { label: 'Equipment Listed', value: '567', icon: Package, color: 'bg-accent/10 text-accent-foreground' },
    { label: 'Active Rentals', value: '89', icon: Calendar, color: 'bg-green-100 text-green-600' },
    { label: 'Platform Revenue', value: '₹2.5L', icon: BarChart3, color: 'bg-muted text-foreground' },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Platform overview and management</p>
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
              Activity logs will appear here.
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

const Dashboard = () => {
  const { role } = useParams<{ role: 'owner' | 'renter' | 'admin' }>();

  const sidebarLinks = [
    { icon: Home, label: 'Dashboard', href: `/dashboard/${role}` },
    { icon: Tractor, label: role === 'owner' ? 'My Equipment' : role === 'admin' ? 'All Equipment' : 'Browse Equipment', href: `/dashboard/${role}/equipment` },
    { icon: Calendar, label: 'Rentals', href: `/dashboard/${role}/rentals` },
    ...(role === 'admin' ? [{ icon: Users, label: 'Users', href: `/dashboard/${role}/users` }] : []),
    { icon: Settings, label: 'Settings', href: `/dashboard/${role}/settings` },
  ];

  return (
    <div className="min-h-screen bg-muted flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex-shrink-0 hidden md:block">
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
        <nav className="p-4 space-y-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-border">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive">
              <LogOut className="w-5 h-5" />
              Logout
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {role === 'owner' && <OwnerDashboard />}
        {role === 'renter' && <RenterDashboard />}
        {role === 'admin' && <AdminDashboard />}
      </main>
    </div>
  );
};

export default Dashboard;
