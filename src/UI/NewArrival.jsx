import ElmentNewArrival from "./ElmentNewArrival";
import firstImg from "../../images/playstation.png";
import secImg from "../../images/3headphone.png";
import thirdImg from "../../images/Gucci.png";

function NewArrival() {
  return (
    <div
      id="womens-clothing"
      className="mt-8 gap-8 grid grid-cols-2  px-4 md:px-8"
    >
      <ElmentNewArrival
        name={"Play Station 5"}
        pargraph={"Black and White version of the PS5 coming out on sale."}
        w="511"
        h="511"
        src={firstImg}
        top={"32"}
      />
      <div className="grid gap-16 items-baseline">
        <ElmentNewArrival
          name={"Speakers"}
          pargraph={"Amazon wireless speakers"}
          w="190"
          h="221"
          src={secImg}
        />

        <ElmentNewArrival
          name={"Women's Collections"}
          pargraph={"Featured woman collections that give you another vibe."}
          w="201"
          h="203"
          src={thirdImg}
        />
      </div>
    </div>
  );
}

export default NewArrival;
