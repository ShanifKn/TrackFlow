"use client";

import React from "react";

import { useSidebar } from "@/components/navbar/SidebarContext";
import Sidebar from "@/components/navbar/app-sidebar";
import Navbar from "@/components/navbar/app-navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { isCompact } = useSidebar(); //

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className={`flex-1 flex flex-col ${isCompact ? "ml-[4.5rem]" : "ml-72"}`}>
        <Navbar />
        <div className="pt-7 px-7">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
