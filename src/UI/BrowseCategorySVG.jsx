function BrowseCategorySVG({ svg, searchBy }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-44 h-36 rounded border border-solid border-[#0000004D]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-14"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d={svg} />
      </svg>

      <h3 className="text-base font-normal">{searchBy}</h3>
    </div>
  );
}

export default BrowseCategorySVG;
