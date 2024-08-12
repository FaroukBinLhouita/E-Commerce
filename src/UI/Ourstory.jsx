function Ourstory({ url, number, content }) {
  return (
    <div className="border border-gray-300 rounded-xl p-4 text-center">
      <div
        className="bg-black p-2 rounded-full mx-auto flex justify-center items-center"
        style={{ width: "70px", height: "70px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          width="40px"
          height="40px"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d={url} />
        </svg>
      </div>

      <div className="mt-4">
        <h2 className="text-3xl font-bold">{number}k</h2>
        <p className="text-base font-light">{content}</p>
      </div>
    </div>
  );
}

export default Ourstory;
