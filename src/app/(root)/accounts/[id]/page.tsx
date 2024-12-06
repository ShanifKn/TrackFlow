import DetailsPage from "@/components/accounts/DetailsPage";
import DetailsProductTable from "@/components/accounts/DetailsProductTable";
import PaymentPage from "@/components/accounts/PaymentPage";
import React from "react";

function Page() {
  return (
    <>
      <DetailsPage />

      <DetailsProductTable />

      <PaymentPage />
    </>
  );
}

export default Page;
