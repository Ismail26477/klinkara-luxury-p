"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/3.jpeg",
    alt: "Triple Sharing Room - Premium Setup",
    category: "Triple Sharing",
  },
  {
    src: "/images/6.jpeg",
    alt: "Triple Sharing Room - Multiple Beds",
    category: "Triple Sharing",
  },
  {
    src: "/images/2.jpeg",
    alt: "Single Room - Private Accommodation",
    category: "Single Sharing",
  },
  {
    src: "/images/5.jpeg",
    alt: "Triple Sharing Room - Full View",
    category: "Triple Sharing",
  },
  {
    src: "/images/4.jpeg",
    alt: "Double Bed Room - Comfortable Space",
    category: "Double Sharing",
  },
  {
    src: "/images/8.jpeg",
    alt: "Single Room - Modern Design",
    category: "Single Sharing",
  },
  {
    src: "/images/1.jpeg",
    alt: "Triple Sharing Room - Well Maintained",
    category: "Triple Sharing",
  },
  {
    src: "/images/7.jpeg",
    alt: "Triple Sharing Room - Overhead View",
    category: "Triple Sharing",
  },
]

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))]

  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <section id="gallery" className="section-padding bg-secondary/50">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            Room Showcase
          </span>
          <h2 className="heading-luxury text-foreground mb-4">Tour Our Luxurious Rooms</h2>
          <div className="gold-divider mb-6" />
          <p className="subheading-luxury mx-auto">
            Experience the premium comfort and modern amenities of Klinkara Luxury PG. Each room is thoughtfully
            designed with premium furnishings, natural lighting, and all essential facilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category ? "btn-luxury" : "bg-card text-foreground hover:bg-accent/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              layout
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? "h-full min-h-[400px]" : "h-64"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-display text-lg font-semibold">{image.alt}</p>
                <p className="text-sm text-white/70">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 text-white hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default GallerySection
