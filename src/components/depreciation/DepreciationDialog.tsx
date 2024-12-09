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

const DepreciationDialog: React.FC<AlertDialogDemoProps> = ({ open, onClose }) => {
  return (
    <AlertDialog
      open={open}
      onOpenChange={onClose}>
      <AlertDialogContent
        style={{ maxWidth: "600px", width: "100%", maxHeight: "90vh" }}
        className="overflow-scroll">
        <AlertDialogHeader>
          <AlertDialogTitle>Add Depreciation</AlertDialogTitle>
          <AlertDialogDescription className="text-sm">
            <AddDepreciation />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction>Add</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DepreciationDialog;

const AddDepreciation = () => {
  const [value, setValue] = React.useState("");

  const selecteData = [
    { value: "addition_1A", label: "Addition 1A" },
    { value: "disposals_1A", label: "Disposals 1A" },
  ];

  return (
    <div className="flex flex-col gap-4 my-5">
      <div className="grid w-full items-center gap-2">
        <Label
          className="text-black"
          htmlFor="branch">
          Asset Id
        </Label>
        <Input
          type="text"
          id="branch"
          value="123123"
          className="h-12"
        />
      </div>

      <div className="flex gap-3">
        <div className="grid w-full items-center gap-2">
          <Label
            className="text-black"
            htmlFor="branch">
            Cateogory
          </Label>
          <Input
            type="text"
            id="branch"
            value="velichle"
            className="h-12"
          />
        </div>

        <div className="grid w-full items-center gap-2">
          <Label
            className="text-black"
            htmlFor="branch">
            Product
          </Label>
          <Input
            type="text"
            id="branch"
            value="Pickup Mahindra"
            className="h-12"
          />
        </div>
      </div>

      <div className="grid w-full items-center gap-2 mt-3">
        <Label
          htmlFor="specification"
          className="text-black">
          Depreciation
        </Label>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-haspopup="true"
              className="w-full justify-between h-12 text-gray-500">
              {selecteData.find((framework) => framework.value === value)?.label || "Select Depreciation..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-0">
            <Command>
              <CommandList>
                <CommandGroup>
                  {selecteData.map((framework) => (
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

      {value && (
        <div className="flex gap-3">
          {value === "addition_1A" ? (
            <div className="grid w-full items-center gap-2">
              <Label
                htmlFor="addition1A"
                className="text-black">
                Addition 1A
              </Label>
              <Input
                type="text"
                id="addition1A"
                placeholder="AED"
                className="h-12"
              />
            </div>
          ) : (
            <div className="grid w-full items-center gap-2">
              <Label
                htmlFor="disposals1A"
                className="text-black">
                Disposals 1A
              </Label>
              <Input
                type="text"
                id="disposals1A"
                placeholder="AED"
                className="h-12"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
