import SideNavigation from "@/components/SideNavigation";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-12 h-full items-stretch">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
