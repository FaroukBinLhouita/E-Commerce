import { useState } from "react";
import Button from "./Button";

function CouponCheck() {
  const [coupon, setCoupon] = useState("");

  function handleCouponChange(e) {
    setCoupon(e.target.value);
  }

  function handleApplyCoupon() {
    alert("the coupon's time is end");
    setCoupon("");
  }

  return (
    <div className="flex gap-4 self-start w-full md:w-auto">
      <input
        type="text"
        placeholder="Coupon Code"
        value={coupon}
        onChange={handleCouponChange}
        className="w-80 h-14 pl-2 rounded text-left opacity-50"
        style={{ border: "1px solid #000000" }}
      />

      <Button
        onClick={handleApplyCoupon}
        width="211"
        paddingX="12"
        paddingY="4"
      >
        Apply Coupon
      </Button>
    </div>
  );
}

export default CouponCheck;
