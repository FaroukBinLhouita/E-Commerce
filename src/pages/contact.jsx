import Button from "../UI/Button";

import React from "react";

function Contact() {
  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div
          className="grid grid-rows-2 gap-8 p-6 shadow-md"
          style={{ boxShadow: "0px 1px 13px 0px #0000000D" }}
        >
          <div className="flex items-start gap-4 pb-4 border-b">
            <div className="bg-red-600 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884A2.001 2.001 0 013.003 4h2a2 2 0 011.851 1.276l1.338 3.348a2 2 0 01-.375 2.085l-.888.887a1 1 0 000 1.414l2.414 2.414a1 1 0 001.414 0l.887-.888a2 2 0 012.085-.375l3.348 1.338A2 2 0 0116 15.997v2a2.001 2.001 0 01-1.884 1.999c-.174 0-.348-.007-.518-.021a17.39 17.39 0 01-7.44-2.07 17.393 17.393 0 01-5.213-5.213 17.39 17.39 0 01-2.07-7.44c-.014-.17-.021-.344-.021-.518v-.001a2.001 2.001 0 011.999-1.883h.003z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold">Call To Us</h3>
              <p className="text-gray-600">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-gray-600">Phone: +888101112222</p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-4">
            <div className="bg-red-600 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.5 3h-15C3.122 3 3 3.122 3 3.25v15.5c0 .128.122.25.25.25h15.5c.128 0 .25-.122.25-.25V3.25c0-.128-.122-.25-.25-.25zM5 5h10v1.5H5V5zm11 14.5h-12v-1h12v1zm0-3.25h-12v-8h12v8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold">Write To Us</h3>
              <p className="text-gray-600">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-gray-600">Emails: customer@exclusive.com</p>
              <p className="text-gray-600">Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        <div
          className="p-6 shadow-md"
          style={{ boxShadow: "0px 1px 13px 0px #0000000D" }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border rounded-md bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-md bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="p-3 border rounded-md bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div className="space-y-4">
              <textarea
                placeholder="Your message"
                className="w-full p-3 border rounded-md bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-red-600"
                rows="4"
              ></textarea>
              <Button>Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
