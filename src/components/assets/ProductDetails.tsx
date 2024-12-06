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

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Textarea } from "../ui/textarea";

interface AlertDialogDemoProps {
  open: boolean;
  onClose: () => void;
}

const branches = [
  { value: "branch a", label: "Babu" },
  { value: "branch b", label: "Jack" },
  { value: "branch c", label: "Mohammed" },
  { value: "branch d", label: "Rahul" },
  { value: "branch e", label: "Nihma" },
];

const available = [
  { value: "available", label: "Available" },
  { value: "not available", label: "Not Available" },
  { value: "newly added", label: "Newly Added" },
];

const ProductDetails: React.FC<AlertDialogDemoProps> = ({ open, onClose }) => {
  const [value, setValue] = useState<string>(""); // For managing the selected product value
  const [date, setDate] = React.useState<Date>();

  return (
    <AlertDialog
      open={open}
      onOpenChange={onClose}>
      <AlertDialogContent style={{ maxWidth: "800px", width: "100%" }}>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Asset Details</AlertDialogTitle>
          <AlertDialogDescription>
            <>
              <div className="flex flex-col gap-4 mt-4">
                <div className="grid w-full items-center gap-2">
                  <Label
                    htmlFor="category"
                    className="text-black">
                    Select employee <span className="text-gray-400 font-semibold">(optional)</span>
                  </Label>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-haspopup="true"
                        className="w-full justify-between h-12 text-gray-500">
                        {branches.find((framework) => framework.value === value)?.label || "Select employee..."}
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

                <div className="flex gap-3 ">
                  <div className="grid w-full items-center gap-2 ">
                    <Label
                      htmlFor="name"
                      className="text-gray-900">
                      Asset ID
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="RHAG12312"
                      className="h-12"
                    />
                  </div>

                  <div className="grid w-full items-center gap-2 ">
                    <Label
                      htmlFor="name"
                      className="text-gray-900">
                      Asset ID
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="F09"
                      className="h-12"
                    />
                  </div>

                  <div className="grid w-full items-center gap-2 ">
                    <Label
                      htmlFor="name"
                      className="text-gray-900">
                      Asset Type
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder=""
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="grid w-full items-center gap-2">
                    <Label
                      htmlFor="category"
                      className="text-black">
                      Counting Remark
                    </Label>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-haspopup="true"
                          className="w-full justify-between h-12 text-gray-500">
                          {available.find((framework) => framework.value === value)?.label || "Select Counting Remark..."}
                          <ChevronsUpDown className="opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandList>
                            <CommandGroup>
                              {available.map((framework) => (
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

                  <div className="grid w-full items-center gap-2 ">
                    <Label
                      htmlFor="name"
                      className="text-black">
                      Condition
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Good / Bad"
                      className="h-12"
                    />
                  </div>

                  <div className="grid w-full items-center gap-2">
                    <Label
                      htmlFor="purchase_no"
                      className="text-black">
                      Date
                    </Label>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn("w-full h-12 justify-start text-left font-normal", !date && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Last Checked Date</span>}
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

                <div className="flex gap-3 ">
                  <div className="grid w-full items-center gap-2 ">
                    <Label
                      htmlFor="name"
                      className="text-gray-900">
                      Depreciation Amount
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="AED"
                      className="h-12"
                    />
                  </div>

                  <div className="grid w-full items-center gap-2 ">
                    <Label
                      htmlFor="name"
                      className="text-gray-900">
                      Depreciation years
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="RHAG12312"
                      className="h-12"
                    />
                  </div>

                  <div className="grid w-full items-center gap-2 ">
                    <Label
                      htmlFor="name"
                      className="text-gray-900">
                      Depreciation Total
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="RHAG12312"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid w-full items-center gap-2">
                  <Label
                    htmlFor="description"
                    className="text-black">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Description."
                    className="w-full h-20"
                  />
                </div>
              </div>
            </>
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

export default ProductDetails;
