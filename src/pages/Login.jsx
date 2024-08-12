import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./Loading";

function Login() {
  const { products, status, error } = useContext(ProductContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  if (localStorage.getItem("userEmail")) {
    navigate("/home");
    return null;
  }

  if (status === "idle" || status === "loading") {
    return <LoadingPage />;
  }

  const { image } = products[13];

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", email);
    navigate("/home");
  };

  return (
    <div className="grid grid-cols-2 justify-center items-center p-8">
      <div className="flex justify-center">
        <img
          src={image}
          alt="Product"
          width="250"
          className="rounded-lg animate-fade-in-up"
        />
      </div>

      <div className="space-y-4 animate-slide-in-right">
        <h2 className="text-3xl font-bold">Log in to Exclusive</h2>
        <p className="text-sm text-gray-600">Enter your details below</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border-b border-gray-300 rounded-md"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border-b border-gray-300 rounded-md mt-2"
          />

          <div className="flex items-center justify-between mt-4">
            <Button type="submit">Login</Button>
            <a href="#" className="text-sm text-red-600 hover:underline">
              Forget password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
