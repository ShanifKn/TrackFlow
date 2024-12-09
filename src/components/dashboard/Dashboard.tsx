"use client";

import { CheckApi } from "@/app/api/services/user.service";
import { FolderGit, HandCoins, Split } from "lucide-react";
import React, { useEffect } from "react";

const Dashboard = () => {
  const apitest = async () => {
    try {
      const res = await CheckApi();

    } catch (error) {}
  };

  useEffect(() => {
    apitest();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 ">
      <div className="p-6 rounded-lg shadow-md flex items-center justify-between border-b-8 border-teal-100 ">
        <div className="flex gap-4 items-center justify-between w-full">
          <div className="grid gap-3">
            <h4 className="text-lg text-gray-700 font-medium">Total Assets</h4>
            <h1 className="text-2xl text-black font-semibold">
              1,532 <span className="text-sm text-gray-400">(This month)</span>
            </h1>
          </div>

          <div className="">
            <div className="bg-[#006666] text-white rounded-full h-10 w-10 flex items-center justify-center">
              <FolderGit />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-md flex items-center justify-between border-b-8 border-yellow-200 ">
        <div className="flex gap-4 items-center justify-between w-full">
          <div className="grid gap-3">
            <h4 className="text-lg text-gray-700 font-medium">Total Branch</h4>
            <h1 className="text-2xl text-black font-semibold">
              15 <span className="text-sm text-gray-400">(This month)</span>
            </h1>
          </div>

          <div className="">
            <div className="bg-yellow-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
              <HandCoins />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-md flex items-center justify-between border-b-8 border-red-200 ">
        <div className="flex gap-4 items-center justify-between w-full">
          <div className="grid gap-3">
            <h4 className="text-lg text-gray-700 font-medium">Total Netvalue</h4>
            <h1 className="text-2xl text-black font-semibold">
              25 <span className="text-sm text-gray-400">(This month)</span>
            </h1>
          </div>

          <div className="">
            <div className="bg-red-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
              <Split />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-md flex items-center justify-between border-b-8 border-gray-200 ">
        <div className="flex gap-4 items-center justify-between w-full">
          <div className="grid gap-3">
            <h4 className="text-sm text-gray-700 font-medium">Total Unassigned Asset</h4>
            <h1 className="text-2xl text-black font-semibold">
              25 <span className="text-sm text-gray-400">(This month)</span>
            </h1>
          </div>

          <div className="">
            <div className="bg-gray-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
              <Split />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
