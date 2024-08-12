import { useContext } from "react";
import Button from "../UI/Button";
import { ProductContext } from "../context/ProductContext";

function Error() {
  const { error } = useContext(ProductContext);

  return (
    <div className="flex flex-col gap-6 mt-32">
      <h1 className="bg-white text-center text-9xl"> 404 Not Found </h1>
      <p className="text-center text-sm">
        {error ? error : "your visited page not found, you may go home page"}
      </p>
      <Button width={"200px"}>
        {error ? "check your internet connection" : "Back to home page"}
      </Button>
    </div>
  );
}

export default Error;
