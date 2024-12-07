import React from "react";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import Depreciation from "./Depreciation";
import UploadDocument from "../vendor/UploadDocument";

const productCategories = {
  coCodes: [
    { value: "product1", label: "Product 1" },
    { value: "product2", label: "Product 2" },
    { value: "product3", label: "Product 3" },
  ],
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
  counting: [
    { value: "employee_001", label: "Available" },
    { value: "employee_002", label: "Not Available" },
    { value: "employee_003", label: "New Added" },
  ],
};

const AddPrdocut = () => {
  const [date, setDate] = React.useState<Date>();
  const [value, setValue] = React.useState("");

  return (
    <div className="my-5 bg-white p-6 rounded-md">
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-black text-xl tracking-wide">Product Details</h1>

          <Button className=" text-white bg-[#006666] hover:bg-emerald-800 ">Add New Product</Button>
        </div>

        <div className="mt-4 flex gap-5">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="category">Select Product</Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-haspopup="true"
                  className="w-full justify-between h-12 text-gray-500">
                  {productCategories.coCodes.find((framework) => framework.value === value)?.label || "Select product..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-96 p-0">
                <Command>
                  <CommandInput
                    placeholder="Search product..."
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>No product found.</CommandEmpty>
                    <CommandGroup>
                      {productCategories.coCodes.map((framework) => (
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
            <Label htmlFor="purchase_no">Quantity</Label>
            <Input
              type="text"
              id="purchase_no"
              placeholder="01"
              className="h-12"
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="purchase_no">Specification</Label>
            <Input
              type="text"
              id="purchase_no"
              placeholder="PO Number"
              className="h-12"
            />
          </div>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-5">
        <h1 className="font-semibold text-black text-xl tracking-wide">Goods Receipt Note (GRN)</h1>

        <div className="flex gap-3">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="category">Select Branch</Label>

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
              <PopoverContent className="w-96 p-0">
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
            <Label htmlFor="category">Select Supervisor</Label>

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
              <PopoverContent className="w-96 p-0">
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
              Select Employee <span className="text-gray-400 font-semibold">(optional)</span>
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
              <PopoverContent className="w-96 p-0">
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

        <div className="flex gap-3">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="purchase_no">Application Reference Number (ARN)</Label>
            <Input
              type="text"
              id="purchase_no"
              placeholder="PO Number"
              className="h-12"
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="purchase_no">ARN Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full h-12 justify-start text-left font-normal", !date && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>ARN date</span>}
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
            <Label htmlFor="purchase_no">Asset ID</Label>
            <Input
              type="text"
              id="purchase_no"
              placeholder="asset id"
              className="h-12"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="category">Select Counting Remarks</Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-haspopup="true"
                  className="w-full justify-between h-12 text-gray-500">
                  {productCategories.counting.find((framework) => framework.value === value)?.label || "Select counting remark..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-96 p-0">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      {productCategories.counting.map((framework) => (
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
            <Label htmlFor="purchase_no">Condition on (31-08-2021)</Label>
            <Input
              type="text"
              id="purchase_no"
              placeholder="Good / Bad"
              className="h-12"
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="purchase_no">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full h-12 justify-start text-left font-normal", !date && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>date</span>}
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
        </div>
      </div>

      <div className="mt-7 ">
        <Depreciation />
      </div>

      <div className="mt-7">
        <UploadDocument />
      </div>

      <div className="mt-7 flex justify-between items-end">
        <div className="flex w-full">
          <div className="flex w-full items-center gap-2">
            <Label htmlFor="purchase_no">Created At:</Label>
            <h1 className="font-semibold text-black text-lg"> 12 sep 2024</h1>
          </div>

          <div className="flex w-full items-center gap-2">
            <Label htmlFor="purchase_no">Updated At:</Label>
            <h1 className="font-semibold text-black text-lg"> 12 sep 2024</h1>
          </div>
        </div>

        <Button className="col-span-1 text-white bg-[#006666] hover:bg-emerald-800 " size={"lg"}>Save Asset</Button>
      </div>
    </div>
  );
};

export default AddPrdocut;
