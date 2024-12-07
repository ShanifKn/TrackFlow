import React, { useState } from "react";
import { Button } from "../ui/button";

const data: any[] = [
  { id: 1, PO: 12312, desc: "asdfasd asasd.", vendor: "xxx", date: "1 Jan 2020", status: "pending" },
  { id: 2, PO: 12312, desc: "asdfasd asasd.", vendor: "xxx", date: "1 Jan 2020", status: "pending" },
  { id: 3, PO: 12312, desc: "asdfasd asasd.", vendor: "xxx", date: "1 Jan 2020", status: "pending" },
  { id: 4, PO: 12312, desc: "asdfasd asasd.", vendor: "xxx", date: "1 Jan 2020", status: "pending" },
];

const ProductHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Pagination logic
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedUsers = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="my-10 bg-white  gap-4 p-4">
      <h1 className="font-semibold text-black text-xl tracking-wide">Pruchase History</h1>

      {/* Table */}
      <div className="overflow-x-auto mt-5">
        <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-lg rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-200 text-left">Purchase Order</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Description</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Vendor</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Status</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Date</th>
              <th className="px-4 py-2 border border-gray-200 text-center">View</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user: any) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-200 font-semibold">{user.PO}</td>
                <td className="px-4 py-2 border border-gray-200">{user.desc}</td>
                <td className="px-4 py-2 border border-gray-200">{user.vendor}</td>
                <td className="px-4 py-2 border border-gray-200">{user.status}</td>
                <td className="px-4 py-2 border border-gray-200">{user.date}</td>

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
    </div>
  );
};

export default ProductHistory;
