import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Trophy, MapPin, MessageCircle, Shield, Star } from "lucide-react";

const features = [
  { icon: Users, title: "Connect", desc: "Network with players, coaches, scouts & clubs across Egypt", color: "text-primary" },
  { icon: Trophy, title: "Compete", desc: "Track stats, earn ratings, and climb the leaderboard", color: "text-accent" },
  { icon: MapPin, title: "Discover", desc: "Find nearby gyms, football fields, and training facilities", color: "text-primary" },
  { icon: MessageCircle, title: "Chat", desc: "Real-time messaging with verified athletes and coaches", color: "text-accent" },
  { icon: Shield, title: "Verified", desc: "Trusted verification system for coaches and scouts", color: "text-primary" },
  { icon: Star, title: "Rate", desc: "Transparent rating system to build your reputation", color: "text-accent" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="font-display text-xl font-bold tracking-wider">
            <span className="text-gradient-sport">OCT A BOT</span>{" "}
            <span className="text-foreground">ARENA</span>
          </Link>
          <div className="flex gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Your Sports
              <br />
              <span className="text-gradient-sport">Network</span> Starts Here
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 font-sans normal-case max-w-xl mx-auto">
              The ultimate platform connecting football players, gym athletes, coaches, scouts, and clubs across Egypt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 glow-primary" asChild>
                <Link to="/signup">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/explore">Explore Athletes</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sport Tags */}
      <section className="py-8 border-y border-border">
        <div className="container mx-auto px-4 flex justify-center gap-6">
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span className="font-display text-sm font-semibold text-primary">FOOTBALL</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
            <span className="w-3 h-3 rounded-full bg-accent" />
            <span className="font-display text-sm font-semibold text-accent">GYM & FITNESS</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-14"
          >
            Everything You Need to <span className="text-gradient-sport">Level Up</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
              >
                <f.icon className={`w-10 h-10 mb-4 ${f.color} group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-display font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground font-sans normal-case text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-14">
            Who Is This For?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Players", emoji: "⚽", desc: "Showcase your skills, get rated by coaches, and get discovered" },
              { role: "Coaches", emoji: "📋", desc: "Get verified, rate players, and create training programs" },
              { role: "Scouts", emoji: "🔍", desc: "Discover talent, track transfers, and compete on the leaderboard" },
              { role: "Clubs & Gyms", emoji: "🏟️", desc: "List your facility, accept bookings, and grow your community" },
            ].map((r, i) => (
              <motion.div
                key={r.role}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border text-center"
              >
                <div className="text-4xl mb-4">{r.emoji}</div>
                <h3 className="text-xl font-display font-semibold mb-2">{r.role}</h3>
                <p className="text-muted-foreground text-sm font-sans normal-case">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto p-10 rounded-2xl bg-gradient-sport"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Ready to Join the Arena?
            </h2>
            <p className="text-white/80 mb-8 font-sans normal-case">
              Create your free account and start connecting with the sports community today.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/signup">Create Account</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p className="font-display text-lg font-bold mb-2">
            <span className="text-gradient-sport">OCT A BOT</span> ARENA
          </p>
          <p>© 2026 OCT A BOT ARENA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
