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
import { InitialValues } from "@/core/interfaces/data/asset.interface";
import { ErrorMessage, Field } from "formik";

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

interface EditAssetsProps {
  values: InitialValues;
  setFieldValue: (field: string, value: any) => void;
}

const AddPrdocut: React.FC<EditAssetsProps> = ({ values, setFieldValue }) => {
  const [date, setDate] = React.useState<Date>();
  const [value, setValue] = React.useState("");

  return (
    <div className="my-5 bg-white p-6 rounded-md">
      {/* <div className="">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-black text-xl tracking-wide">Product Details</h1>

          <Button
            className=" text-white bg-[#006666] hover:bg-emerald-800"
            type="button">
            Add New Product
          </Button>
        </div>

        <div className="mt-4 flex gap-5">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="asset_id">Asset ID</Label>

            <Field
              name="asset_id"
              placeholder="Add asset id"
              className="h-12 border-gray-300 rounded-md"
              as={Input} // Ensure you're using the correct component
              type="text"
            />

            <ErrorMessage
              name="asset_id"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="product">Product</Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-haspopup="true"
                  className="w-full justify-between h-12 text-gray-500">
                  {productCategories.coCodes.find((framework) => framework.value === values.product)?.label || "Select product..."}
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
                            setFieldValue("product", currentValue);
                          }}>
                          {framework.label}
                          <Check className={cn("ml-auto", values.product === framework.value ? "opacity-100" : "opacity-0")} />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <ErrorMessage
              name="product"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="grid w-32 items-center gap-2">
            <Label htmlFor="purchase_quantity">Quantity</Label>

            <Field
              name="purchase_quantity"
              placeholder="01"
              className="h-12"
              as={Input} // Ensure you're using the correct component
              type="text"
            />

          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="purchase_no">Specification</Label>
            <Input
              type="text"
              id="purchase_no"
              placeholder="Color / Size / Brand"
              className="h-12"
            />
          </div>
        </div>
      </div> */}

      <div className="mt-7 flex flex-col gap-5">
        <h1 className="font-semibold text-black text-xl tracking-wide">Goods Receipt Note (GRN)</h1>

        <div className="flex gap-3">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="category">Branch</Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-haspopup="true"
                  className="w-full justify-between h-12 text-gray-500">
                  {productCategories.branches.find((framework) => framework.value === values.branch)?.label || "Select branch..."}
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
                            setFieldValue("branch", currentValue);
                          }}>
                          {framework.label}
                          <Check className={cn("ml-auto", values.branch === framework.value ? "opacity-100" : "opacity-0")} />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <ErrorMessage
              name="branch"
              component="p"
              className="text-red-500 text-sm"
            />
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
                  {productCategories.supervisors.find((framework) => framework.value === values.supervisor)?.label || "Select supervisor..."}
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
                      {productCategories.supervisors.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setFieldValue("supervisor", currentValue);
                          }}>
                          {framework.label}
                          <Check className={cn("ml-auto", values.supervisor === framework.value ? "opacity-100" : "opacity-0")} />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <ErrorMessage
              name="supervisor"
              component="p"
              className="text-red-500 text-sm"
            />
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
                  {productCategories.employees.find((item) => item.value === values.employee)?.label || "Select employee..."}
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
                      {productCategories.employees.map((item) => (
                        <CommandItem
                          key={item.value}
                          value={item.value}
                          onSelect={(currentValue) => {
                            setFieldValue("employee", currentValue);
                          }}>
                          {item.label}
                          <Check className={cn("ml-auto", values.employee === item.value ? "opacity-100" : "opacity-0")} />
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
            <Label htmlFor="arn_no">Asset Recipt Number (ARN)</Label>

            <Field
              name="arn_no"
              placeholder="ARN NO"
              className="h-12"
              as={Input} // Ensure you're using the correct component
              type="text"
            />

            <ErrorMessage
              name="arn_no"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="arn_date">ARN Date</Label>
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
                  selected={values.arn_date ? new Date(values.arn_date) : undefined}
                  onSelect={(selectedDate) => setFieldValue("arn_date", selectedDate)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <ErrorMessage
              name="arn_date"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="systemEntryNumber">System Entry Number</Label>
            <Input
              type="text"
              id="systemEntryNumber"
              placeholder="G12312"
              className="h-12"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="category">Counting Remarks</Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-haspopup="true"
                  className="w-full justify-between h-12 text-gray-500">
                  {/* For Condition */}
                  {productCategories.counting.find((item) => item.value === values.counting_remark)?.label || "Select condition..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[510px] p-0">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      {productCategories.counting.map((item) => (
                        <CommandItem
                          key={item.value}
                          value={item.value}
                          onSelect={(currentValue) => {
                            setFieldValue("counting_remark", currentValue);
                          }}>
                          {item.label}
                          <Check className={cn("ml-auto", values.counting_remark === item.value ? "opacity-100" : "opacity-0")} />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="condition">Condition on (xx-xxx-xxxx)</Label>

            <Field
              type="text"
              name="condition"
              placeholder="Good / Bad"
              className="h-12 border-gray-300 rounded-md"
              as={Input}
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="purchase_no">Last physical verification</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full h-12 justify-start text-left font-normal", !values.last_check_date && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {values.last_check_date ? format(new Date(values.last_check_date), "PPP") : <span>PO date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={values.last_check_date ? new Date(values.last_check_date) : undefined}
                  onSelect={(selectedDate) => setFieldValue("last_check_date", selectedDate)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPrdocut;
