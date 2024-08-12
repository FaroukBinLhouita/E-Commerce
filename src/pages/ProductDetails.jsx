import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import FlashContent from "../UI/FlashContant";
import LoadingPage from "./Loading";
import Stars from "../UI/Stars";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const { ProductDetails, addToCart, addToWishList, products, status } =
    useContext(ProductContext);
  const navigate = useNavigate();

  if (status === "loading" || status === "idle") return <LoadingPage />;

  const AllRelatedProducts = products.filter(
    (product) => product.category === ProductDetails.category
  );

  const RelatedProducts = AllRelatedProducts.filter(
    (item) => item.id !== ProductDetails.id
  );

  const handleAddToCart = () => {
    addToCart(ProductDetails);
    navigate("/cart");
  };

  const handleAddToWishList = () => {
    addToWishList(ProductDetails);
    navigate("/wishlist");
  };

  return (
    <>
      <div className="mt-8 flex flex-col lg:flex-row items-center justify-evenly">
        <div className="w-[500px] flex justify-center items-center  rounded bg-[#F5F5F5] p-8">
          <img
            className="w-[446px] h-[315px] object-scale-down"
            src={ProductDetails.img}
            alt="product's image"
          />
        </div>

        <div className="flex flex-col gap-4 items-start">
          <h3 className="font-semibold text-2xl">{ProductDetails.title}</h3>
          <Stars rate={ProductDetails.rate} />
          <p className="text-2xl">${ProductDetails.price}</p>
          <p className="w-[400px] text-sm">{ProductDetails.description}</p>
          <div
            style={{
              width: "400px",
              border: "rgba(0, 0, 0, 0.5) solid 1px",
            }}
          ></div>

          <div className="flex gap-6 items-center">
            <p className="text-xl">Size:</p>
            <div className="flex gap-4">
              <div
                className="rounded flex items-center justify-center  w-8  h-8 text-sm "
                style={{ border: "1px solid #00000080" }}
              >
                <p>XS</p>
              </div>
              <div
                className="rounded flex items-center justify-center  w-8  h-8 text-sm "
                style={{ border: "1px solid #00000080" }}
              >
                <p>S</p>
              </div>
              <div
                className="bg-red-600 text-white rounded flex items-center justify-center  w-8  h-8 text-sm "
                style={{ border: "1px solid #00000080" }}
              >
                <p>M</p>
              </div>

              <div
                className="rounded flex items-center justify-center  w-8  h-8 text-sm "
                style={{ border: "1px solid #00000080" }}
              >
                <p>L</p>
              </div>

              <div
                className="rounded flex items-center justify-center  w-8  h-8 text-sm "
                style={{ border: "1px solid #00000080" }}
              >
                <p>XL</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <Button onClick={handleAddToCart} paddingX="12" paddingY="3">
              Buy Now
            </Button>

            <div
              onClick={handleAddToWishList}
              className="w-12 h-12 border cursor-pointer flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>

          <div
            style={{ border: "1px solid #00000080" }}
            className="flex flex-col px-10 py-2"
          >
            {/* fisrt */}
            <div className="flex gap-4 justify-center border-b pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>

              <div className="flex flex-col gap-2">
                <p className="w-28 font-medium text-base">Free Delivery</p>
                <p className="w-72 font-medium text-xs underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            {/* sec */}
            <div className="flex gap-4 items-center justify-center pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>

              <div className="flex flex-col gap-2">
                <p className="w-32 font-medium text-base">Return Delivery</p>
                <p className="w-72 font-medium text-xs ">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FlashContent
        products={RelatedProducts}
        syntax={"Related items"}
        id={"electronics"}
        buttons={false}
      />
    </>
  );
}

export default ProductDetails;
