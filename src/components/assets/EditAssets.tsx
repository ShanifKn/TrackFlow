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

const vendors = [
  { value: "vendor a", label: "Vendor A" },
  { value: "vendor b", label: "Vendor B" },
  { value: "vendor c", label: "Vendor C" },
  { value: "vendor d", label: "Vendor D" },
  { value: "vendor e", label: "Vendor E" },
];

const productCategories = [
  { value: "electronics", label: "Electronics" },
  { value: "furniture", label: "Furniture" },
  { value: "clothing", label: "Clothing" },
  { value: "books", label: "Books" },
  { value: "sports", label: "Sports Equipment" },
];
const branches = [
  { value: "branch a", label: "Branch A" },
  { value: "branch b", label: "Branch B" },
  { value: "branch c", label: "Branch C" },
  { value: "branch d", label: "Branch D" },
  { value: "branch e", label: "Branch E" },
];

const available = [
  { value: "available", label: "Available" },
  { value: "not available", label: "Not Available" },
  { value: "newly added", label: "Newly Added" },
];

const EditAssets = () => {
  const [date, setDate] = React.useState<Date>();
  const [value, setValue] = React.useState("");

  const router = useRouter();

  return (
    <div className="my-10 grid grid-cols-3 gap-4">
      <div className="col-span-1 bg-white p-6 rounded h-full flex flex-col gap-4">
        <h1 className="font-semibold text-black text-xl tracking-wide">Add Asset</h1>

        <div>
          <Label htmlFor="company">Company </Label>
          <Input
            type="text"
            id="company"
            placeholder="RH001F"
            className="h-12"
          />
        </div>

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="coCode">Co Code</Label>
          <Input
            type="text"
            id="coCode"
            placeholder="Co Code"
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

      <div className="col-span-2 bg-white p-6 rounded flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-black text-xl tracking-wide">Asset details</h1>


          <div className="flex gap-3">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="category">Select vendor</Label>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-haspopup="true"
                    className="w-full justify-between h-12 text-gray-500">
                    {vendors.find((framework) => framework.value === value)?.label || "Select vendor..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search vendor..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No vendor found.</CommandEmpty>
                      <CommandGroup>
                        {vendors.map((framework) => (
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
              <Label htmlFor="category">Select category</Label>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-haspopup="true"
                    className="w-full justify-between h-12 text-gray-500">
                    {productCategories.find((framework) => framework.value === value)?.label || "Select category..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search category..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No vendor found.</CommandEmpty>
                      <CommandGroup>
                        {productCategories.map((framework) => (
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

          <h1 className="font-semibold text-black text-xl tracking-wide">Purchase details</h1>
          <div className="flex gap-3">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="purchase_no">Purchase Number</Label>
              <Input
                type="text"
                id="purchase_no"
                placeholder="PO Number"
                className="h-12"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="purchase_no">Purchase Date</Label>

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

          <div className="grid w-full items-center gap-2">
            <Label
              htmlFor="description"
              className="">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Description."
              className="w-full h-20"
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label
              htmlFor="remarks"
              className="0">
              Remarks
            </Label>
            <Textarea
              id="remarks"
              placeholder="Additional description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAssets;
