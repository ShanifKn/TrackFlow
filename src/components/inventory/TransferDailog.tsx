import React from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

interface AlertDialogDemoProps {
  open: boolean;
  onClose: () => void;
}

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

const productCategories = {
  branches: [
    { value: "branch_001", label: "New York Headquarters" },
    { value: "branch_002", label: "San Francisco Office" },
    { value: "branch_003", label: "Chicago Branch" },
    { value: "branch_004", label: "London Office" },
    { value: "branch_005", label: "Sydney Branch" },
  ],
  supervisors: [
    { value: "supervisor_001", label: "John Smith" },
    { value: "supervisor_002", label: "Jane Doe" },
    { value: "supervisor_003", label: "Michael Brown" },
    { value: "supervisor_004", label: "Sarah Johnson" },
    { value: "supervisor_005", label: "David Wilson" },
  ],
  employees: [
    { value: "employee_001", label: "Emily Davis" },
    { value: "employee_002", label: "James Miller" },
    { value: "employee_003", label: "Jessica Garcia" },
    { value: "employee_004", label: "Daniel Martinez" },
    { value: "employee_005", label: "Sophia Lopez" },
  ],
};

const TransferDailog: React.FC<AlertDialogDemoProps> = ({ open, onClose }) => {
  return (
    <AlertDialog
      open={open}
      onOpenChange={onClose}>
      <AlertDialogContent
        style={{ maxWidth: "1000px", width: "100%", maxHeight: "90vh" }}
        className="overflow-scroll">
        <AlertDialogHeader>
          <AlertDialogTitle>Asset Transfer</AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-muted-foreground">
            <Tabs
              defaultValue="account"
              className="w-full ">
              <TabsList className="w-full border-0 items-start bg-white">
                <TabsTrigger
                  value="account"
                  className="text-base px-16">
                  Transfer
                </TabsTrigger>
                <TabsTrigger
                  value="password"
                  className="text-base px-16">
                  Transfer History
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <TransferBox />
              </TabsContent>
              <TabsContent value="password">
                <TransferHistory />
              </TabsContent>
            </Tabs>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction>Create</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TransferDailog;

const TransferBox = () => {
  const [value, setValue] = React.useState("");
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="flex flex-col gap-4 my-5">
      <h1 className=" text-gray-500 text-lg">From</h1>

      <div className="flex gap-3">
        {/* Branch */}
        <div className="grid w-full items-center gap-2">
          <Label
            className="text-black"
            htmlFor="branch">
            Branch
          </Label>
          <Input
            type="text"
            id="branch"
            value="New York"
            className="h-12"
            readOnly={true}
          />
        </div>

        {/* Supervisor */}
        <div className="grid w-full items-center gap-2">
          <Label
            className="text-black"
            htmlFor="supervisor">
            Supervisor
          </Label>
          <Input
            type="text"
            id="supervisor"
            value="John Doe"
            className="h-12"
            readOnly={true}
          />
        </div>

        {/* Employee */}
        <div className="grid w-full items-center gap-2">
          <Label
            className="text-black"
            htmlFor="employee">
            Employee <span className="text-gray-400 font-semibold">(optional)</span>
          </Label>
          <Input
            type="text"
            id="employee"
            value="Jane Smith"
            className="h-12"
            readOnly={true}
          />
        </div>
      </div>

      <h1 className=" text-gray-500 text-lg">To</h1>

      <div className="flex gap-3">
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="purchase_no">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-full h-12 justify-start text-left font-normal", !date && "text-muted-foreground")}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Transfer date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="category">Branch</Label>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-haspopup="true"
                className="w-full justify-between h-12 text-gray-500">
                {productCategories.branches.find((framework) => framework.value === value)?.label || "Select branch..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0">
              <Command>
                <CommandInput
                  placeholder="Search branch..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No branch found.</CommandEmpty>
                  <CommandGroup>
                    {productCategories.branches.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                        }}>
                        {framework.label}
                        <Check className={cn("ml-auto", value === framework.value ? "opacity-100" : "opacity-0")} />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="category">Supervisor</Label>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-haspopup="true"
                className="w-full justify-between h-12 text-gray-500">
                {productCategories.supervisors.find((framework) => framework.value === value)?.label || "Select supervisor..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0">
              <Command>
                <CommandInput
                  placeholder="Search supervisor..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No supervisor found.</CommandEmpty>
                  <CommandGroup>
                    {productCategories.employees.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                        }}>
                        {framework.label}
                        <Check className={cn("ml-auto", value === framework.value ? "opacity-100" : "opacity-0")} />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="category">
            Employee <span className="text-gray-400 font-semibold">(optional)</span>
          </Label>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-haspopup="true"
                className="w-full justify-between h-12 text-gray-500">
                {productCategories.employees.find((framework) => framework.value === value)?.label || "Select employee..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0">
              <Command>
                <CommandInput
                  placeholder="Search employee..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No employee found.</CommandEmpty>
                  <CommandGroup>
                    {productCategories.employees.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                        }}>
                        {framework.label}
                        <Check className={cn("ml-auto", value === framework.value ? "opacity-100" : "opacity-0")} />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

const TransferHistory = () => {
  return (
    <div className="overflow-x-auto my-5">
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
  );
};
