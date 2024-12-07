"use client";

import { BellDot, ChartCandlestick, ClipboardPlus, Dessert, House, LogOut, NotebookTabs, ScanBarcode, ShieldCheck, ShoppingBag, ShoppingBasket, Signature, SquareChartGantt, Users } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useSidebar } from "./SidebarContext";
import Image from "next/image";

const sidebarItems = [
  { title: "Dashboard", url: "/", icon: <House /> },
  { title: "Users", url: "/users", icon: <Users /> },
  { title: "Vendor", url: "/vendors", icon: <Dessert /> },
  { title: "Products", url: "/products", icon: <ScanBarcode /> },
  { title: "Assets", url: "/assets", icon: <SquareChartGantt /> },
  { title: "Inventory", url: "/inventory", icon: <ChartCandlestick /> },
  { title: "Reports", url: "/report", icon: <ClipboardPlus /> },
  {
    title: "Version 2",
    icon: <ShieldCheck />,
    subItems: [
      { title: "HR Dept", url: "/hr", icon: <ShieldCheck /> },
      { title: "Purchase", url: "/purchase", icon: <ShoppingBag /> },
      { title: "Accounts", url: "/accounts", icon: <NotebookTabs /> },
    ],
  },

  { title: "Notifications", url: "#", icon: <BellDot />, badge: 5 },
  { title: "Approvals", url: "#", icon: <Signature />, badge: 15 },
];

const Sidebar = () => {
  const { isCompact } = useSidebar();
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks which dropdown is open

  const handleDropdownToggle = (index: any) => {
    setOpenDropdown(openDropdown === index ? null : index); // Toggle the dropdown
  };

  return (
    <div className={`fixed flex flex-col top-0 left-0 ${isCompact ? "w-[4.5rem]" : "w-72"} bg-[#006666] h-full text-white transition-all duration-300 border-none z-10 sidebar`}>
      <div className="flex items-center justify-center h-20 shadow-md">
        {!isCompact && (
          <h1 className="text-2xl uppercase text-yellow-300 font-bold flex items-end gap-2">
            <Image
              src="/logo2.jpeg"
              width={200}
              height={50}
              alt="logo"
            />
          </h1>
        )}
      </div>
      <ul className={`flex flex-col py-4 ${isCompact ? "p-6" : "p-7"} space-y-2`}>
        {sidebarItems.map((item, index) => (
          <li key={index}>
            {!item.subItems ? (
              // Regular Sidebar Items
              <Link
                href={item.url}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-slate-300 hover:text-[#fff] cursor-pointer">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-slate-300 hover:text-[#fff]">{item.icon}</span>
                {!isCompact && (
                  <>
                    <span className="text-base font-medium tracking-normal">{item.title}</span>
                    {item.badge && <span className="ml-3 mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">{item.badge}</span>}
                  </>
                )}
              </Link>
            ) : (
              // Dropdown Items
              <div>
                <div
                  onClick={() => handleDropdownToggle(index)}
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-slate-300 hover:text-[#fff] cursor-pointer">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-slate-300 hover:text-[#fff]">{item.icon}</span>
                  {!isCompact && <span className="text-base font-medium tracking-normal">{item.title}</span>}
                  {!isCompact && <span className={`ml-auto transition-transform ${openDropdown === index ? "rotate-90" : "rotate-0"}`}>▶</span>}
                </div>
                {openDropdown === index && (
                  <ul className="pl-12 space-y-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.url}
                          className="flex items-center h-10 text-sm text-slate-300 hover:text-[#fff]">
                          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-slate-300 hover:text-[#fff]">{subItem.icon}</span>

                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        ))}
        <li>
          <Link
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-slate-300 hover:text-[#fff]">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <LogOut />
            </span>
            {!isCompact && <span className="text-base font-medium tracking-normal">Logout</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
