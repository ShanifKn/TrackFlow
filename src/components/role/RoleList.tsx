import { RoleData } from "@/core/interfaces/data/user.interface";
import React from "react";
import RoleTable from "./RoleTable";
import RoleBanner from "./RoleBanner";

const data: RoleData[] = [
  { id: 1, title: "Admin", updatedAt: "2 month ago", createdAt: "1 month ago" },
  { id: 2, title: "HR", updatedAt: "2 month ago", createdAt: "1 month ago" },
  { id: 3, title: "Purchase", updatedAt: "2 month ago", createdAt: "1 month ago" },
  { id: 4, title: "Accounts", updatedAt: "2 month ago", createdAt: "1 month ago" },
  { id: 5, title: "Inventory", updatedAt: "2 month ago", createdAt: "1 month ago" },
  { id: 6, title: "Manager", updatedAt: "2 month ago", createdAt: "1 month ago" },
];

const RoleList = () => {
  return (
    <>
      <RoleBanner />
      <RoleTable data={data} />
    </>
  );
};

export default RoleList;
