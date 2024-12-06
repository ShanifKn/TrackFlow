import React, { useState } from "react";
import { Check, ChevronsUpDown, UserPen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { usePathname, useRouter } from "next/navigation";

type ProductTableProps = {
  data: any[];
};

const frameworks = [
  { value: "branch a", label: "Branch A" },
  { value: "branch b", label: "Branch B" },
  { value: "branch c", label: "Branch C" },
  { value: "branch d", label: "Branch D" },
  { value: "branch e", label: "Branch E" },
];

const InventoryTable: React.FC<ProductTableProps> = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedBranch, setSelectedBranch] = useState<string | null>("All Category");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const router = useRouter();

  // Filter and search logic
  const filteredUsers = data.filter((user) => (selectedBranch === "All Category" || user.category.toLowerCase() === selectedBranch?.toLowerCase()) && [user.assetId, user.branch, user.category].some((field) => field.toLowerCase().includes(search.toLowerCase())));

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="my-10 bg-white p-4 rounded gap-4 h-[80vh]">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by asset id, category, branch"
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
              <th className="px-4 py-2 border border-gray-200 text-left">Sn</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Assets Id</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Category</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Audit Category</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Type</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Branch</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user: any, key: number) => (
              <tr
                key={key}
                className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-200">{key + 1}</td>
                <td className="px-4 py-2 border border-gray-200 text-black">{user.assetId}</td>
                <td className="px-4 py-2 border border-gray-200">{user.category}</td>
                <td className="px-4 py-2 border border-gray-200">{user.Audit_Category}</td>
                <td className="px-4 py-2 border border-gray-200">{user.type}</td>
                <td className="px-4 py-2 border border-gray-200">{user.branch}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Button
                      className="border  border-teal-900 text-white "
                      onClick={() => router.push("/inventory/1231")}>
                      view
                    </Button>
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
  );
};

export default InventoryTable;
