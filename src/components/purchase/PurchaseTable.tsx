import React, { useState } from "react";
import { Button } from "../ui/button";
import { UserPen } from "lucide-react";

const data = [
  {
    po: 112312,
    date: "12 Sep 2023",
    branch: "Duhai",
    vendor: "Sky Technologies",
    category: "IT",
    status: "Pending",
  },
  {
    po: 112313,
    date: "15 Sep 2023",
    branch: "Noida",
    vendor: "Tech Solutions Pvt Ltd",
    category: "Office Supplies",
    status: "Approved",
  },
  {
    po: 112314,
    date: "20 Sep 2023",
    branch: "Gurgaon",
    vendor: "Alpha Electronics",
    category: "Electronics",
    status: "Rejected",
  },
  {
    po: 112315,
    date: "05 Oct 2023",
    branch: "Mumbai",
    vendor: "Delta Infotech",
    category: "IT",
    status: "Pending",
  },
  {
    po: 112316,
    date: "10 Oct 2023",
    branch: "Hyderabad",
    vendor: "Innovate Supplies Co.",
    category: "Furniture",
    status: "Approved",
  },
  {
    po: 112317,
    date: "18 Oct 2023",
    branch: "Duhai",
    vendor: "Sky Technologies",
    category: "IT",
    status: "Rejected",
  },
  {
    po: 112318,
    date: "25 Oct 2023",
    branch: "Noida",
    vendor: "Creative Solutions",
    category: "Stationery",
    status: "Pending",
  },
  {
    po: 112319,
    date: "30 Oct 2023",
    branch: "Gurgaon",
    vendor: "NextGen Innovations",
    category: "IT",
    status: "Approved",
  },
  {
    po: 112320,
    date: "05 Nov 2023",
    branch: "Mumbai",
    vendor: "FastTech Services",
    category: "Electronics",
    status: "Pending",
  },
  {
    po: 112321,
    date: "12 Nov 2023",
    branch: "Hyderabad",
    vendor: "Reliable Suppliers",
    category: "Office Supplies",
    status: "Rejected",
  },
];

const PurchaseTable = () => {
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
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-lg rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-200 text-left">PO number</th>
                <th className="px-4 py-2 border border-gray-200 text-left">Date</th>
                <th className="px-4 py-2 border border-gray-200 text-left">Branch</th>
                <th className="px-4 py-2 border border-gray-200 text-left">Vendor</th>
                <th className="px-4 py-2 border border-gray-200 text-left">Category</th>
                <th className="px-4 py-2 border border-gray-200 text-center">Status</th>
                <th className="px-4 py-2 border border-gray-200 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user: any, index: number) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-200">{user.po}</td>
                  <td className="px-4 py-2 border border-gray-200">{user.date}</td>
                  <td className="px-4 py-2 border border-gray-200">{user.branch}</td>
                  <td className="px-4 py-2 border border-gray-200">{user.vendor}</td>
                  <td className="px-4 py-2 border border-gray-200">{user.category}</td>
                  <td className="px-4 py-2 border border-gray-200 text-center">
                    <label className={`relative inline-flex items-center cursor-pointer px-3 py-1 rounded font-bold ${user.status === "Pending" ? "text-yellow-500" : user.status === "Approved" ? "text-green-500" : user.status === "Rejected" ? "text-red-500" : "text-gray-900"}`}>{user.status}</label>
                  </td>

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
    </div>
  );
};

export default PurchaseTable;
