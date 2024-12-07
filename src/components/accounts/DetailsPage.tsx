import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

interface PDFFile {
  id: number;
  name: string;
  url: string;
}

const pdfFiles: PDFFile[] = [
  { id: 1, name: "Invoice_12345.pdf", url: "/dummy/Invoice_12345.pdf" },
  { id: 2, name: "PO_Details.pdf", url: "/dummy/PO_Details.pdf" },
  { id: 3, name: "Report_Sep2023.pdf", url: "/dummy/Report_Sep2023.pdf" },
];

const DetailsPage = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      <div className="col-span-1 bg-white p-6 rounded-md h-full flex flex-col gap-5">
        <h1 className="font-semibold text-black text-xl tracking-wide">Asset Details</h1>

        {/* Asset ID */}
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="asset-id">Asset ID:</Label>
          <Input
            type="text"
            id="asset-id"
            value="ASSET-12345"
            className="h-12"
            readOnly={true}
          />
        </div>

        {/* CO Code */}
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="co-code">CO Code:</Label>
          <Input
            type="text"
            id="co-code"
            value="CO-001"
            className="h-12"
            readOnly={true}
          />
        </div>

        {/* Company */}
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="company">Company:</Label>
          <Input
            type="text"
            id="company"
            value="Tech Solutions Pvt. Ltd."
            className="h-12"
            readOnly={true}
          />
        </div>

        {/* Asset Type */}
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="asset-type">Asset Type:</Label>
          <Input
            type="text"
            id="asset-type"
            value="Electronics"
            className="h-12"
            readOnly={true}
          />
        </div>

        {/* Sub Type */}
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="sub-type">Sub Type:</Label>
          <Input
            type="text"
            id="sub-type"
            value="Laptop"
            className="h-12"
            readOnly={true}
          />
        </div>
      </div>

      <div className="col-span-2 bg-white p-6 rounded-md flex flex-col justify-between">
        {/* Asset Classification Section */}
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-black text-xl tracking-wide">Asset Classification</h1>

          <div className="flex gap-3">
            {/* Category */}
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="category">Category:</Label>
              <Input
                type="text"
                id="category"
                value="Electronics"
                className="h-12"
                readOnly={true}
              />
            </div>

            {/* Audit Category */}
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="audit-category">Audit Category:</Label>
              <Input
                type="text"
                id="audit-category"
                value="Hardware"
                className="h-12"
                readOnly={true}
              />
            </div>
          </div>
        </div>

        {/* Purchase Details Section */}
        <div className="flex flex-col gap-5 mt-7">
          <h1 className="font-semibold text-black text-xl tracking-wide">Purchase Details</h1>
          {/* Vendor */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="vendor">Vendor:</Label>
            <Input
              type="text"
              id="vendor"
              value="ABC Supplies Pvt. Ltd."
              className="h-12"
              readOnly={true}
            />
          </div>

          <div className="flex gap-3">
            {/* Purchase Number */}
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="purchase_no">Purchase Number:</Label>
              <Input
                type="text"
                id="purchase_no"
                value="PO-123456"
                className="h-12"
                readOnly={true}
              />
            </div>

            {/* Purchase Date */}
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="purchase_date">Purchase Date:</Label>
              <Input
                type="text"
                id="purchase_date"
                value="2023-12-01"
                className="h-12"
                readOnly={true}
              />
            </div>
          </div>

          <div className="flex gap-3">
            {/* Purchase Quantity */}
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="purchase_quantity">Purchase Quantity:</Label>
              <Input
                type="text"
                id="purchase_quantity"
                value="01"
                className="h-12"
                readOnly={true}
              />
            </div>

            {/* Purchase Value */}
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="purchase_value">Purchase Value:</Label>
              <Input
                type="text"
                id="purchase_value"
                value="$50,000"
                className="h-12"
                readOnly={true}
              />
            </div>
          </div>

          {/* Description */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="description">Description:</Label>
            <Textarea
              id="description"
              value="This is a bulk purchase of laptops for the IT department."
              className="w-full h-20"
              readOnly={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
