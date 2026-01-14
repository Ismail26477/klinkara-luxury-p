"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Landmark, Hospital, ShoppingCart } from "lucide-react"

const ContactSection = () => {
  const nearbyServices = [
    {
      name: "Rajiv Gandhi InfoTech Park",
      distance: "5.7 km",
      icon: Landmark,
    },
    {
      name: "Hinjawadi Phase 1",
      distance: "5.8 km",
      icon: ShoppingCart,
    },
    {
      name: "Kalpataru Hospital",
      distance: "1.2 km",
      icon: Hospital,
    },
    {
      name: "Grand High Street Mall",
      distance: "5.3 km",
      icon: ShoppingCart,
    },
  ]

  return (
    <section id="contact" className="section-padding bg-background">
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
            Get In Touch
          </span>
          <h2 className="heading-luxury text-foreground mb-4">Contact Us</h2>
          <div className="gold-divider mb-6" />
          <p className="subheading-luxury mx-auto">
            Have questions? Reach out to us anytime. We're here to help you find your perfect home.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {[
              {
                icon: MapPin,
                title: "Our Location",
                content:
                  "HPF2+3G9, Maan Road, Phase 3\nHinjawadi Rajiv Gandhi InfoTech Park\nHinjawadi, Pimpri-Chinchwad\nPune, Maharashtra 411057",
              },
              {
                icon: Phone,
                title: "Phone Number",
                content: "+91 77990 66011",
              },
              {
                icon: Mail,
                title: "Email Address",
                content: "klinkaraluxury@gmail.com",
              },
              {
                icon: Clock,
                title: "Office Hours",
                content: "Monday - Saturday: 9:00 AM - 8:00 PM\nSunday: 10:00 AM - 6:00 PM",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{item.content}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-4">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">Nearby Services</h4>
              <div className="grid grid-cols-2 gap-4">
                {nearbyServices.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 rounded-xl bg-secondary/50 border border-border hover:bg-secondary/80 transition-colors"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <service.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold text-foreground text-sm">{service.name}</p>
                        <p className="text-accent font-medium text-xs">{service.distance}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="luxury-card overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1234567890123!2d73.75291!3d18.60356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc37e4a4a4a4a4b%3A0x4a4a4a4a4a4a4a4a!2sHinjawadi%2C%20Pimpri-Chinchwad%2C%20Pune%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Klinkara Luxury PG Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
