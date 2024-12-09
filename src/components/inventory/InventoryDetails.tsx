import React, { useState } from "react";
import { Button } from "../ui/button";
import TransferDailog from "./TransferDailog";

const history: any[] = [
  {
    _id: 1,
    date: "12 SEP 2021",
    branch: "Al Ain",
    supervisor: "Mohammed",
    employee: "Fazal",
  },
  {
    _id: 2,
    date: "25 OCT 2021",
    branch: "Dubai",
    supervisor: "Ahmed",
    employee: "Sara",
  },
  {
    _id: 3,
    date: "05 NOV 2021",
    branch: "Sharjah",
    supervisor: "Khalid",
    employee: "Omar",
  },
  {
    _id: 4,
    date: "18 DEC 2021",
    branch: "Abu Dhabi",
    supervisor: "Hassan",
    employee: "Aisha",
  },
  {
    _id: 5,
    date: "10 JAN 2022",
    branch: "Ras Al Khaimah",
    supervisor: "Zaid",
    employee: "Mariam",
  },
  {
    _id: 6,
    date: "14 FEB 2022",
    branch: "Fujairah",
    supervisor: "Ali",
    employee: "Noor",
  },
];

const InventoryDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  // Pagination logic
  const totalPages = Math.ceil(history.length / rowsPerPage);
  const paginatedData = history.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="my-5 bg-white p-6 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-black text-xl tracking-wide">Transfer History </h1>

        <Button
          className=" text-white bg-[#006666] hover:bg-emerald-800 "
          onClick={handleOpenDialog}>
          Asset transfer
        </Button>

        <TransferDailog
          open={dialogOpen}
          onClose={handleCloseDialog}
        />
      </div>

      <div className="overflow-x-auto my-4">
        <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-lg rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-200 text-left">Sn</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Date</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Branch</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Supervisor</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Employee</th>
            </tr>
          </thead>
          <tbody>
            {history.map((user: any, key: number) => (
              <tr
                key={key}
                className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-200">{key + 1}</td>
                <td className="px-4 py-2 border border-gray-200 text-black">{user.date}</td>
                <td className="px-4 py-2 border border-gray-200">{user.branch}</td>
                <td className="px-4 py-2 border border-gray-200">{user.supervisor}</td>
                <td className="px-4 py-2 border border-gray-200">{user.employee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

export default InventoryDetails;
