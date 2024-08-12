import TopHomePage from "../UI/TopHomePage";
import FlashContent from "../UI/FlashContant";
import FullService from "../UI/FullService";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import LoadingPage from "../pages/Loading";
import BrowseCategory from "../UI/BrowseCategory";
import Music from "../UI/Music";
import NewArrival from "../UI/NewArrival";
import Error from "./Error";

function HomePage() {
  const { products, status, setInWishList, error } = useContext(ProductContext);

  setInWishList(false);

  if (status === "loading" || status === "idle") return <LoadingPage />;

  if (error) {
    return <Error />;
  }

  const electronicProducts = products.filter(
    (product) => product.category === "electronics"
  );

  const bestProductsRating = products.filter(
    (product) => product.rating.rate > "4.4"
  );

  return (
    <div className="container mx-auto m">
      <TopHomePage />

      <FlashContent
        products={electronicProducts}
        category={"Electronics"}
        syntax={"today's"}
        sty={true}
        id={"electronics"}
      />

      <BrowseCategory category={"Browse By Category"} syntax={"Categories"} />

      <FlashContent
        products={bestProductsRating}
        category={"Best Selling Products"}
        syntax={"This Month"}
        buttons={false}
        styleBest="grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        doStyleBest={true}
        id={"bestProduct"}
      />

      <Music />

      <FlashContent
        products={products}
        category={"Explore Our Products"}
        syntax={"Our Products"}
        id={"mens-clothing"}
      />

      <NewArrival />

      <FullService />
    </div>
  );
}

export default HomePage;
