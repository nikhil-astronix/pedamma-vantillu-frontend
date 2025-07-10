import { motion } from "framer-motion";
import { FaCheckCircle, FaLeaf, FaSeedling } from "react-icons/fa";
import { MdOutlineRefresh } from "react-icons/md";

const features = [
  {
    icon: <FaCheckCircle size={56} className="text-[#6e3419]"/>,
    title: "Authentic, homemade taste",
  },
  {
    icon: <MdOutlineRefresh size={56} className="text-[#6e3419]"/>,
    title: "Freshly made upon order",
  },
  {
    icon: <FaLeaf size={56} className="text-[#6e3419]"/>,
    title: "100% pure and natural",
  },
  {
    icon: <FaSeedling size={56} className="text-[#6e3419]"/>,
    title: "Farm-Fresh Ingredients",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full  mx-auto py-12">
      <h2 className="text-3xl text-[#e0b07a] md:text-4xl font-bold text-center mb-10 font-[Higuen Elegant Serif]">
        Why Choose Peddamma Vantillu?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className={`flex flex-col items-center justify-center rounded-2xl p-8 shadow-md bg-gray-${i % 2 === 0 ? "50" : "100"}`}
          >
            <div className="mb-4 text-black">{f.icon}</div>
            <div className="text-lg font-semibold text-center text-black">{f.title}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 