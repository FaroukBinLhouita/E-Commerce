import { motion } from "framer-motion";
import FlashProducts from "../UI/FlashProducts";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import LoadingPage from "./Loading";
import Error from "./Error";

function AllProducts() {
  const { products, status, error } = useContext(ProductContext);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (status === "loading" || status === "idle") return <LoadingPage />;

  if (error) {
    return <Error />;
  }

  return (
    <motion.div
      className={`mt-8 grid grid-rows-3 gap-2 md:grid-cols-2 lg:grid-cols-6 px-4 md:px-8 pb-12`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={itemVariants} className="mb-8">
          <FlashProducts
            img={product.image}
            title={product.title.split(" ").slice(0, 2).join(" ")}
            rate={product.rating.rate}
            price={product.price}
            id={product.id}
            category={product.category}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default AllProducts;
