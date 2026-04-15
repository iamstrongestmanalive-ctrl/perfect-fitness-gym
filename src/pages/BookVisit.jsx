import React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Clock, ArrowRight, Flag, Maximize, LineChart, ShowerHead, Navigation, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function BookVisit() {
  return (
    <div className="flex flex-col bg-background selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-14 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-background">
        <div className="container mx-auto px-5 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-4 lg:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-3 lg:space-y-4">
              <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] lg:text-[12px]">Limited Time Offer</span>
              <h1 className="text-[clamp(2.5rem,9vw,5.5rem)] md:text-8xl lg:text-[10rem] font-black uppercase tracking-tight leading-[0.85] lg:leading-[0.8]">
                YOUR FIRST SESSION <br />
                <span className="text-primary italic">IS ON US</span>
              </h1>
            </div>
            <p className="text-white/60 max-w-[34ch] lg:max-w-xl mx-auto lg:mx-0 text-sm lg:text-base font-bold uppercase tracking-[0.3em] opacity-80 leading-relaxed">
              Experience elite equipment and expert coaching. Just you and the iron.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex-1 relative w-full lg:w-auto mt-6 lg:mt-0"
          >
            <div className="relative aspect-[4/5] max-w-sm lg:max-w-lg mx-auto overflow-hidden grayscale contrast-125">
               <img 
                 src="/assets/booking_model.png" 
                 alt="Athlete" 
                 className="w-full h-full object-cover scale-105"
                 loading="eager"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background via-transparent to-transparent" />
            </div>
            {/* Background Accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-primary/[0.04] uppercase italic pointer-events-none select-none">
              PUSH
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Overlap */}
      <section className="relative z-20 -mt-10 lg:-mt-48 pb-14 lg:pb-48">
        <div className="container mx-auto px-5">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-white dark:bg-charcoal shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-l-[8px] lg:border-l-[12px] border-primary p-6 lg:p-20 space-y-10 lg:space-y-16"
          >
            <div className="space-y-3 lg:space-y-4">
              <h2 className="text-2xl lg:text-6xl font-black uppercase italic tracking-tight">Secure Your Spot</h2>
              <div className="w-12 lg:w-16 h-1 lg:h-1.5 bg-primary" />
            </div>

            <form className="space-y-8 lg:space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                <div className="space-y-3">
                  <Label className="uppercase font-black tracking-widest text-[9px] lg:text-[10px] opacity-60">Full Name</Label>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-white/[0.03] dark:bg-white/5 border-none py-4 lg:py-8 px-5 lg:px-8 rounded-none text-sm lg:text-lg focus:ring-2 focus:ring-primary transition-all h-auto"
                  />
                </div>
                <div className="space-y-3">
                  <Label className="uppercase font-black tracking-widest text-[9px] lg:text-[10px] opacity-60">Phone Number</Label>
                  <Input 
                    placeholder="+91 00000 00000" 
                    className="bg-white/[0.03] dark:bg-white/5 border-none py-4 lg:py-8 px-5 lg:px-8 rounded-none text-sm lg:text-lg focus:ring-2 focus:ring-primary transition-all h-auto"
                  />
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <Label className="uppercase font-black tracking-widest text-[9px] lg:text-[10px] opacity-60">Preferred Time</Label>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {["Morning", "Afternoon", "Evening", "Night"].map((time, i) => (
                    <button 
                      key={time}
                      type="button"
                      className={cn(
                        "py-3 lg:py-6 px-4 uppercase font-black text-[9px] lg:text-[10px] tracking-widest transition-all active:scale-[0.95]",
                        i === 1 ? "bg-primary text-white shadow-lg" : "bg-white/[0.03] dark:bg-white/5 text-white/40 hover:bg-primary/10"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6 lg:space-y-8 pt-4">
                <Button className="w-full max-w-[260px] mx-auto bg-primary hover:opacity-90 text-white font-black uppercase py-3.5 lg:py-10 rounded-none text-xs lg:text-2xl tracking-[0.2em] shadow-3xl group active:scale-[0.97] active:shadow-inner transition-all will-change-transform flex items-center justify-center">
                  Claim My Free Visit <ArrowRight className="ml-3 lg:ml-4 h-4 w-4 lg:h-6 lg:w-6 lg:group-hover:translate-x-3 transition-transform" />
                </Button>
                <p className="text-center text-[8px] lg:text-[10px] uppercase font-bold tracking-widest opacity-40 max-w-[34ch] mx-auto leading-relaxed">No credit card required. Confirmation sent via SMS.</p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-14 lg:py-48 bg-white/[0.02] dark:bg-white/5 overflow-hidden border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32">
            
            <div className="lg:col-span-5 space-y-8 lg:space-y-12">
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tight italic leading-none">
                  What to <br />
                  <span className="text-primary italic">Expect</span>
                </h2>
                <div className="w-16 lg:w-24 h-1.5 lg:h-2 bg-primary" />
              </div>
              <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] lg:text-sm leading-relaxed lg:leading-loose opacity-80 max-w-[34ch]">
                We don't just hand you a key. We welcome you into the tribe with an elite facility walkthrough.
              </p>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-white dark:bg-charcoal p-6 lg:p-10 border-l-4 border-primary shadow-xl space-y-4 lg:space-y-6 active:scale-[0.99] transition-transform"
              >
                <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-primary/20" />
                <p className="text-xs lg:text-base font-black uppercase italic tracking-tight leading-relaxed">
                  "The cleanest and most professional facility I've ever trained at."
                </p>
                <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-primary">— MIKE R., ELITE MEMBER</span>
              </motion.div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
              {[
                { icon: Flag, title: "Facility Tour", desc: "Explore our zones from Olympic lifting platforms to our recovery lounge and sauna areas." },
                { icon: Maximize, title: "Equipment Intro", desc: "Our staff will show you the ropes and safety protocols for our latest machinery." },
                { icon: LineChart, title: "Goal Assessment", desc: "Discuss your targets with a coach and build a custom roadmap for your success." },
                { icon: ShowerHead, title: "Full Amenity Access", desc: "Enjoy full access to locker rooms, premium showers, and professional towel service." }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-charcoal p-6 lg:p-10 space-y-4 lg:space-y-6 shadow-sm border border-white/[0.05] hover:border-primary transition-all group kinetic-hover active:scale-[0.98]">
                   <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                     <item.icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary group-hover:text-white" />
                   </div>
                   <h4 className="text-base lg:text-lg font-black uppercase italic tracking-tight leading-tight">{item.title}</h4>
                   <p className="text-[9px] lg:text-[10px] uppercase font-bold tracking-widest text-white/40 leading-relaxed group-hover:text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Contact Shortcuts Section */}
      <section className="py-14 lg:py-48 bg-white dark:bg-background">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            
            {/* Left: Map Component */}
            <div className="lg:col-span-6 relative group overflow-hidden shadow-4xl aspect-[4/3] lg:aspect-auto border border-white/[0.05]">
               <img 
                 src="/assets/isometric_map.png" 
                 alt="Find Us" 
                 className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 transition-transform duration-[2000ms]" 
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
               <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8 bg-white dark:bg-charcoal p-5 lg:p-8 shadow-2xl flex items-center justify-between border-b-4 border-primary">
                 <div className="space-y-0.5 lg:space-y-1">
                    <span className="text-primary font-black uppercase text-[8px] lg:text-[10px] tracking-widest">Find Us</span>
                    <p className="font-black uppercase tracking-tight italic text-xs lg:text-sm">123 Athletic Row, Vikas Nagar</p>
                 </div>
                 <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary flex items-center justify-center active:scale-95 transition-transform">
                    <Navigation className="w-5 h-5 lg:w-6 lg:h-6 text-white fill-white" />
                 </div>
               </div>
            </div>

            {/* Right: Info Tiles */}
            <div className="lg:col-span-6 space-y-10 lg:space-y-14">
               <div className="space-y-4 text-center lg:text-left">
                  <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tight italic leading-none">Contact <br />Shortcuts</h2>
                  <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] lg:text-sm max-w-[34ch] lg:max-w-none mx-auto lg:mx-0 leading-relaxed">Reach out directly for immediate help with your visit.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white/[0.02] dark:bg-white/5 p-6 lg:p-8 flex items-center gap-5 lg:gap-6 group kinetic-hover active:scale-[0.98] transition-all border border-white/[0.05]">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/5 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-white/40">Call Us</span>
                      <p className="font-black text-xs lg:text-sm uppercase tracking-tight">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="bg-white/[0.02] dark:bg-white/5 p-6 lg:p-8 flex items-center gap-5 lg:gap-6 group kinetic-hover active:scale-[0.98] transition-all border border-white/[0.05]">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/5 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-white/40">Email</span>
                      <p className="font-black text-xs lg:text-sm uppercase tracking-tight lowercase">train@perfectfitness.com</p>
                    </div>
                  </div>
               </div>

               <div className="bg-charcoal text-white p-6 lg:p-10 relative overflow-hidden group kinetic-hover active:scale-[0.99] transition-all border border-white/10">
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-xl lg:text-2xl font-black uppercase italic tracking-tight">Operating Hours</h4>
                      <div className="space-y-2 pt-4">
                        <p className="text-[10px] lg:text-[11px] font-bold uppercase tracking-widest opacity-60">Mon - Sat: 5:00 AM - 10:00 PM</p>
                        <p className="text-[10px] lg:text-[11px] font-bold uppercase tracking-widest opacity-60">Sun: 7:00 AM - 12:00 PM</p>
                      </div>
                    </div>
                    <Clock className="w-12 h-12 lg:w-16 lg:h-16 text-white/5 group-hover:text-primary/20 transition-all duration-700 -rotate-12" />
                  </div>
                  <div className="absolute top-0 right-0 w-16 lg:w-24 h-1 border-t-[6px] lg:border-t-8 border-primary"></div>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
