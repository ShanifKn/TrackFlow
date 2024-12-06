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
import UploadDocument from "../vendor/UploadDocument";

const branches = [
  { value: "30 days", label: "30 days" },
  { value: "15 days", label: "15 days" },
  { value: "5 days", label: "5 days" },
];

const status = [
  { value: "Paid", label: "30 days" },
  { value: "15 days", label: "15 days" },
];

const paymentMethod = [
  { value: "bank", label: "Bank Transfer" },
  { value: "cash", label: "Cash Payment" },
  { value: "card", label: "Credit/Debit Card" },
  { value: "cheque", label: "Post-dated Cheques (PDC)" },
  { value: "cash", label: "Cash Payment" },
  { value: "card", label: "Credit (LC)" },
];

const PaymentPage = () => {
  const [value, setValue] = useState("");

  return (
    <div className="bg-white p-6 my-5">
      <UploadDocument />
    </div>
  );
};

export default PaymentPage;
