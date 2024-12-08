"use client";

import React, { useState } from "react";
import { TableData } from "@/core/interfaces/data/user.interface";
import { Check, ChevronsUpDown, UserPen } from "lucide-react";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation"; // Import useRouter
// Define the props for the component
type UserTableProps = {
  data: TableData[];
};

const frameworks = [
  { value: "branch a", label: "Branch A" },
  { value: "branch b", label: "Branch B" },
  { value: "branch c", label: "Branch C" },
  { value: "branch d", label: "Branch D" },
  { value: "branch e", label: "Branch E" },
];

const UserTable: React.FC<UserTableProps> = ({ data }) => {
  const router = useRouter(); // Initialize useRouter
  console.log("data", data);
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState<string | null>(
    "All Branches"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Filter and search logic
  const filteredUsers = data;

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handle redirection to user details
  const handleRedirect = (userId: string) => {
    router.push(`users/${userId}`); // Redirect to the user details page
  };
  return (
    <div className="bg-white my-10 ">
      <div className="p-6">
        {/* Search and Dropdown */}
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search by name, email, or role"
            className="p-2 border rounded w-1/2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={!!selectedBranch}
                className="w-[200px] justify-between bg-gray-200 hover:bg-gray-200"
              >
                {selectedBranch
                  ? frameworks.find((fw) => fw.value === selectedBranch)
                      ?.label || "All Branches"
                  : "Select Branch..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search branch..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No branch found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem
                      onSelect={() => setSelectedBranch("All Branches")}
                    >
                      All Branches
                      <Check
                        className={`ml-auto ${
                          selectedBranch === "All Branches"
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      />
                    </CommandItem>
                    {frameworks.map((fw) => (
                      <CommandItem
                        key={fw.value}
                        onSelect={() => setSelectedBranch(fw.value)}
                      >
                        {fw.label}
                        <Check
                          className={`ml-auto ${
                            selectedBranch === fw.value
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-lg rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-200 text-left">
                  Image
                </th>
                <th className="px-4 py-2 border border-gray-200 text-left">
                  Name
                </th>
                <th className="px-4 py-2 border border-gray-200 text-left">
                  Email
                </th>
                <th className="px-4 py-2 border border-gray-200 text-left">
                  Role
                </th>
                <th className="px-4 py-2 border border-gray-200 text-left">
                  Branch
                </th>
                <th className="px-4 py-2 border border-gray-200 text-center">
                  Status
                </th>
                <th className="px-4 py-2 border border-gray-200 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user: any) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-200">
                    {user.image ? (
                      <img
                        src={user.image}
                        alt={user.firstName}
                        className="w-10 h-10 rounded-full"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold uppercase">
                        {user.firstName.charAt(0)}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-200">
                    {user.firstName}
                  </td>
                  <td className="px-4 py-2 border border-gray-200">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 border border-gray-200">
                    {user.role}
                  </td>
                  <td className="px-4 py-2 border border-gray-200">
                    {user.branch}
                  </td>
                  <td className="px-4 py-2 border border-gray-200 text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={user.status}
                        className="sr-only peer"
                        readOnly
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                    </label>
                  </td>
                  <td className="px-4 py-2 border border-gray-200 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        className="text-teal-600 hover:text-teal-800"
                        onClick={() => handleRedirect(user._id)} // Handle redirection on click
                      >
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
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span>
            Page {currentPage} of {totalPages}
          </span>

          <Button
            className="px-4 bg-gray-200 rounded disabled:opacity-50 text-black py-2 hover:bg-gray-300"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
