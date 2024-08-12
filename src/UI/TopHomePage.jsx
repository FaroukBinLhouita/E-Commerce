import React from "react";
import imageAppleUrl from "../../images/apple.png";

function TopHomePage() {
  return (
    <div className="grid max-lg:grid-cols-1 grid-cols-3 items-center gap-6">
      {/* Sidebar Menu */}
      <div className="max-lg:m-auto relative w-80 self-start bg-white shadow-md rounded-md p-4 animate-slide-in-left">
        <ul className="pt-2 flex flex-col gap-4">
          <li>
            <a
              href="#womens-clothing"
              className="block text-black hover:underline"
            >
              Women's Fashion
            </a>
          </li>

          <li>
            <a
              href="#mens-clothing"
              className="block text-black hover:underline"
            >
              Men's Fashion
            </a>
          </li>

          <li>
            <a href="#bestProduct" className="block text-black hover:underline">
              Best Products
            </a>
          </li>

          <li>
            <a href="#electronics" className="block text-black hover:underline">
              Electronics
            </a>
          </li>
        </ul>
      </div>

      {/* Main Banner */}
      <div className="col-span-2 mt-4 bg-black p-4 grid grid-cols-1 md:grid-cols-2 items-center text-white rounded-lg animate-fade-in-up">
        {/* Promotional Text and Image */}
        <div className="space-y-4 p-8 animate-slide-in-right">
          <div className="space-y-2 flex gap-6 items-center">
            <img src={imageAppleUrl} width="40" height="40" alt="iPhone 14" />
            <p>iPhone 14 Series</p>
          </div>
          <h1 className="w-72 font-semibold text-[48px] leading-[60px] tracking-[0.04em] text-left">
            Up to 10% off Voucher
          </h1>
          <div className="flex gap-2 items-center">
            <a href="#mens-clothing" className="border-b text-white-500">
              Shop Now
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>

        {/* Promotional Image */}
        <div className="animate-fade-in-up">
          <img
            src="../../images/phone.jfif"
            alt="iPhone Promotion"
            className="w-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default TopHomePage;
