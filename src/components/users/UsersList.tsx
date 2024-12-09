import React, { useEffect, useState } from "react";
import { UserBanner } from "./UserBanner";
import UserTable from "./UserTable";
import { TableData } from "@/core/interfaces/data/user.interface";
import { GetUserProfileList } from "@/app/api/services/user.service";

const data: any[] = [
  {
    id: 1,
    bio: "Enthusiastic team player with a knack for problem-solving.",
    userId: "U12345",
    email: "john.doe@example.com",
    password: "SecurePass123!",
    branch: "New York",
    role: "Manager",
    firstName: "John",
    lastName: "Doe",
  },
  {
    id: 2,
    bio: "Experienced in project management and team leadership.",
    userId: "U12346",
    email: "jane.smith@example.com",
    password: "StrongPassword456!",
    branch: "San Francisco",
    role: "HR",
    firstName: "Jane",
    lastName: "Smith",
  },
  {
    id: 3,
    bio: "Passionate about developing innovative solutions.",
    userId: "U12347",
    email: "mike.jones@example.com",
    password: "Passw0rd789!",
    branch: "Los Angeles",
    role: "Developer",
    firstName: "Mike",
    lastName: "Jones",
  },
];

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
      {/* <UserBanner /> */}

      <UserTable data={data} />
    </div>
  );
};

export default UsersList;
