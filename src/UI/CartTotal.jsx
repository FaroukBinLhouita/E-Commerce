import { useNavigate } from "react-router-dom";
import Shipping from "./Shipping";
import CouponCheck from "./CouponCheck";
import Button from "./Button";

function CartTotal() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/checkout");
  }

  return (
    <div className="mt-20 flex flex-col gap-6 md:gap-0 md:flex-row justify-between">
      <CouponCheck />

      <div
        style={{ border: "1.5px solid #000000" }}
        className="rounded p-8 flex flex-col gap-4"
      >
        <h2 className="text-xl w-24 font-medium">Cart Total</h2>

        <Shipping />

        <Button onClick={handleNavigate} paddingX="12" paddingY="4">
          Process to checkout
        </Button>
      </div>
    </div>
  );
}

export default CartTotal;
