import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academy", href: "/academy" },
  { name: "Alumni", href: "/alumni" },
  { name: "Memberships", href: "/memberships" },
  { name: "Transformations", href: "/transformations" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Reviews", href: "/reviews" },
]

export default function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }
    return () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <nav className="sticky top-0 z-50 w-full glass-heavy border-b border-white/5">
        <div className="container mx-auto px-4 flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center transition-opacity hover:opacity-90">
              <span className="text-2xl font-black italic tracking-tighter text-primary">
                Perfect Fitness Gym
              </span>
            </Link>

            <div className="hidden lg:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground/80"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="hidden sm:inline-flex bg-primary hover:opacity-90 text-white rounded-none uppercase font-black tracking-widest px-8 h-12 transition-all shadow-lg shadow-primary/20">
              <Link to="/book">Book Visit</Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer - Outside Nav to avoid filter interference */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] lg:hidden">
            {/* 100% Opaque Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-full bg-[#080808] flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Drawer Header Area */}
              <div className="flex h-20 items-center justify-between px-8 bg-black border-b border-white/10 shrink-0">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground">Navigation</span>
                <Button 
                   variant="ghost" 
                   size="icon" 
                   onClick={() => setIsOpen(false)}
                   className="text-white hover:bg-white/10 h-10 w-10 rounded-none"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Navigation List Area */}
              <div className="flex-grow overflow-y-auto px-8 py-12">
                <div className="flex flex-col gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-bold uppercase tracking-[0.2em] transition-all hover:text-primary",
                        location.pathname === link.href
                          ? "text-primary italic"
                          : "text-white/80"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Area at Bottom */}
              <div className="p-8 pb-12 bg-black border-t border-white/10 mt-auto">
                <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-muted-foreground/50 mb-6 text-center italic">
                   Excellence Awaits You
                </p>
                <Button asChild className="w-full bg-primary hover:bg-white hover:text-black text-white rounded-none uppercase font-black tracking-widest py-8 h-auto text-sm transition-all border-2 border-primary">
                  <Link to="/book" onClick={() => setIsOpen(false)}>Book Your Initial Visit</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
