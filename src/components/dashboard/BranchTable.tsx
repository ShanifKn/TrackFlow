import React, { useState } from "react";
import { Check, ChevronsUpDown, UserPen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const branchData = [
  {
    id: 1,
    branchName: "New York",
    totalAssets: 200,
    netValue: 5000000,
    assetCost: 6000000,
    totalDepreciationCost: 1000000,
  },
  {
    id: 2,
    branchName: "Los Angeles",
    totalAssets: 150,
    netValue: 3500000,
    assetCost: 4000000,
    totalDepreciationCost: 500000,
  },
  {
    id: 3,
    branchName: "Chicago",
    totalAssets: 100,
    netValue: 2500000,
    assetCost: 3000000,
    totalDepreciationCost: 500000,
  },
  {
    id: 4,
    branchName: "Houston",
    totalAssets: 80,
    netValue: 2000000,
    assetCost: 2500000,
    totalDepreciationCost: 500000,
  },
  {
    id: 5,
    branchName: "San Francisco",
    totalAssets: 120,
    netValue: 4000000,
    assetCost: 5000000,
    totalDepreciationCost: 1000000,
  },
  {
    id: 6,
    branchName: "Seattle",
    totalAssets: 90,
    netValue: 3000000,
    assetCost: 3500000,
    totalDepreciationCost: 500000,
  },
];

const branchOptions = Array.from(new Set(branchData.map((item) => item.branchName)));

const BranchTable = () => {
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  // Filter logic
  const filteredData = branchData.filter((branch) => (selectedBranch === "" || branch.branchName === selectedBranch) && (branch.branchName.toLowerCase().includes(search.toLowerCase()) || branch.totalAssets.toString().includes(search) || branch.netValue.toString().includes(search) || branch.assetCost.toString().includes(search) || branch.totalDepreciationCost.toString().includes(search)));

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="my-10 bg-white p-4 rounded gap-4 h-fit">
      <h1 className="font-semibold text-black text-xl tracking-wide pb-4">Branch List </h1>

      <div className="flex items-center justify-between mb-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by branch or values"
          className="p-2 border rounded w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Branch Dropdown */}
        <Popover
          open={open}
          onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[350px] justify-between h-10">
              {selectedBranch || "Select Branch..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[350px] p-0">
            <Command>
              <CommandInput
                placeholder="Search Branch..."
                className="h-9"
              />
              <CommandList>
                <CommandEmpty>No branch found.</CommandEmpty>
                <CommandGroup>
                  {branchOptions.map((branch) => (
                    <CommandItem
                      key={branch}
                      value={branch}
                      onSelect={(currentValue) => {
                        setSelectedBranch(currentValue === selectedBranch ? "" : currentValue);
                        setOpen(false);
                      }}>
                      {branch}
                      <Check className={`ml-auto ${selectedBranch === branch ? "opacity-100" : "opacity-0"}`} />
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
              <th className="px-4 py-2 border border-gray-200 text-left">Sn</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Branch Name</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Total Assets</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Net Value</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Asset Cost</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Total Depreciation Cost</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((branch, index) => (
              <tr
                key={branch.id}
                className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-200">{(currentPage - 1) * rowsPerPage + index + 1}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{branch.branchName}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{branch.totalAssets.toLocaleString()}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{branch.netValue.toLocaleString()}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{branch.assetCost.toLocaleString()}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{branch.totalDepreciationCost.toLocaleString()}</td>
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

export default BranchTable;
