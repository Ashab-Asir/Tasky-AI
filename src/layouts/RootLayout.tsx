import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="min-h-[100vh] flex flex-col overflow-hidden">
        <Header></Header>
        <main className="grow grid grid-cols-1 items-center pt-36 pb-16">
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default RootLayout;
