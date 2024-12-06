"use client";

import React from "react";
import DetailsPage from "../accounts/DetailsPage";
import DetailsProductTable from "../accounts/DetailsProductTable";
import PaymentPage from "../accounts/PaymentPage";
import InventoryTransfer from "./InventoryTransfer";

const InventoryInvoice = () => {
  return (
    <>
      <DetailsPage />

      <InventoryTransfer />

      <PaymentPage />
    </>
  );
};

export default InventoryInvoice;
