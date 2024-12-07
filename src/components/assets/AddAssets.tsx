import React from "react";
import EditAssets from "./EditAssets";
import ProductLIst from "../purchase/ProductLIst";
import AddPrdocut from "./AddPrdocut";
import Depreciation from "./Depreciation";
import DocumentUpload from "./DocumentUpload";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

const AddAssets = () => {
  return (
    <>
      <EditAssets />

      <AddPrdocut />

      <Depreciation />

      <DocumentUpload />

      <div className="my-5 flex justify-between items-end p-6 pb-14">
        <div className="flex w-full">
          <div className="flex w-full items-center gap-2">
            <Label htmlFor="purchase_no">Created At:</Label>
            <h1 className="font-semibold text-black text-lg"> 12 sep 2024</h1>
          </div>

          <div className="flex w-full items-center gap-2">
            <Label htmlFor="purchase_no">Updated At:</Label>
            <h1 className="font-semibold text-black text-lg"> 12 sep 2024</h1>
          </div>
        </div>

        <Button size={"lg"}>Save Asset</Button>
      </div>
    </>
  );
};

export default AddAssets;
