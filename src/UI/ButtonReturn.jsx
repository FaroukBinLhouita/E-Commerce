import { useNavigate } from "react-router-dom";

function ButtonReturn() {
  const navigate = useNavigate();

  function handleReturnToShop() {
    navigate("/allproducts");
  }

  return (
    <div className="flex justify-between mt-6">
      <button
        style={{ border: "1px solid #00000080" }}
        className="text-base py-4 px-12 font-medium"
        onClick={handleReturnToShop}
      >
        Return To Shop
      </button>
      <button
        style={{ border: "1px solid #00000080" }}
        className="text-base py-4 px-12 font-medium"
        onClick={handleReturnToShop}
      >
        Update Cart
      </button>
    </div>
  );
}

export default ButtonReturn;
