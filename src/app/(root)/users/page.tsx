import UsersList from "@/components/users/UsersList";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className="text-2xl text-black font-semibold "> Users Management</h1>
      <UsersList />
    </>
  );
};

export default page;
