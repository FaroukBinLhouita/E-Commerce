import { useContext } from "react";
import CartRow from "../UI/CartRow";
import { ProductContext } from "../context/ProductContext";
import LoadingPage from "./Loading";
import ButtonReturn from "../UI/ButtonReturn";
import CartTotal from "../UI/CartTotal";

function Cart() {
  const { cart, status, updateQuantity } = useContext(ProductContext);

  if (status === "loading" || status === "idle") return <LoadingPage />;

  return (
    <div className="mt-8 px-4 md:px-10">
      <div
        style={{ boxShadow: "0px 1px 13px 0px #0000000D" }}
        className="px-10 py-6 flex justify-between items-center  rounded"
      >
        <div>Product</div>
        <div className="ml-24">Quantity</div>
        <div>Price</div>
        <div>Subtotal</div>
      </div>
      {cart.map((item) => (
        <CartRow
          img={item.img || item.image}
          title={item.title.split(" ").slice(0, 2).join(" ")}
          price={item.price}
          quantity={item?.quantity}
          key={item.id}
          id={item.id}
          total={item.quantity * item.price}
          onQuantityChange={(newQuantity) =>
            updateQuantity(item.id, newQuantity)
          }
        />
      ))}
      <ButtonReturn />
      {cart.length === 0 ? (
        <p className="text-center m-14 text-7xl">You don't get any product</p>
      ) : (
        <CartTotal />
      )}
    </div>
  );
}

export default Cart;
