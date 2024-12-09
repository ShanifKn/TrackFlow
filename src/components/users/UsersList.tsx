import React, { useEffect, useState } from "react";
import { UserBanner } from "./UserBanner";
import UserTable from "./UserTable";
import { TableData } from "@/core/interfaces/data/user.interface";
import { GetUserProfileList } from "@/app/api/services/user.service";
import EmptyData from "../ui/emptyData";

const UsersList = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await GetUserProfileList("");

        setUsers(response.data); // Assuming the response contains the list of users
      } catch (err) {
        setError("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <UserTable data={users} />
    </div>
  );
};

export default UsersList;
