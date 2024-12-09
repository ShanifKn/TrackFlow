import React, { useState } from "react";
import { Check, ChevronsUpDown, UserPen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const assetData = [
  {
    id: 1,
    subtype: "Machinery",
    totalAssetValue: 500000,
    totalNetValue: 350000,
    totalAssetCost: 400000,
    totalDepreciationCost: 150000,
  },
  {
    id: 2,
    subtype: "Vehicles",
    totalAssetValue: 300000,
    totalNetValue: 200000,
    totalAssetCost: 250000,
    totalDepreciationCost: 100000,
  },
  {
    id: 3,
    subtype: "Buildings",
    totalAssetValue: 800000,
    totalNetValue: 600000,
    totalAssetCost: 750000,
    totalDepreciationCost: 200000,
  },
  {
    id: 4,
    subtype: "Furniture",
    totalAssetValue: 150000,
    totalNetValue: 100000,
    totalAssetCost: 120000,
    totalDepreciationCost: 50000,
  },
  {
    id: 5,
    subtype: "Electronics",
    totalAssetValue: 100000,
    totalNetValue: 70000,
    totalAssetCost: 90000,
    totalDepreciationCost: 30000,
  },
  {
    id: 6,
    subtype: "IT Equipment",
    totalAssetValue: 200000,
    totalNetValue: 120000,
    totalAssetCost: 150000,
    totalDepreciationCost: 80000,
  },
];

const subtypeOptions = Array.from(new Set(assetData.map((item) => item.subtype)));

const SubtypeTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubtype, setSelectedSubtype] = useState("");
  const rowsPerPage = 6;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  // Filter logic
  const filteredData = assetData.filter((asset) => (selectedSubtype === "" || asset.subtype === selectedSubtype) && (asset.subtype.toLowerCase().includes(search.toLowerCase()) || asset.totalAssetValue.toString().includes(search) || asset.totalNetValue.toString().includes(search) || asset.totalAssetCost.toString().includes(search) || asset.totalDepreciationCost.toString().includes(search)));

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="my-10 bg-white p-4 rounded gap-4 h-fit">
      <h1 className="font-semibold text-black text-xl tracking-wide pb-4">Subtype List </h1>

      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by subtype or values"
          className="p-2 border rounded w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Popover
          open={open}
          onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[450px] justify-between h-10">
              {selectedSubtype || "Select Subtype..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[450px] p-0">
            <Command>
              <CommandInput
                placeholder="Search Subtype..."
                className="h-9"
              />
              <CommandList>
                <CommandEmpty>No subtype found.</CommandEmpty>
                <CommandGroup>
                  {subtypeOptions.map((subtype) => (
                    <CommandItem
                      key={subtype}
                      value={subtype}
                      onSelect={(currentValue) => {
                        setSelectedSubtype(currentValue === selectedSubtype ? "" : currentValue);
                        setOpen(false);
                      }}>
                      {subtype}
                      <Check className={`ml-auto ${selectedSubtype === subtype ? "opacity-100" : "opacity-0"}`} />
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
              <th className="px-4 py-2 border border-gray-200 text-center">Subtype</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Total Asset Value</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Total Net Value</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Total Asset Cost</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Total Depreciation Cost</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((asset, index) => (
              <tr
                key={asset.id}
                className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-200">{(currentPage - 1) * rowsPerPage + index + 1}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{asset.subtype}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{asset.totalAssetValue.toLocaleString()}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{asset.totalNetValue.toLocaleString()}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{asset.totalAssetCost.toLocaleString()}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{asset.totalDepreciationCost.toLocaleString()}</td>
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

export default SubtypeTable;
