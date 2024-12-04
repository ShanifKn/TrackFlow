"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import AddRoles from "@/components/users/AddRoles";

const page = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl text-black font-semibold ">Edit Profile</h1>

        <Button
          className="p-2 bg-white text-black border-2 border-black rounded-full text-xs px-3 py-2 hover:bg-white"
          onClick={() => router.back()}>
          <i className="pi pi-angle-left"></i>
          <ArrowLeft />
          BACK
        </Button>
      </div>

      <AddRoles />
    </>
  );
};

export default page;
