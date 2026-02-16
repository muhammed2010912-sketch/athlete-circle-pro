import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Users, Dumbbell, Search, Building2 } from "lucide-react";

const roles = [
  { value: "player", label: "Player", icon: Users, desc: "Showcase your skills & get discovered" },
  { value: "coach", label: "Coach", icon: Dumbbell, desc: "Train athletes & share programs" },
  { value: "scout", label: "Scout", icon: Search, desc: "Discover talent & track transfers" },
  { value: "business", label: "Club / Gym", icon: Building2, desc: "List your facility & manage bookings" },
];

const Signup = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    displayName: "",
    role: "",
    termsAccepted: false,
  });

  const handleRoleSelect = (role: string) => setForm((f) => ({ ...f, role }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!form.termsAccepted) {
      toast.error("You must accept the Terms & Conditions");
      return;
    }
    if (!form.role) {
      toast.error("Please select a role");
      return;
    }

    setLoading(true);
    const { error } = await signUp(form.email, form.password, {
      username: form.username,
      display_name: form.displayName,
      role: form.role,
    });
    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created! Check your email to verify.");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <Link to="/" className="font-display text-xl font-bold tracking-wider mb-4 block">
            <span className="text-gradient-sport">OCT A BOT</span> ARENA
          </Link>
          <CardTitle className="text-2xl font-display">Create Account</CardTitle>
          <CardDescription>Step {step} of 2</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={form.username}
                    onChange={(e) => setForm((f) => ({ ...f, username: e.target.value }))}
                    required
                    placeholder="your_username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input
                    id="displayName"
                    value={form.displayName}
                    onChange={(e) => setForm((f) => ({ ...f, displayName: e.target.value }))}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                    required
                    minLength={6}
                    placeholder="••••••••"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    onChange={(e) => setForm((f) => ({ ...f, confirmPassword: e.target.value }))}
                    required
                    placeholder="••••••••"
                  />
                </div>
                <Button type="button" className="w-full" onClick={() => {
                  if (!form.username || !form.email || !form.password || !form.confirmPassword || !form.displayName) {
                    toast.error("Please fill all fields");
                    return;
                  }
                  if (form.password !== form.confirmPassword) {
                    toast.error("Passwords do not match");
                    return;
                  }
                  setStep(2);
                }}>
                  Next — Choose Role
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-3">
                  {roles.map((r) => (
                    <button
                      key={r.value}
                      type="button"
                      onClick={() => handleRoleSelect(r.value)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        form.role === r.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-muted-foreground/30"
                      }`}
                    >
                      <r.icon className={`w-6 h-6 mb-2 ${form.role === r.value ? "text-primary" : "text-muted-foreground"}`} />
                      <p className="font-display font-semibold text-sm">{r.label}</p>
                      <p className="text-xs text-muted-foreground font-sans normal-case mt-1">{r.desc}</p>
                    </button>
                  ))}
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
                  <Checkbox
                    id="terms"
                    checked={form.termsAccepted}
                    onCheckedChange={(checked) => setForm((f) => ({ ...f, termsAccepted: !!checked }))}
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground font-sans normal-case leading-relaxed cursor-pointer">
                    I agree to the <span className="text-primary underline">Terms & Conditions</span>. I confirm that I will not create fake profiles, 
                    post false statistics, or engage in fraudulent activities. I understand that the platform 
                    reserves the right to suspend accounts that violate these terms.
                  </label>
                </div>

                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" disabled={loading || !form.role || !form.termsAccepted} className="flex-1">
                    {loading ? "Creating..." : "Create Account"}
                  </Button>
                </div>
              </div>
            )}
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">Log in</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
