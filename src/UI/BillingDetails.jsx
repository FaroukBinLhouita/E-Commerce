import { useState } from "react";
import InputBilling from "../UI/InputBilling";

function BillingDetails() {
  const [save, setSave] = useState(true);

  function handleSave() {
    setSave(!save);
  }

  return (
    <div>
      <h1 className="w-64 my-9 text-left font-medium text-4xl">
        Billing Details
      </h1>
      <div className="flex flex-col gap-6">
        <InputBilling inputName="First Name" red={true} />
        <InputBilling inputName="Company Name" />
        <InputBilling inputName="Street Address" red={true} />
        <InputBilling inputName="Apartment, floor, etc. (optional)" />
        <InputBilling inputName="Town/City" red={true} />
        <InputBilling inputName="Phone Number" red={true} />
        <InputBilling inputName="Email Address" red={true} />
      </div>

      <div class="mt-2 flex items-center gap-2 w-[451px] h-[24px]">
        <input
          type="checkbox"
          checked={save}
          onClick={handleSave}
          id="saveInfo"
          class="w-6 h-6 bg-red-500 border border-red-500 checked:bg-red-500 checked:border-red-500"
        />
        <label
          for="saveInfo"
          class="text-base font-normal leading-[24px] text-left"
        >
          Save this information for faster check-out next time
        </label>
      </div>
    </div>
  );
}

export default BillingDetails;
