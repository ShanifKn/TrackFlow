import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const labels = ["All", "Create", "Edit"];

const CheckboxList = ({ title, labels, name, control }: any) => {
  const handleCheckboxChange = (value: string[], label: string) => {
    const isAll = label === "All";
    if (isAll) {
      // Toggle all checkboxes
      return value.length === labels.length ? [] : [...labels];
    } else {
      // Toggle individual checkbox
      const updatedValues = value.includes(label) ? value.filter((item) => item !== label) : [...value, label];

      // Ensure "All" checkbox is updated
      const isAllChecked = updatedValues.length === labels.length;
      return isAllChecked ? [...labels] : updatedValues;
    }
  };

  return (
    <div className="space-y-4">
      <div className="font-semibold text-lg">{title}:</div>
      <Controller
        name={name}
        control={control}
        defaultValue={[]}
        render={({ field: { value, onChange } }) => (
          <div className="flex flex-wrap gap-4">
            {labels.map((label: any) => (
              <label
                key={label}
                className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={value.includes(label)}
                  onChange={() => onChange(handleCheckboxChange(value, label))}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-sm">{label}</span>
              </label>
            ))}
          </div>
        )}
      />
    </div>
  );
};

const AddRole = () => {
  const { control, handleSubmit, register, watch } = useForm({
    defaultValues: {
      title: "",
      permissions: {
        Users: [],
        Asset: [],
        Vendor: [],
        Product: [],
        Inventory: [],
      },
    },
  });

  const onSubmit = (data: any) => {
    console.log("Selected Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white my-10 p-6 py-5 rounded">
      <div className="grid gap-4">
        {/* Title Field */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            htmlFor="title"
            className="text-lg">
            Title *
          </Label>

          <Input
            type="text"
            id="text"
            placeholder="Enter Role"
            {...register("title")}
            className="h-12"
          />
        </div>

        {/* Permissions Section */}
        <div className="mt-4">
          <h2 className="text-base text-black font-normal mb-5">Permissions *</h2>

          <div className="grid grid-cols-2 gap-6">
            {Object.keys(watch("permissions")).map((category) => (
              <div
                key={category}
                className="w-full border rounded-xl px-4 py-3">
                <CheckboxList
                  title={category}
                  labels={labels}
                  name={`permissions.${category}`}
                  control={control}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end my-5">
        <Button
          type="submit"
          className="text-white bg-[#006666] hover:bg-emerald-800 ">
          Save
        </Button>
      </div>
    </form>
  );
};

export default AddRole;
