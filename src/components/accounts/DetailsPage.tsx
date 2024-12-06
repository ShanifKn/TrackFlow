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
      <div className="bg-white p-6 col-span-1">
        <h1 className="font-semibold text-black text-xl tracking-wide">PO Details</h1>

        <div className="flex flex-col gap-3 mt-7">
          <div className="grid w-full items-center gap-2 ">
            <Label
              htmlFor="purchase_no"
              className="text-lg text-gray-600">
              Company:
            </Label>
            <Input
              type="text"
              className="h-12"
              value={"RH001F"}
              readOnly={true}
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label
              htmlFor="purchase_no"
              className="text-lg text-gray-600">
              Co Code:
            </Label>
            <Input
              type="text"
              className="h-12"
              value={"RH001"}
              readOnly={true}
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label
              htmlFor="purchase_no"
              className="text-lg text-gray-600">
              Date:
            </Label>
            <Input
              type="text"
              className="h-12"
              value={"12 Sep 2014"}
              readOnly={true}
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 col-span-2 flex flex-col gap-4">
        <div className="flex gap-3 ">
          <div className="grid w-full items-center gap-2 ">
            <Label
              htmlFor="purchase_no"
              className="text-lg text-gray-600">
              Branch:
            </Label>
            <Input
              type="text"
              className="h-12"
              value={"dubai"}
              readOnly={true}
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label
              htmlFor="purchase_no"
              className="text-lg text-gray-600">
              Supervisor:
            </Label>
            <Input
              type="text"
              className="h-12"
              value={"Mohammed Nazar"}
              readOnly={true}
            />
          </div>
        </div>

        <div className="flex gap-3 ">
          <div className="grid w-full items-center gap-2 ">
            <Label
              htmlFor="purchase_no"
              className="text-lg text-gray-600">
              Vendor:
            </Label>
            <Input
              type="text"
              className="h-12"
              value={"Sky Technologies"}
              readOnly={true}
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label
              htmlFor="purchase_no"
              className="text-lg text-gray-600">
              Category:
            </Label>
            <Input
              type="text"
              className="h-12"
              value={"Office Supplies"}
              readOnly={true}
            />
          </div>
        </div>

        <div className="flex gap-3 ">
          <div className="grid w-full items-center gap-2 ">
            <Label
              htmlFor="purchase_no"
              className="text-lg text-gray-600">
              Purchase Number:
            </Label>
            <Input
              type="text"
              className="h-12"
              value={"12123123"}
              readOnly={true}
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label
              htmlFor="purchase_no"
              className="text-lg text-gray-600">
              Purchase Date:
            </Label>
            <Input
              type="text"
              className="h-12"
              value={"12 sep 2024"}
              readOnly={true}
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label
              htmlFor="purchase_no"
              className="text-lg text-gray-600">
              Purchase value:
            </Label>
            <Input
              type="text"
              className="h-12"
              value={"$ 129000"}
              readOnly={true}
            />
          </div>
        </div>

        <div className="grid w-full items-center gap-2">
          <Label
            htmlFor="description"
            className="text-lg text-gray-600">
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="Purchase order Description."
            className="w-full h-20"
            readOnly={true}
            value={"Mitsubishi 10 Ton Pickup"}
          />
        </div>

        <div className="grid w-full items-center gap-2">
          <Label
            htmlFor="remarks"
            className="text-lg text-gray-600">
            Remarks
          </Label>
          <Textarea
            id="remarks"
            placeholder="additional description"
            readOnly={true}
            value={"Passenger Van"}
          />
        </div>

        <section className="">
          <h2 className="text-lg font-bold mb-4">Uploaded PDFs</h2>
          <ul className="flex gap-4 ">
            {pdfFiles.map((file) => (
              <li
                key={file.id}
                className="flex items-center justify-between p-4 bg-white drop-shadow-lg rounded-lg gap-6">
                <span className="text-sm font-medium">{file.name}</span>
                <div className="flex space-x-2">
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline">
                    View
                  </a>
                  <a
                    href={file.url}
                    download
                    className="text-green-500 hover:underline">
                    Download
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DetailsPage;
