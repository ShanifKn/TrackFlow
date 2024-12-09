import React from "react";
import EditAssets from "./EditAssets";
import ProductLIst from "../purchase/ProductLIst";
import AddPrdocut from "./AddPrdocut";
import Depreciation from "./Depreciation";
import DocumentUpload from "./DocumentUpload";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { initialValues, validationSchema } from "./FormikData";
import { InitialValues } from "@/core/interfaces/data/asset.interface";
import { CreateAsset } from "@/app/api/services/asset.service";

const AddAssets = () => {
  const onSubmit = async (values: InitialValues) => {
    console.log("Form data submitted:", values);

    const res = await CreateAsset(values);

    console.log(res);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
            <EditAssets
              values={values}
              setFieldValue={setFieldValue}
            />

            <AddPrdocut
              values={values}
              setFieldValue={setFieldValue}
            />

            {/* <Depreciation /> */}

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

              <Button
                type="submit"
                size={"lg"}>
                Save Asset
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddAssets;
