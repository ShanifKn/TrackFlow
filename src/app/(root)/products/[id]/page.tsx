"use client";

import AddProduct from "@/components/products/AddProduct";
import EditProduct from "@/components/products/EditProduct";
import ProductHistory from "@/components/products/ProductHistory";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const params = useParams(); // This will get the dynamic parameters from the URL
  const { id } = params; // Extract the 'id' from params

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-black font-semibold ">
          Product Management
        </h1>
        <Button
          className="p-2 bg-white text-black border-2 border-black rounded-full text-xs px-3 py-2 hover:bg-white"
          onClick={() => router.back()}
        >
          <i className="pi pi-angle-left"></i>
          <ArrowLeft />
          BACK
        </Button>
      </div>

      <EditProduct id={id} />

      <ProductHistory />
    </>
  );
};

export default Page;
