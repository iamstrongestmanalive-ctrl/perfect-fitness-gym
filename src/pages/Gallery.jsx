import React from "react"
import { motion } from "framer-motion"
import { MapPin, Camera, ArrowRight } from "lucide-react"
import { Instagram } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const images = [
  { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop", title: "Strength Arena", area: "Hammer Strength" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", title: "Main Floor", area: "Industrial Design" },
  { src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop", title: "Cardio Row", area: "High Endurance" },
  { src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop", title: "Heavy Duty", area: "Free Weights" },
  { src: "https://images.unsplash.com/photo-1590239068512-63200d7d91d0?q=80&w=2070&auto=format&fit=crop", title: "Functional", area: "Performance Turf" },
  { src: "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=2070&auto=format&fit=crop", title: "Recovery", area: "Amenities" },
]

export default function Gallery() {
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
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] lg:text-xs">The Digital Tour</span>
            <h1 className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-9xl font-black uppercase tracking-tight leading-[1] lg:leading-none italic">
               Visual <br /><span className="text-primary italic">Atmosphere</span>
            </h1>
          </motion.div>
          <p className="text-white/60 text-sm lg:text-lg max-w-[34ch] lg:max-w-2xl mx-auto uppercase tracking-widest font-bold leading-relaxed">
            Experience the intensity of Kanpur's premier training facility. Precision equipment. Masterful coaching.
          </p>
          <div className="flex justify-center pt-4 lg:pt-8 w-full">
             <Button className="w-full max-w-[260px] bg-primary hover:opacity-90 text-white font-black uppercase text-sm lg:text-lg py-3 lg:py-10 px-10 lg:px-16 rounded-none flex items-center justify-center gap-3 lg:gap-4 transition-all shadow-3xl active:scale-[0.97] active:shadow-inner will-change-transform">
                <Instagram className="h-4 w-4 lg:h-6 lg:w-6" />
                Live Feed
             </Button>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-primary/[0.02] select-none pointer-events-none uppercase italic leading-none">
          Inside
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 lg:py-24 bg-surface-container-low dark:bg-black/20 border-y border-white/[0.06]">
         <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-1 border border-white/[0.05] lg:max-w-7xl mx-auto">
               {images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative h-[350px] lg:h-[500px] overflow-hidden bg-charcoal active:scale-[0.99] transition-transform"
                  >
                     <img src={img.src} alt={img.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-1000" loading="lazy" />
                     
                     {/* Overlay Information */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                     
                     <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 space-y-1 lg:space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-primary font-black uppercase tracking-[0.2em] text-[9px] lg:text-[10px]">{img.area}</span>
                        <h3 className="text-xl lg:text-3xl font-black text-white uppercase italic tracking-tight leading-none">{img.title}</h3>
                     </div>
                     
                     {/* Corner Decoration */}
                     <div className="absolute top-0 right-0 w-12 h-12 lg:w-16 lg:h-16 border-t-2 lg:border-t-4 border-r-2 lg:border-r-4 border-primary/20 group-hover:border-primary transition-colors" />
                  </motion.div>
               ))}
            </div>
            
            <div className="mt-14 lg:mt-32 text-center p-8 lg:p-20 bg-surface dark:bg-white/5 border border-white/[0.05] relative overflow-hidden group">
               <div className="relative z-10 space-y-6 lg:space-y-8">
                  <h2 className="text-2xl lg:text-4xl font-black uppercase tracking-tight italic">Want to see it in person?</h2>
                  <p className="text-white/60 uppercase tracking-widest text-[10px] lg:text-xs font-bold max-w-[34ch] mx-auto">Free visit including facility walkthrough and form analysis.</p>
                  <Button className="w-full max-w-[260px] bg-primary text-white hover:opacity-90 font-black uppercase text-sm lg:text-xl py-3 lg:py-10 px-10 lg:px-20 rounded-none h-auto transition-all shadow-3xl active:scale-[0.97] active:shadow-inner will-change-transform mx-auto">
                     Book Visit <ArrowRight className="ml-2 w-5 h-5 lg:w-6 lg:h-6" />
                  </Button>
               </div>
               <Camera className="absolute -bottom-6 lg:-bottom-10 -right-6 lg:-right-10 w-32 h-32 lg:w-64 lg:h-64 text-primary/[0.03] rotate-12" />
            </div>
         </div>
      </section>

      {/* Map Location Preview */}
      <section className="min-h-[500px] lg:h-[600px] bg-charcoal relative overflow-hidden flex items-center justify-center py-14">
         <div className="absolute inset-0 grayscale opacity-30 contrast-125">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop" alt="Gym Building" className="w-full h-full object-cover" loading="lazy" />
         </div>
         <div className="absolute inset-0 bg-black/60" />
         
         <div className="relative z-10 text-center space-y-8 lg:space-y-10 max-w-xl px-5">
            <div className="w-16 h-16 lg:w-24 lg:h-24 bg-primary flex items-center justify-center mx-auto shadow-2xl relative">
               <MapPin className="h-8 w-8 lg:h-12 lg:w-12 text-white" />
               <div className="absolute -inset-4 border-2 border-primary/20 animate-ping rounded-full" />
            </div>
            <div className="space-y-3 lg:space-y-4">
               <h2 className="text-4xl lg:text-6xl font-black text-white uppercase italic tracking-tight leading-none">Find us <br />in Kanpur</h2>
               <p className="text-white/80 font-bold uppercase tracking-widest text-[10px] lg:text-sm max-w-[30ch] mx-auto">Civil Lines, Kanpur, Uttar Pradesh 208001</p>
            </div>
            <Button variant="outline" className="w-full max-w-[260px] border-white/40 text-white hover:bg-white hover:text-charcoal font-black uppercase py-3 lg:py-8 px-10 lg:px-12 rounded-none transition-all active:scale-[0.97] active:shadow-inner mx-auto">
               Get Directions
            </Button>
         </div>
      </section>
    </div>
  )
}
