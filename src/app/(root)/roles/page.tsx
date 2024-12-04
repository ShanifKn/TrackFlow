"use client";

import RoleList from "@/components/role/RoleList";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl text-black font-semibold "> Role Management</h1>
        <Button
          onClick={() => router.push("/roles/add-role")}
          className="text-white bg-[#006666] hover:bg-emerald-800 ">
          Add role
        </Button>
      </div>

      <RoleList />
    </>
  );
};

export default page;
