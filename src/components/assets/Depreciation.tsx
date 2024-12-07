import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const Depreciation = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-semibold text-black text-xl tracking-wide"> Depreciation</h1>

      <div>
        <Label htmlFor="company"></Label>
        <Input
          type="text"
          id="company"
          placeholder=""
          className="h-12"
        />
      </div>
    </div>
  );
};

export default Depreciation;
