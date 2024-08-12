import { useContext, useState } from "react";
import Stars from "./Stars";
import { ProductContext } from "../context/ProductContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function FlashProducts({
  description,
  category,
  syntax,
  id,
  img,
  title,
  rate,
  price,
}) {
  const [hover, setHover] = useState(false);
  const [add, setIsAdd] = useState(false);
  const navigate = useNavigate();
  const {
    setProductDetails,
    addToCart,
    addToWishList,
    removeFromWishList,
    inWishList,
  } = useContext(ProductContext);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  function handleAddToCart() {
    setIsAdd(true);
    const product = { id, img, title, price };
    addToCart(product);
    setIsAdd(false);
  }

  function handleAddToWishList() {
    const product = {
      category,
      id,
      image: img,
      title,
      price,
      rating: { rate },
    };
    addToWishList(product);
  }

  function handleDelFromWishList() {
    removeFromWishList(id);
  }

  function handleMoveToProductDetails() {
    setProductDetails({ id, img, description, category, title, rate, price });
    navigate("/productDetails");
  }

  return (
    <motion.div
      className="flex flex-col justify-center gap-3 max-w-xs mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
    >
      <div
        className="relative flex flex-col  items-center p-12 bg-[#F5F5F5] w-full"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div>
          <div>
            {inWishList ? (
              <div
                onClick={handleDelFromWishList}
                className="absolute cursor-pointer top-2 right-2 w-8 h-8 rounded-full bg-white flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
            ) : (
              <>
                <div
                  onClick={handleAddToWishList}
                  className="absolute cursor-pointer top-2 right-2 w-8 h-8 rounded-full bg-white flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>

                <div
                  onClick={handleMoveToProductDetails}
                  className="absolute cursor-pointer top-12 right-2 w-8 h-8 rounded-full bg-white flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
              </>
            )}
            <img
              src={img}
              alt="Discount Item"
              className="w-full h-32 object-cover"
            />
          </div>
        </div>

        {inWishList ? (
          <div className="flex justify-center gap-2 cursor-pointer absolute bottom-0 px-4 w-full text-sm bg-black text-white py-2 font-medium rounded-sm hover:text-gray-300 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <button onClick={handleAddToCart} className="" disabled={add}>
              Add to Cart
            </button>
          </div>
        ) : (
          hover && (
            <button
              onClick={handleAddToCart}
              className="absolute bottom-0 px-4 w-full text-sm bg-black text-white py-2 font-medium rounded-sm hover:text-gray-300 transition-all"
              disabled={add}
            >
              Add to Cart
            </button>
          )
        )}
      </div>
      <p className="text-sm font-medium text-center">{title}</p>
      <p className="text-sm font-medium text-center text-red-600">${price}</p>
      {syntax === "Just for you" && inWishList ? <Stars rate={rate} /> : ""}
      {!inWishList ? <Stars rate={rate} /> : ""}
    </motion.div>
  );
}

export default FlashProducts;
