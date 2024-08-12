import React, { useState, useEffect, useContext } from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

function Account() {
  const storedEmail = localStorage.getItem("userEmail") || "";
  const storedPassword = localStorage.getItem("userPassword") || "";
  const initialName = storedEmail.split("@")[0] || "";
  const [email, setEmail] = useState(storedEmail);
  const [name, setName] = useState(initialName);
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRed, setIsRed] = useState(true);

  const { setInWishList } = useContext(ProductContext);

  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", newPassword || storedPassword);
  }, [email, newPassword, storedPassword]);

  const handleSave = () => {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", newPassword || storedPassword);
    alert("Profile updated successfully!");
    setAddress("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleCancel = () => {
    setName(initialName);
    setEmail(storedEmail);
    setAddress("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleMoveToWishList = () => {
    navigate("/wishlist");
    setIsRed(!isRed);
    setInWishList(true);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 ">
      {/* Left Side */}
      <div className="space-y-4">
        <div className="flex flex-col mb-2">
          <a className="font-medium text-16px text-black cursor-pointer">
            Manage My Account
          </a>
          <p
            className={`self-end text-16px font-normal ${
              isRed ? "text-[#DB4444] " : "text-black"
            }`}
          >
            My Profile
          </p>
        </div>
        <a
          onClick={handleMoveToWishList}
          className={`font-medium text-16px ${
            isRed ? "text-black" : "text-[#DB4444] "
          } cursor-pointer`}
        >
          My WishList
        </a>
      </div>

      <div
        className="flex flex-col space-y-4 w-full p-6 shadow-md ml-24"
        style={{ boxShadow: "0px 1px 13px 0px #0000000D" }}
      >
        <h4 className="font-medium text-16px text-[#DB4444]">
          Edit Your Profile
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex space-x-4 mt-4 justify-end">
          <button
            onClick={handleCancel}
            className="py-2 px-4 text-gray-700 hover:text-black"
          >
            Cancel
          </button>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}

export default Account;
