import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Check, Dumbbell, Shield, Clock, GraduationCap, Users, UserCheck, Award, Calendar, Home as HomeIcon, CreditCard, TrendingUp, Smile, ArrowRight, BookOpen, Brain, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export default function Academy() {
  return (
    <div className="flex flex-col bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-16 pb-10 bg-background">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/academy_ceremony.png" 
            alt="Academy Ceremony Background" 
            className="absolute inset-0 w-full h-full object-cover object-right grayscale brightness-[0.7] contrast-[1.05] transition-all"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-5 z-10 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className="max-w-4xl space-y-6 lg:space-y-14 text-center lg:text-left"
          >
            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] lg:text-sm">Excellence In Development</span>
              <h1 className="text-[clamp(2.5rem,10vw,4rem)] md:text-8xl lg:text-[10rem] font-black leading-[1] lg:leading-[0.8] tracking-tight uppercase italic">
                Perfect <br />
                Fitness <br />
                <span className="text-primary">Academy</span>
              </h1>
            </div>
            
            <p className="text-muted-foreground max-w-[34ch] lg:max-w-2xl text-sm lg:text-2xl font-medium leading-relaxed uppercase tracking-widest mx-auto lg:mx-0">
              Elevating the next generation of world-class fitness professionals. Master the art and science of elite coaching through intensive mentorship.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full justify-center lg:justify-start">
              <Button asChild className="w-full max-w-[260px] mx-auto lg:mx-0 bg-primary hover:opacity-90 text-white font-black uppercase py-3 lg:py-8 px-10 lg:px-16 rounded-none text-sm lg:text-lg transition-all shadow-2xl active:scale-[0.97] active:shadow-inner will-change-transform">
                <Link to="/contact">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" className="w-full max-w-[260px] mx-auto lg:mx-0 border-white/20 text-foreground hover:bg-foreground hover:text-background font-black uppercase py-3 lg:py-8 px-10 lg:px-16 rounded-none text-sm lg:text-lg transition-all active:scale-[0.97] active:shadow-inner will-change-transform">
                <Link to="/contact">Program Brochure</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Pillars */}
      <section className="py-14 lg:py-48 bg-background relative overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="max-w-xl space-y-4 mb-10 lg:mb-32 text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-[clamp(2rem,8vw,3rem)] md:text-6xl font-black italic tracking-tight uppercase leading-[1.1] lg:leading-[0.85]">
              Build A Career <br /> In Fitness
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto lg:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { 
                icon: <BookOpen className="w-6 h-6 lg:w-10 lg:h-10" />, 
                title: "Practical Learning", 
                desc: "Drive evolution, not stagnation through methodologies that challenge the world we live in today." 
              },
              { 
                icon: <Dumbbell className="w-6 h-6 lg:w-10 lg:h-10" />, 
                title: "Real Gym Floor", 
                desc: "Apply theory instantly with elite coaches working under professional supervision." 
              },
              { 
                icon: <Users className="w-6 h-6 lg:w-10 lg:h-10" />, 
                title: "Dynamic Mentorship", 
                desc: "Direct access to industry-leading mentors who provide personalized feedback and career guidance." 
              },
              { 
                icon: <Award className="w-6 h-6 lg:w-10 lg:h-10" />, 
                title: "Certification", 
                desc: "Comprehensive modules for the most premium certifications internationally." 
              }
            ].map((pillar, index) => (
              <motion.div 
                key={index}
                className="bg-white/[0.02] border border-white/[0.05] p-6 lg:p-10 transition-all duration-300 hover:bg-white/[0.04] active:scale-[0.99] group shadow-inner"
              >
                <div className="text-primary mb-6 lg:mb-10 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-lg lg:text-2xl font-black uppercase italic tracking-tight mb-4 lg:mb-6">{pillar.title}</h3>
                <p className="text-white/60 text-sm lg:text-[13px] font-medium leading-relaxed max-w-[40ch]">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modules Grid */}
      <section className="py-8 lg:py-48 bg-surface dark:bg-card/30 border-y border-border/10">
        <div className="container mx-auto px-5">
          <div className="text-center space-y-4 mb-8 lg:mb-32">
            <h2 className="text-[clamp(2.25rem,10vw,4rem)] md:text-8xl font-black italic tracking-tight uppercase leading-none">
              What You <br className="lg:hidden" /> Will Learn
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              { id: "MODULE 01", title: "Strength Training", icon: <TrendingUp className="w-4 h-4" /> },
              { id: "MODULE 02", title: "Biomechanics", icon: <Brain className="w-4 h-4" /> },
              { id: "MODULE 03", title: "Program Design", icon: <Calendar className="w-4 h-4" /> },
              { id: "MODULE 04", title: "Nutrition Science", icon: <Zap className="w-4 h-4" /> },
              { id: "MODULE 05", title: "Client Assessment", icon: <UserCheck className="w-4 h-4" /> },
              { id: "MODULE 06", title: "Business of Fitness", icon: <HomeIcon className="w-4 h-4" /> },
              { id: "MODULE 07", title: "Injury Prevention", icon: <Shield className="w-4 h-4" /> },
              { id: "MODULE 08", title: "Elite Coaching", icon: <Users className="w-4 h-4" /> }
            ].map((module, index) => (
              <div 
                key={index}
                className="group p-6 lg:p-14 bg-background border border-border/10 hover:bg-primary hover:text-white transition-all duration-300 flex flex-col justify-between aspect-[4/3] lg:aspect-square active:scale-[0.98] cursor-pointer relative overflow-hidden"
              >
                {/* Background Subdued Graphic */}
                <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                  {React.cloneElement(module.icon, { className: 'w-40 h-40 lg:w-64 lg:h-64' })}
                </div>

                <div className="space-y-4 lg:space-y-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] lg:text-xs font-black tracking-widest text-primary group-hover:text-white/60 transition-colors">{module.id}</span>
                  </div>
                  <h3 className="text-xl lg:text-3xl font-black uppercase italic tracking-tight leading-tight group-hover:translate-x-2 transition-transform">{module.title}</h3>
                </div>
                <div className="w-10 h-10 border border-primary/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-14 lg:py-48 bg-background overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="text-center lg:text-left space-y-4 mb-10 lg:mb-32 mx-auto lg:mx-0">
            <h2 className="text-[clamp(2rem,8vw,3.5rem)] md:text-6xl font-black italic tracking-tight uppercase leading-[1.1] lg:leading-[0.85]">
              How The <br /> Academy Works
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto lg:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 relative">
            {[
              { step: "01.", title: "Application", desc: "Initial screening based on passion." },
              { step: "02.", title: "Admittance", desc: "Foundation phase on digital platforms." },
              { step: "03.", title: "Mentorship", desc: "Live floor sessions with master coaches." },
              { step: "04.", title: "Masterclass", desc: "Deep dive into specialized athletic tracks." },
              { step: "05.", title: "Launchpad", desc: "Placement and professional career startup." }
            ].map((work, index) => (
              <div key={index} className="relative group p-6 lg:p-0 bg-white/[0.02] lg:bg-transparent border border-white/[0.05] lg:border-none transition-all duration-300 active:scale-[0.98]">
                <div className="flex flex-col space-y-6 lg:space-y-8">
                  <span className="text-primary font-black text-4xl italic group-hover:translate-x-4 transition-transform duration-500 lg:group-hover:translate-x-2">{work.step}</span>
                  <div className="space-y-3 lg:space-y-4">
                    <h3 className="text-lg lg:text-2xl font-black uppercase italic tracking-tight leading-snug">{work.title}</h3>
                    <p className="text-white/60 text-sm lg:text-[11px] uppercase tracking-widest font-bold leading-relaxed max-w-[40ch]">
                      {work.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Join Section */}
      <section className="py-14 lg:py-48 bg-surface dark:bg-card/20 relative overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center gap-10 lg:gap-32">
          <div className="flex-1 space-y-10 lg:space-y-12 text-center lg:text-left">
            <h2 className="text-[clamp(2.25rem,10vw,4rem)] md:text-7xl font-black italic tracking-tight uppercase leading-[1.1] lg:leading-[0.85]">
              Who Should <br /> Join
            </h2>
            
            <div className="space-y-6 lg:space-y-10 max-w-[40ch] mx-auto lg:mx-0">
              {[
                { title: "Aspiring Coaches", desc: "Individuals looking to start a career in fitness with the best foundation." },
                { title: "Fitness Enthusiasts", desc: "Those who want to deepen their own knowledge and help others." },
                { title: "Career Switchers", desc: "Professionals seeking a transition into the performance industry." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8 group">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 lg:space-y-2 lg:pt-2">
                    <h3 className="text-lg lg:text-xl font-black uppercase italic tracking-tight">{item.title}</h3>
                    <p className="text-white/60 text-xs uppercase tracking-widest font-bold leading-relaxed opacity-80">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative w-full mt-10 lg:mt-0 max-w-md mx-auto lg:max-w-none">
             <div className="aspect-[4/5] bg-charcoal overflow-hidden group shadow-3xl rounded-none relative">
                <img 
                  src="/assets/trainer_board.png" 
                  alt="Trainer teaching at whiteboard" 
                  className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 contrast-[1.1] brightness-[0.8] md:group-hover:brightness-[0.95] transition-all duration-1000 ease-in-out md:group-hover:scale-105 z-0"
                  loading="lazy"
                />
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none transition-opacity duration-700 md:group-hover:opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-[2] pointer-events-none" />
                
                {/* Badge */}
                <div className="absolute top-6 right-6 lg:top-10 lg:right-10 bg-primary p-6 lg:p-12 text-white text-center shadow-3xl flex flex-col items-center justify-center space-y-1 lg:space-y-2 z-[10]">
                  <span className="text-4xl lg:text-5xl font-black italic leading-none">100%</span>
                  <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">Job Placement</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Red Three Pillars Bar */}
      <section className="bg-primary text-white py-14 lg:py-24">
        <div className="container mx-auto px-5">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
              {[
                { id: "01.", title: "Ignited Confidence", desc: "Step onto any gym floor worldwide with the authority of a pro." },
                { id: "02.", title: "Hands-on Experience", desc: "Ditch generic programs. We train you in the real world." },
                { id: "03.", title: "Career Accelerator", desc: "Direct industry insights and access to premier networks globally." }
              ].map((pillar, i) => (
                <div key={i} className="text-center space-y-4 lg:space-y-6">
                   <span className="text-3xl lg:text-4xl font-black italic text-white/40">{pillar.id}</span>
                   <div className="space-y-2 lg:space-y-4">
                      <h3 className="text-lg lg:text-2xl font-black italic uppercase tracking-tight">{pillar.title}</h3>
                      <p className="text-white/80 text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold leading-loose max-w-[34ch] mx-auto">
                        {pillar.desc}
                      </p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 lg:py-48 bg-background border-t border-white/[0.06]">
        <div className="container mx-auto px-5 max-w-4xl">
           <div className="text-center space-y-4 mb-10 lg:mb-32">
              <h2 className="text-[clamp(2.25rem,10vw,4.5rem)] md:text-8xl font-black italic tracking-tight uppercase leading-none">
                Frequently <br /> Asked
              </h2>
           </div>

           <Accordion type="single" collapsible className="w-full space-y-3 lg:space-y-4">
              {[
                { q: "How long is the Academy program?", a: "Our standard intensive program runs for 12 weeks, consisting of 6 weeks of core theory and 6 weeks of supervised practical floor training." },
                { q: "Do I need prior experience?", a: "While passion is mandatory, prior professional experience is not. We offer foundational modules for beginners." },
                { q: "Is the certification internationally recognized?", a: "Yes, we partner with top global accreditation bodies to ensure your credentials are valid worldwide." },
                { q: "Are there flexible payment options?", a: "We offers various installment plans and early-bird discounts to make elite training accessible." },
                { q: "Will I get a job after graduation?", a: "We provide 100% job placement support through our extensive network of premium gym facilities." },
                { q: "What is the schedule of the classes?", a: "Classes are held Monday to Saturday. Weekday mornings for theory and evenings or early mornings for practical mentorship." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/[0.05] bg-white/[0.02] dark:bg-card/20 px-5 lg:px-8 py-2 lg:py-4 transition-all hover:bg-white/[0.04]">
                  <AccordionTrigger className="text-sm lg:text-xl font-black uppercase italic tracking-tight hover:no-underline text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 uppercase tracking-widest text-[10px] lg:text-[11px] leading-relaxed pt-2 lg:pt-4 opacity-80">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
           </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary text-white py-20 lg:py-48 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center scale-150 rotate-[-15deg] select-none pointer-events-none">
          <span className="text-[20vw] font-black italic">ACADEMY</span>
        </div>

        <div className="container mx-auto px-5 relative z-10 text-center space-y-10 lg:space-y-16">
          <div className="space-y-6">
            <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-8xl lg:text-[11rem] font-black italic tracking-tight uppercase leading-[1] lg:leading-none">
               Start Your <br /> Fitness Career
            </h2>
            <p className="text-sm lg:text-2xl text-white/80 font-medium uppercase tracking-widest max-w-[34ch] lg:max-w-2xl mx-auto italic">
              The industry is waiting for its next leader. Applications for the next cohort are now open.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-8 justify-center w-full max-w-[260px] sm:max-w-3xl mx-auto">
             <Button asChild className="w-full bg-white text-primary hover:bg-white/90 font-black uppercase py-3 lg:py-10 px-10 lg:px-14 rounded-none text-sm lg:text-xl transition-all shadow-2xl active:scale-[0.97] active:shadow-inner">
                <Link to="/contact">Apply Now</Link>
             </Button>
             <Button asChild variant="outline" className="w-full border-white/40 text-white hover:bg-white hover:text-primary font-black uppercase py-3 lg:py-10 px-10 lg:px-14 rounded-none text-sm lg:text-xl transition-all border-2 active:scale-[0.97] active:shadow-inner">
                <Link to="/contact">Talk To Our Team</Link>
             </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
