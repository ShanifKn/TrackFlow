"use client";

import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Check, ChevronsUpDown, UserPen } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import AddCategory from "./AddCategory";
import { Textarea } from "../ui/textarea";

const frameworks = [
  { value: "branch a", label: "Branch A" },
  { value: "branch b", label: "Branch B" },
  { value: "branch c", label: "Branch C" },
  { value: "branch d", label: "Branch D" },
  { value: "branch e", label: "Branch E" },
];

const AddProduct = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedBranch, setSelectedBranch] = useState<string | null>("All Category");
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="my-10 grid grid-cols-3 gap-4">
      <div className="col-span-1 bg-white p-6 rounded h-full flex flex-col gap-4">
        <h1 className="font-semibold text-black text-xl tracking-wide">Product Image</h1>

        <ImageUploader />
      </div>

      <div className="col-span-2 bg-white p-6 rounded flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-black text-xl tracking-wide">Product details</h1>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Product Name"
              className="h-12"
            />
          </div>

          <div className="flex gap-5 items-end">
            <div className="grid w-[450px] items-center gap-2">
              <Label htmlFor="category">Product Category</Label>

              <Popover
                open={open}
                onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[450px] justify-between h-10 ">
                    {value ? frameworks.find((framework) => framework.value === value)?.label : "Select Category..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[450px] p-0">
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

            <Button
              className="text-white bg-[#006666] hover:bg-emerald-800 "
              onClick={handleOpenDialog}>
              Add Category
            </Button>

            <AddCategory
              open={dialogOpen}
              onClose={handleCloseDialog}
            />

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="brand">Brand Name</Label>
              <Input
                type="text"
                id="brand"
                placeholder="(e.g. Apple , Acer , Dell)"
                className="h-12"
              />
            </div>
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Product Description."
            />
          </div>

          <div className="flex gap-3">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="brand">Specification </Label>
              <Input
                type="text"
                id="brand"
                placeholder="Colour / Size / Brand"
                className="h-12"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="assetType">Asset Type</Label>
              <Input
                type="text"
                id="assetType"
                placeholder="Pickup / Laptop / Chair"
                className="h-12"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="subType">Sub Type </Label>
              <Input
                type="text"
                id="subType"
                placeholder="Weight / Software / Spec"
                className="h-12"
              />
            </div>
          </div>

          <div className="grid w-80 items-center gap-3">
            <Label htmlFor="description">Generated QR Code</Label>

            <div className="flex gap-3">
              <div className="border w-full h-32 border-gray-500"></div>

              <Button className="text-white bg-blue-600 w-32 mx-auto my-auto">print</Button>
            </div>
          </div>
        </div>

        <div className="flex justify-end my-5">
          <Button className="text-white bg-[#006666] hover:bg-emerald-800 ">Create product</Button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
