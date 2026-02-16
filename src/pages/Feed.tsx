import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogOut, User, Bell, MessageCircle, Search, Home, Trophy, MapPin } from "lucide-react";

const Feed = () => {
  const { user, profile, role, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-14 px-4">
          <Link to="/feed" className="font-display text-lg font-bold tracking-wider">
            <span className="text-gradient-sport">OCT A BOT</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/explore"><Search className="w-5 h-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/chat"><MessageCircle className="w-5 h-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={signOut}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-24 container mx-auto px-4 max-w-2xl">
        <div className="text-center py-16">
          <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl font-display font-bold mb-2">
            Welcome, {profile?.display_name || "Athlete"}!
          </h1>
          <p className="text-muted-foreground mb-1">
            Role: <span className="text-primary font-semibold capitalize">{role}</span>
          </p>
          <p className="text-muted-foreground text-sm mb-8">
            Your feed will populate as you follow athletes, coaches, and clubs.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button asChild>
              <Link to="/explore">Explore Athletes</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/profile">Edit Profile</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Bottom Nav (Mobile) */}
      <nav className="fixed bottom-0 w-full bg-card/90 backdrop-blur-lg border-t border-border md:hidden">
        <div className="flex items-center justify-around h-16">
          <Link to="/feed" className="flex flex-col items-center gap-1 text-primary">
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-display">HOME</span>
          </Link>
          <Link to="/explore" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Search className="w-5 h-5" />
            <span className="text-[10px] font-display">EXPLORE</span>
          </Link>
          <Link to="/map" className="flex flex-col items-center gap-1 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span className="text-[10px] font-display">MAP</span>
          </Link>
          <Link to="/leaderboard" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Trophy className="w-5 h-5" />
            <span className="text-[10px] font-display">RANKS</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center gap-1 text-muted-foreground">
            <User className="w-5 h-5" />
            <span className="text-[10px] font-display">PROFILE</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Feed;
