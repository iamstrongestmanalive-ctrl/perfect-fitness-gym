import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Quote, Check, ArrowRight, User, Award, TrendingUp, Target, Zap, Shield, Clock, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export default function Alumni() {
  return (
    <div className="flex flex-col bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-16 pb-10 bg-background">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/alumni_hero.png" 
            alt="Alumni Background" 
            className="w-full h-full object-cover grayscale brightness-50 dark:brightness-[0.4] transition-all"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-5 z-10 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className="max-w-4xl space-y-6 lg:space-y-14 text-center lg:text-left"
          >
            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] lg:text-sm">Excellence In Action</span>
              <h1 className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-8xl lg:text-[10rem] font-black leading-[1] lg:leading-[0.8] tracking-tight uppercase italic">
                Our <br />
                <span className="text-primary">Alumni</span>
              </h1>
            </div>
            
            <p className="text-muted-foreground max-w-[34ch] lg:max-w-2xl text-sm lg:text-2xl font-medium leading-relaxed uppercase tracking-widest mx-auto lg:mx-0">
               Founded on the principles of discipline. Meet the trainers and professionals who are leading the global fitness industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full justify-center lg:justify-start">
              <Button asChild className="w-full max-w-[260px] mx-auto lg:mx-0 bg-primary hover:opacity-90 text-white font-black uppercase py-3 lg:py-8 px-10 lg:px-16 rounded-none text-sm lg:text-lg transition-all shadow-2xl active:scale-[0.97] active:shadow-inner will-change-transform">
                <Link to="/academy">Explore Careers</Link>
              </Button>
              <Button asChild variant="outline" className="w-full max-w-[260px] mx-auto lg:mx-0 border-white/20 text-foreground hover:bg-foreground hover:text-background font-black uppercase py-3 lg:py-8 px-10 lg:px-16 rounded-none text-sm lg:text-lg transition-all active:scale-[0.97] active:shadow-inner will-change-transform">
                <Link to="/contact">Join The Ranks</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Impact Stats */}
      <section className="py-14 lg:py-48 bg-background relative overflow-hidden border-b border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-40 gap-6">
            <div className="space-y-4 text-center lg:text-left mx-auto lg:mx-0">
               <h2 className="text-[clamp(2rem,8vw,3.5rem)] md:text-6xl font-black italic tracking-tight uppercase leading-[1.1] lg:leading-[0.85]">
                Where Our People <br /> Go Next
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto lg:mx-0"></div>
            </div>
            <p className="text-white/60 uppercase tracking-widest text-[10px] lg:text-[13px] font-bold opacity-60 max-w-[34ch] text-center lg:text-right mx-auto lg:mx-0 leading-relaxed">
              From premium chains to personal studios, our graduates are making impact across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { label: "Talented Alumni", value: "500+" },
              { label: "Countries Reached", value: "42" },
              { label: "High-Performance Hubs", value: "12" },
              { label: "Placement Rate", value: "98%" }
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left space-y-2 lg:space-y-4">
                <span className="text-5xl md:text-8xl font-black italic tracking-tighter text-primary whitespace-nowrap">{stat.value}</span>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-primary/[0.01] select-none pointer-events-none uppercase italic leading-none whitespace-nowrap">
          IMPACT
        </div>
      </section>

      {/* Alumni Spotlight Grid */}
      <section className="py-14 lg:py-48 bg-surface dark:bg-card/20 border-b border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="text-center space-y-4 mb-10 lg:mb-40">
             <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-8xl font-black italic tracking-tight uppercase leading-none">
                Alumni <span className="text-primary">Spotlight</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-1">
            {[
              { name: "Rohit Sharma", role: "Strength Coach", img: "https://images.unsplash.com/photo-1567013127542-490d75756799?q=80&w=2070&auto=format&fit=crop" },
              { name: "Neha Singh", role: "Women's Specialist", img: "https://images.unsplash.com/photo-1541534741688-6078c64b52fe?q=80&w=2070&auto=format&fit=crop" },
              { name: "Aman Verma", role: "Founder - Prime Fitness", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" },
              { name: "Arjun Patel", role: "Elite Trainer - NYC", img: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=2070&auto=format&fit=crop" },
              { name: "Simran Kaur", role: "Rehab Specialist", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2070&auto=format&fit=crop" },
              { name: "Vikas Yadav", role: "Pro Athlete Mentorship", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" }
            ].map((alumni, i) => (
              <div key={i} className="group relative aspect-[4/5] bg-charcoal overflow-hidden kinetic-hover transition-all duration-700 h-[400px] lg:h-[500px]">
                <img 
                  src={alumni.img} 
                  alt={alumni.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-12 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{alumni.role}</span>
                    <h3 className="text-xl lg:text-3xl font-black italic uppercase tracking-tighter text-white">{alumni.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trajectory Cards */}
      <section className="py-14 lg:py-48 bg-background relative overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="space-y-4 mb-10 lg:mb-40 text-center lg:text-left mx-auto lg:mx-0">
             <h2 className="text-[clamp(2.25rem,8vw,3.5rem)] md:text-6xl lg:text-7xl font-black italic tracking-tight uppercase leading-[1.1] lg:leading-[0.85]">
                Choose Your <br /> <span className="text-primary">Trajectory</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
            {[
              { icon: <Dumbbell />, title: "Strength Coaching", desc: "Follow in the footsteps of top-tier professionals redesigning biomechanics and performance." },
              { icon: <User />, title: "Personal Training", desc: "Build a highly successful independent training business or work with top global chains." },
              { icon: <Award />, title: "Sports Performance", desc: "Become a performance coach for elite clubs and athletes on the competitive world stage." }
            ].map((path, i) => (
              <Card key={i} className="p-6 lg:p-16 bg-white/[0.02] border border-white/[0.05] rounded-none group hover:bg-primary transition-all duration-300 flex flex-col gap-8 lg:gap-10 active:scale-[0.98] cursor-pointer">
                 <div className="text-primary group-hover:text-white transition-colors">
                    {React.cloneElement(path.icon, { className: "w-8 h-8 lg:w-10 lg:h-10" })}
                 </div>
                 <div className="space-y-4 lg:space-y-6">
                    <h3 className="text-lg lg:text-3xl font-black italic uppercase tracking-tight group-hover:text-white transition-colors leading-snug">{path.title}</h3>
                    <p className="text-white/60 text-xs lg:text-[11px] uppercase tracking-widest font-bold leading-relaxed group-hover:text-white/80 transition-colors max-w-[40ch]">
                      {path.desc}
                    </p>
                 </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Impact / Image Section */}
      <section className="py-14 lg:py-48 bg-surface dark:bg-card/30 relative overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center gap-10 lg:gap-32">
          <div className="flex-1 space-y-10 lg:space-y-12 text-center lg:text-left">
            <h2 className="text-[clamp(2.25rem,10vw,3.5rem)] md:text-7xl font-black italic tracking-tight uppercase leading-[1.1] lg:leading-[0.85]">
              The <span className="text-primary italic">Real Impact</span> <br /> Of Excellence
            </h2>
            
            <p className="text-white/60 uppercase tracking-widest text-[10px] lg:text-[14px] leading-relaxed opacity-80 max-w-[34ch] lg:max-w-xl mx-auto lg:mx-0">
              Perfect Fitness Academy isn't just about certifications; it's about building professionals who lead. Our graduates are the evidence of our methodology.
            </p>

            <div className="space-y-6 lg:space-y-10 max-w-[40ch] mx-auto lg:mx-0">
               {[
                 { icon: <Shield />, title: "Unshakable Confidence", desc: "Mastered performance fundamentals that work in any gym globally." },
                 { icon: <TrendingUp />, title: "Elite Client Retention", desc: "Practical skills that create life-long transformations for clients." }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8 group">
                   <div className="w-10 h-10 bg-primary flex items-center justify-center text-white shrink-0">
                      {React.cloneElement(item.icon, { className: "w-4 h-4" })}
                   </div>
                   <div className="space-y-1 lg:space-y-2 lg:pt-1">
                     <h3 className="text-lg font-black uppercase italic tracking-tight">{item.title}</h3>
                     <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold leading-relaxed">
                       {item.desc}
                     </p>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="flex-1 relative w-full mt-10 lg:mt-0 max-w-md mx-auto lg:max-w-none">
             <div className="aspect-[4/5] bg-charcoal overflow-hidden group kinetic-hover shadow-3xl rounded-none relative">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop" 
                  alt="Alumni Success" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-primary p-6 lg:p-12 text-white text-center shadow-3xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl lg:text-5xl font-black italic leading-none mb-1 lg:mb-2 italic uppercase">BE UNSTOPPABLE</h3>
                  <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em]">Perfect Fitness Mentality</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Alumni Voices / Quotes */}
      <section className="py-14 lg:py-48 bg-background relative overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-5">
           <div className="text-center space-y-4 mb-10 lg:mb-40 flex flex-col items-center">
              <Quote className="w-8 h-8 lg:w-12 lg:h-12 text-primary" />
              <h2 className="text-[clamp(2.5rem,10vw,4rem)] md:text-6xl font-black italic tracking-tight uppercase leading-none">
                Alumni <span className="text-primary">Voices</span>
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
              {[
                { name: "Vikram Patel", quote: "The Academy changed my life. I went from passionate fan to a professional with a thriving NY studio." },
                { name: "Zoe Khoi-Kaur", quote: "Perfect Fitness gave me tools to execute. The mentorship changed how I train forever." },
                { name: "Anish Sharma", quote: "Biomechanics to client business was demystified. Join the best in the industry." }
              ].map((voice, i) => (
                <div key={i} className="text-center space-y-6 lg:space-y-8">
                   <p className="text-base lg:text-xl font-medium leading-relaxed uppercase tracking-widest italic text-white/70 italic-quote opacity-90 max-w-[34ch] lg:max-w-sm mx-auto leading-relaxed">
                     "{voice.quote}"
                   </p>
                   <div className="space-y-2 lg:space-y-4">
                      <div className="w-12 h-1 bg-primary mx-auto"></div>
                      <h3 className="text-sm lg:text-base font-black uppercase italic tracking-tight">{voice.name}</h3>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary text-white py-20 lg:py-48 relative overflow-hidden">
        <div className="container mx-auto px-5 relative z-10 text-center space-y-10 lg:space-y-16">
          <div className="space-y-6">
            <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-8xl lg:text-[11rem] font-black italic tracking-tight uppercase leading-[1] lg:leading-none">
                Become Our Next <br /> <span className="text-black/20">Success Story</span>
            </h2>
            <p className="text-sm lg:text-2xl text-white/80 font-medium uppercase tracking-widest max-w-[34ch] lg:max-w-2xl mx-auto italic">
               The last batch of the Academy is training now. Secure your place in the next cohort of elites.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-[260px] sm:max-w-3xl mx-auto">
             <Button asChild className="w-full bg-white text-primary hover:bg-white/90 font-black uppercase py-3 lg:py-10 px-10 lg:px-14 rounded-none text-sm lg:text-xl transition-all shadow-2xl active:scale-[0.97] active:shadow-inner">
                <Link to="/academy">Join The Academy</Link>
             </Button>
             <Button asChild variant="outline" className="w-full border-white/40 text-white hover:bg-white hover:text-primary font-black uppercase py-3 lg:py-10 px-10 lg:px-14 rounded-none text-sm lg:text-xl transition-all border-2 active:scale-[0.97] active:shadow-inner">
                <Link to="/contact">Talk To A Mentor</Link>
             </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
