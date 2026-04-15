import React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle, Navigation } from "lucide-react"
import { Facebook, Instagram, Youtube } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Contact() {
  return (
    <div className="flex flex-col bg-background selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <section className="relative h-[45vh] lg:h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/contact_hero_bg.png" 
            alt="Gym Interior" 
            className="w-full h-full object-cover scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-background" />
        </div>
        
        <div className="container mx-auto px-5 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 lg:space-y-8"
          >
            <h1 className="text-[clamp(3.5rem,12vw,6rem)] lg:text-[10rem] font-black uppercase tracking-tight leading-[0.85] lg:leading-[0.8] drop-shadow-2xl">
              GET IN <span className="text-primary italic">TOUCH</span>
            </h1>
            <p className="text-white/70 max-w-[34ch] lg:max-w-2xl mx-auto text-[9px] lg:text-[13px] font-black uppercase tracking-[0.4em] leading-relaxed lg:leading-loose">
              Elevate your standards. Our team is ready to guide your transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-14 lg:pb-48 -mt-10 lg:-mt-40 relative z-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white/[0.02] dark:bg-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-white/[0.05] items-stretch">
            
            {/* Map Area */}
            <div className="lg:col-span-8 relative min-h-[350px] lg:min-h-0 group bg-charcoal/10 overflow-hidden">
              <img 
                src="/assets/map_texture.png" 
                alt="Map Preview" 
                className="w-full h-full object-cover grayscale opacity-40 dark:opacity-20 contrast-[1.15] scale-110 group-hover:scale-100 transition-transform duration-[2000ms]" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent pointer-events-none" />
              
              {/* Map Floating Label */}
              <div className="absolute top-6 left-6 lg:top-10 lg:left-10 bg-white dark:bg-charcoal px-4 py-2 lg:px-6 lg:py-3 shadow-2xl flex items-center gap-2 lg:gap-3 border border-white/[0.05]">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(175,16,26,0.6)]" />
                <span className="font-black uppercase tracking-widest text-[9px] lg:text-[10px]">Vikas Nagar Hub</span>
              </div>

              {/* Central Pin */}
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-[2] lg:scale-[2.5] group-hover/pin:scale-[3.5] transition-transform duration-1000" />
                  <div className="bg-primary p-4 lg:p-5 shadow-4xl relative z-10 border-2 border-background/20 active:scale-95 transition-transform">
                    <Navigation className="w-5 h-5 lg:w-7 lg:h-7 text-white rotate-45" />
                  </div>
                </div>
                <div className="mt-4 lg:mt-6 bg-charcoal text-white px-4 py-2 font-black uppercase tracking-[0.2em] text-[8px] lg:text-[10px] shadow-3xl whitespace-nowrap border border-white/10">
                  Perfect Fitness Gym
                </div>
              </div>

              {/* Directions Button */}
              <div className="absolute bottom-12 right-12 hidden lg:block">
                <Button 
                  className="bg-primary hover:bg-white hover:text-charcoal text-white font-black uppercase py-8 px-12 rounded-none text-[11px] tracking-[0.25em] shadow-3xl transition-all duration-500 group"
                  onClick={() => window.open("https://maps.google.com", "_blank")}
                >
                  <Navigation className="mr-4 h-4 w-4 fill-white group-hover:fill-charcoal transition-colors" />
                  Get Directions
                </Button>
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden w-full px-6">
                <Button 
                   className="w-full bg-primary text-white font-black uppercase py-4 rounded-none text-[10px] tracking-widest active:scale-[0.97] active:shadow-inner"
                   onClick={() => window.open("https://maps.google.com", "_blank")}
                >
                  Get Directions
                </Button>
              </div>
            </div>

            {/* Info Area */}
            <div className="lg:col-span-4 flex flex-col border-t lg:border-t-0 lg:border-l border-white/[0.05] divide-y divide-white/[0.05]">
              <div className="p-6 lg:p-16 flex-grow space-y-10 lg:space-y-16">
                {/* Location */}
                <div className="space-y-6 lg:space-y-8">
                  <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] block border-l-2 border-primary pl-4">Location & Access</span>
                  <div className="flex gap-4 lg:gap-8">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/[0.05] flex items-center justify-center shrink-0 border border-white/[0.05]">
                      <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-black uppercase tracking-tight italic text-lg lg:text-xl leading-none">123 Athletic Row, Vikas Nagar</p>
                      <p className="text-white/40 uppercase tracking-widest text-[10px] lg:text-[11px] font-bold">New Delhi, 110059</p>
                    </div>
                  </div>
                </div>

                {/* Reach Out */}
                <div className="space-y-6 lg:space-y-8">
                  <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] block border-l-2 border-primary pl-4">Reach Out</span>
                  <div className="space-y-6 lg:space-y-8">
                    <div className="flex gap-4 lg:gap-8 group cursor-pointer">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/[0.05] flex items-center justify-center shrink-0 group-hover:bg-primary border border-white/[0.05] transition-all duration-500">
                        <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-primary group-hover:text-white" />
                      </div>
                      <p className="font-black uppercase tracking-tight italic text-lg lg:text-2xl self-center transition-colors group-hover:text-primary leading-none">+91 98765 43210</p>
                    </div>
                    <div className="flex gap-4 lg:gap-8 group cursor-pointer">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/[0.05] flex items-center justify-center shrink-0 group-hover:bg-primary border border-white/[0.05] transition-all duration-500">
                        <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-primary group-hover:text-white" />
                      </div>
                      <p className="font-black uppercase tracking-tight italic text-base lg:text-xl self-center lowercase transition-colors group-hover:text-primary leading-none break-all">train@perfectfitness.com</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="space-y-6 lg:space-y-8">
                  <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] block border-l-2 border-primary pl-4">Operational Hours</span>
                  <div className="space-y-4 lg:space-y-5 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center text-[10px] lg:text-[11px] uppercase font-black tracking-[0.2em] border-b border-white/[0.05] pb-4 lg:pb-5 gap-2">
                      <span className="opacity-40 italic">Mon - Sat</span>
                      <span className="text-foreground">05:00 AM – 10:00 PM</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center text-[10px] lg:text-[11px] uppercase font-black tracking-[0.2em] gap-2">
                      <span className="opacity-40 italic">Sunday</span>
                      <span className="text-primary">07:00 AM – 12:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Grid */}
              <div className="p-6 lg:p-12 bg-white/[0.03] space-y-6 lg:space-y-10">
                <div className="flex justify-between items-center border-b border-white/[0.05] pb-4 lg:pb-6">
                   <h4 className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] text-white/40 italic">Connect Digitally</h4>
                   <div className="w-6 h-6 bg-green-500/10 flex items-center justify-center border border-green-500/20">
                     <MessageCircle className="w-3 h-3 text-green-500" />
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-2 lg:gap-3">
                  {[
                    { icon: Instagram, label: "Instagram", color: "bg-surface dark:bg-white/5" },
                    { icon: Youtube, label: "Youtube", color: "bg-surface dark:bg-white/5" },
                    { icon: Facebook, label: "Facebook", color: "bg-surface dark:bg-white/5" },
                    { icon: MessageCircle, label: "Whatsapp", color: "bg-primary" },
                  ].map((social, i) => (
                    <button 
                      key={i} 
                      className={cn(
                        "flex flex-col items-center justify-center py-6 lg:py-8 gap-3 lg:gap-4 transition-all duration-500 border border-white/[0.05] group overflow-hidden relative active:scale-95 will-change-transform",
                        social.color
                      )}
                    >
                      <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <social.icon className={cn("w-5 h-5 lg:w-6 lg:h-6 relative z-10 transition-transform duration-500 group-hover:scale-110", i === 3 ? "text-white" : "text-foreground")} />
                      <span className={cn("text-[8px] font-black uppercase tracking-[0.2em] relative z-10", i === 3 ? "text-white/80" : "text-white/40 group-hover:text-foreground")}>{social.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Hub Section */}
      <section className="py-14 lg:py-40 bg-background overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-40">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-6 lg:space-y-14 text-center lg:text-left"
            >
              <div className="space-y-4 lg:space-y-8">
                <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] lg:text-[11px]">Kanpur's Premier Arena</span>
                <h2 className="text-[clamp(2.5rem,10vw,4rem)] md:text-7xl lg:text-9xl font-black uppercase tracking-tight leading-[1] lg:leading-[0.8] italic">
                  Not Just a Gym. <br />
                  <span className="text-primary italic">A Transformation Hub.</span>
                </h2>
                <div className="w-24 lg:w-32 h-2 bg-primary mx-auto lg:mx-0" />
              </div>
              
              <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] lg:text-[13px] leading-relaxed max-w-[34ch] lg:max-w-xl opacity-70 mx-auto lg:mx-0">
                Experience the highest standards in kinetic training, elite recovery, and professional coaching. Our space is engineered for those who refuse average.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start w-full max-w-[280px] sm:max-w-none mx-auto lg:mx-0">
                <Button className="w-full sm:flex-1 lg:flex-none bg-primary hover:bg-black text-white hover:text-white font-black uppercase py-3.5 lg:py-8 px-12 lg:px-16 rounded-none text-xs tracking-widest transition-all duration-300 active:scale-[0.97] active:shadow-inner will-change-transform">
                  Schedule A Tour
                </Button>
                <Button variant="outline" className="w-full sm:flex-1 lg:flex-none border-white/20 text-white hover:bg-primary hover:text-white hover:border-primary font-black uppercase py-3.5 lg:py-8 px-12 lg:px-16 rounded-none text-xs tracking-widest transition-all duration-300 active:scale-[0.97] active:shadow-inner will-change-transform">
                  Free Day Pass
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative w-full lg:w-auto mt-10 lg:mt-0"
            >
              <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.4)] group border-4 lg:border-8 border-white/10 kinetic-hover">
                <img 
                  src="/assets/transformation_hub_img.png" 
                  alt="Hub" 
                  className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -right-6 lg:-bottom-20 lg:-right-20 w-32 h-32 lg:w-80 lg:h-80 border-[10px] lg:border-[40px] border-primary/[0.03] -z-10 pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}
