import React from "react"
import { motion } from "framer-motion"
import { Check, Shield, Zap, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Monthly",
    detail: "Flexibility",
    price: "999",
    billing: "/month",
    description: "Perfect for casual lifters looking for the basics.",
    perks: ["Unlimited Gym Access", "Free General Training", "Locker Room Access", "Basic Wellness Check"],
    featured: false
  },
  {
    name: "Quarterly",
    detail: "Momentum",
    price: "2,499",
    billing: "/3 months",
    description: "The sweet spot for serious progress and tracking.",
    perks: ["Everything in Monthly", "1 Free Diet Consultation", "Guest Pass (1 per month)", "Mobile App Progress Tracker"],
    featured: true,
    tag: "POPULAR"
  },
  {
    name: "Annual",
    detail: "Dedication",
    price: "7,999",
    billing: "/year",
    description: "The ultimate performance experience with coaching.",
    perks: ["Full VIP Amenities", "Quarterly Body Assessment", "Complimentary Gym Gear", "Priority Class Booking", "Unlimited Guest Passes"],
    featured: false
  }
]

export default function Memberships() {
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
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] lg:text-xs">Membership Tiering</span>
            <h1 className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-9xl font-black uppercase tracking-tight leading-[1] lg:leading-none italic">
              Choose Your <br />
              <span className="text-primary italic">Path</span>
            </h1>
          </motion.div>
          <p className="text-white/60 text-sm lg:text-xl max-w-[34ch] lg:max-w-2xl mx-auto uppercase tracking-widest font-bold leading-relaxed">
            Select the membership that fits your evolution. Elite facilities. Expert coaching.
          </p>
        </div>
        {/* Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-primary/[0.02] select-none pointer-events-none uppercase italic leading-none">
          Power
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-14 lg:py-24 bg-surface-container-low dark:bg-black/20 border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-1 max-w-7xl mx-auto border border-white/[0.05]">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "p-8 lg:p-16 flex flex-col h-full relative transition-all kinetic-hover",
                  plan.featured ? "bg-white text-charcoal lg:scale-y-105 z-10 shadow-3xl" : "bg-white/[0.02] dark:bg-white/5"
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] lg:text-[10px] font-black uppercase px-6 py-2 rounded-none z-20">
                    Most Popular Choice
                  </div>
                )}
                
                <div className="mb-10 lg:mb-16 space-y-4 lg:space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-primary">{plan.detail}</span>
                    <h3 className="text-3xl lg:text-4xl font-black uppercase italic tracking-tight">{plan.name}</h3>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-start">
                      <span className="text-xl lg:text-2xl font-black mt-2">₹</span>
                      <span className="text-6xl lg:text-8xl font-black tracking-tight leading-none">{plan.price}</span>
                    </div>
                    <span className="text-[10px] lg:text-sm font-bold opacity-60 uppercase tracking-widest mt-2">{plan.billing}</span>
                  </div>
                  
                  <p className="text-xs lg:text-sm font-medium leading-relaxed opacity-80 max-w-[34ch] lg:max-w-none">
                    {plan.description}
                  </p>
                </div>
                
                <div className="space-y-6 lg:space-y-8 flex-grow">
                  <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] border-b border-primary/20 pb-3 lg:pb-4 block w-full">What's Included</span>
                  <ul className="space-y-4 lg:space-y-6">
                    {plan.perks.map((perk, j) => (
                      <li key={j} className="flex items-center gap-4 text-xs lg:text-sm font-bold">
                        <Check className="w-4 h-4 lg:w-5 lg:h-5 shrink-0 text-primary" strokeWidth={3} />
                        <span className="uppercase tracking-tight inline-block pt-0.5">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className={cn(
                  "w-full max-w-[260px] mx-auto lg:max-w-none py-3.5 lg:py-10 text-xs lg:text-lg font-black uppercase tracking-widest rounded-none mt-10 lg:mt-16 transition-all active:scale-[0.97] active:shadow-inner will-change-transform",
                  plan.featured ? "bg-charcoal text-white hover:bg-primary shadow-xl" : "bg-primary text-white hover:opacity-90"
                )}>
                  Get Started <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-14 lg:py-32 border-t border-white/[0.06]">
        <div className="container mx-auto px-5">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-1">
              {[
                { icon: Shield, title: "Zero Lock-in", desc: "Stay because of results, not contracts. Cancel anytime with no penalties." },
                { icon: Zap, title: "Maintenance", desc: "Top-tier machinery maintained weekly to ensure peak safety and performance." },
                { icon: Sparkles, title: "Elite Community", desc: "Join Kanpur's most disciplined tribe. Zero egos, maximum effort." }
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.02] dark:bg-white/5 p-8 lg:p-16 text-center space-y-6 lg:space-y-8 kinetic-hover active:scale-[0.99] transition-all">
                   <div className="p-4 lg:p-6 bg-primary/10 rounded-full inline-block">
                      <item.icon className="w-8 h-8 lg:w-12 lg:h-12 text-primary" />
                   </div>
                   <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight italic">{item.title}</h3>
                   <p className="text-white/60 font-medium leading-relaxed text-sm lg:text-base">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-14 lg:py-24 bg-primary text-white overflow-hidden relative group border-t border-white/[0.06]">
        <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10 text-center lg:text-left">
          <div className="space-y-2 lg:space-y-4">
            <h2 className="text-[clamp(2.25rem,8vw,3.5rem)] md:text-7xl font-black uppercase tracking-tight leading-[1.1] italic">Still undecided?</h2>
            <p className="text-sm lg:text-xl font-medium opacity-80 uppercase tracking-widest max-w-[34ch] lg:max-w-none mx-auto lg:mx-0 leading-relaxed">Experience the energy with a free day pass.</p>
          </div>
          <Button className="w-full max-w-[260px] bg-white text-primary hover:bg-charcoal hover:text-white font-black uppercase py-4 lg:py-10 px-10 lg:px-16 rounded-none text-sm lg:text-xl transition-all shadow-3xl active:scale-[0.97] active:shadow-inner will-change-transform mx-auto lg:mx-0">
            Book Free Pass
          </Button>
        </div>
        <div className="absolute inset-0 bg-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
      </section>
    </div>
  )
}
