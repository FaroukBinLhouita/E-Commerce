import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

function CartRow({ id, total, img, title, price, quantity, onQuantityChange }) {
  const [hover, setHover] = useState(false);
  const { removeFromCart } = useContext(ProductContext);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 0) {
      onQuantityChange(newQuantity);
    }
  };

  function handleDeleItem() {
    removeFromCart(id);
  }

  return (
    <div
      style={{ boxShadow: "0px 1px 13px 0px #0000000D" }}
      className="px-10 py-6 flex justify-between items-center rounded"
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative flex flex-row items-center gap-2"
      >
        <div>
          {hover && (
            <div
              onClick={handleDeleItem}
              className="absolute cursor-pointer flex justify-center items-center w-4 h-4 rounded-full bg-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-2 h-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}

          <img src={img} className="h-14 w-14 cursor-pointer" alt="Product" />
        </div>
        <div className="w-24">{title}</div>
      </div>

      <div>${price}</div>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        className="w-16 h-11 text-center rounded"
        min="1"
      />
      <div>{total}</div>
    </div>
  );
}

export default CartRow;
