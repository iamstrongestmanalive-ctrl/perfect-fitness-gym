import React from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const reviews = [
  {
    name: "Sarah Jenkins",
    status: "Member since 2021",
    text: "Perfect Fitness isn't just a gym; it's where I found my second family. The transformation program helped me lose 30lbs, but the mental strength I gained is what really matters. Best equipment in the city!",
    rating: 5,
    featured: true,
    size: "large"
  },
  {
    name: "Marcus King",
    status: "Elite Member",
    text: "Top-tier coaching and zero-ego atmosphere. Love the heavy lifting zones. It's the standard for fitness in the city.",
    rating: 5,
    featured: false,
    size: "small",
    color: "primary"
  },
  {
    name: "David Chen",
    status: "Member",
    text: "The community here is incredible. Always clean, and the staff actually knows your name. Highly recommend!",
    rating: 5,
    featured: false,
    size: "small"
  },
  {
    name: "Amanda Lopez",
    status: "Athlete",
    text: "Amazing facility and even better classes. The HIIT sessions are a game changer. The vibe is unmatched.",
    rating: 5,
    featured: false,
    size: "small"
  },
  {
    name: "Robert Wilson",
    status: "Member",
    text: "Best decision I ever made for my health. The trainers are world-class and the equipment is always working perfectly.",
    rating: 5,
    featured: false,
    size: "small"
  }
]

export default function Reviews() {
  return (
    <div className="pt-20 pb-14 bg-background">
      <div className="container mx-auto px-5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 lg:mb-24 space-y-4 lg:space-y-6"
        >
          <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] lg:text-xs">Peer Recognition</span>
          <h1 className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-8xl font-black uppercase tracking-tight leading-none italic">
            Member <span className="text-primary italic">Voice</span>
          </h1>
          <p className="text-white/60 uppercase tracking-widest text-[10px] lg:text-sm font-bold max-w-[34ch] lg:max-w-2xl mx-auto leading-relaxed">
            Real feedback from the people who call Perfect Fitness Gym their home base.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-1 border-t border-white/[0.06] pt-4 lg:pt-0">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-6 lg:p-12 flex flex-col justify-between space-y-8 min-h-[300px] lg:min-h-[400px] kinetic-hover active:scale-[0.98] transition-all",
                review.color === "primary" ? "bg-primary text-white" : "bg-white/[0.02] dark:bg-white/5",
                review.size === "large" ? "md:col-span-2" : ""
              )}
            >
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className={cn("w-4 h-4 lg:w-5 lg:h-5", review.color === "primary" ? "fill-white text-white" : "fill-primary text-primary")} />
                  ))}
                </div>
                {review.size === "large" && <Quote className="w-10 h-10 lg:w-16 lg:h-16 opacity-10" />}
                <p className={cn(
                  "font-black leading-tight uppercase italic tracking-tight",
                  review.size === "large" ? "text-xl lg:text-5xl" : "text-lg lg:text-xl"
                )}>
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6 lg:pt-8 mt-auto">
                <div className={cn(
                  "w-10 h-10 lg:w-12 lg:h-12 rounded-none flex items-center justify-center font-black italic uppercase text-xs lg:text-sm",
                  review.color === "primary" ? "bg-white text-primary" : "bg-primary text-white"
                )}>
                  {review.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-black uppercase italic tracking-wider text-sm lg:text-base">{review.name}</h4>
                  <p className="text-[8px] lg:text-[10px] uppercase tracking-widest opacity-60 font-bold">{review.status}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
