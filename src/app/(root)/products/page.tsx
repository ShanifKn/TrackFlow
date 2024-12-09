"use client";

import ProductList from "@/components/products/ProductList";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";


const Page = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-black font-semibold ">Product Management</h1>
        <Button
          className="p-2 bg-white text-black border-2 border-black rounded-full text-xs px-3 py-2 hover:bg-white"
          onClick={() => router.back()}>
          <ArrowLeft />
          BACK
        </Button>
      </div>

      <ProductList />
    </>
  );
};

export default Page;
