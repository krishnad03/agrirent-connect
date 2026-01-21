import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tractor, ArrowLeft, Eye, EyeOff, Mail, Lock, User, Phone, Loader2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, role, loading: authLoading, signUp, signIn } = useAuth();
  const isLogin = location.pathname === '/login';

  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'renter' | 'owner'>('renter');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  // Redirect if already logged in
  useEffect(() => {
    if (user && role && !authLoading) {
      navigate(`/dashboard/${role}`);
    }
  }, [user, role, authLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.email || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!isLogin) {
      if (!formData.name) {
        toast({
          title: "Error",
          description: "Please enter your full name.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Error",
          description: "Passwords do not match.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      if (formData.password.length < 6) {
        toast({
          title: "Error",
          description: "Password must be at least 6 characters.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
    }

    try {
      if (isLogin) {
        const { error } = await signIn(formData.email, formData.password);
        
        if (error) {
          toast({
            title: "Login Failed",
            description: error.message || "Invalid email or password.",
            variant: "destructive",
          });
          setIsSubmitting(false);
          return;
        }

        toast({
          title: "Welcome back!",
          description: "Redirecting to dashboard...",
        });
      } else {
        const { error } = await signUp(
          formData.email, 
          formData.password, 
          formData.name, 
          formData.phone, 
          selectedRole
        );
        
        if (error) {
          let message = error.message;
          if (error.message.includes('already registered')) {
            message = 'This email is already registered. Please sign in instead.';
          }
          toast({
            title: "Signup Failed",
            description: message,
            variant: "destructive",
          });
          setIsSubmitting(false);
          return;
        }

        toast({
          title: "Account created!",
          description: "Redirecting to dashboard...",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Card */}
          <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                <Tractor className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-foreground mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-muted-foreground">
                {isLogin ? 'Sign in to your account' : 'Join Agrirent today'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Role Selection - only for signup */}
              {!isLogin && (
                <div className="space-y-3">
                  <Label>I am a</Label>
                  <RadioGroup
                    value={selectedRole}
                    onValueChange={(value) => setSelectedRole(value as 'renter' | 'owner')}
                    className="grid grid-cols-2 gap-3"
                  >
                    <div>
                      <RadioGroupItem
                        value="renter"
                        id="renter"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="renter"
                        className="flex flex-col items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                      >
                        <User className="mb-2 h-6 w-6" />
                        <span className="font-medium">Renter</span>
                        <span className="text-xs text-muted-foreground">I want to rent</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="owner"
                        id="owner"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="owner"
                        className="flex flex-col items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                      >
                        <Tractor className="mb-2 h-6 w-6" />
                        <span className="font-medium">Equipment Lister</span>
                        <span className="text-xs text-muted-foreground">I have equipment</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Name - only for signup */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="pl-10"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Phone - only for signup */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password - only for signup */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="pl-10"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Forgot Password - only for login */}
              {isLogin && (
                <div className="flex justify-end">
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                  </>
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </Button>
            </form>

            {/* Toggle Link */}
            <p className="text-center text-muted-foreground mt-6">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <Link 
                to={isLogin ? '/signup' : '/login'}
                className="text-primary font-semibold hover:underline"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
