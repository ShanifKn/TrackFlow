import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import DepreciationDailog from "../inventory/DepreciationDailog";

const Depreciation = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <h1 className="font-semibold text-black text-xl tracking-wide pb-3"> Depreciation for 2024</h1>

        <Button
          className=" text-white bg-[#006666] hover:bg-emerald-800 "
          onClick={handleOpenDialog}>
          Depreciation Entry{" "}
        </Button>

        <DepreciationDailog
          open={dialogOpen}
          onClose={handleCloseDialog}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-1 border  rounded p-3 flex flex-col gap-4">
          <h1 className="font-normal text-black text-lg tracking-wide pb-3"> Value</h1>

          <div className="flex gap-3">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="purchase_no">System Entry Number</Label>
              <Input
                type="text"
                id="purchase_no"
                placeholder="G12312"
                className="h-12"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="purchase_no">Depre Rate to be applied from 01/01/2020</Label>
              <Input
                type="text"
                id="purchase_no"
                placeholder="%"
                className="h-12"
              />
            </div>
          </div>

          <div className="grid w-full items-center gap-2">
            {/* {purchae value} */}
            <Label htmlFor="purchase_no">Opening Balance(OB)*</Label>
            <Input
              type="text"
              id="purchase_no"
              placeholder="AED"
              className="h-12"
            />
          </div>

          <div className="flex gap-3">
            <div className="grid w-full items-center gap-2">
              {/* {purchae value} */}
              <Label htmlFor="purchase_no">Addition 1A</Label>
              <Input
                type="text"
                id="purchase_no"
                placeholder="AED"
                className="h-12"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              {/* {purchae value} */}
              <Label htmlFor="purchase_no">Disposals 1A</Label>
              <Input
                type="text"
                id="purchase_no"
                placeholder="AED"
                className="h-12"
              />
            </div>
          </div>

          <div className="grid w-full items-center gap-2">
            {/* {purchae value} */}
            <Label htmlFor="purchase_no">Balance</Label>
            <Input
              type="text"
              id="purchase_no"
              placeholder="AED"
              className="h-12"
            />
          </div>
        </div>

        <div className="col-span-1 border rounded-md p-3 flex flex-col gap-4">
          <h1 className="font-medium text-black text-lg tracking-wide pb-3"> Depreciation</h1>

          <div className="grid w-full items-center gap-2">
            {/* {purchae value} */}
            <Label htmlFor="purchase_no">Net Book Value (NBV)</Label>
            <Input
              type="text"
              id="purchase_no"
              placeholder="AED"
              className="h-12"
            />
          </div>

          <div className="grid w-full items-center gap-2 ">
            {/* {purchae value} */}
            <Label htmlFor="purchase_no">Opening Balance(OB)*</Label>
            <Input
              type="text"
              id="purchase_no"
              placeholder="AED"
              className="h-12"
            />
          </div>

          <div className="flex gap-3">
            <div className="grid w-full items-center gap-2">
              {/* {purchae value} */}
              <Label htmlFor="purchase_no">Addition 1B</Label>
              <Input
                type="text"
                id="purchase_no"
                placeholder="AED"
                className="h-12"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              {/* {purchae value} */}
              <Label htmlFor="purchase_no">Disposals 1B</Label>
              <Input
                type="text"
                id="purchase_no"
                placeholder="AED"
                className="h-12"
              />
            </div>
          </div>

          <div className="grid w-full items-center gap-2">
            {/* {purchae value} */}
            <Label htmlFor="purchase_no">Balance</Label>
            <Input
              type="text"
              id="purchase_no"
              placeholder="AED"
              className="h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depreciation;
