import React, { useState } from "react";
import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import ImageUploader from "./ImageUploader";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import AddCategory from "./AddCategory";
import { Textarea } from "../ui/textarea";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { addProductProfile } from "@/app/api/services/product.service";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const frameworks = [
  { value: "branch a", label: "Branch A" },
  { value: "branch b", label: "Branch B" },
  { value: "branch c", label: "Branch C" },
  { value: "branch d", label: "Branch D" },
  { value: "branch e", label: "Branch E" },
];

const initialValues = {
  name: "",
  category: "",
  brand: "",
  specification: "",
  description: "",
  imageUrls: [],
};

// Define Yup validation schema
const schema = yup.object({
  name: yup
    .string()
    .min(3, "Product name must be at least 3 characters long")
    .required("Product name is required"),
  category: yup.string().required("Product category is required"),
  brand: yup
    .string()
    .min(2, "Brand name must be at least 2 characters long")
    .required("Brand name is required"),
  specification: yup.string().required("Specification is required"),
  description: yup
    .string()
    .min(10, "Description must be at least 10 characters long")
    .required("Description is required"),
});

const AddProduct = () => {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { toast } = useToast();
  const router = useRouter(); // Initialize the router

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const onSubmit = async (values: typeof initialValues) => {
    try {
      console.log("Form Data:", values);
      await addProductProfile(values);

      // Show success toast
      toast({
        title: "Success",
        description: "Product profile added successfully!",
        duration: 5000, // Toast duration
      });
      // Redirect to the '/users' route after a successful operation
      router.push("/products");
    } catch (error) {
      console.log("Error updating profile:", error);
    }
  };

  return (
    <div className="my-10 grid grid-cols-3 gap-4">
      <div className="col-span-1 bg-white p-6 rounded h-full flex flex-col gap-4">
        <h1 className="font-semibold text-black text-xl tracking-wide">
          Product Image
        </h1>
        <ImageUploader />
      </div>

      <div className="col-span-2 bg-white p-6 rounded flex flex-col justify-between">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form className="flex flex-col gap-6">
              <h1 className="font-semibold text-black text-xl tracking-wide">
                Product details
              </h1>

              {/* Product Name */}
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="name">Product Name</Label>
                <Field
                  name="name"
                  render={({ field }: any) => (
                    <Input
                      {...field}
                      id="name"
                      placeholder="Product Name"
                      className="h-12"
                    />
                  )}
                />
                {touched.name && errors.name && (
                  <p className="text-red-600 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Product Category */}
              <div className="flex gap-5 items-end">
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="category">Product Category</Label>

                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between h-10"
                      >
                        {values.category
                          ? frameworks.find(
                              (framework) => framework.value === values.category
                            )?.label
                          : "Select Category..."}
                        <ChevronsUpDown className="opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search Category..."
                          className="h-9"
                        />
                        <CommandList>
                          <CommandEmpty>No Category found.</CommandEmpty>
                          <CommandGroup>
                            {frameworks.map((framework) => (
                              <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                  setFieldValue("category", currentValue);
                                  setOpen(false);
                                }}
                              >
                                {framework.label}
                                <Check
                                  className={cn(
                                    "ml-auto",
                                    values.category === framework.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                <Button
                  className="text-white bg-[#006666] hover:bg-emerald-800"
                  onClick={handleOpenDialog}
                >
                  Add Category
                </Button>

                <AddCategory open={dialogOpen} onClose={handleCloseDialog} />
              </div>

              {/* Specification & Brand */}
              <div className="flex gap-3">
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="specification">Specification</Label>
                  <Field
                    name="specification"
                    render={({ field }: any) => (
                      <Input
                        {...field}
                        id="specification"
                        placeholder="Colour / Size / Brand"
                        className="h-12"
                      />
                    )}
                  />
                  {touched.specification && errors.specification && (
                    <p className="text-red-600 text-sm">
                      {errors.specification}
                    </p>
                  )}
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="brand">Brand Name</Label>
                  <Field
                    name="brand"
                    render={({ field }: any) => (
                      <Input
                        {...field}
                        id="brand"
                        placeholder="(e.g. Apple, Acer, Dell)"
                        className="h-12"
                      />
                    )}
                  />
                  {touched.brand && errors.brand && (
                    <p className="text-red-600 text-sm">{errors.brand}</p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="description">Description</Label>
                <Field
                  name="description"
                  render={({ field }: any) => (
                    <Textarea
                      {...field}
                      id="description"
                      placeholder="Product Description."
                    />
                  )}
                />
                {touched.description && errors.description && (
                  <p className="text-red-600 text-sm">{errors.description}</p>
                )}
              </div>

              {/* QR Code */}
              <div className="grid w-80 items-center gap-3">
                <Label htmlFor="qr">Generated QR Code</Label>
                <div className="flex gap-3">
                  <div className="border w-full h-32 border-gray-500"></div>
                  <Button className="text-white bg-blue-600 w-32 mx-auto my-auto">
                    Print
                  </Button>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-end my-5">
                <Button
                  type="submit"
                  className="text-white bg-[#006666] hover:bg-emerald-800"
                >
                  Create product
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddProduct;
