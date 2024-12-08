import React, { useEffect, useState } from "react";
import { Check, ChevronsUpDown, UserPen } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
import { useRouter } from "next/navigation";
import { GetVendorProfileList } from "@/app/api/services/vendor.service";

const frameworks = [
  { value: "branch a", label: "Branch A" },
  { value: "branch b", label: "Branch B" },
  { value: "branch c", label: "Branch C" },
  { value: "branch d", label: "Branch D" },
  { value: "branch e", label: "Branch E" },
];

// const data: any[] = [
//   {
//     id: 1,
//     name: "Yuki Tanaka",
//     location: "dubai",
//     vat: "ABC123",
//     service: "offline",
//     Active: true,
//   },
//   {
//     id: 2,
//     name: "Yuki Tanaka",
//     location: "dubai",
//     vat: "ABC123",
//     service: "offline",
//     Active: true,
//   },
//   {
//     id: 3,
//     name: "Yuki Tanaka",
//     location: "dubai",
//     vat: "ABC123",
//     service: "offline",
//     Active: true,
//   },
//   {
//     id: 4,
//     name: "Yuki Tanaka",
//     location: "dubai",
//     vat: "ABC123",
//     service: "offline",
//     Active: true,
//   },
// ];

const VendorList = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedBranch, setSelectedBranch] = useState<string | null>(
    "All Branches"
  );
  const [vendors, setVendors] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await GetVendorProfileList("");
        console.log(response.data);
        // setVendors(response.data); // Assuming the response contains the list of users
        setData(response.data); // Assuming the response contains the list of users
      } catch (err) {
        setError("Error fetching users");
        console.log("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  // Pagination logic
  // Filter and search logic
  const filteredUsers = data.filter(
    (user) =>
      (selectedBranch === "All Branches" ||
        user.branch.toLowerCase() === selectedBranch?.toLowerCase()) &&
      [user.name, user.email, user.role].some((field) =>
        field.toLowerCase().includes(search.toLowerCase())
      )
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  // Handle redirection to user details
  const handleRedirect = (userId: string) => {
    router.push(`vendors/${userId}`); // Redirect to the user details page
  };
  return (
    <div className="my-10 bg-white p-4 rounded gap-4 h-[80vh]">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name, email, or role"
          className="p-2 border rounded w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-3">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[250px] justify-between h-10"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : "Select Category..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] p-0">
              <Command>
                <CommandInput
                  placeholder="Search Category..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No Category found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        {framework.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Button
            className=" bg-[#006666] hover:bg-emerald-800"
            onClick={() => router.push("/vendors/create")}
          >
            Add vendor
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto mt-5">
        <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-lg rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-200 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-200 text-left">
                Location
              </th>
              <th className="px-4 py-2 border border-gray-200 text-left">
                VAT no
              </th>
              <th className="px-4 py-2 border border-gray-200 text-left">
                Service
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
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-200">
                  {user.name}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {user.address}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {user.vat_no}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {user.service_type}
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
  );
};

export default VendorList;
