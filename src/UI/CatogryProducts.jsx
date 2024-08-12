import { motion } from "framer-motion";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function CatogryProducts({
  totalProducts,
  setStartIndex,
  category,
  syntax,
  buttons,
}) {
  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const { inWishList } = useContext(ProductContext);

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex + 3 >= totalProducts) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex === 0) {
        return totalProducts - 3;
      }
      return prevIndex - 1;
    });
  };

  return (
    <>
      {inWishList && syntax === "Just for you" && (
        <motion.div
          className="grid grid-cols-2 sm:gap-4 lg:gap-0  items-center"
          style={{ gridTemplateColumns: "0.03fr 1fr" }}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="w-5 h-10 bg-[#DB4444]"></div>

          <div>
            <h2 className="font-semibold text-[#DB4444] text-[16px] leading-[20px] text-start">
              {syntax}
            </h2>
          </div>
        </motion.div>
      )}

      {!inWishList && (
        <motion.div
          className="grid grid-cols-2 sm:gap-4 lg:gap-0  items-center"
          style={{ gridTemplateColumns: "0.03fr 1fr" }}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="w-5 h-10 bg-[#DB4444]"></div>

          <div>
            <h2 className="font-semibold text-[#DB4444] text-[16px] leading-[20px] text-start">
              {syntax}
            </h2>
          </div>
        </motion.div>
      )}

      <motion.div
        className="mt-6"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-4xl font-semibold text-left">{category}</h2>
      </motion.div>

      {buttons && (
        <div className="flex justify-end gap-2 my-4 mr-10">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center  text-center py-1 px-1 bg-gray-300 rounded-full hover:bg-gray-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="flex items-center justify-center  text-center py-1 px-1 bg-gray-300 rounded-full hover:bg-gray-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              class="w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default CatogryProducts;
