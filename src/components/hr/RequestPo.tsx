import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
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

interface AlertDialogDemoProps {
  open: boolean;
  onClose: () => void;
}

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

const RequestPo: React.FC<AlertDialogDemoProps> = ({ open, onClose }) => {
  const [date, setDate] = React.useState<Date>();
  const [value, setValue] = React.useState("");

  return (
    <AlertDialog
      open={open}
      onOpenChange={onClose}>
      <AlertDialogContent style={{ maxWidth: "1000px", width: "100%" }}>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl">Request Purchase Order</AlertDialogTitle>
          <AlertDialogDescription>
            {/* Use a fragment instead of a div inside AlertDialogDescription */}
            <>
              <div className="flex flex-col gap-6 mt-4">

                <div className="flex gap-4 ">
                  <div className="grid w-full items-center gap-2">
                    <Label
                      className="text-black"
                      htmlFor="purchase_no">
                      PO Number
                    </Label>
                    <Input
                      type="text"
                      id="purchase_no"
                      placeholder="PO Number"
                      className="h-12"
                    />
                  </div>

                  <div className="grid w-full items-center gap-2">
                    <Label
                      className="text-black"
                      htmlFor="purchase_no">
                      PO Date
                    </Label>

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
                  <div className="grid w-full items-center gap-2">
                    <Label
                      className="text-black"
                      htmlFor="category">
                      Select branch
                    </Label>

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
                    <Label
                      className="text-black"
                      htmlFor="category">
                      Select supervisor
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

                  <div className="grid w-full items-center gap-2">
                    <Label
                      className="text-black"
                      htmlFor="category">
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
                </div>

                <div className="flex gap-3">
                  <div className="grid w-full items-center gap-2">
                    <Label
                      className="text-black"
                      htmlFor="category">
                      Select vendor <span className="text-gray-400 font-semibold">(optional)</span>
                    </Label>

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
                    <Label
                      className="text-black"
                      htmlFor="category">
                      Select category <span className="text-gray-400 font-semibold">(optional)</span>
                    </Label>

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
                  <Label htmlFor="description" className="text-black">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Purchase order Description."
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

export default RequestPo;
