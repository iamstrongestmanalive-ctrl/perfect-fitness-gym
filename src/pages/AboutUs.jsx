import React from "react"
import { motion } from "framer-motion"
import { Target, Users, TrendingUp, ShieldCheck, Dumbbell, Award, History } from "lucide-react"

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export default function AboutUs() {
  return (
    <div className="flex flex-col pt-20 bg-background">
      {/* Hero Section */}
      <section className="relative pt-16 pb-14 overflow-hidden bg-background">
        <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={variants}
            className="flex-1 space-y-6 lg:space-y-10 text-center lg:text-left"
          >
            <div>
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] lg:text-xs">Since 2014 — Kanpur, India</span>
              <h1 className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-9xl font-black uppercase tracking-tight leading-[1] lg:leading-[0.85] mt-4 lg:mt-6 italic">
                Our Legacy <br />
                <span className="text-primary">In Iron.</span>
              </h1>
            </div>
            <p className="text-sm lg:text-xl text-white/60 leading-relaxed max-w-[34ch] lg:max-w-lg font-medium mx-auto lg:mx-0">
              A decade of iron, sweat, and community. We've built the definitive standard for high-performance training in Uttar Pradesh.
            </p>
            <div className="flex items-center gap-4 lg:gap-6 justify-center lg:justify-start">
               <div className="w-16 lg:w-24 h-2 bg-primary"></div>
               <span className="font-black uppercase tracking-[0.3em] text-[9px] lg:text-[10px]">A Decade of Excellence</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="flex-1 relative w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="rounded-none overflow-hidden shadow-3xl aspect-[4/5] bg-charcoal relative group">
               <img 
                 src="/assets/trainer_body.png" 
                 alt="Our Legacy in Iron" 
                 className="w-full h-full object-cover object-top brightness-[0.85] contrast-[1.1] saturate-[0.9] transition-all duration-700 ease-out md:group-hover:scale-105" 
                 loading="eager" 
               />
               <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>
            {/* Abstract Decor */}
            <div className="absolute -bottom-6 -left-6 lg:-bottom-10 -left-10 w-24 h-24 lg:w-40 lg:h-40 border-b-8 border-l-8 border-primary -z-0 pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-14 lg:py-24 bg-surface-container-low dark:bg-black/20 border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="bg-white/[0.02] dark:bg-white/5 p-8 lg:p-16 flex flex-col justify-center space-y-4 lg:space-y-6 text-center lg:text-left">
               <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight leading-tight italic">10 Years of <span className="text-primary">Impact</span></h3>
               <p className="text-white/60 font-medium text-sm lg:text-base leading-relaxed">Perfect Fitness Gym started as a single-room vision: professional-grade training for everyone seeking progress.</p>
            </div>
            <div className="grid grid-cols-2 gap-1 col-span-1 md:col-span-2">
               <div className="bg-primary p-6 lg:p-12 flex flex-col justify-end text-white relative overflow-hidden group min-h-[160px] lg:min-h-0">
                  <TrendingUp className="absolute top-4 right-4 lg:top-6 lg:right-6 w-16 h-16 lg:w-24 lg:h-24 opacity-10 group-hover:scale-110 transition-transform" />
                  <span className="text-4xl lg:text-6xl font-black italic tracking-tighter">5000+</span>
                  <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest mt-2">Active Transformations</p>
               </div>
               <div className="bg-charcoal p-6 lg:p-12 flex flex-col justify-end text-white relative overflow-hidden group min-h-[160px] lg:min-h-0">
                  <History className="absolute top-4 right-4 lg:top-6 lg:right-6 w-16 h-16 lg:w-24 lg:h-24 opacity-10 group-hover:scale-110 transition-transform" />
                  <span className="text-4xl lg:text-6xl font-black italic tracking-tighter">24/7</span>
                  <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest mt-2">Elite Crew Access</p>
               </div>
               <div className="bg-surface p-6 lg:p-12 flex flex-col justify-end text-charcoal relative overflow-hidden group dark:bg-white/5 dark:text-white min-h-[160px] lg:min-h-0">
                  <Award className="absolute top-4 right-4 lg:top-6 lg:right-6 w-16 h-16 lg:w-24 lg:h-24 opacity-10 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-2xl lg:text-4xl font-black uppercase italic text-primary tracking-tighter">Gold Standard</span>
                  <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest mt-2">Facility Recognition</p>
               </div>
               <div className="rounded-none overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop" alt="Community" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" loading="lazy" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-40 bg-charcoal text-white relative overflow-hidden">
         <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-6 lg:space-y-10 relative z-10 text-center lg:text-left">
               <h2 className="text-[clamp(2.5rem,10vw,4rem)] md:text-8xl font-black italic uppercase tracking-tight leading-none">Our <br /><span className="text-primary italic">Mission</span></h2>
               <div className="w-24 h-2 lg:h-3 bg-primary mx-auto lg:mx-0"></div>
               <p className="text-xl md:text-5xl font-black leading-[1.2] lg:leading-[1.1] tracking-tight uppercase italic max-w-[20ch] lg:max-w-none mx-auto lg:mx-0">
                 "To engineer an environment where scientific training meets human grit."
               </p>
            </div>
            <div className="flex-1 relative flex justify-center w-full max-w-sm mx-auto lg:max-w-none">
               <div className="w-full aspect-square border-4 lg:border-8 border-primary/20 p-4 lg:p-8 
                               transition-all duration-700
                               md:hover:[&_img]:grayscale-0 md:hover:[&_img]:brightness-[1] md:hover:[&_img]:saturate-[1] md:hover:[&_img]:scale-105
                               md:hover:[&_.reveal-overlay]:opacity-10">
                  <div className="w-full h-full relative overflow-hidden">
                     <img 
                       src="/assets/trainer_room.png" 
                       alt="Our Training Environment" 
                       className="w-full h-full object-cover object-center grayscale brightness-[0.75] contrast-[1.1] saturate-[0.85] transition-all duration-700 ease-out" 
                       loading="lazy" 
                     />
                     <div className="reveal-overlay absolute inset-0 bg-black/30 pointer-events-none transition-opacity duration-500" />
                  </div>
               </div>
            </div>
         </div>
         {/* Background Text */}
         <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none uppercase italic">
            Mission
         </div>
      </section>

      {/* The Arena */}
      <section className="py-14 lg:py-32 border-t border-white/[0.06]">
         <div className="container mx-auto px-5 text-center space-y-10 lg:space-y-24">
            <div className="space-y-4 lg:space-y-6">
               <h2 className="text-[clamp(2.5rem,10vw,4rem)] md:text-7xl font-black uppercase tracking-tight italic leading-none">The Arena</h2>
               <p className="text-white/40 uppercase tracking-[0.4em] font-black text-[9px] lg:text-xs">6,000 Sq. Ft. of High-Octane Performance Space</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 min-h-[400px] lg:min-h-[600px] border border-white/[0.05]">
               <div className="lg:col-span-2 relative group overflow-hidden bg-charcoal min-h-[300px]">
                  <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" alt="Free Weights" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 grayscale" loading="lazy" />
                  <div className="absolute inset-0 p-6 lg:p-16 flex flex-col justify-end text-left text-white bg-gradient-to-t from-black/80 to-transparent">
                     <span className="text-3xl lg:text-5xl font-black uppercase italic tracking-tight">Strength Hub</span>
                     <p className="text-[10px] lg:text-sm uppercase tracking-widest mt-2 lg:mt-4 opacity-70">Hammer Strength & Matrix Machinery</p>
                  </div>
               </div>
               <div className="relative group overflow-hidden flex flex-col gap-1 min-h-[300px]">
                  <div className="flex-1 relative overflow-hidden bg-primary min-h-[150px]">
                     <img src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1974&auto=format&fit=crop" alt="Cardio" className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-110 transition-all duration-700" loading="lazy" />
                     <div className="absolute inset-0 flex items-center justify-center text-white p-4">
                        <span className="text-xl lg:text-2xl font-black uppercase tracking-tight italic">Cardio Row</span>
                     </div>
                  </div>
                  <div className="flex-1 bg-white/[0.02] dark:bg-white/5 flex flex-col items-center justify-center p-8 lg:p-12 text-center group-hover:bg-primary group-hover:text-white transition-colors">
                     <Dumbbell className="w-8 h-8 lg:w-10 lg:h-10 mb-2 lg:mb-4 text-primary group-hover:text-white" />
                     <span className="text-lg lg:text-xl font-black uppercase tracking-widest italic leading-none">Functional</span>
                  </div>
               </div>
               <div className="relative group overflow-hidden bg-white dark:bg-charcoal border-l border-white/[0.05] min-h-[200px]">
                  <img src="https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=1974&auto=format&fit=crop" alt="Resistance" className="w-full h-full object-cover opacity-20 contrast-125 grayscale" loading="lazy" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 lg:p-12 text-center">
                     <span className="text-sm lg:text-xl font-black uppercase tracking-[0.2em] mb-2 lg:mb-4">Elite Facility</span>
                     <div className="w-10 h-1 bg-primary"></div>
                     <span className="text-xl lg:text-2xl font-black uppercase mt-2 lg:mt-4 italic">Resistance Zone</span>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 py-8 lg:py-16 border-t border-white/[0.05]">
               {[
                  { val: "15+", label: "Power Racks" },
                  { val: "5000KG+", label: "Iron Load" },
                  { val: "Certified", label: "Coaching Staff" },
                  { val: "Full HVAC", label: "Climate Control" }
               ].map((stat, i) => (
                  <div key={i} className="space-y-2 lg:space-y-4">
                     <span className="text-3xl lg:text-5xl font-black text-primary italic tracking-tight break-words">{stat.val}</span>
                     <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* The Perfect Code */}
      <section className="py-14 lg:py-32 bg-surface-container-low dark:bg-black/20 border-t border-white/[0.06]">
         <div className="container mx-auto px-5">
            <div className="text-center mb-10 lg:mb-20 space-y-4 lg:space-y-6">
               <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-8xl font-black uppercase tracking-tight italic leading-none">The <span className="text-primary">Code</span></h2>
               <p className="text-white/60 max-w-[34ch] lg:max-w-lg mx-auto font-medium uppercase tracking-widest text-[10px] lg:text-sm">
                  The four non-negotiable pillars of Perfect Fitness Gym.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
               {[
                  { icon: Target, title: "Precision", desc: "Form over weight. Every rep must be a masterpiece of mechanical efficiency." },
                  { icon: Users, title: "Collective", desc: "No egos. We thrive as a brotherhood of elite performers pushing each other." },
                  { icon: TrendingUp, title: "Evolution", desc: "Stagnation is death. Measurable progress is the only valid metric." },
                  { icon: ShieldCheck, title: "Integrity", desc: "Zero shortcuts. We value the honest grind and the discipline it takes to win." }
               ].map((pillar, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white/[0.02] dark:bg-white/5 p-8 lg:p-16 flex flex-col items-center text-center space-y-6 lg:space-y-8 transition-all hover:bg-white/[0.04] active:scale-[0.98] group"
                  >
                     <div className="p-4 lg:p-6 bg-primary/10 rounded-full group-hover:bg-primary transition-colors">
                        <pillar.icon className="w-8 h-8 lg:w-12 lg:h-12 text-primary group-hover:text-white transition-transform duration-500" />
                     </div>
                     <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight italic">{pillar.title}</h3>
                     <p className="text-white/60 font-medium leading-relaxed text-sm lg:text-base">{pillar.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
    </div>
  )
}
