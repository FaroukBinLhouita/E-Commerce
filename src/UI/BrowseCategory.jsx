import BrowseCategorySVG from "./BrowseCategorySVG";
import CatogryProducts from "./CatogryProducts";

function BrowseCategory({ category, syntax, buttons = false }) {
  return (
    <div className="mt-8 flex flex-col px-4 md:px-8 pb-12 border-b-[0.5px] border-x-zinc-700">
      <CatogryProducts category={category} syntax={syntax} buttons={buttons} />

      <div className="mt-8 flex gap-20 justify-center w-full overflow-hidden">
        <BrowseCategorySVG
          svg={
            "M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
          }
          searchBy="Phones"
        />

        <BrowseCategorySVG
          svg={
            "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          }
          searchBy="Screens"
        />

        <BrowseCategorySVG svg={"m4.5 12.75 6 6 9-13.5"} searchBy="Jackets" />

        <BrowseCategorySVG svg={"m4.5 12.75 6 6 9-13.5"} searchBy="T-Shirts" />
      </div>
    </div>
  );
}

export default BrowseCategory;
