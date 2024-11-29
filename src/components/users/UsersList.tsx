import React from "react";
import { UserBanner } from "./UserBanner";
import UserTable from "./UserTable";
import { TableData } from "@/core/interfaces/data/user.interface";

const data: TableData[] = [
  { id: 1, image: null, name: "Yuki Tanaka", email: "yuki.tanaka@example.com", role: "user", branch: "Branch A", createdAt: "1 month ago", status: true },
  { id: 2, image: "https://via.placeholder.com/40", name: "William Lee", email: "william.lee@example.com", role: "author", branch: "Branch B", createdAt: "1 month ago", status: true },
  { id: 3, image: null, name: "Sophia Lee", email: "sophia.lee@example.com", role: "staff", branch: "Branch A", createdAt: "1 month ago", status: false },
  { id: 4, image: null, name: "Sophia Brown", email: "sophia.brown@example.com", role: "user", branch: "Branch C", createdAt: "1 month ago", status: true },
  { id: 5, image: null, name: "Yuki Tanaka", email: "yuki.tanaka@example.com", role: "user", branch: "Branch A", createdAt: "1 month ago", status: true },
  { id: 6, image: "https://via.placeholder.com/40", name: "William Lee", email: "william.lee@example.com", role: "author", branch: "Branch B", createdAt: "1 month ago", status: true },
  { id: 7, image: null, name: "Sophia Lee", email: "sophia.lee@example.com", role: "staff", branch: "Branch A", createdAt: "1 month ago", status: false },
];

const branches = ["All Branches", "Branch A", "Branch B", "Branch C"];

const UsersList = () => {
  return (
    <div>
      <UserBanner />

      <UserTable
        data={data}
        branch={branches}
      />
    </div>
  );
};

export default UsersList;
