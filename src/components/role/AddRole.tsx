import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CheckboxList from "./CheckboxList";
import { Button } from "../ui/button";

const labels = ["All", "Create", "Edit", "Restore", "Delete"];

const AddRole = () => {
  return (
    <div className="bg-white my-10 p-6 py-5 rounded">
      <div className="grid  gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            htmlFor="email"
            className="text-lg">
            Title *
          </Label>
          <Input
            type="text"
            id="text"
            placeholder="Enter Role"
            className="h-12"
          />
        </div>

        <div className="mt-4">
          <h2 className="text-base text-black font-normal mb-5">Permissions *</h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="w-full border rounded-xl px-4 py-3">
              <CheckboxList
                title="Users"
                labels={labels}
              />
            </div>

            <div className="w-full border rounded-xl px-4 py-3">
              <CheckboxList
                title="Purchase"
                labels={labels}
              />
            </div>

            <div className="w-full border rounded-xl px-4 py-3">
              <CheckboxList
                title="Vendor"
                labels={labels}
              />
            </div>

            <div className="w-full border rounded-xl px-4 py-3">
              <CheckboxList
                title="Product"
                labels={labels}
              />
            </div>

            <div className="w-full border rounded-xl px-4 py-3">
              <CheckboxList
                title="Inventory"
                labels={labels}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end my-5">
        <Button className="text-white bg-[#006666] hover:bg-emerald-800 ">Save</Button>
      </div>
    </div>
  );
};

export default AddRole;
