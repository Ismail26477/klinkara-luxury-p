"use client"

import { motion } from "framer-motion"
import {
  Wifi,
  Shield,
  Sparkles,
  Car,
  Droplets,
  UtensilsCrossed,
  Wind,
  Tv,
  MapPin,
  Heart,
  Home,
  Users,
} from "lucide-react"

const amenities = [
  {
    icon: Wifi,
    title: "24×7 High-Speed Wi-Fi",
    description: "Reliable internet connectivity for all your professional and personal needs",
  },
  {
    icon: Droplets,
    title: "Hot Water 24/7",
    description: "Instant warm water available round the clock with quality geysers",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your peace of mind is our priority with secure access and locked storage",
  },
  {
    icon: UtensilsCrossed,
    title: "3 Times Daily Meals",
    description: "Delicious home-style, hygienic meals prepared fresh for optimal nutrition",
  },
  {
    icon: Car,
    title: "Pickup & Drop Service",
    description: "Convenient transportation service for office workers to and from IT Park",
  },
  {
    icon: MapPin,
    title: "Nearness to IT Park",
    description: "Prime location with easy access to major IT park and work centers",
  },
  {
    icon: Sparkles,
    title: "Daily Cleaning Services",
    description: "Professional housekeeping and washroom cleaning every single day",
  },
  {
    icon: Wind,
    title: "Silent & Peaceful",
    description: "Serene environment designed for rest, study, and personal wellness",
  },
  {
    icon: Home,
    title: "Well-Maintained Building",
    description: "Modern facilities with excellent upkeep and prompt maintenance service",
  },
  {
    icon: Heart,
    title: "Obedient & Caring Staff",
    description: "Friendly and professional team dedicated to your comfort and satisfaction",
  },
  {
    icon: Tv,
    title: "Party Hall for Celebrations",
    description: "Dedicated space for birthdays, celebrations and social gatherings",
  },
  {
    icon: Users,
    title: "Community Living",
    description: "Make lifelong friends in our welcoming and inclusive living community",
  },
]

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="section-padding bg-secondary/50">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            World-Class Facilities
          </span>
          <h2 className="heading-luxury text-foreground mb-4">Premium Amenities & Services</h2>
          <div className="gold-divider mb-6" />
          <p className="subheading-luxury mx-auto">
            Every detail is designed to elevate your living experience with comfort, convenience, and care at its core.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="luxury-card p-8 h-full hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <amenity.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{amenity.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{amenity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AmenitiesSection
