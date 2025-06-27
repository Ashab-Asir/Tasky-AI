import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar></AppSidebar>
      <SidebarTrigger></SidebarTrigger>
      <div>app lay</div>
      <Outlet></Outlet>
    </SidebarProvider>
  );
};

export default AppLayout;
