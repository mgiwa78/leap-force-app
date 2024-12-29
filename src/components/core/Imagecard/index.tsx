import { motion } from "framer-motion";

interface Props {
  // id?: string | number;
  image: string;
  location: string;
  rating: number;
}

export default function ImageCard({ image, location, rating }: Props) {
  return (
    <motion.div
      className="bg-secondary_1/5 overflow-hidden p-4 rounded-[24px]"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative">
        <img
          src={image}
          alt={location}
          className="w-full h-[220px] object-cover rounded-[24px]"
        />
        {/* <motion.button
                className="absolute bottom-2 right-2 bg-primary text-white rounded-full p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus size={20} />
              </motion.button> */}
      </div>

      <div className="mt-4 flex justify-between items-center ">
        <h2 className="text-sm lg:text-lg  text-text2 font-semibold">
          {location}
        </h2>

        <div className="flex items-center">
          <span className="text-secondary_1 text-xs">★</span>
          <span className="ml-1 font-medium text-xs">
            {rating.toFixed(1)}/5.0
          </span>
        </div>
      </div>
    </motion.div>
  );
}
