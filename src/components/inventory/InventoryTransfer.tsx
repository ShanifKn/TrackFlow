import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CalendarSync, UserPen } from "lucide-react";
import TransferDailog from "./TransferDailog";

const data: any[] = [
  {
    assetId: "RH0101010",
    product: "Mac Laptop",
    quantity: 1,
    recievedQuantity: 4,
    spec: "iOS device with M4 Chip",
    type: "laptop",
  },
  {
    assetId: "RH0101010",
    product: "Dell Monitor",
    quantity: 1,
    recievedQuantity: 15,
    spec: "27-inch Full HD with anti-glare screen",
    type: "monitor",
  },
  {
    assetId: "RH0101010",
    product: "HP Laser Printer",
    quantity: 1,
    recievedQuantity: 3,
    spec: "LaserJet with wireless connectivity",
    type: "printer",
  },
];

const InventoryTransfer = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="bg-white p-6 my-5">
      <h1 className="font-semibold text-black text-xl tracking-wide">Product Details</h1>

      <div className="overflow-x-auto mt-5">
        <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-lg rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-200 text-left">Asset Id</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Name</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Quantity</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Specification</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Type</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Transfer</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user: any, index: number) => (
              <tr
                key={index}
                className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-200 text-black">{user.assetId}</td>

                <td className="px-4 py-2 border border-gray-200 text-black">{user.product}</td>
                <td className="px-4 py-2 border border-gray-200">{user.quantity}</td>

                <td className="px-4 py-2 border border-gray-200">{user.spec}</td>
                <td className="px-4 py-2 border border-gray-200">{user.type}</td>
                <td className="px-4 py-2 border border-gray-200">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      className="text-teal-600 hover:text-teal-800"
                      onClick={handleOpenDialog}>
                      <CalendarSync />
                    </button>

                    <TransferDailog
                      open={dialogOpen}
                      onClose={handleCloseDialog}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <Button className="text-white bg-[#006666] hover:bg-emerald-800  mt-5 ">Save </Button>
      </div>
    </div>
  );
};

export default InventoryTransfer;
