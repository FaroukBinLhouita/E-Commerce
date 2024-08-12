import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Shipping() {
  const { cart } = useContext(ProductContext);

  const totalProducts = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <>
      <div
        className="flex justify-between pb-3"
        style={{ borderBottom: "1.5px solid rgba(0, 0, 0, 0.4) " }}
      >
        <p>Subtotal</p>
        <p>{totalProducts}</p>
      </div>
      <div
        style={{ borderBottom: "1.5px solid rgba(0, 0, 0, 0.4) " }}
        className="flex justify-between pb-3"
      >
        <p>shipping</p>
        <p>free</p>
      </div>
      <div className="flex justify-between">
        <p>Total</p>
        <p>{totalProducts}</p>
      </div>
    </>
  );
}

export default Shipping;
