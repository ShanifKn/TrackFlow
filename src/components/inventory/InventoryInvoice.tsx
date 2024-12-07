"use client";

import React from "react";
import DetailsPage from "../accounts/DetailsPage";
import DetailsProductTable from "../accounts/DetailsProductTable";
import PaymentPage from "../accounts/PaymentPage";
import InventoryTransfer from "./InventoryTransfer";
import Depreciation from "../assets/Depreciation";
import UploadedDocuments from "./UploadedDocuments";

const InventoryInvoice = () => {
  return (
    <>
      <DetailsPage />

      <InventoryTransfer />

      <Depreciation />

      <UploadedDocuments />
    </>
  );
};

export default InventoryInvoice;
