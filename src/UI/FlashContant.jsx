import { motion } from "framer-motion";
import { useContext, useState } from "react";
import FlashProducts from "./FlashProducts";
import Button from "./Button";
import CatogryProducts from "./CatogryProducts";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

function FlashContent({
  products,
  category,
  syntax,
  buttons = true,
  sty = false,
  styleBest,
  doStyleBest = false,
  id,
}) {
  const [startIndex, setStartIndex] = useState(0);
  const { inWishList } = useContext(ProductContext);
  const navigate = useNavigate();
  const totalProducts = products.length;
  const displayedProducts = buttons
    ? products.slice(startIndex, startIndex + 3)
    : products;

  function handleNavigate() {
    navigate("/allproducts");
  }

  const containerVariants = {
    hidden: { x: "-100vw" },
    visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <motion.div
      id={id}
      className={`mt-8 flex flex-col px-4 md:px-8 pb-12 ${
        sty ? "border-b-[0.5px] border-x-zinc-700" : ""
      } `}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <CatogryProducts
        category={category}
        syntax={syntax}
        products={products}
        setStartIndex={setStartIndex}
        totalProducts={totalProducts}
        buttons={buttons}
      />

      <div
        className={`mt-8 grid ${
          doStyleBest ? styleBest : "grid-cols-3"
        }  gap-4 w-full overflow-hidden`}
      >
        {displayedProducts.map((product) => (
          <FlashProducts
            syntax={syntax}
            key={product.id}
            img={product.image || product.img}
            title={product.title.split(" ").slice(0, 2).join(" ")}
            rate={product.rate || product.rating.rate}
            price={product.price}
            category={product.category}
            description={product.description}
            id={product.id}
          />
        ))}
      </div>

      {!inWishList && (
        <Button
          onClick={handleNavigate}
          moreClasses="mt-8 w-full md:w-72 self-center py-4 px-12"
        >
          View All Products
        </Button>
      )}
    </motion.div>
  );
}

export default FlashContent;
