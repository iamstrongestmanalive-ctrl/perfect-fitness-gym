import { Link } from "react-router-dom"
import { Facebook, Instagram, Youtube, Twitter } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <img src="/assets/custom_logo.png" alt="Perfect Fitness Logo" className="h-16 lg:h-24 w-auto mb-4" />
              <span className="text-3xl font-black italic tracking-tighter text-primary uppercase">
                Perfect Fitness
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm font-medium uppercase tracking-widest leading-loose">
              Kanpur's elite hub for fitness and performance since 2012. Join the legacy of transformation and grit.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/perfectfitnesshealth?igsh=MXVuanliYmJlaHA0dw==" },
                { icon: Facebook, href: "#" },
                { icon: Youtube, href: "https://youtube.com/@mohammadashraf_mrindia?si=id9rl3oSnp6oCYYd" },
                { icon: Twitter, href: "#" }
              ].map((social, i) => (
                <Link
                  key={i}
                  to={social.href}
                  className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Quick Links</h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest italic">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/memberships" className="hover:text-primary transition-colors">Memberships</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Resources</h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest italic">
              <li><Link to="/academy" className="hover:text-primary transition-colors">Academy</Link></li>
              <li><Link to="/alumni" className="hover:text-primary transition-colors">Alumni</Link></li>
              <li><Link to="/transformations" className="hover:text-primary transition-colors">Transformations</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/book" className="hover:text-primary transition-colors">Book Visit</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-10">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Newsletter</h4>
            <div className="space-y-6">
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest leading-loose">Subscribe to get training tips, elite updates, and special membership offers.</p>
              <form className="flex flex-col sm:flex-row gap-0 group">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/5 border-white/10 text-white rounded-none py-8 px-8 focus:border-primary placeholder:text-white/20 font-black uppercase tracking-widest text-[10px] flex-grow peer transition-all focus:bg-white/10"
                />
                <Button className="bg-primary text-white hover:bg-white hover:text-charcoal font-black uppercase py-8 px-10 rounded-none transition-all text-xs tracking-widest">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
            © 2026 Perfect Fitness Gym. All rights reserved. Precision Engineered in Kanpur.
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
            <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
