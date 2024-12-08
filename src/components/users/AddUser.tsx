import { Label } from "@radix-ui/react-label";
import { UserRound } from "lucide-react";
import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Check, ChevronsUpDown } from "lucide-react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  addUserProfile,
  updateUserProfile,
} from "@/app/api/services/user.service";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const frameworks = [
  { value: "branch a", label: "Branch A" },
  { value: "branch b", label: "Branch B" },
  { value: "branch c", label: "Branch C" },
  { value: "branch d", label: "Branch D" },
  { value: "branch e", label: "Branch E" },
];

const roles = [
  { label: "Admin", value: "admin" },
  { label: "Manager", value: "manager" },
  { label: "Asset", value: "Inventory" },
  { label: "Inventory", value: "Asset" },
  { label: "Staff", value: "staff" },
];

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required."),
  branch: Yup.string().required("Branch is required."),
  role: Yup.string().required("Role is required."),
  firstName: Yup.string().required("First Name is required."),
  lastName: Yup.string().required("Last Name is required."),
});

const CreateUser = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { toast } = useToast();
  const router = useRouter(); // Initialize the router
  const initialValues = {
    bio: "",
    email: "",
    password: "",
    branch: "",
    role: "",
    firstName: "",
    lastName: "",
  };

  const onSubmit = async (values: typeof initialValues) => {
    try {
      const updatedUser = await addUserProfile(values);
      console.log("Form Data:", updatedUser);
      // Redirect to the '/users' route after a successful operation
      // router.push("/users");
      // Show success toast
      toast({
        title: "Success",
        description: "User profile added successfully!",
        duration: 5000, // Toast duration
      });
      // Redirect to the '/users' route after a successful operation
      router.push("/users");
    } catch (error) {
      console.log("Error updating profile:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="my-10 grid grid-cols-3 gap-4">
          {/* Profile Section */}
          <div className="col-span-1 bg-white p-6 rounded h-full flex flex-col gap-4">
            <h1 className="font-semibold text-black text-xl tracking-wide">
              Profile
            </h1>

            <div className="flex gap-4">
              <div className="bg-[#006666] text-white rounded-full h-16 w-16 flex items-center justify-center">
                <UserRound />
              </div>

              <div className="flex flex-col">
                <h1 className="text-black font-normal text-lg uppercase">
                  Mark Jecno
                </h1>
                <span className="text-black text-base">Purchase</span>
              </div>
            </div>

            <div className="grid w-full gap-2 mt-3">
              <Label htmlFor="bio">Bio</Label>
              <Field
                name="bio"
                as={Textarea}
                placeholder="Type your bio here."
              />
              <ErrorMessage
                name="bio"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="email">Email</Label>
              <Field name="email" as={Input} type="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="password">Password</Label>
              <Field
                name="password"
                as={Input}
                type="password"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          {/* Edit Profile Section */}
          <div className="col-span-2 bg-white p-6 rounded flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-6">
              <h1 className="font-semibold text-black text-xl tracking-wide">
                Add Profile
              </h1>

              <div className="flex gap-4">
                {/* Branch Selection */}
                <div className="grid w-full gap-2 mt-3">
                  <Label htmlFor="branch">Branch</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between h-10"
                      >
                        {values.branch
                          ? frameworks.find((f) => f.value === values.branch)
                              ?.label
                          : "Select Branch..."}
                        <ChevronsUpDown className="opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-96 p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search branch..."
                          className="h-9"
                        />
                        <CommandList>
                          <CommandEmpty>No branch found.</CommandEmpty>
                          <CommandGroup>
                            {frameworks.map((framework) => (
                              <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={() =>
                                  setFieldValue("branch", framework.value)
                                }
                              >
                                {framework.label}
                                <Check
                                  className={`ml-auto ${
                                    values.branch === framework.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  }`}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <ErrorMessage
                    name="branch"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Role Selection */}
                <div className="grid w-full gap-2 mt-3">
                  <Label htmlFor="role">Role</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between h-10"
                      >
                        {values.role
                          ? roles.find((r) => r.value === values.role)?.label
                          : "Select Role..."}
                        <ChevronsUpDown className="opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-96 p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search role..."
                          className="h-9"
                        />
                        <CommandList>
                          <CommandEmpty>No role found.</CommandEmpty>
                          <CommandGroup>
                            {roles.map((role) => (
                              <CommandItem
                                key={role.value}
                                value={role.value}
                                onSelect={() =>
                                  setFieldValue("role", role.value)
                                }
                              >
                                {role.label}
                                <Check
                                  className={`ml-auto ${
                                    values.role === role.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  }`}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <ErrorMessage
                    name="role"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                {/* First Name */}
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Field
                    name="firstName"
                    as={Input}
                    type="text"
                    placeholder="First Name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Last Name */}
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Field
                    name="lastName"
                    as={Input}
                    type="text"
                    placeholder="Last Name"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end my-5">
              <Button
                type="submit"
                className="text-white bg-[#006666] hover:bg-emerald-800"
              >
                Create User
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateUser;
