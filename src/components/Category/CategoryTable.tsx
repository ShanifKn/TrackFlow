import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";

const data: any[] = [
  {
    _id: 1,
    category: "Vehicles",
    description: "4x4 pickup truck suitable for off-road and heavy-duty transportation.",
    date: "2024-12-01",
  },
  {
    _id: 2,
    category: "Electronics",
    description: "Smartphone with 6.5-inch OLED display, 128GB storage, and 5G connectivity.",
    date: "2024-11-15",
  },
  {
    _id: 3,
    category: "Furniture",
    description: "Modern ergonomic office chair with lumbar support and adjustable height.",
    date: "2024-10-10",
  },
  {
    _id: 4,
    category: "Appliances",
    description: "High-efficiency washing machine with 10kg capacity and smart control features.",
    date: "2024-09-05",
  },
  {
    _id: 5,
    category: "Clothing",
    description: "Cotton hoodie with a sleek design and soft inner lining for comfort.",
    date: "2024-08-20",
  },
];

const CategoryTable = () => {
  const [selectedBranch, setSelectedBranch] = useState<string | null>("All Category");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

  const rowsPerPage = 10;
  // Filter and search logic
  const filteredUsers = data.filter((user) => {
    // Check if any of the fields (_Id, date, category) are defined and contain the search term
    const isSearchMatch = [user._Id, user.date, user.category].some(
      (field) => field && field.toLowerCase().includes(search.toLowerCase()) // Check for undefined/null fields before calling toLowerCase()
    );

    return isSearchMatch; // Only return users that match the search term
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="my-10 bg-white p-4 rounded gap-4 h-fit">
      <h1 className="font-semibold text-black text-xl tracking-wide pb-4">Category List</h1>

      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by asset id, category, branch"
          className="p-2 border rounded w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button className="text-white bg-[#006666] hover:bg-emerald-800">Add Category</Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-lg rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-200 text-left">Sn</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Category</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Description</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Date</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user: any, key: number) => (
              <tr
                key={key}
                className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-200">{user._id}</td>
                <td className="px-4 py-2 border border-gray-200 text-black">{user.category}</td>
                <td className="px-4 py-2  border border-gray-200">{user.description}</td>
                <td className="px-4 py-2 border border-gray-200">{user.date}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Button className="border  border-teal-900 text-white ">
                      <Pencil />
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

export default CategoryTable;
