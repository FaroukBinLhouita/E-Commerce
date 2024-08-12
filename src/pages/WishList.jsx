import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import FlashContent from "../UI/FlashContant";
import LoadingPage from "./Loading";
import Error from "./Error";

function WishList() {
  const { addToCart, products, status, error, wishList } =
    useContext(ProductContext);

  if (status === "loading" || status === "idle") return <LoadingPage />;

  if (error) {
    return <Error />;
  }

  const displayProduct =
    wishList.length === 0 ? "electronics" : wishList[0].category;

  const AllRelatedProducts = products.filter(
    (product) => product.category === displayProduct
  );

  const relatedProducts = AllRelatedProducts.filter(
    (item) => item.id !== wishList[0]?.id
  );

  function handleAddAllToCart() {
    wishList.map((item) => {
      addToCart(item);
    });
  }

  return (
    <>
      <div className="mt-10 flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="pl-32 text-xl">
            Wishlist (
            {wishList.length === 0
              ? "you didn't get any product"
              : wishList.length}
            )
          </h3>
          <button
            onClick={handleAddAllToCart}
            className="px-12 py-4 rounded-md border"
          >
            Move All To Bag
          </button>
        </div>

        <FlashContent
          products={wishList}
          syntax={"Just For You"}
          buttons={false}
        />
      </div>

      <FlashContent
        products={relatedProducts}
        syntax={"Just for you"}
        id={"electronics"}
        buttons={false}
      />
    </>
  );
}

export default WishList;
