import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { UserButton } from "@clerk/clerk-react";
import { ChevronRight, CirclePlus, Plus } from "lucide-react";
import Logo from "./Logo";
import { SIDEBAR_LINKS } from "@/constants";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import TaskFormDialog from "./TaskFormDialog";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link to="/app/inbox" className="p-2">
          <Logo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <TaskFormDialog>
                  <SidebarMenuButton className="!text-primary">
                    <CirclePlus /> Add Task
                  </SidebarMenuButton>
                </TaskFormDialog>
              </SidebarMenuItem>
              {SIDEBAR_LINKS.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link to={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>0</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel
              className="text-sm text-sidebar-foreground hover:bg-sidebar-accent"
              asChild
            >
              <CollapsibleTrigger>
                <ChevronRight className="me-2 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                Projects
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <SidebarGroupAction aria-label="Add Project">
              <Plus />
            </SidebarGroupAction>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <p className="text-muted-foreground">
                      Click + to add some projects
                    </p>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter>
        <UserButton
          showName
          appearance={{
            elements: {
              rootBox: "w-full",
              userButtonTrigger:
                "!shadow-none w-full justify-start p-2 rounded-md hover:bg-sidebar-accent",
              userButtonBox: "flex-row-reverse shadow-none gap-2",
              userButtonOuterIdentifier: "ps-0",
              popoverBox: "pointer-events-auto",
            },
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
