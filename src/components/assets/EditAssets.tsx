"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Textarea } from "../ui/textarea";
import { useRouter } from "next/navigation";

const productCategories = {
  coCodes: [
    { label: "CO-101", value: "co101" },
    { label: "CO-102", value: "co102" },
    { label: "CO-103", value: "co103" },
    { label: "CO-104", value: "co104" },
  ],
  companies: [
    { label: "TechCorp", value: "techcorp" },
    { label: "BizSolutions", value: "bizsolutions" },
    { label: "InnoVentures", value: "innoventures" },
    { label: "GreenWorld Inc.", value: "greenworld" },
  ],
  assetTypes: [
    { label: "Hardware", value: "hardware" },
    { label: "Software", value: "software" },
    { label: "Furniture", value: "furniture" },
    { label: "Vehicle", value: "vehicle" },
  ],
  subTypes: [
    { label: "Laptops", value: "laptops" },
    { label: "Desktops", value: "desktops" },
    { label: "Chairs", value: "chairs" },
    { label: "Tables", value: "tables" },
    { label: "Cars", value: "cars" },
    { label: "Bikes", value: "bikes" },
  ],
  vendors: [
    { value: "vendor_001", label: "ABC Supplies" },
    { value: "vendor_002", label: "XYZ Distributors" },
    { value: "vendor_003", label: "Global Traders" },
    { value: "vendor_004", label: "Delta Logistics" },
    { value: "vendor_005", label: "Omega Solutions" },
  ],
  categories: [
    { value: "category_001", label: "Electronics" },
    { value: "category_002", label: "Furniture" },
    { value: "category_003", label: "Office Supplies" },
    { value: "category_004", label: "Software Licenses" },
    { value: "category_005", label: "Networking Equipment" },
  ],
  auditCategories: [
    { value: "audit_001", label: "Financial Audit" },
    { value: "audit_002", label: "Operational Audit" },
    { value: "audit_003", label: "IT Systems Audit" },
    { value: "audit_004", label: "Compliance Audit" },
    { value: "audit_005", label: "Risk Assessment" },
  ],
};

const EditAssets = () => {
  const [date, setDate] = React.useState<Date>();
  const [value, setValue] = React.useState("");

  const router = useRouter();

  return (
    <div className="my-5 grid grid-cols-3 gap-4">
      <div className="col-span-1 bg-white p-6 rounded-md h-full flex flex-col gap-7">
        <h1 className="font-semibold text-black text-xl tracking-wide">Add Asset Details</h1>

        <div>
          <Label htmlFor="company">Asset ID</Label>
          <Input
            type="text"
            id="company"
            placeholder="Add asset id"
            className="h-12"
          />
        </div>

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="category">Select CO Code</Label>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-haspopup="true"
                className="w-full justify-between h-12 text-gray-500">
                {productCategories.coCodes.find((framework) => framework.value === value)?.label || "Select co code..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 p-0">
              <Command>
                <CommandInput
                  placeholder="Search co code..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>
                    <div className="flex flex-col gap-2">
                      No code found.
                      <Button
                        className="mt-1  mx-auto "
                        size={"sm"}>
                        Add New CO Code
                      </Button>
                    </div>
                  </CommandEmpty>
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
          <Label htmlFor="category">Select Company</Label>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-haspopup="true"
                className="w-full justify-between h-12 text-gray-500">
                {productCategories.companies.find((framework) => framework.value === value)?.label || "Select company..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 p-0">
              <Command>
                <CommandInput
                  placeholder="Search company..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>
                    <div className="flex flex-col gap-2">
                      No company found.
                      <Button
                        className="mt-1  mx-auto "
                        size={"sm"}>
                        Add New Company
                      </Button>
                    </div>
                  </CommandEmpty>
                  <CommandGroup>
                    {productCategories.companies.map((framework) => (
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
          <Label htmlFor="category">Select Asset Type</Label>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-haspopup="true"
                className="w-full justify-between h-12 text-gray-500">
                {productCategories.assetTypes.find((framework) => framework.value === value)?.label || "Select asset type..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 p-0">
              <Command>
                <CommandInput
                  placeholder="Search asset type..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>
                    <div className="flex flex-col gap-2">
                      No asset type found.
                      <Button
                        className="mt-1  mx-auto "
                        size={"sm"}
                        onClick={() => router.push("/")}>
                        Add New Type
                      </Button>
                    </div>
                  </CommandEmpty>
                  <CommandGroup>
                    {productCategories.assetTypes.map((framework) => (
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
          <Label htmlFor="category">Select Sub Type</Label>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-haspopup="true"
                className="w-full justify-between h-12 text-gray-500">
                {productCategories.assetTypes.find((framework) => framework.value === value)?.label || "Select sub type..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 p-0">
              <Command>
                <CommandInput
                  placeholder="Search sub type..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>
                    <div className="flex flex-col gap-2">
                      No sub type found.
                      <Button
                        className="mt-1  mx-auto "
                        size={"sm"}>
                        Add New Type
                      </Button>
                    </div>
                  </CommandEmpty>
                  <CommandGroup>
                    {productCategories.subTypes.map((framework) => (
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

      <div className="col-span-2 bg-white p-6 rounded-md flex flex-col justify-between">
        {/* Asset Classification Section */}
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-black text-xl tracking-wide">Asset Classification</h1>

          <div className="flex gap-3">
            {/* Vendor Dropdown */}
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="category">Select Vendor</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-haspopup="true"
                    className="w-full justify-between h-12 text-gray-500">
                    {productCategories.vendors.find((framework) => framework.value === value)?.label || "Select vendor..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72 p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search vendor..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>
                        <div className="flex flex-col gap-2">
                          No vendor found.
                          <Button
                            className="mt-1 mx-auto"
                            size={"sm"}
                            onClick={() => router.push("/vendors/add-vendor")}>
                            Add vendor
                          </Button>
                        </div>
                      </CommandEmpty>
                      <CommandGroup>
                        {productCategories.vendors.map((framework) => (
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

            {/* Category Dropdown */}
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="category">Select Category</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-haspopup="true"
                    className="w-full justify-between h-12 text-gray-500">
                    {productCategories.categories.find((framework) => framework.value === value)?.label || "Select category..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72 p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search category..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>
                        <div className="flex flex-col gap-2">
                          No category found.
                          <Button
                            className="mt-1 mx-auto"
                            size={"sm"}
                            onClick={() => router.push("/products/add-product")}>
                            Add Category
                          </Button>
                        </div>
                      </CommandEmpty>
                      <CommandGroup>
                        {productCategories.categories.map((framework) => (
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

            {/* Audit Category Dropdown */}
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="category">Select Audit Category</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-haspopup="true"
                    className="w-full justify-between h-12 text-gray-500">
                    {productCategories.auditCategories.find((framework) => framework.value === value)?.label || "Select audit category..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72 p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search category..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>
                        <div className="flex flex-col gap-2">
                          No category found.
                          <Button
                            className="mt-1 mx-auto"
                            size={"sm"}
                            onClick={() => router.push("/products/add-product")}>
                            Add Audit Category
                          </Button>
                        </div>
                      </CommandEmpty>
                      <CommandGroup>
                        {productCategories.auditCategories.map((framework) => (
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

        {/* Purchase Details Section */}
        <div className="flex flex-col gap-5 mt-7">
          <h1 className="font-semibold text-black text-xl tracking-wide">Purchase Details</h1>

          <div className="flex gap-3">
            {/* Purchase Number */}
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="purchase_no">Purchase Number</Label>
              <Input
                type="text"
                id="purchase_no"
                placeholder="PO Number"
                className="h-12"
              />
            </div>

            {/* Purchase Date */}
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="purchase_date">Purchase Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn("w-full h-12 justify-start text-left font-normal", !date && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>PO date</span>}
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

          <div className="flex gap-3">
            {/* Purchase Quantity */}
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="purchase_quantity">Purchase Quantity</Label>
              <Input
                type="text"
                id="purchase_quantity"
                placeholder="PO quantity"
                className="h-12"
              />
            </div>

            {/* Purchase Value */}
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="purchase_value">Purchase Value</Label>
              <Input
                type="text"
                id="purchase_value"
                placeholder="PO value"
                className="h-12"
              />
            </div>
          </div>

          {/* Description */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Description."
              className="w-full h-20"
            />
          </div>

          {/* Remarks */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="remarks">Remarks</Label>
            <Textarea
              id="remarks"
              placeholder="Additional description"
              className="w-full h-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAssets;
