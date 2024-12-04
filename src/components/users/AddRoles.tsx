import { Label } from "@radix-ui/react-label";
import { UserRound } from "lucide-react";
import React from "react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import EditUser from "./EditUser";
import UserHistory from "./UserHistory";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const AddUsers = () => {
  return (
    <>
      <EditUser />

      <UserHistory />
    </>
  );
};

export default AddUsers;
