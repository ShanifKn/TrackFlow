import React from "react";
import { useState } from "react";
import { Check, ChevronsUpDown, MoveDown, MoveUp } from "lucide-react";
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
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface AlertDialogDemoProps {
  open: boolean;
  onClose: () => void;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const TransferDailog: React.FC<AlertDialogDemoProps> = ({ open, onClose }) => {
  const [value, setValue] = useState<string>(""); // For managing the selected product value
  const [date, setDate] = React.useState<Date>();

  return (
    <AlertDialog
      open={open}
      onOpenChange={onClose}>
      <AlertDialogContent
        style={{ maxWidth: "1200px", width: "100%", maxHeight: "90vh" }}
        className="overflow-scroll">
        <AlertDialogHeader>
          <AlertDialogTitle>Asset Details</AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-muted-foreground">
            <Accordion
              type="single"
              collapsible>
              {months.map((month, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}>
                  <AccordionTrigger>{month} 2024</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-4 mt-4">
                      <div className="grid w-full items-center gap-2">
                        <Label htmlFor={`month-${index}`}>Month</Label>
                        <Input
                          type="text"
                          id={`month-${index}`}
                          value={month}
                          readOnly
                          className="h-12"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-1 border rounded p-3 flex flex-col gap-4">
                          <h1 className="font-normal text-black text-lg tracking-wide pb-3">Value</h1>

                          <div className="grid w-full items-center gap-2">
                            <Label htmlFor={`opening-balance-${index}`}>Opening Balance(OB)*</Label>
                            <Input
                              type="text"
                              id={`opening-balance-${index}`}
                              placeholder="AED"
                              className="h-12"
                            />
                          </div>

                          <div className="flex gap-3">
                            <div className="grid w-full items-center gap-2">
                              <Label htmlFor={`addition-1a-${index}`}>Addition 1A</Label>
                              <Input
                                type="text"
                                id={`addition-1a-${index}`}
                                placeholder="AED"
                                className="h-12"
                              />
                            </div>

                            <div className="grid w-full items-center gap-2">
                              <Label htmlFor={`disposals-1a-${index}`}>Disposals 1A</Label>
                              <Input
                                type="text"
                                id={`disposals-1a-${index}`}
                                placeholder="AED"
                                className="h-12"
                              />
                            </div>
                          </div>

                          <div className="grid w-full items-center gap-2">
                            <Label htmlFor={`balance-${index}`}>Balance</Label>
                            <Input
                              type="text"
                              id={`balance-${index}`}
                              placeholder="AED"
                              className="h-12"
                            />
                          </div>
                        </div>

                        <div className="col-span-1 border rounded-md p-3 flex flex-col gap-4">
                          <h1 className="font-medium text-black text-lg tracking-wide pb-3">Depreciation</h1>

                          <div className="grid w-full items-center gap-2">
                            <Label htmlFor={`depreciation-opening-balance-${index}`}>Opening Balance(OB)*</Label>
                            <Input
                              type="text"
                              id={`depreciation-opening-balance-${index}`}
                              placeholder="AED"
                              className="h-12"
                            />
                          </div>

                          <div className="flex gap-3">
                            <div className="grid w-full items-center gap-2">
                              <Label htmlFor={`addition-1b-${index}`}>Addition 1B</Label>
                              <Input
                                type="text"
                                id={`addition-1b-${index}`}
                                placeholder="AED"
                                className="h-12"
                              />
                            </div>

                            <div className="grid w-full items-center gap-2">
                              <Label htmlFor={`disposals-1b-${index}`}>Disposals 1B</Label>
                              <Input
                                type="text"
                                id={`disposals-1b-${index}`}
                                placeholder="AED"
                                className="h-12"
                              />
                            </div>
                          </div>

                          <div className="grid w-full items-center gap-2">
                            <Label htmlFor={`depreciation-balance-${index}`}>Balance</Label>
                            <Input
                              type="text"
                              id={`depreciation-balance-${index}`}
                              placeholder="AED"
                              className="h-12"
                            />
                          </div>

                          <div className="grid w-full items-center gap-2">
                            <Label htmlFor={`nbv-${index}`}>Net Book Value (NBV)</Label>
                            <Input
                              type="text"
                              id={`nbv-${index}`}
                              placeholder="AED"
                              className="h-12"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="mt-4">Create</Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TransferDailog;
