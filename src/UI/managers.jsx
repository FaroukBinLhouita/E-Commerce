function Managers({ img, imgStyle = "object-cover", name, jobTitle }) {
  return (
    <div className="p-4">
      <div className="bg-[#F5F5F5] w-[370px] h-[430px] p-[39px] [67px] rounded-[4px] relative">
        <img
          src={img}
          alt="Description"
          className={`absolute w-[236px] h-[391px] top-[39px] left-[67px] ${imgStyle}`}
        />
      </div>
      <h2
        className="text-2xl font-medium mt-4"
        style={{
          fontSize: "32px",
          lineHeight: "30px",
          letterSpacing: "0.04em",
          textAlign: "left",
        }}
      >
        {name}
      </h2>
      <p
        className="text-base mt-2"
        style={{
          fontSize: "16px",
          lineHeight: "24px",
          textAlign: "left",
        }}
      >
        {jobTitle}
      </p>

      <div className="flex gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M22.46 6.003c-.813.361-1.688.605-2.607.715a4.48 4.48 0 0 0 1.95-2.472 8.969 8.969 0 0 1-2.83 1.082A4.486 4.486 0 0 0 15.88 5c-2.48 0-4.492 2.017-4.492 4.493 0 .35.039.692.116 1.021a12.76 12.76 0 0 1-9.278-4.695A4.468 4.468 0 0 0 3.024 7.57a4.485 4.485 0 0 0 1.394 5.983 4.493 4.493 0 0 1-2.028-.56v.057c0 2.164 1.537 3.968 3.575 4.373a4.474 4.474 0 0 1-2.022.078c.573 1.785 2.23 3.082 4.188 3.117A8.98 8.98 0 0 1 1.5 20.94a12.737 12.737 0 0 0 6.918 2.026c8.31 0 12.857-6.883 12.857-12.857 0-.195-.004-.39-.013-.583a9.136 9.136 0 0 0 2.24-2.334z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15A1.5 1.5 0 0 0 21 19.5v-15A1.5 1.5 0 0 0 19.5 3zM9 16H7V9h2v7zm-1-8.5c-.83 0-1.5-.67-1.5-1.5S7.17 4 8 4s1.5.67 1.5 1.5S8.83 6.5 8 6.5zM16 16h-2v-3.5c0-1.31-.68-2-1.5-2-.82 0-1.5.69-1.5 2V16h-2V9h2v1.1c.43-.66 1.09-1.1 1.9-1.1 1.41 0 2.6.95 2.6 2.6V16z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Managers;
