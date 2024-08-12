import BillingDetails from "../UI/BillingDetails";
import RightBilling from "../UI/RightBilling";

function CheckOut() {
  return (
    <div className="p-8 flex flex-col md:flex-row justify-around">
      <BillingDetails />
      <RightBilling />
    </div>
  );
}

export default CheckOut;
