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
import ProductArray from "./ProductArray";
import UploadDocument from "../vendor/UploadDocument";

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

interface Product {
  value: string;
  label: string;
  stock: number;
}

const initialProducts: Product[] = [
  { value: "product1", label: "Product 1", stock: 10 },
  { value: "product2", label: "Product 2", stock: 5 },
  { value: "product3", label: "Product 3", stock: 20 },
  { value: "product4", label: "Product 4", stock: 0 },
  { value: "product5", label: "Product 5", stock: 15 },
];

const branches = [
  { value: "branch a", label: "Branch A" },
  { value: "branch b", label: "Branch B" },
  { value: "branch c", label: "Branch C" },
  { value: "branch d", label: "Branch D" },
  { value: "branch e", label: "Branch E" },
];

const EditPurchase = () => {
  const [date, setDate] = React.useState<Date>();
  const [value, setValue] = React.useState("");

  return (
    <div className="my-10 grid grid-cols-3 gap-4">
      <div className="col-span-1 bg-white p-6 rounded h-full flex flex-col gap-5">
        <h1 className="font-semibold text-black text-xl tracking-wide">Create PO</h1>

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="purchase_no">PO Number</Label>
          <Input
            type="text no"
            id="purchase_no"
            placeholder="PO Number"
            className="h-12"
          />
        </div>

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="purchase_no">PO Date</Label>

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
          <Label htmlFor="purchase_no">Expected GRN</Label>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-full h-12 justify-start text-left font-normal", !date && "text-muted-foreground")}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Delivery date</span>}
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
          <h1 className="font-semibold text-black text-xl tracking-wide">PO details</h1>

          <div className="flex gap-3">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="category">Select branch</Label>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-haspopup="true"
                    className="w-full justify-between h-12 text-gray-500">
                    {branches.find((framework) => framework.value === value)?.label || "Select branch..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search branch..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No branch found.</CommandEmpty>
                      <CommandGroup>
                        {branches.map((framework) => (
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
              <Label htmlFor="category">Select supervisor</Label>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-haspopup="true"
                    className="w-full justify-between h-12 text-gray-500">
                    {branches.find((framework) => framework.value === value)?.label || "Select supervisor..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search supervisor..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No supervisor found.</CommandEmpty>
                      <CommandGroup>
                        {branches.map((framework) => (
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
                Select employee <span className="text-gray-400 font-semibold">(optional)</span>
              </Label>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-haspopup="true"
                    className="w-full justify-between h-12 text-gray-500">
                    {branches.find((framework) => framework.value === value)?.label || "Select supervisor..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search supervisor..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No supervisor found.</CommandEmpty>
                      <CommandGroup>
                        {branches.map((framework) => (
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

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Purchase order Description."
              className="w-full h-20"
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="remarks">Remarks</Label>
            <Textarea
              id="remarks"
              placeholder="additional description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPurchase;
