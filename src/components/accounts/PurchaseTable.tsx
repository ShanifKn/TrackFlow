import React, { useState } from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PurchaseOrder } from "@/core/interfaces/data/purchase.inerface";

type PurchaseTableProps = {
  data: PurchaseOrder[];
};

export const PurchaseTable: React.FC<PurchaseTableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState<string | null>("All Branches");

  const rowsPerPage = 10;

  // Filter and search logic
  const filteredUsers = data.filter((po) => (selectedBranch === "All Branches" || po.branch.toLowerCase() === selectedBranch?.toLowerCase()) && [po.po, po.date, po.branch, po.vendor, po.category].some((field) => field.toString().toLowerCase().includes(search.toLowerCase())));

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="bg-white my-10">
      {/* Search and Dropdown */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by po, date , branch"
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
              <th className="px-4 py-2 border border-gray-200 text-left">PO number</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Invoice no</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Date</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Branch</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Vendor</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Category</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Payment</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Payment Net</th>
              <th className="px-4 py-2 border border-gray-200 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user: any, index: number) => (
              <tr
                key={index}
                className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-200 text-black">{user.po}</td>
                <td className="px-4 py-2 border border-gray-200 text-red-400 font-semibold">{user.in}</td>
                <td className="px-4 py-2 border border-gray-200">{user.date}</td>
                <td className="px-4 py-2 border border-gray-200">{user.branch}</td>
                <td className="px-4 py-2 border border-gray-200">{user.vendor}</td>
                <td className="px-4 py-2 border border-gray-200">{user.category}</td>
                <td className="px-4 py-2 border border-gray-200">{user.payment}</td>

                <td className="px-4 py-2 border border-gray-200">{user.paymentMethod}</td>

                <td className="px-4 py-2 border border-gray-200 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Button className="border  border-teal-900 text-white ">view</Button>
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
