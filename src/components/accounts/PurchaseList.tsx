import React from "react";
import { PurchaseTable } from "./PurchaseTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PurchaseOrder } from "@/core/interfaces/data/purchase.inerface";
import PendingTable from "./PendingTable";

const data: PurchaseOrder[] = [
  {
    po: 112312,
    date: "12 Sep 2023",
    branch: "Duhai",
    vendor: "Sky Technologies",
    category: "IT",
    invoiced: false,
    paymentMethod: "net 30 days",
    payment: "Pending",
  },
  {
    po: 112313,
    in: 112313,
    date: "15 Sep 2023",
    branch: "Dubai",
    vendor: "Tech Innovators",
    category: "IT",
    invoiced: true,
    paymentMethod: "net 60 days",
    payment: "Completed",
  },
  {
    po: 112314,
    date: "20 Sep 2023",
    branch: "Al Ain",
    vendor: "Green Solutions",
    category: "Office Supplies",
    invoiced: false,
    paymentMethod: "net 45 days",
    payment: "Pending",
  },
  {
    in: 112313,
    po: 112315,
    date: "25 Sep 2023",
    branch: "Abu Dhabi",
    vendor: "Creative Labs",
    category: "Marketing",
    invoiced: true,
    paymentMethod: "net 30 days",
    payment: "Completed",
  },
  {
    po: 112316,
    date: "10 Oct 2023",
    branch: "Sharjah",
    vendor: "Office World",
    category: "Office Supplies",
    invoiced: false,
    paymentMethod: "net 90 days",
    payment: "Pending",
  },
  {
    in: 112313,
    po: 112317,
    date: "15 Oct 2023",
    branch: "Ajman",
    vendor: "Tech Solutions",
    category: "IT",
    invoiced: true,
    paymentMethod: "net 45 days",
    payment: "Completed",
  },
  {
    po: 112318,
    date: "1 Nov 2023",
    branch: "Fujairah",
    vendor: "Global Enterprises",
    category: "Logistics",
    invoiced: false,
    paymentMethod: "net 30 days",
    payment: "Pending",
  },
  {
    in: 112313,
    po: 112319,
    date: "5 Nov 2023",
    branch: "Dubai",
    vendor: "Marketing Pros",
    category: "Marketing",
    invoiced: true,
    paymentMethod: "net 60 days",
    payment: "Completed",
  },
  {
    po: 112320,
    date: "12 Nov 2023",
    branch: "Abu Dhabi",
    vendor: "Digital Tech",
    category: "IT",
    invoiced: false,
    paymentMethod: "net 30 days",
    payment: "Pending",
  },
  {
    in: 112313,
    po: 112321,
    date: "20 Nov 2023",
    branch: "Sharjah",
    vendor: "Logistics Experts",
    category: "Logistics",
    invoiced: true,
    paymentMethod: "net 90 days",
    payment: "Completed",
  },
];

const PurchaseList = () => {
  const fullyInvoiced = data.filter((item) => item.invoiced === true);
  const notInvoiced = data.filter((item) => item.invoiced === false);

  return (
    <>
      <Tabs
        defaultValue="approved"
        className="w-full mt-5 p-6 bg-white">
        <TabsList>
          <TabsTrigger
            value="approved"
            className="w-80 border-2 h-12">
            Approved
          </TabsTrigger>
          <TabsTrigger
            value="pending"
            className="w-80 border-2 h-12">
            Pending
          </TabsTrigger>
        </TabsList>
        <TabsContent value="approved">
          <PurchaseTable data={fullyInvoiced} />
        </TabsContent>
        <TabsContent value="pending">
          <PendingTable data={notInvoiced} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default PurchaseList;
