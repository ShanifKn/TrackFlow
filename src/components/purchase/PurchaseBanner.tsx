"use client";

import { ShoppingBag, Signature, Split, UserRoundPlus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const PurchaseBanner = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-3 gap-4 my-7">
      <div className="col-span-2 h-48  p-5 bg-white rounded-md flex flex-col gap-3 justify-between">
        <h1 className="font-semibold text-2xl">Total Purchase count</h1>
        <div className="flex gap-3">
          <div className="p-5 flex flex-col justify-center items-center bg-green-200 rounded-lg w-28 h-20">
            <h1 className="font-medium tracking-wide text-lg text-black">Pending</h1>
            <span className="font-semibold text-2xl text-green-900">10</span>
          </div>

          <div className="p-5 flex flex-col justify-center items-center bg-green-200 rounded-lg w-28 h-20">
            <h1 className="font-medium tracking-wide text-lg text-black">Approved</h1>
            <span className="font-semibold text-2xl text-green-900">10</span>
          </div>

          <div className="p-5 flex flex-col justify-center items-center bg-green-200 rounded-lg w-28 h-20">
            <h1 className="font-medium tracking-wide text-lg text-black">Delivered</h1>
            <span className="font-semibold text-2xl text-green-900">10</span>
          </div>

          <div className="p-5 flex flex-col justify-center items-center bg-green-200 rounded-lg w-28 h-20">
            <h1 className="font-medium tracking-wide text-lg text-black">Canceled</h1>
            <span className="font-semibold text-2xl text-green-900">10</span>
          </div>
        </div>
      </div>

      <div className="col-span-1 h-48 grid grid-cols-2 gap-3  rounded-md">
        <div className=" rounded-md bg-white flex flex-col justify-center text-black items-center gap-2 py-5">
          <div className="bg-[#006666] text-white rounded-md h-14 w-14 flex items-center justify-center ">
            <ShoppingBag size={30} />
          </div>
          <h3 className="font-semibold text-xl ">Purchase</h3>
          <Button
            className="text-white bg-[#006666] hover:bg-emerald-800"
            onClick={() => router.push("/purchase/create-purchase")}>
            Create PO
          </Button>
        </div>

        <div className=" rounded-md bg-white flex flex-col justify-center text-black items-center gap-2 py-5">
          <div className="bg-red-400 text-white rounded-md h-14 w-12 flex items-center justify-center ">
            <Signature size={30} />
          </div>
          <h3 className="font-semibold text-xl ">Approvals</h3>
          <Button
            className="text-white bg-red-400 hover:bg-red-500"
            onClick={() => router.push("/roles")}>
            Pending list
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseBanner;
