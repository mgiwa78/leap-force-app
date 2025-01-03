import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CustomButton from "@/components/core/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div
      className="min-h-[70vh] p-4 flex items-center justify-center"
      ref={containerRef}
    >
      <div className=" w-full bg-[#DFE5F140] min-h-[500px] rounded-[24px] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-2xl rounded-2xl shadow-sm p-8 md:p-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-3xl text-secondary_1 md:text-5xl font-bold text-center mb-4"
          >
            Stay Inspired
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-black text-center text-sm md:text-base mb-8"
          >
            Get the best travel tips, exclusive deals, and destination insights
            straight to your inbox.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your e-mail address"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Email address"
            />
            <CustomButton
              type="submit"
              size="44"
              className="bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Get Started
            </CustomButton>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
