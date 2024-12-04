"use client";

import { BellDot, ChevronRight, PanelRightClose, PanelRightOpen, UserRound } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useSidebar } from "./SidebarContext";
import { Button } from "../ui/button";

const Navbar = () => {
  const [userName, setUserName] = useState("User Name"); // Dynamic user name
  const [email, setEmail] = useState("username@admin.com"); // Dynamic email

  const { isCompact, toggleSidebar } = useSidebar();

  return (
    <nav className="flex bg-gray-100 border-b border-gray-400 shadow-md items-center">
      <button
        className="px-3"
        onClick={toggleSidebar}>
        {isCompact ? <PanelRightClose size={30} /> : <PanelRightOpen size={30} />}
      </button>

      <div className="flex justify-end items-center p-6 px-3 w-full z-50">
        <div className="flex items-center space-x-6">
          <button className="relative focus:outline-none">
            <BellDot />
            <span className="absolute top-0 right-0 h-2 w-2 bg-[#006666] rounded-full"></span>
          </button>

          {/* User Info */}
          <div className="flex items-center space-x-2">
            <div className="bg-[#006666] text-white rounded-full h-10 w-10 flex items-center justify-center">
              <UserRound />
            </div>
            <div className="text-left">
              <span className="block text-gray-800 font-medium">{userName}</span>
              <span className="block text-gray-500 text-sm">{email}</span>
            </div>
          </div>

          {/* Logout Button */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
