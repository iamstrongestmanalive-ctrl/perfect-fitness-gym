import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Check, Dumbbell, Shield, Clock, AirVent, Star, Quote, ArrowRight, User, Award, Calendar, Home as HomeIcon, CreditCard, TrendingUp, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export default function Home() {
  const gymImages = [
    "/assets/gym1.jpg",
    "/assets/gym2.jpg",
    "/assets/gym3.jpg",
    "/assets/gym4.jpg"
  ]

  return (
    <div className="flex flex-col bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-0 lg:min-h-[95vh] flex items-center overflow-hidden pt-16 pb-10 lg:py-48 bg-background">
        {/* Mobile Background Texture - Subtle Artistic Enhancement */}
        <img
          src="/assets/mobile_hero_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.05] grayscale contrast-[1.2] blur-[2px] pointer-events-none lg:hidden z-0"
        />
        <div className="absolute inset-0 bg-white/92 dark:bg-black/85 lg:hidden z-[1]" />

        <div className="container mx-auto px-5 z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="flex-1 space-y-6 lg:space-y-12 text-center lg:text-left"
          >
            <div className="space-y-4 lg:space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Push Your Limits</span>
              <h1 className="text-[clamp(2.5rem,10vw,3.5rem)] md:text-8xl lg:text-[10rem] font-black leading-[1] lg:leading-[0.8] tracking-tight uppercase">
                PUSH <br />
                YOUR <br />
                <span className="italic">LIMITS.</span>
              </h1>
            </div>
            <p className="text-muted-foreground max-w-[34ch] lg:max-w-lg text-sm lg:text-xl font-medium leading-relaxed mx-auto lg:mx-0 uppercase tracking-widest opacity-70">
              Premium strength training facility in the heart of Kanpur. High-performance equipment, elite coaching, and fitness enthusiasts who demand excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-6 pt-4 justify-center lg:justify-start w-full">
              <Button className="w-full max-w-[260px] mx-auto lg:mx-0 bg-primary hover:opacity-90 text-white font-black uppercase py-3 lg:py-8 px-10 lg:px-16 rounded-none text-sm lg:text-lg transition-all active:scale-[0.97] active:shadow-inner shadow-3xl group">
                Join The Elite
              </Button>
              <Button variant="outline" className="w-full max-w-[260px] mx-auto lg:mx-0 border-border text-foreground hover:bg-primary hover:text-white hover:border-primary font-black uppercase py-3 lg:py-8 px-10 lg:px-16 rounded-none text-sm lg:text-lg transition-all active:scale-[0.97] active:shadow-inner">
                View Plans
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-1 relative w-full lg:w-auto mt-8 lg:mt-0"
          >
            <div className="relative aspect-[4/5] lg:aspect-[6/7] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.4)] rounded-none bg-black/5">
              <img
                src="/assets/real_gym_floor.png"
                alt="Perfect Fitness Gym Floor"
                className="w-full h-full object-cover object-center brightness-[0.88] contrast-[1.08] saturate-[0.9] transition-all duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
            </div>
            {/* Floating Badge - Centered below on mobile, corner on desktop */}
            <div className="relative lg:absolute -mt-10 lg:mt-0 lg:-bottom-12 lg:-left-12 md:lg:-left-24 bg-primary p-8 lg:p-14 shadow-3xl z-20 flex flex-col items-center justify-center text-white rounded-none border-4 border-background mx-auto w-fit lg:w-auto scale-90 lg:scale-100 will-change-transform">
              <span className="text-5xl lg:text-7xl font-black italic leading-none">15+</span>
              <p className="text-[9px] lg:text-[10px] uppercase font-black tracking-[0.3em] mt-2 lg:mt-3 whitespace-nowrap">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 lg:py-48 relative bg-white dark:bg-black/20 overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center gap-6 lg:gap-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute top-8 -left-8 lg:top-12 lg:-left-12 w-full h-full border border-primary/10 -z-10"></div>
              <div className="relative overflow-hidden shadow-3xl rounded-none bg-black/5">
                <img
                  src="/assets/gym_event_space.png"
                  alt="Perfect Fitness Events"
                  className="w-full aspect-square object-cover object-center brightness-[0.88] contrast-[1.06] saturate-[0.92] transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/12 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6 lg:space-y-14 text-center lg:text-left mt-8 lg:mt-0"
          >
            <div className="space-y-4 lg:space-y-8">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Since 2012</span>
              <h2 className="text-[clamp(1.75rem,8vw,2.5rem)] md:text-6xl lg:text-7xl font-black italic tracking-tight uppercase leading-[1.1] lg:leading-[0.85]">
                Kanpur's Legacy <br />
                <span className="text-primary">In Performance.</span>
              </h2>
              <p className="text-muted-foreground max-w-[34ch] lg:max-w-xl text-sm lg:text-lg font-medium leading-relaxed opacity-80 mx-auto lg:mx-0">
                Founded with a single vision: to provide a world-class training environment that demands as much from its equipment as it does from its members. Over a decade of engineering excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-8 pt-4 lg:pt-0 max-w-md mx-auto lg:mx-0">
              <div className="space-y-2">
                <span className="text-2xl lg:text-4xl font-black italic text-primary">6,000</span>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Sq. Ft. Arena</p>
              </div>
              <div className="space-y-2">
                <span className="text-2xl lg:text-4xl font-black italic text-primary">50+</span>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Elite Machines</p>
              </div>
            </div>

            <div className="pt-6">
              <Link to="/about">
                <Button variant="outline" className="w-full max-w-[260px] mx-auto lg:mx-0 border-white/20 text-foreground hover:bg-primary hover:text-white hover:border-primary font-black uppercase py-3 lg:py-8 px-10 lg:px-16 rounded-none text-sm lg:text-lg transition-all active:scale-[0.97] active:shadow-inner">
                  Our Whole Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-primary/[0.015] select-none pointer-events-none uppercase italic leading-none whitespace-nowrap">
          Heritage
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-14 lg:py-48 bg-background relative overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-32 gap-6">
            <div className="space-y-4 lg:space-y-8 text-center lg:text-left">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">The Excellence Factor</span>
              <h2 className="text-[clamp(1.75rem,8vw,2.5rem)] md:text-6xl lg:text-8xl font-black italic tracking-tight uppercase leading-[1.1] lg:leading-[0.85]">
                Why Choose <br />Perfect Fitness?
              </h2>
            </div>
            <p className="text-muted-foreground uppercase tracking-widest text-sm lg:text-[11px] font-bold opacity-60 max-w-[34ch] text-center lg:text-right mx-auto lg:mx-0">
              We don't just provide space; we provide an ecosystem of elite performance and recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
            {/* Featured Card */}
            <Card className="lg:col-span-8 p-6 lg:p-14 bg-white/[0.02] border border-white/[0.05] rounded-none flex flex-col justify-between group kinetic-hover relative overflow-hidden shadow-inner transition-all duration-300 hover:bg-white/[0.04]">
              <Dumbbell className="absolute -top-10 -right-10 w-48 lg:w-80 h-48 lg:h-80 text-primary/8 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
              <div className="space-y-6 lg:space-y-8 relative z-10 text-center lg:text-left">
                <div className="relative w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full" />
                  <div className="w-full h-full bg-primary flex items-center justify-center text-white relative z-10">
                    <Dumbbell className="w-6 lg:w-8 h-6 lg:h-8" />
                  </div>
                </div>
                <h3 className="text-2xl lg:text-7xl font-black uppercase tracking-tighter italic leading-snug lg:leading-[0.85]">Elite <br />Hammer Strength <br />Equipment</h3>
                <p className="text-white/60 uppercase tracking-widest text-sm lg:text-[13px] leading-relaxed max-w-[40ch] mx-auto lg:mx-0">
                  Premium infrastructure with world-class Hammer Strength and Matrix equipment designed for biomechanical precision.
                </p>
              </div>
              <div className="pt-10 lg:pt-0 relative z-10 text-center lg:text-left">
                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Premium Infrastructure</span>
              </div>
            </Card>

            {/* Right Stack */}
            <div className="lg:col-span-4 grid grid-cols-1 gap-5 lg:gap-8">
              <Card className="p-6 lg:p-12 bg-primary bg-gradient-to-br from-primary to-[#8B0D15] text-white border-none rounded-none flex flex-col justify-between group kinetic-hover relative overflow-hidden transition-all duration-300">
                <User className="absolute -bottom-8 -left-8 w-44 h-44 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                <div className="space-y-6 relative z-10">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-4xl font-black uppercase tracking-tighter italic leading-snug">Women's <br />Dedicated Training</h3>
                  <p className="text-white/80 uppercase tracking-widest text-sm lg:text-[11px] leading-relaxed font-bold max-w-[40ch]">
                    Dedicated women-only time with female trainer support, ensuring a private and confident environment.
                  </p>
                </div>
              </Card>
              <Card className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-none flex flex-col justify-between group kinetic-hover transition-all duration-300 hover:bg-white/[0.04]">
                <div className="space-y-6">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg lg:text-3xl font-black uppercase tracking-tighter italic leading-snug">Certified <br />Elite Coaches</h3>
                  <p className="text-white/60 uppercase tracking-widest text-xs lg:text-[10px] leading-relaxed max-w-[40ch]">
                    Certified professional trainers focused on proper form, real results, and consistent progression.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Supporting Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 lg:mt-8">
            {[
              { icon: <Clock className="w-5 h-5" />, title: "Happy Hour Training", desc: "Smart, budget-friendly training hours designed to give members high-value access." },
              { icon: <HomeIcon className="w-5 h-5" />, title: "Home Personal Training", desc: "Get expert guidance at home with professional trainers focused on your discipline." },
              { icon: <Star className="w-5 h-5" />, title: "Results & Environment", desc: "Real transformation stories and a positive gym atmosphere that helps members stay committed." }
            ].map((item, i) => (
              <Card key={i} className="p-5 lg:p-10 bg-white/[0.02] border border-white/[0.05] rounded-none group kinetic-hover transition-all duration-300 hover:bg-white/[0.04]">
                <div className="space-y-6">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl font-black uppercase tracking-tighter italic leading-snug">{item.title}</h3>
                  <p className="text-white/60 uppercase tracking-widest text-xs lg:text-[10px] leading-relaxed max-w-[40ch]">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-14 lg:py-48 bg-surface-container-low dark:bg-black/40 relative overflow-hidden" id="memberships">
        <div className="container mx-auto px-5">
          <div className="text-center space-y-6 lg:space-y-8 mb-10 lg:mb-32">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Select Your Tier</span>
            <h2 className="text-[clamp(2rem,10vw,4.5rem)] md:text-6xl lg:text-9xl font-black leading-none tracking-tight uppercase italic">Access The <br />Arena</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-1">
            {[
              { name: "Standard", price: "1,500", perks: ["Access All Equipment", "Changing Room Access", "Standard Hours", "Locker Facility"] },
              { name: "Premium", price: "3,000", perks: ["Hammer Strength Access", "Matrix Cardio Suite", "Free Training Session", "Priority Support", "Diet Consultation"], featured: true },
              { name: "Elite", price: "5,500", perks: ["Personal Trainer (3x/week)", "Advanced Body Metrics", "Unlimited Recovery Access", "Exclusive Elite Kit", "Guest Passes"] }
            ].map((plan, i) => (
              <div key={i} className={cn(
                "p-6 lg:p-16 flex flex-col transition-all duration-500 rounded-none relative group h-full",
                plan.featured
                  ? "bg-primary text-white lg:scale-105 z-20 shadow-4xl focus:z-30"
                  : "bg-surface dark:bg-white/5 border border-border/10 text-foreground"
              )}>
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-primary px-6 py-2 font-black uppercase tracking-[0.3em] text-[9px] lg:text-[10px] whitespace-nowrap shadow-xl">
                    Popular Member Choice
                  </div>
                )}
                <div className="space-y-6 lg:space-y-12 mb-10 lg:mb-16 flex-grow">
                  <div className="space-y-4 lg:space-y-6">
                    <h3 className="text-xl lg:text-3xl font-black uppercase italic tracking-tighter leading-snug">{plan.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-6xl font-black">₹{plan.price}</span>
                      <span className={cn("text-[10px] lg:text-[11px] uppercase font-bold tracking-[0.2em] opacity-60", plan.featured ? "text-white" : "text-primary")}>/Month</span>
                    </div>
                  </div>
                  <ul className="space-y-4 lg:space-y-6">
                    {plan.perks.map((p, j) => (
                      <li key={j} className="flex items-start gap-4 text-sm lg:text-[11px] uppercase tracking-widest font-bold opacity-80">
                        <Check className={cn("w-4 h-4 mt-1", plan.featured ? "text-white" : "text-primary")} /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className={cn(
                  "w-full max-w-[260px] mx-auto lg:mx-0 rounded-none font-black uppercase py-3 lg:py-8 text-sm lg:text-base tracking-[0.2em] transition-all border-2 mt-auto active:scale-[0.97] active:shadow-inner will-change-transform",
                  plan.featured
                    ? "bg-white text-primary border-white hover:bg-transparent hover:text-white"
                    : "bg-primary text-white border-primary hover:bg-white hover:text-primary"
                )}>
                  Select Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-14 lg:py-48 bg-primary text-white overflow-hidden border-t border-white/[0.1]">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-32">
            <div className="flex-1 space-y-8 lg:space-y-16 text-center lg:text-left order-1 lg:order-1">
              <div className="space-y-6 lg:space-y-8">
                <span className="text-white/40 font-black uppercase tracking-[0.4em] text-[10px]">Transformation Stories</span>
                <h2 className="text-[clamp(2.25rem,10vw,4rem)] md:text-8xl lg:text-9xl font-black uppercase leading-[1.1] lg:leading-[0.8] tracking-tight italic">Real Results.<br />Real People.</h2>
                <p className="text-sm lg:text-xl text-white/80 font-medium leading-relaxed max-w-[34ch] lg:max-w-xl opacity-90 uppercase tracking-widest mx-auto lg:mx-0">Witness the incredible journeys of our members. These aren't just ads; they're stories of dedication and discipline.</p>
              </div>

              <div className="flex justify-center lg:justify-start gap-6 lg:gap-32">
                <div className="space-y-2 lg:space-y-4">
                  <span className="text-4xl md:text-8xl font-black leading-none italic tracking-tighter">500+</span>
                  <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-white/50 text-center lg:text-left">Transformations</p>
                </div>
                <div className="space-y-2 lg:space-y-4">
                  <span className="text-4xl md:text-8xl font-black leading-none italic tracking-tighter">98%</span>
                  <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-white/50 text-center lg:text-left">Success Rate</p>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="outline" className="w-full max-w-[260px] mx-auto lg:mx-0 border-white/40 text-white hover:bg-white hover:text-primary font-black uppercase py-3 lg:py-10 px-12 lg:px-16 rounded-none text-sm lg:text-lg transition-all border-2 active:scale-[0.97] active:shadow-inner">
                  View All Results
                </Button>
              </div>
            </div>

            <div className="flex-1 relative w-full order-2 lg:order-2 mt-10 lg:mt-0">
              <div className="relative aspect-[4/5] bg-charcoal overflow-hidden group shadow-3xl rounded-none border-4 lg:border-8 border-white/5">
                <img 
                  src="/assets/t1.jpg" 
                  alt="Member Transformation" 
                  className="w-full h-full object-cover object-center brightness-[0.95] contrast-[1.1] transition-transform duration-[2000ms] group-hover:scale-105" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-14 lg:py-48 bg-background border-t border-white/[0.06]" id="reviews">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 bg-border/20 border border-border/10">
            {/* Owner Card */}
            <div className="bg-white/[0.02] dark:bg-white/5 p-6 lg:p-24 flex flex-col justify-center space-y-6 lg:space-y-12 group rounded-none">
              <div className="flex items-center gap-6 lg:gap-8">
                <div className="w-16 lg:w-24 h-16 lg:h-24 rounded-none overflow-hidden border-2 border-primary grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src="/assets/owner_vikram.png" alt="Vikram Singh" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="space-y-1">
                  <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Lead Perspective</span>
                  <h3 className="text-xl lg:text-3xl font-black uppercase tracking-tighter italic">Vikram Singh</h3>
                </div>
              </div>
              <blockquote className="space-y-4 lg:space-y-8">
                <p className="text-base lg:text-2xl font-medium italic leading-relaxed text-muted-foreground uppercase tracking-tight opacity-80 max-w-[34ch] lg:max-w-none mx-auto lg:mx-0">
                  "Fitness isn't just about how you look; it's about building a mind that never quits. At Perfect Fitness, we don't just provide weights; we provide the platform for you to reinvent yourself."
                </p>
              </blockquote>
            </div>

            {/* Featured Review Card */}
            <div className="bg-primary p-6 lg:p-24 text-white flex flex-col justify-center space-y-6 lg:space-y-12 relative overflow-hidden group rounded-none">
              <Star className="absolute top-[-10%] right-[-5%] w-[15rem] lg:w-[25rem] h-[15rem] lg:h-[25rem] text-white/5 rotate-12" />
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 lg:w-5 h-4 lg:h-5 fill-white text-white" />)}
              </div>
              <p className="text-xl lg:text-4xl font-black tracking-tight leading-snug italic uppercase max-w-[34ch] lg:max-w-none">
                "This community here is unmatched. The equipment is always top-notch and the trainers actually care about your form. Best gym in Kanpur, hands down."
              </p>
              <div className="flex items-center gap-6 lg:gap-8">
                <div className="w-16 lg:w-20 h-16 lg:h-20 bg-white/10 text-white flex items-center justify-center font-black text-xl lg:text-2xl italic uppercase tracking-tighter">SS</div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-black uppercase italic tracking-tighter">Siddharth Shah</h4>
                  <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.4em] opacity-60">Member since 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the Gym Section */}
      <section className="py-14 lg:py-48 bg-surface-container-low dark:bg-black/20 border-t border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-32 gap-6">
            <div className="space-y-4 lg:space-y-4 text-center md:text-left">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Visual Experience</span>
              <h2 className="text-[clamp(2.5rem,10vw,4rem)] md:text-[9rem] font-black uppercase tracking-tight italic leading-none">Inside <br />The Gym</h2>
            </div>
            <Link to="/gallery" className="text-primary font-black uppercase tracking-[0.4em] text-[11px] flex items-center group justify-center md:justify-end py-3">
              Explore Full Gallery <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {gymImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden shadow-2xl group cursor-pointer rounded-none bg-charcoal hover:[&_img]:grayscale-0 hover:[&_img]:brightness-[1] hover:[&_img]:saturate-[1] hover:[&_img]:scale-105 transition-all duration-700">
                <img
                  src={img}
                  alt={`Gym environment ${i + 1}`}
                  className="w-full h-full object-cover grayscale brightness-[0.85] contrast-[1.1] transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 pointer-events-none transition-opacity duration-500 group-hover:opacity-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Start CTA Section */}
      <section className="py-20 lg:py-64 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale scale-110">
          <img src="/assets/hero_interior.png" alt="Gym Background" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container mx-auto px-5 relative z-10 text-center flex flex-col items-center space-y-8 lg:space-y-20">
          <div className="space-y-6 lg:space-y-8 max-w-4xl mx-auto">
            <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] lg:text-[12px]">The Transformation Begins Here</span>
            <h2 className="text-[clamp(3rem,12vw,5rem)] md:text-8xl lg:text-[11rem] font-black uppercase tracking-tight leading-[1] lg:leading-[0.8] italic">Ready to <br /><span className="text-primary italic">Start?</span></h2>
            <p className="text-white/60 uppercase tracking-[0.4em] text-[10px] lg:text-[11px] font-bold max-w-[34ch] lg:max-w-2xl mx-auto leading-loose italic">Your elite journey towards physical and mental dominance starts with a single decision. Step into the arena.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-8 justify-center w-full max-w-[260px] sm:max-w-3xl mx-auto">
            <Button className="w-full bg-primary text-white hover:bg-white hover:text-charcoal font-black uppercase py-3 lg:py-10 px-10 lg:px-14 rounded-none text-sm lg:text-xl transition-all shadow-3xl border-2 border-primary active:scale-[0.97] active:shadow-inner">
              Book Initial Visit
            </Button>
            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-charcoal font-black uppercase py-3 lg:py-10 px-10 lg:px-14 rounded-none text-sm lg:text-xl transition-all border-2 active:scale-[0.97] active:shadow-inner">
              Call Concierge
            </Button>
          </div>
        </div>
        <div className="absolute -bottom-10 lg:-bottom-20 -right-10 lg:-right-20 text-[20vw] font-black text-white/[0.04] select-none pointer-events-none italic uppercase leading-none">
          Evolve
        </div>
      </section>
    </div>
  )
}
