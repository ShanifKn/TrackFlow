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

const frameworks = [
  { value: "branch a", label: "Branch A" },
  { value: "branch b", label: "Branch B" },
  { value: "branch c", label: "Branch C" },
  { value: "branch d", label: "Branch D" },
  { value: "branch e", label: "Branch E" },
];

const EditUser = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="my-10 grid grid-cols-3 gap-4">
      <div className="col-span-1 bg-white p-6 rounded h-full flex flex-col gap-4">
        <h1 className="font-semibold text-black text-xl tracking-wide">Profile</h1>

        <div className="flex gap-4">
          <div className="bg-[#006666] text-white rounded-full h-16 w-16 flex items-center justify-center">
            <UserRound />
          </div>

          <div className="flex flex-col ">
            <h1 className="text-black font-normal text-lg uppercase">Mark jecno</h1>
            <span className="text-black text-base">Purchase</span>
          </div>
        </div>

        <div className="grid w-full gap-2 mt-3">
          <Label htmlFor="message">Bio</Label>
          <Textarea
            placeholder="Type your message here."
            id="message"
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
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="password"
            className="h-12"
          />
        </div>
      </div>

      <div className="col-span-2 bg-white p-6 rounded flex flex-col gap-6 justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-black text-xl tracking-wide">Edit Profile</h1>

          <div className="flex gap-4">
            <div className="grid w-full gap-2 mt-3">
              <Label htmlFor="message">Branch</Label>
              <Popover
                open={open}
                onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between h-10">
                    {value ? frameworks.find((framework) => framework.value === value)?.label : "Select branch..."}
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
                      <CommandEmpty>No framework found.</CommandEmpty>
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

            <div className="grid w-full gap-2 mt-3">
              <Label htmlFor="message">Role</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between h-10">
                    {value ? frameworks.find((framework) => framework.value === value)?.label : "Select Role..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search role..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No Role found.</CommandEmpty>
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
          </div>

          <div className="flex gap-4">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="firstname">First Name</Label>
              <Input
                type="text"
                id="firstname"
                placeholder="First Name"
                className="h-12"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                type="lastname"
                id="lastname"
                placeholder="Last Name"
                className="h-12"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end my-5">
          <Button className="text-white bg-[#006666]">Update Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
