import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductBilling from "./ProductBilling";
import Shipping from "./Shipping";
import Button from "./Button";
import CouponCheck from "./CouponCheck";

function RightBilling() {
  const { cart } = useContext(ProductContext);

  const [save, setSave] = useState(true);

  function handleSave() {
    setSave(!save);
  }

  return (
    <div className="flex flex-col gap-8 pt-36">
      {cart.map((el) => (
        <ProductBilling
          key={el.id}
          price={el.price}
          src={el.img || el.image}
          title={el.title.split(" ").slice(0, 2).join(" ")}
        />
      ))}

      <Shipping />

      <div class="mt-2 flex items-center gap-4 w-44">
        <input
          type="checkbox"
          checked={save}
          onClick={handleSave}
          id="saveInfo"
          class="w-6 h-6"
        />
        <label
          for="saveInfo"
          class="text-base w-32 font-normal leading-[24px] text-left"
        >
          Cash on delivery
        </label>
      </div>

      <CouponCheck />
      <Button moreClasses="self-start" paddingX="12" paddingY="4">
        Place Order
      </Button>
    </div>
  );
}

export default RightBilling;
