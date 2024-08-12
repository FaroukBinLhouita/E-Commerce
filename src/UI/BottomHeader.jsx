import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function BottomHeader() {
  const navigate = useNavigate();
  const { setInWishList } = useContext(ProductContext);

  function handlerMoving(moveto) {
    if (moveto === "wishlist") setInWishList(true);

    navigate(`/${moveto}`);
  }

  return (
    <nav className="md:mr-20 mb-4 mt-6 md:mt-14 mx-4 md:ml-20   grid grid-cols-1 md:grid-cols-3 md:items-baseline gap-4">
      <h2 className="font-bold text-2xl text-center md:text-left">Exclusive</h2>

      <ul className="flex flex-row justify-center md:flex-row gap-2 md:gap-9 text-center md:text-left">
        <li
          onClick={(e) => handlerMoving("home")}
          className="relative cursor-pointer group"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li
          onClick={(e) => handlerMoving("about")}
          className="relative cursor-pointer group"
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li
          onClick={(e) => handlerMoving("contact")}
          className="relative cursor-pointer group"
        >
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li
          onClick={(e) => handlerMoving("signup")}
          className="relative cursor-pointer group"
        >
          SignUp
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>

      <ul className="flex justify-center md:justify-end gap-4">
        <FontAwesomeIcon
          onClick={(e) => handlerMoving("wishlist")}
          icon={faHeart}
          className="cursor-pointer"
        />
        <FontAwesomeIcon
          onClick={(e) => handlerMoving("account")}
          icon={faUser}
          className="cursor-pointer"
        />
        <FontAwesomeIcon
          onClick={(e) => handlerMoving("cart")}
          icon={faCartPlus}
          className="cursor-pointer"
        />
      </ul>
    </nav>
  );
}

export default BottomHeader;
