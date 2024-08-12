import { useNavigate } from "react-router-dom";

function ElmentNewArrival({ name, pargraph, src, w, h, top }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/allproducts");
  }

  return (
    <div className="relative ">
      <div className={`bg-black flex justify-center items-center`}>
        <img className="relative" src={src} width={w} height={h} />
      </div>
      <div
        className={`text-white absolute top-[${top}] bottom-4 right-0 left-8 flex flex-col gap-4 justify-center items-start`}
      >
        <h3 className="font-semibold text-2xl">{name}</h3>
        <p className="font-normal text-sm w-60">{pargraph}</p>
        <button
          onClick={handleNavigate}
          className="font-medium text-base underline"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default ElmentNewArrival;
