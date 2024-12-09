"use client";

import { useRouter } from "next/navigation";
import { FileBadge, Split, UserRoundPlus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export const UserBanner = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-6 gap-4 my-7">
      {/* <div className="col-span-1 h-52 rounded-md bg-[#006666] flex flex-col justify-center text-white items-center gap-2 py-5">
        <div className="bg-white text-black rounded-md h-14 w-12 flex items-center justify-center ">
          <FileBadge size={30} />
        </div>
        <h3 className="font-semibold text-4xl ">07</h3>
        <h1 className="font-medium text-xl">Total Roles</h1>
      </div>
      <div className="col-span-3 h-52  p-5 bg-white rounded-md flex flex-col gap-3 justify-between">
        <h1 className="font-semibold text-2xl">Total Users by Branch</h1>
        <div className="flex gap-3">
          <div className="p-5 flex flex-col justify-center items-center bg-green-200 rounded-lg w-28 h-20">
            <h1 className="font-medium tracking-wide text-lg text-black">Branch</h1>
            <span className="font-semibold text-2xl text-green-900">10</span>
          </div>

          <div className="p-5 flex flex-col justify-center items-center bg-green-200 rounded-lg w-28 h-20">
            <h1 className="font-medium tracking-wide text-lg text-black">Staff</h1>
            <span className="font-semibold text-2xl text-green-900">10</span>
          </div>

          <div className="p-5 flex flex-col justify-center items-center bg-green-200 rounded-lg w-28 h-20">
            <h1 className="font-medium tracking-wide text-lg text-black">Creator</h1>
            <span className="font-semibold text-2xl text-green-900">10</span>
          </div>

          <div className="p-5 flex flex-col justify-center items-center bg-green-200 rounded-lg w-28 h-20">
            <h1 className="font-medium tracking-wide text-lg text-black">User</h1>
            <span className="font-semibold text-2xl text-green-900">10</span>
          </div>

          <div className="p-5 flex flex-col justify-center items-center bg-green-200 rounded-lg  w-28 h-20">
            <h1 className="font-medium tracking-wide text-lg text-black">Staff</h1>
            <span className="font-semibold text-2xl text-green-900">10</span>
          </div>
        </div>
      </div> */}
      <div className="col-span-2 h-52 grid grid-cols-2 gap-3  rounded-md">
        <div className=" rounded-md bg-white flex flex-col justify-center text-black items-center gap-2 py-5">
          <div className="bg-[#006666] text-white rounded-md h-14 w-14 flex items-center justify-center ">
            <UserRoundPlus size={30} />
          </div>
          <h3 className="font-semibold text-xl ">User</h3>
          <Button
            className="text-white bg-[#006666] hover:bg-emerald-800"
            onClick={() => router.push("/users/create")}>
            Add user
          </Button>
        </div>

        {/* <div className=" rounded-md bg-white flex flex-col justify-center text-black items-center gap-2 py-5">
          <div className="bg-red-400 text-white rounded-md h-14 w-12 flex items-center justify-center ">
            <Split size={30} />
          </div>
          <h3 className="font-semibold text-xl ">Role</h3>
          <Button
            className="text-white bg-red-400 hover:bg-red-500"
            onClick={() => router.push("/roles")}>
            Add role
          </Button>
        </div> */}
      </div>
    </div>
  );
};
