import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import LoadingPage from "./Loading";

function SignUp() {
  const { products, status } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  if (status === "idle" || status === "loading") {
    return <LoadingPage />;
  }

  const { image } = products[16];

  return (
    <div className="grid grid-cols-2 gap-8 justify-center items-center p-8">
      <div className="flex justify-center">
        <img
          src={image}
          alt="Product"
          width="300"
          className="rounded-lg animate-fade-in-up"
        />
      </div>

      <div className="space-y-4 w-full max-w-md animate-slide-in-right">
        <h2 className="text-3xl font-bold">Sign Up to Exclusive</h2>
        <p className="text-sm text-gray-600">Enter your details below</p>

        <input
          type="text"
          placeholder="Email or Phone"
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <div className="space-y-4">
          <Button onClick={handleClick} moreClasses={"w-full animate-pop-in"}>
            Sign Up
          </Button>
          <button
            onClick={handleClick}
            className="border border-gray-300 text-gray-700 w-full px-4 py-2 rounded-md animate-pop-in"
          >
            Sign Up with Google
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              onClick={handleClick}
              href="#"
              className="text-red-600 hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
