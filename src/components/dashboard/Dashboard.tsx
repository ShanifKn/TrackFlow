"use client";

import { CheckApi } from "@/app/api/services/user.service";
import { FolderGit, HandCoins, Split } from "lucide-react";
import React, { useEffect } from "react";
import DashboardCard from "./DashboardCard";
import SubtypeTable from "./SubtypeTable";
import CompanyTable from "./CompanyTable";
import BranchTable from "./BranchTable";

const Dashboard = () => {
  const apitest = async () => {
    try {
      const res = await CheckApi();
    } catch (error) {}
  };

  useEffect(() => {
    apitest();
  }, []);

  // todo need a table under this
  // todo sub type
  // todo loaction (branch) by table
  // todo

  return (
    <>
      <DashboardCard />

      <CompanyTable />

      <BranchTable />

      <SubtypeTable />
    </>
  );
};

export default Dashboard;
