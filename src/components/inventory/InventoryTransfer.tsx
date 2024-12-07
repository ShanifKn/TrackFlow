import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CalendarSync, UserPen } from "lucide-react";
import DepreciationDailog from "./DepreciationDailog";
import { Label } from "../ui/label";

const InventoryTransfer = () => {
  return (
    <div className="my-5 bg-white p-6 rounded-md">
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-black text-xl tracking-wide">Product Details</h1>

          <Button className=" text-white bg-[#006666] hover:bg-emerald-800 ">Asset transfer</Button>
        </div>
        <div className="mt-4 flex gap-5">
          {/* Product */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="product">Product</Label>
            <Input
              type="text"
              id="product"
              value="Laptop Dell Inspiron"
              className="h-12"
              readOnly={true}
            />
          </div>

          {/* Quantity */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              type="text"
              id="quantity"
              value="01"
              className="h-12"
              readOnly={true}
            />
          </div>

          {/* Specification */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="specification">Specification</Label>
            <Input
              type="text"
              id="specification"
              value="16GB RAM, 512GB SSD"
              className="h-12"
              readOnly={true}
            />
          </div>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-5">
        <h1 className="font-semibold text-black text-xl tracking-wide">Goods Receipt Note (GRN)</h1>

        <div className="flex gap-3">
          {/* Branch */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="branch">Branch</Label>
            <Input
              type="text"
              id="branch"
              value="New York"
              className="h-12"
              readOnly={true}
            />
          </div>

          {/* Supervisor */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="supervisor">Supervisor</Label>
            <Input
              type="text"
              id="supervisor"
              value="John Doe"
              className="h-12"
              readOnly={true}
            />
          </div>

          {/* Employee */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="employee">
              Employee <span className="text-gray-400 font-semibold">(optional)</span>
            </Label>
            <Input
              type="text"
              id="employee"
              value="Jane Smith"
              className="h-12"
              readOnly={true}
            />
          </div>
        </div>

        <div className="flex gap-3">
          {/* ARN */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="arn">Asset Reference Number (ARN)</Label>
            <Input
              type="text"
              id="arn"
              value="ARN12345"
              className="h-12"
              readOnly={true}
            />
          </div>

          {/* ARN Date */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="arn_date">ARN Date</Label>
            <Input
              type="text"
              id="arn_date"
              value="31-08-2021"
              className="h-12"
              readOnly={true}
            />
          </div>

          {/* Asset ID */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="asset_id">
              Asset ID <span className="text-gray-400 font-semibold">(duplicate)</span>
            </Label>
            <Input
              type="text"
              id="asset_id"
              value="ASSET12345"
              className="h-12"
              readOnly={true}
            />
          </div>
        </div>

        <div className="flex gap-3">
          {/* Counting Remarks */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="counting_remarks">Counting Remarks</Label>
            <Input
              type="text"
              id="counting_remarks"
              value="Verified"
              className="h-12"
              readOnly={true}
            />
          </div>

          {/* Condition */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="condition">Condition on (31-08-2021)</Label>
            <Input
              type="text"
              id="condition"
              value="Good"
              className="h-12"
              readOnly={true}
            />
          </div>

          {/* Date */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="date">Date</Label>
            <Input
              type="text"
              id="date"
              value="31-08-2021"
              className="h-12"
              readOnly={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryTransfer;
