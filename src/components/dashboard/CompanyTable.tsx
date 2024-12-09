import React, { useState } from "react";
import { Check, ChevronsUpDown, UserPen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const companyData = [
  {
    id: 1,
    companyName: "Tech Solutions Ltd.",
    totalAssets: 120,
    netValue: 3500000,
    assetCost: 4000000,
    totalDepreciationCost: 500000,
  },
  {
    id: 2,
    companyName: "Green Energy Corp.",
    totalAssets: 75,
    netValue: 2500000,
    assetCost: 3000000,
    totalDepreciationCost: 500000,
  },
  {
    id: 3,
    companyName: "Skyline Developers",
    totalAssets: 150,
    netValue: 8000000,
    assetCost: 9500000,
    totalDepreciationCost: 1500000,
  },
  {
    id: 4,
    companyName: "Auto World Inc.",
    totalAssets: 60,
    netValue: 1500000,
    assetCost: 2000000,
    totalDepreciationCost: 500000,
  },
  {
    id: 5,
    companyName: "Smart Electronics Pvt. Ltd.",
    totalAssets: 100,
    netValue: 3000000,
    assetCost: 3500000,
    totalDepreciationCost: 500000,
  },
  {
    id: 6,
    companyName: "Innovative IT Solutions",
    totalAssets: 90,
    netValue: 4000000,
    assetCost: 5000000,
    totalDepreciationCost: 1000000,
  },
];

const companyOptions = Array.from(new Set(companyData.map((item) => item.companyName)));

const CompanyTable = () => {
  const [search, setSearch] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  // Filter logic
  const filteredData = companyData.filter((company) => (selectedCompany === "" || company.companyName === selectedCompany) && (company.companyName.toLowerCase().includes(search.toLowerCase()) || company.totalAssets.toString().includes(search) || company.netValue.toString().includes(search) || company.assetCost.toString().includes(search) || company.totalDepreciationCost.toString().includes(search)));

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="my-10 bg-white p-4 rounded gap-4 h-fit">
      <h1 className="font-semibold text-black text-xl tracking-wide pb-4">Company list </h1>

      <div className="flex items-center justify-between mb-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by company or values"
          className="p-2 border rounded w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Company Dropdown */}
        <Popover
          open={open}
          onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[350px] justify-between h-10">
              {selectedCompany || "Select Company..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[350px] p-0">
            <Command>
              <CommandInput
                placeholder="Search Company..."
                className="h-9"
              />
              <CommandList>
                <CommandEmpty>No company found.</CommandEmpty>
                <CommandGroup>
                  {companyOptions.map((company) => (
                    <CommandItem
                      key={company}
                      value={company}
                      onSelect={(currentValue) => {
                        setSelectedCompany(currentValue === selectedCompany ? "" : currentValue);
                        setOpen(false);
                      }}>
                      {company}
                      <Check className={`ml-auto ${selectedCompany === company ? "opacity-100" : "opacity-0"}`} />
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
              <th className="px-4 py-2 border border-gray-200 text-center">Company Name</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Total Assets</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Net Value</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Asset Cost</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Total Depreciation Cost</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((company, index) => (
              <tr
                key={company.id}
                className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-200">{(currentPage - 1) * rowsPerPage + index + 1}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{company.companyName}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{company.totalAssets.toLocaleString()}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{company.netValue.toLocaleString()}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{company.assetCost.toLocaleString()}</td>
                <td className="px-4 py-2 border border-gray-200 text-center">{company.totalDepreciationCost.toLocaleString()}</td>
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

export default CompanyTable;
