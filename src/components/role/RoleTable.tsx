"use client";

import { UserPen } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";

type UserTableProps = {
  data: any[];
};

const RoleTable: React.FC<UserTableProps> = ({ data }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Pagination logic
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedUsers = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="bg-white my-10  rounded">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search by name, email, or role"
            className="p-2 border rounded w-1/2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-lg rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-200 text-left">Title</th>
                <th className="px-4 py-2 border border-gray-200 text-left">Created At</th>
                <th className="px-4 py-2 border border-gray-200 text-left">Updated At</th>
                <th className="px-4 py-2 border border-gray-200 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user: any) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-200 font-semibold">{user.title}</td>
                  <td className="px-4 py-2 border border-gray-200">{user.createdAt}</td>
                  <td className="px-4 py-2 border border-gray-200">{user.updatedAt}</td>

                  <td className="px-4 py-2 border border-gray-200 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button className="text-teal-600 hover:text-teal-800">
                        <UserPen />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <Button
            className="px-4 bg-gray-200 rounded disabled:opacity-50 text-black py-2 hover:bg-gray-300"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}>
            Previous
          </Button>
          <span>
            Page {currentPage} of {totalPages}
          </span>

          <Button
            className="px-4 bg-gray-200 rounded disabled:opacity-50 text-black py-2 hover:bg-gray-300"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoleTable;
