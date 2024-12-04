import React from "react";
import ProductArray from "./ProductArray";
import UploadDocument from "../vendor/UploadDocument";

const ProductLIst = () => {
  return (
    <>
      <div className="my-5 bg-white  gap-4 p-4">
        <ProductArray />
      </div>

      <div className="my-5 bg-white  gap-4 p-4">
        <UploadDocument />
      </div>
    </>
  );
};

export default ProductLIst;
