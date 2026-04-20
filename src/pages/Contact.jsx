import React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle, Navigation } from "lucide-react"
import { Facebook, Instagram, Youtube } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function Contact() {
  const branches = [
    {
      name: "Civil Lines",
      address: "Karmin Arcade, 16/116 A, Civil Lines, Kanpur, UP 208001",
      phone: "+91 98074 90497",
      mapUrl: "https://www.google.com/maps/place/Perfect+Fitness+Gym/@26.4744588,80.3510863,17z/data=!3m1!4b1!4m6!3m5!1s0x399c388f4be88959:0xe1e9a7d468fbf16!8m2!3d26.4744588!4d80.3536612!16s%2Fg%2F11cjj97h8y?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D",
      hours: {
        monSat: "6:00 AM - 11:30 PM",
        sunday: "Closed"
      }
    },
    {
      name: "Ambedkar Nagar",
      address: "Gate No. 551, Maguradeela, Dharam Kanta, Jalalpur, UP 224147",
      phone: "+91 91515 15154",
      mapUrl: "https://www.google.com/maps/place/Perfect+Fitness+Ambedkar+Nagar/@26.3194062,82.7388517,15z/data=!4m10!1m2!2m1!1sPerfect+fitness+GYM+ambedkar+nagar!3m6!1s0x399be3053c896555:0xe0593b3d8e8c2a4!8m2!3d26.3193548!4d82.7390664!15sCiJQZXJmZWN0IGZpdG5lc3MgR1lNIGFtYmVka2FyIG5hZ2FyWiQiInBlcmZlY3QgZml0bmVzcyBneW0gYW1iZWRrYXIgbmFnYXKSAQNneW2aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTXhhWFZMY1dsblJSQULgAQD6AQQIABBK!16s%2Fg%2F11v0dbt6lx?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D",
      hours: {
        monSat: "6:00 AM - 10:30 PM",
        sunday: "6:00 AM - 10:30 PM"
      }
    }
  ]

  return (
    <div className="flex flex-col bg-background selection:bg-primary selection:text-white transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative h-[45vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/contact_hero_bg.png"
            alt="Gym Interior"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-5 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 lg:space-y-6"
          >
            <h1 className="text-[clamp(3rem,10vw,6rem)] font-black uppercase tracking-tight leading-[0.9] text-white">
              GET IN <span className="text-primary">TOUCH</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-medium tracking-wide">
              Our elite transformation centers are spread across the city.<br className="hidden md:block" /> Choose your nearest location.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Branch Cards Section */}
      <section className="pb-16 lg:pb-24 -mt-16 lg:-mt-24 relative z-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-4xl mx-auto gap-6 lg:gap-8">
            {branches.map((branch, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card dark:bg-white/[0.02] p-8 lg:p-10 shadow-xl border border-border/50 dark:border-white/[0.05] rounded-xl flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-6">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-black mb-6 dark:text-white uppercase tracking-tight italic">{branch.name}</h3>

                <div className="space-y-4 mb-8 text-sm lg:text-base text-muted-foreground dark:text-white/60">
                  <div className="flex items-start gap-3 justify-center">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <p className="leading-tight">{branch.address}</p>
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                    <p className="font-bold">{branch.phone}</p>
                  </div>
                </div>

                <div className="w-full bg-surface dark:bg-white/[0.03] p-5 rounded-lg mb-8 border border-border/30 dark:border-white/[0.02]">
                  <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-3">Hours</p>
                  <div className="flex justify-between text-[11px] lg:text-xs font-bold uppercase tracking-wider">
                    <span className="opacity-60 italic">Mon - Sat</span>
                    <span className="dark:text-white">{branch.hours.monSat}</span>
                  </div>
                  <div className="flex justify-between text-[11px] lg:text-xs font-bold uppercase tracking-wider mt-2">
                    <span className="opacity-60 italic">Sunday</span>
                    <span className="text-primary">{branch.hours.sunday}</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-charcoal text-white hover:bg-primary transition-colors py-6 text-xs uppercase tracking-widest font-black rounded-lg">
                  <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4 mr-2" />
                    View on Maps
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Connectivity Section */}
      <section className="pb-24 lg:pb-40">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Left: Message Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card dark:bg-white/[0.02] p-8 lg:p-16 shadow-2xl border border-border/50 dark:border-white/[0.05] rounded-2xl h-full"
              >
                <div className="mb-12">
                  <h2 className="text-3xl lg:text-4xl font-black uppercase italic tracking-tight mb-4 dark:text-white">Send Us a Message</h2>
                  <p className="text-muted-foreground dark:text-white/60 text-sm lg:text-base font-medium">Have questions? Fill out the form and our team will get back to you within 24 hours.</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input placeholder="Full Name" className="bg-surface dark:bg-white/[0.03] border-none py-7 px-6 text-sm italic font-bold focus:ring-1 ring-primary/20 transition-all" />
                    <Input placeholder="Email Address" className="bg-surface dark:bg-white/[0.03] border-none py-7 px-6 text-sm italic font-bold focus:ring-1 ring-primary/20 transition-all" />
                  </div>
                  <Input placeholder="Phone Number" className="bg-surface dark:bg-white/[0.03] border-none py-7 px-6 text-sm italic font-bold focus:ring-1 ring-primary/20 transition-all" />

                  <div className="relative">
                    <select className="w-full bg-surface dark:bg-white/[0.03] border-none py-4 px-6 text-sm italic font-bold appearance-none cursor-pointer focus:outline-none focus:ring-1 ring-primary/20 rounded-md transition-all">
                      <option value="" disabled selected>Interested Branch</option>
                      <option>Civil Lines</option>
                      <option>Ambedkar Nagar</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>

                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-surface dark:bg-white/[0.03] border-none p-6 text-sm italic font-bold focus:outline-none focus:ring-1 ring-primary/20 rounded-md transition-all resize-none"
                  />

                  <Button className="w-full bg-primary hover:bg-black text-white hover:text-white transition-all py-8 mt-4 text-xs lg:text-sm uppercase tracking-[0.2em] font-black rounded-lg shadow-xl shadow-primary/20">
                    Submit Request
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* Right: Global Connectivity & Franchise */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-12">
              {/* Global Connectivity Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-charcoal p-8 lg:p-12 shadow-2xl rounded-2xl text-white relative overflow-hidden h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
                <img src="/logo.png" alt="Perfect Fitness Logo" className="absolute top-8 right-8 h-8 w-auto opacity-40 group-hover:opacity-100 transition-opacity" />

                <p className="text-[10px] font-black uppercase text-primary tracking-[0.5em] mb-10">Global Connectivity</p>

                <div className="space-y-8 flex-grow">
                  <div className="flex items-center gap-5 group cursor-pointer">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors">
                      <Mail className="w-4 h-4 text-primary group-hover:text-white" />
                    </div>
                    <p className="text-sm lg:text-base font-bold italic opacity-90 group-hover:opacity-100 group-hover:text-primary transition-all">train@perfectfitness.com</p>
                  </div>

                  <div className="flex items-center gap-5 group cursor-pointer">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors">
                      <Phone className="w-4 h-4 text-primary group-hover:text-white" />
                    </div>
                    <p className="text-sm lg:text-base font-bold italic opacity-90 group-hover:opacity-100 group-hover:text-primary transition-all">Member Support: 1800 - FIT - GYM</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-16 lg:mt-24">
                  {[
                    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/perfectfitnesshealth?igsh=MXVuanliYmJlaHA0dw==", color: "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white" },
                    { icon: Youtube, label: "Youtube", href: "https://youtube.com/@mohammadashraf_mrindia?si=id9rl3oSnp6oCYYd", color: "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white" },
                    { icon: Facebook, label: "Facebook", href: "#", color: "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white" },
                    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919807490497", color: "bg-primary text-white" },
                  ].map((item, i) => (
                    <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={cn("flex flex-col items-center justify-center py-8 rounded-xl border border-white/5 transition-all active:scale-95", item.color)}>
                      <item.icon className="w-5 h-5 mb-3" />
                      <span className="text-[8px] font-black uppercase tracking-widest">{item.label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Franchise Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface dark:bg-white/[0.02] p-8 shadow-xl border border-border/50 dark:border-white/[0.05] rounded-xl flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <p className="text-[10px] font-black uppercase text-primary tracking-[0.4em] italic">Partner With Us</p>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <p className="text-xs lg:text-sm font-bold text-muted-foreground dark:text-white/60 leading-relaxed mb-6">Looking to bring Perfect Fitness to your area or corporate office?</p>
                <div className="flex items-center gap-2 group cursor-pointer text-xs uppercase font-black tracking-widest dark:text-white">
                  <span>Franchise Opportunities</span>
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Transformation Hub Section */}
      <section className="py-24 lg:py-48 bg-surface dark:bg-black/20 overflow-hidden border-y border-border/20 dark:border-white/[0.03]">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black uppercase tracking-tight leading-[0.9] italic dark:text-white">
                  NOT JUST A GYM. <br />
                  A <span className="text-primary italic">TRANSFORMATION</span> HUB.
                </h2>
                <div className="w-24 h-2 bg-primary" />
              </div>

              <p className="text-muted-foreground dark:text-white/60 text-base lg:text-lg font-medium leading-relaxed max-w-xl">
                Experience the highest standards in kinetic training, elite recovery, and professional coaching at any of our facilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Button className="bg-primary hover:bg-black text-white py-8 px-12 rounded-lg text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 transition-all duration-300">
                  Schedule A Tour
                </Button>
                <Button variant="outline" className="border-charcoal dark:border-white/20 dark:text-white hover:bg-charcoal hover:text-white py-8 px-12 rounded-lg text-sm font-black uppercase tracking-[0.2em] transition-all duration-300">
                  Free Day Pass
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-4xl group">
                <img
                  src="/assets/t3.jpg"
                  alt="Transformation Hub Proof"
                  className="w-full h-full object-cover object-center transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Floating Accent */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors duration-1000" />
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}
