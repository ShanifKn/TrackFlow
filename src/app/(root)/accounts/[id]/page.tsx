import DetailsPage from "@/components/accounts/DetailsPage";
import DetailsProductTable from "@/components/accounts/DetailsProductTable";
import PaymentPage from "@/components/accounts/PaymentPage";
import UploadDocument from "@/components/vendor/UploadDocument";
import React from "react";

function page() {
  return (
    <>
      <DetailsPage />

      <DetailsProductTable />

      <PaymentPage />
    </>
  );
}

export default page;
