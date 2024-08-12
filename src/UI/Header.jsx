import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

function Header() {
  return (
    <header className="container mx-auto border-b-2">
      <TopHeader />
      <BottomHeader />
    </header>
  );
}

export default Header;
