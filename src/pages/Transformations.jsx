import React from "react"
import { motion } from "framer-motion"
import { TrendingDown, TrendingUp, Users, Star, ArrowRight } from "lucide-react"
import { Instagram } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const showcases = [
  { name: "Aman R.", result: "Lost 15kg", duration: "12 Weeks", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" },
  { name: "Siddharth P.", result: "Bulked 8kg", duration: "16 Weeks", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=2070&auto=format&fit=crop" },
  { name: "Ria S.", result: "Body Recomp", duration: "24 Weeks", img: "https://images.unsplash.com/photo-1548690312-e3b507d17a12?q=80&w=1974&auto=format&fit=crop" },
  { name: "Kabir M.", result: "Lost 22kg", duration: "20 Weeks", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" },
]

export default function Transformations() {
  return (
    <div className="flex flex-col pt-20 bg-background">
      {/* Hero */}
      <section className="pt-16 pb-14 relative overflow-hidden bg-background">
        <div className="container mx-auto px-5 text-center space-y-4 lg:space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 lg:space-y-6"
          >
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] lg:text-xs">Proof of Process</span>
            <h1 className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-9xl font-black uppercase tracking-tight leading-[1] lg:leading-none italic">
              Real <br /><span className="text-primary italic">Results.</span>
            </h1>
          </motion.div>
          <p className="text-white/60 text-sm lg:text-lg max-w-[34ch] lg:max-w-2xl mx-auto uppercase tracking-widest font-bold leading-relaxed">
            Real members, real work, real change. These aren't just weight changes; they're complete lifestyle overhauls.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-primary/[0.02] select-none pointer-events-none uppercase italic leading-none">
          Proof
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 lg:py-24 bg-surface-container-low dark:bg-black/20 border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:max-w-7xl mx-auto border border-white/[0.05]">
            {showcases.map((sc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden bg-charcoal aspect-[3/4] lg:aspect-square"
              >
                <img src={sc.img} alt={sc.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-6 lg:bottom-12 left-6 lg:left-12 right-6 lg:right-12 space-y-4">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1 lg:space-y-2">
                      <h3 className="text-2xl md:text-5xl font-black uppercase italic tracking-tight text-white leading-tight">{sc.name}</h3>
                      <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px] lg:text-sm">{sc.result} — {sc.duration}</p>
                    </div>
                    <Button asChild variant="ghost" size="icon" className="text-white hover:text-primary transition-colors active:scale-95">
                      <a href="https://www.instagram.com/perfectfitnesshealth?igsh=MXVuanliYmJlaHA0dw==" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-5 w-5 lg:h-6 lg:w-6" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Asymmetric Accent */}
                <div className="absolute top-0 right-0 w-16 lg:w-24 h-1 bg-primary group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats Strip */}
      <section className="py-14 lg:py-32 bg-charcoal text-white border-y border-white/5">
        <div className="container mx-auto px-5">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
              {[
                { icon: TrendingDown, val: "12,000kg+", label: "Weight Shed" },
                { icon: TrendingUp, val: "4,500kg+", label: "Lean Muscle" },
                { icon: Users, val: "2,500+", label: "Members Transformed" },
                { icon: Star, val: "4.9/5", label: "Client Rating" }
              ].map((stat, i) => (
                <div key={i} className="space-y-4 lg:space-y-6 group text-center lg:text-left">
                   <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all duration-300 mx-auto lg:mx-0">
                      <stat.icon className="w-5 h-5 lg:w-8 lg:h-8 text-primary group-hover:text-white" />
                   </div>
                   <div className="space-y-1">
                      <h4 className="text-2xl lg:text-4xl font-black italic tracking-tight leading-none">{stat.val}</h4>
                      <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest opacity-40">{stat.label}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-14 lg:py-24 bg-primary text-white overflow-hidden relative group cursor-pointer border-t border-white/[0.06]">
        <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 relative z-10 text-center lg:text-left">
          <div className="space-y-2 lg:space-y-4">
            <h2 className="text-[clamp(2rem,8vw,3.5rem)] md:text-7xl font-black uppercase tracking-tight leading-[1] italic text-white/90">Your Story Starts <br />In The Arena.</h2>
            <p className="text-sm lg:text-xl font-medium opacity-80 uppercase tracking-widest">Book your consultation with our head coach.</p>
          </div>
          <Button className="w-full max-w-[280px] lg:max-w-none lg:w-auto bg-white text-primary hover:bg-black hover:text-white font-black uppercase py-4 lg:py-10 px-8 lg:px-16 rounded-none text-sm lg:text-xl transition-all shadow-3xl active:scale-[0.97] active:shadow-inner will-change-transform flex items-center justify-center mx-auto lg:mx-0">
            Book Transformation <ArrowRight className="ml-2 w-5 h-5 lg:w-6 lg:h-6" />
          </Button>
        </div>
         <div className="absolute inset-0 bg-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
      </section>
    </div>
  )
}
