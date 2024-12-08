"use client";

import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { UserRound } from "lucide-react";
import { Button } from "../ui/button";
import { Check, ChevronsUpDown, UserPen } from "lucide-react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { cn } from "@/lib/utils";
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
import UploadDocument from "./UploadDocument";
import { Textarea } from "../ui/textarea";
import {
  addVendorProfile,
  GetOneVendorProfile,
  updateVendorProfile,
} from "@/app/api/services/vendor.service";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

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

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Business Name is required."),
  contact_name: Yup.string().required("Contact Name is required."),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required."),
  phone: Yup.string().required("Phone number is required."),
  license_no: Yup.string().required("Trade License Number is required."),
  authority: Yup.string().required("Issuing Authority is required."),
  business_type: Yup.string().required("Business Type is required."),
  vat_no: Yup.string().required("VAT Registration Number is required."),
  category: Yup.string().required("Product Category is required."),
  service_type: Yup.string().required("Service Type is required."),
  address: Yup.string().required("Address is required."),
});

const EditVendor = ({ id }: any) => {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setserviceOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [serviceType, setServiceType] = useState("");
  const { toast } = useToast();
  const router = useRouter(); // Initialize the router
  let [initialValues, setInitialValues] = useState({
    name: "",
    vendorId: "",
    contact_name: "",
    email: "",
    phone: "",
    license_no: "",
    authority: "",
    business_type: "",
    vat_no: "",
    category: "",
    service_type: "",
    address: "",
  });

  useEffect(() => {
    const getUserDetails = async () => {
      const user = await GetOneVendorProfile(id);
      console.log("user", user.data);
      setInitialValues({
        vendorId: user.data._id || "",
        name: user.data.name || "",
        contact_name: user.data.contact_name || "",
        email: user.data.email || "",
        phone: user.data.phone || "",
        license_no: user.data.license_no || "",
        authority: user.data.authority || "",
        business_type: user.data.business_type || "",
        vat_no: user.data.vat_no || "",
        category: user.data.category || "",
        service_type: user.data.service_type || "",
        address: user.data.address || "",
      });
    };

    getUserDetails();
  }, [id]); // Re-fetch if the `id` changes

  const onSubmit = async (values: typeof initialValues) => {
    try {
      console.log("Form Data:", values);

      const updatedUser = await updateVendorProfile(values);
      // Show success toast
      toast({
        title: "Success",
        description: "Vendor profile updated successfully!",
        duration: 5000, // Toast duration
      });
      // Redirect to the '/users' route after a successful operation
      router.push("/vendors");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="my-10 grid grid-cols-3 gap-4">
          {/* Vendor Profile Section */}
          <div className="col-span-1 bg-white p-6 rounded h-full flex flex-col gap-4">
            <h1 className="font-semibold text-black text-xl tracking-wide">
              Vendor Profile
            </h1>
            <div className="flex gap-4">
              <div className="bg-[#006666] text-white rounded-full h-16 w-16 flex items-center justify-center">
                <UserRound />
              </div>
              <div className="flex flex-col ">
                <h1 className="text-black font-normal text-lg uppercase">
                  Business Name
                </h1>
                <span className="text-black text-base">Purchase</span>
              </div>
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="name">Business Name</Label>
              <Field
                name="name"
                as={Input}
                type="text"
                placeholder="Business Name"
                className="h-12"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="contact_name">Contact Name</Label>
              <Field
                name="contact_name"
                as={Input}
                type="text"
                placeholder="Primary Contact Name"
                className="h-12"
              />
              <ErrorMessage
                name="contact_name"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="email">Email</Label>
              <Field
                name="email"
                as={Input}
                type="email"
                placeholder="Email"
                className="h-12"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Field
                name="phone"
                as={Input}
                type="tel"
                placeholder="Phone"
                className="h-12"
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          {/* Profile Details Section */}
          <div className="col-span-2 bg-white p-6 rounded flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-6">
              <h1 className="font-semibold text-black text-xl tracking-wide">
                Profile Details
              </h1>

              <div className="flex gap-4">
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="license_no">Trade License Number</Label>
                  <Field
                    name="license_no"
                    as={Input}
                    type="text"
                    placeholder="Trade License Number"
                    className="h-12"
                  />
                  <ErrorMessage
                    name="license_no"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="authority">Issuing Authority</Label>
                  <Field
                    name="authority"
                    as={Input}
                    type="text"
                    placeholder="Issuing Authority"
                    className="h-12"
                  />
                  <ErrorMessage
                    name="authority"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="business_type">Business Type</Label>
                  <Field
                    name="business_type"
                    as={Input}
                    type="text"
                    placeholder="Business Type"
                    className="h-12"
                  />
                  <ErrorMessage
                    name="business_type"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="vat_no">VAT Registration Number</Label>
                  <Field
                    name="vat_no"
                    as={Input}
                    type="text"
                    placeholder="VAT Number"
                    className="h-12"
                  />
                  <ErrorMessage
                    name="vat_no"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                {/* Product Category */}
                <div className="grid w-full gap-2">
                  <Label htmlFor="category">Product Category</Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between h-10"
                      >
                        {values.category
                          ? frameworks.find((f) => f.value === values.category)
                              ?.label
                          : "Select Category..."}
                        <ChevronsUpDown className="opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-96 p-0">
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
                                onSelect={(value) => {
                                  setFieldValue("category", value);
                                  setOpen(false);
                                }}
                              >
                                {framework.label}
                                <Check
                                  className={`ml-auto ${
                                    values.category === framework.value
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
                    name="category"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Service Type */}
                <div className="grid w-full gap-2">
                  <Label htmlFor="service_type">Service Type</Label>
                  <Popover open={serviceOpen} onOpenChange={setserviceOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between h-10"
                      >
                        {values.service_type
                          ? service.find((s) => s.value === values.service_type)
                              ?.label
                          : "Select Service Type..."}
                        <ChevronsUpDown className="opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-96 p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search Service..."
                          className="h-9 w-full"
                        />
                        <CommandList>
                          <CommandEmpty>No Service found.</CommandEmpty>
                          <CommandGroup>
                            {service.map((serviceItem) => (
                              <CommandItem
                                key={serviceItem.value}
                                value={serviceItem.value}
                                onSelect={(value) => {
                                  setFieldValue("service_type", value);
                                  setserviceOpen(false);
                                }}
                              >
                                {serviceItem.label}
                                <Check
                                  className={`ml-auto ${
                                    values.service_type === serviceItem.value
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
                    name="service_type"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid w-full items-center gap-2">
                <Label htmlFor="address">Business Address</Label>
                <Field
                  name="address"
                  as={Textarea}
                  placeholder="Enter Business Address"
                  className="h-24"
                />
                <ErrorMessage
                  name="address"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex justify-end my-5">
                <Button
                  type="submit"
                  className="bg-[#006666] text-white hover:bg-emerald-800"
                >
                  Edit Vendor
                </Button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditVendor;
