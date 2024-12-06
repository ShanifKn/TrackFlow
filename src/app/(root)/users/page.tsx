"use client";

import { Button } from "@/components/ui/button";
import UsersList from "@/components/users/UsersList";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-black font-semibold "> Users Management</h1>

        <Button
          className="p-2 bg-white text-black border-2 border-black rounded-full text-xs px-3 py-2 hover:bg-white"
          onClick={() => router.back()}>
          <i className="pi pi-angle-left"></i>
          <ArrowLeft />
          BACK
        </Button>
      </div>

      <UsersList />
    </>
  );
};

export default page;
