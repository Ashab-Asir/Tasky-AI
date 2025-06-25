import { logo } from "@/assets";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Loader2 } from "lucide-react";
import { Outlet, useNavigation } from "react-router-dom";

const RootLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading" && !navigation.formData;
  return (
    <>
      <div className="relative  isolate min-h-[100vh] flex flex-col overflow-hidden">
        <Header></Header>
        <main className="grow grid grid-cols-1 items-center pt-36 pb-16">
          <Outlet></Outlet>
        </main>
        <Footer></Footer>

        {isLoading && (
          <div className="fixed top-0 w-full left-0 z-50 h-[100vh] bg-background flex flex-col justify-center items-center gap-5">
            <img src={logo} width={64} height={64} alt="" />
            <Loader2 className="text-muted-foreground animate-spin"></Loader2>
          </div>
        )}
      </div>
    </>
  );
};

export default RootLayout;
