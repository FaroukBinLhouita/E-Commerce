function InputBilling({ inputName, red = false }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="opacity-40">
        {inputName} {red ? <span className="text-red-600">*</span> : ""}
      </h2>
      <input
        type="text"
        className="h-12 w-96
        border 
        rounded bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-red-600"
      />
    </div>
  );
}

export default InputBilling;
