import { useNavigate } from "react-router-dom";
import Clock from "./Clock";
import headphoneImg from "../../images/headphone.png";

function Music() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/allproducts");
  }

  return (
    <div className="m-auto w-11/12 mt-8 grid md:grid-cols-2 bg-black text-white">
      <div className="p-12 flex flex-col gap-12">
        <h4 className="w-24 font-semibold text-[#00FF66]">Categories</h4>
        <h2 className="w-96 text-5xl font-semibold">
          Enchance Your Music Experience
        </h2>
        <div className="flex gap-6">
          <Clock clock="Hours" number="23" />
          <Clock clock="Days" number="05" />
          <Clock clock="Minutes" number="59" />
          <Clock clock="Seconds" number="35" />
        </div>
        <button
          onClick={handleNavigate}
          className="w-44 px-12 py-4 text-white bg-[#00ff66]"
        >
          Buy Now
        </button>
      </div>

      <div>
        <img
          src={headphoneImg}
          className="self-end w-[400px] h-auto lg:w-[600px] md:mt-20 lg:mt-0 md:ml-10 lg:ml-0"
        />
      </div>
    </div>
  );
}

export default Music;
