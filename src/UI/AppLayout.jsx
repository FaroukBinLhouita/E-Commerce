import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Header />

      <main>
        <div className="max-w-screen-xl mx-auto flex flex-col gap-[3.2rem]">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
