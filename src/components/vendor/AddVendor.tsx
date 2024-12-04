"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { UserRound } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Check, ChevronsUpDown, UserPen } from "lucide-react";

import { cn } from "@/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import UploadDocument from "./UploadDocument";

const frameworks: any[] = [
  { value: "branch a", label: "Branch A" },
  { value: "branch b", label: "Branch B" },
  { value: "branch c", label: "Branch C" },
  { value: "branch d", label: "Branch D" },
  { value: "branch e", label: "Branch E" },
];

const service: any[] = [
  { value: "online", label: "Online" },
  { value: "offline", label: "Offline" },
];

const AddVendor = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedBranch, setSelectedBranch] = useState<string | null>("All Branches");

  return (
    <div className="my-10 grid grid-cols-3 gap-4">
      <div className="col-span-1 bg-white p-6 rounded h-full flex flex-col gap-4">
        <h1 className="font-semibold text-black text-xl tracking-wide"> Vendor Profile</h1>

        <div className="flex gap-4">
          <div className="bg-[#006666] text-white rounded-full h-16 w-16 flex items-center justify-center">
            <UserRound />
          </div>

          <div className="flex flex-col ">
            <h1 className="text-black font-normal text-lg uppercase">Business Name</h1>
            <span className="text-black text-base">Purchase</span>
          </div>
        </div>

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="name">Business Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Business Name"
            className="h-12"
          />
        </div>

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="contact_name">Contact Name</Label>
          <Input
            type="text"
            id="contact_name"
            placeholder="Primary Contact Name"
            className="h-12"
          />
        </div>

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="h-12"
          />
        </div>

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            type="tel"
            id="phone"
            placeholder="phone"
            className="h-12"
          />
        </div>
      </div>

      <div className="col-span-2 bg-white p-6 rounded flex flex-col gap-6 justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-black text-xl tracking-wide">Profile details</h1>

          <div className="flex gap-4">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="lincense_no">Trade License Number</Label>
              <Input
                type="text"
                id="lincense_no"
                placeholder="Mandatory for legal operation in the UAE."
                className="h-12"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="authority">Trade License Issuing Authority</Label>
              <Input
                type="text"
                id="authority"
                placeholder="Emirates (e.g., Dubai DED, Abu Dhabi DED)."
                className="h-12"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="lincense_no">Business Type</Label>
              <Input
                type="text"
                id="lincense_no"
                placeholder="Sole Proprietor, LLC, etc."
                className="h-12"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="vat_no">VAT Registration Number</Label>
              <Input
                type="text"
                id="vat_no"
                placeholder="VAT Number"
                className="h-12"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="grid w-full gap-2 ">
              <Label htmlFor="message">Product Category</Label>
              <Popover
                open={open}
                onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between h-10 text-gray-500">
                    {value ? frameworks.find((framework) => framework.value === value)?.label : "Select Category..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search Category..."
                      className="h-9 w-full"
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

            <div className="grid w-full gap-2 ">
              <Label htmlFor="message">Service Type</Label>
              <Popover
                open={open}
                onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between h-10 text-gray-500">
                    {value ? service.find((framework) => framework.value === value)?.label : "Select Service..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandList>
                      <CommandGroup>
                        {service.map((framework) => (
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
          </div>

          <div className="grid w-full gap-2 ">
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              placeholder="Company Address"
              className="h-12"
            />
          </div>

          <UploadDocument />
        </div>

        <div className="flex justify-end my-5">
          <Button className="text-white bg-[#006666]">Create vendor</Button>
        </div>
      </div>
    </div>
  );
};

export default AddVendor;
