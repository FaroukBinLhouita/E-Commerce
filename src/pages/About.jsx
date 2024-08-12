import FullService from "../UI/FullService";
import Ourstory from "../UI/Ourstory";
import Managers from "../UI/managers";

function About() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* First Column */}
        <div className="space-y-10 self-center">
          <h1 className="text-black font-semibold text-[54px] leading-[64px] tracking-[0.06em] text-justify">
            Our Story
          </h1>
          <p className="w-[525px] text-[16px] font-normal leading-[26px] text-left">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="w-[505px] text-[16px] font-normal leading-[26px] text-left">
            Exclusive has more than 1 million products to offer, growing at a
            very fast rate. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>

        {/* Second Column */}
        <div className="flex justify-center items-center">
          <img
            src="../../images/women-3452067_640.jpg"
            alt="Exclusive Story"
            className="w-[837px] h-[609px] object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6 mt-12">
        {/* First Column */}
        <Ourstory
          url={
            "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
          }
          number={"10.5"}
          content={"Sellers active on our site"}
        />

        {/* Second Column */}
        <div className="border border-gray-300 rounded-xl p-4 text-center bg-red-500 text-white">
          <div
            className="bg-white p-2 rounded-full mx-auto flex justify-center items-center"
            style={{ width: "70px", height: "70px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              width="40"
              height="40"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>

          <div className="mt-4">
            <h2 className="text-3xl font-bold">33k</h2>
            <p className="text-base font-light">Monthly Product Sale</p>
          </div>
        </div>

        {/* Third Column */}
        <Ourstory
          url={
            "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          }
          number={"10.5"}
          content={"Sellers active on our site"}
        />

        {/* Fourth Column */}
        <Ourstory
          url={
            "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
          }
          number={"25"}
          content={"Annual gross sale in our site"}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 mt-12">
        <Managers
          img={"5afc043392ee3cbb529f429b3e2098d3.png"}
          name={"Tom Cruise"}
          jobTitle={"Founder & Chairman"}
        />

        <Managers
          img={"sec.png"}
          name={"Emma Waston"}
          jobTitle={"Managing Director"}
        />

        <Managers
          img={"third.png"}
          name={"Will Smith"}
          jobTitle={"Product Designer"}
          imgStyle="object-fill"
        />
      </div>

      <FullService />
    </div>
  );
}

export default About;
