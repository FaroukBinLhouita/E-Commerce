import { useNavigate } from "react-router-dom";

function TopHeader() {
  const navigate = useNavigate();

  function shopping() {
    navigate("/allproducts");
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-3 gap-3 bg-[#000000] text-white">
      <p className="font-normal text-sm text-center md:text-left">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </p>
      <button className="font-bold text-sm border-b-2" onClick={shopping}>
        ShopNow
      </button>
    </div>
  );
}

export default TopHeader;
