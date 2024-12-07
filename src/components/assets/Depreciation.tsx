"use client";

import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import DepreciationDailog from "../inventory/DepreciationDailog";
import { usePathname } from "next/navigation";

const Depreciation = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const pathname = usePathname();

  const isReadOnly = pathname.includes("inventory");

  const dummyData = {
    systemEntryNumber: "G12345",
    depreciationRate: "5%",
    openingBalance: "AED 50,000",
    addition1A: "AED 10,000",
    disposals1A: "AED 2,000",
    valueBalance: "AED 58,000",
    netBookValue: "AED 55,000",
    depreciationOpeningBalance: "AED 40,000",
    addition1B: "AED 8,000",
    disposals1B: "AED 3,000",
    depreciationBalance: "AED 45,000",
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="my-5 bg-white p-6 rounded-md">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <h1 className="font-semibold text-black text-xl tracking-wide pb-3"> Depreciation for 2024</h1>

          <Button
            className="text-white bg-[#006666] hover:bg-emerald-800"
            onClick={handleOpenDialog}>
            Depreciation Entry
          </Button>

          <DepreciationDailog
            open={dialogOpen}
            onClose={handleCloseDialog}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-1 border rounded p-3 flex flex-col gap-4">
            <h1 className="font-normal text-black text-lg tracking-wide pb-3"> Value</h1>

            <div className="flex gap-3">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="systemEntryNumber">System Entry Number</Label>
                <Input
                  type="text"
                  id="systemEntryNumber"
                  placeholder="G12312"
                  className="h-12"
                  readOnly={isReadOnly}
                  value={isReadOnly ? dummyData.systemEntryNumber : ""}
                />
              </div>

              <div className="grid w-full items-center gap-2">
                <Label htmlFor="depreciationRate">Depre Rate to be applied from 01/01/2020</Label>
                <Input
                  type="text"
                  id="depreciationRate"
                  placeholder="%"
                  className="h-12"
                  readOnly={isReadOnly}
                  value={isReadOnly ? dummyData.depreciationRate : ""}
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="openingBalance">Opening Balance (OB)*</Label>
              <Input
                type="text"
                id="openingBalance"
                placeholder="AED"
                className="h-12"
                readOnly={isReadOnly}
                value={isReadOnly ? dummyData.openingBalance : ""}
              />
            </div>

            <div className="flex gap-3">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="addition1A">Addition 1A</Label>
                <Input
                  type="text"
                  id="addition1A"
                  placeholder="AED"
                  className="h-12"
                  readOnly={isReadOnly}
                  value={isReadOnly ? dummyData.addition1A : ""}
                />
              </div>

              <div className="grid w-full items-center gap-2">
                <Label htmlFor="disposals1A">Disposals 1A</Label>
                <Input
                  type="text"
                  id="disposals1A"
                  placeholder="AED"
                  className="h-12"
                  readOnly={isReadOnly}
                  value={isReadOnly ? dummyData.disposals1A : ""}
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="valueBalance">Balance</Label>
              <Input
                type="text"
                id="valueBalance"
                placeholder="AED"
                className="h-12"
                readOnly={isReadOnly}
                value={isReadOnly ? dummyData.valueBalance : ""}
              />
            </div>
          </div>

          <div className="col-span-1 border rounded-md p-3 flex flex-col gap-4">
            <h1 className="font-medium text-black text-lg tracking-wide pb-3"> Depreciation</h1>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="netBookValue">Net Book Value (NBV)</Label>
              <Input
                type="text"
                id="netBookValue"
                placeholder="AED"
                className="h-12"
                readOnly={isReadOnly}
                value={isReadOnly ? dummyData.netBookValue : ""}
              />
            </div>

            <div className="grid w-full items-center gap-2 ">
              <Label htmlFor="depreciationOpeningBalance">Opening Balance (OB)*</Label>
              <Input
                type="text"
                id="depreciationOpeningBalance"
                placeholder="AED"
                className="h-12"
                readOnly={isReadOnly}
                value={isReadOnly ? dummyData.depreciationOpeningBalance : ""}
              />
            </div>

            <div className="flex gap-3">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="addition1B">Addition 1B</Label>
                <Input
                  type="text"
                  id="addition1B"
                  placeholder="AED"
                  className="h-12"
                  readOnly={isReadOnly}
                  value={isReadOnly ? dummyData.addition1B : ""}
                />
              </div>

              <div className="grid w-full items-center gap-2">
                <Label htmlFor="disposals1B">Disposals 1B</Label>
                <Input
                  type="text"
                  id="disposals1B"
                  placeholder="AED"
                  className="h-12"
                  readOnly={isReadOnly}
                  value={isReadOnly ? dummyData.disposals1B : ""}
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="depreciationBalance">Balance</Label>
              <Input
                type="text"
                id="depreciationBalance"
                placeholder="AED"
                className="h-12"
                readOnly={isReadOnly}
                value={isReadOnly ? dummyData.depreciationBalance : ""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depreciation;
