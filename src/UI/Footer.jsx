function Footer() {
  return (
    <footer className="bg-[#000000] text-[#FAFAFA] p-8 mt-14">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 max-w-screen-xl flex-col gap-[3.2rem]">
        <div className="space-y-4">
          <h2 className="font-bold text-2xl">Exclusive</h2>
          <div className="text-lg font-medium">Subscribe</div>
          <div className="text-sm font-normal">
            Get 10% off your first order
          </div>
          <div className="flex items-center bg-black text-white border rounded px-4 py-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none"
            />
            <svg
              className="w-6 h-6 ml-2 cursor-pointer text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              ></path>
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-bold text-2xl">Support</h2>
          <p className="text-sm font-normal">
            111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-sm font-normal">exclusive@gmail.com</p>
          <p className="text-sm font-normal">+88015-88888-9999</p>
        </div>

        <div className="space-y-4">
          <h2 className="font-bold text-2xl">Account</h2>
          <ul className="space-y-2">
            <li className="text-sm font-normal">My Account</li>
            <li className="text-sm font-normal">Login / Register</li>
            <li className="text-sm font-normal">Cart</li>
            <li className="text-sm font-normal">Wishlist</li>
            <li className="text-sm font-normal">Shop</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="space-y-4">
          <h2 className="font-bold text-2xl">Quick Link</h2>
          <ul className="space-y-2">
            <li className="text-sm font-normal">Privacy Policy</li>
            <li className="text-sm font-normal">Terms Of Use</li>
            <li className="text-sm font-normal">FAQ</li>
            <li className="text-sm font-normal">Contact</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-bold text-2xl">Stay Connected</h2>
          <p className="text-xs font-normal opacity-70">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-6">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            ></svg>
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            ></svg>
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            ></svg>
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            ></svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
