import { motion } from "framer-motion";
import { FaHome, FaLeaf, FaHeart, FaBoxOpen } from "react-icons/fa";

const cards = [
  {
    icon: <FaHome size={40} className="text-[#6e3419] mb-2" />,
    title: "Authentic ",
    subtitle: "Homestyle Pickles",
  },
  {
    icon: <FaLeaf size={40} className="text-[#6e3419] mb-2" />,
    title: "Premium Ingredients",
    subtitle: "Handpicked, Farm-Fresh, Pure & Natural",
  },
  {
    icon: <FaHeart size={40} className="text-[#6e3419] mb-2" />,
    title: "Sourced with Care",
    subtitle: "No Preservatives, Just Pure Love",
  },
  {
    icon: <FaBoxOpen size={40} className="text-[#6e3419] mb-2" />,
    title: "Packed with Nostalgia",
    subtitle: "Made with Love, Care, and Tradition",
  },
  
];

export default function FeatureCardsSection() {
  return (
    <section className="w-full  mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between min-h-[120px] items-center"
          >
            <div>{card.icon}</div>
            <div className="font-bold text-lg mb-2 text-black text-center">{card.title}</div>
            {card.subtitle && (
              <div className="text-gray-500 text-sm text-black text-center">{card.subtitle}</div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 