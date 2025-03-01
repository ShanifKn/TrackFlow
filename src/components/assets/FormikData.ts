import * as Yup from "yup";

export const initialValues = {
  asset_type: "",
  asset_id: "",
  co_code: "",
  company: "",
  sub_type: "",
  category: "",
  audit_category: "",
  vendor: "",
  purchase_date: "",
  purchase_no: "",
  purchase_quantity: "",
  purchase_value: "",
  description: "",
  product: "",
  branch: "",
  supervisor: "",
  employee: "",
  arn_no: "",
  arn_date: "",
  asset_duplicate_id: "",
  counting_remark: "",
  condition: "",
  condition_date: "",
  last_check_date: "",
  documents: [""],
};

export const validationSchema = Yup.object({
  // asset_type: Yup.string().required("Asset type is required"),
  // sub_type: Yup.string().required("Sub type is required"),
  // asset_id: Yup.string().required("Asset ID is required"),
  // co_code: Yup.string().required("CO Code is required"),
  // company: Yup.string().required("Company is required"),
  // category: Yup.string().required("Category is required"),
  // audit_category: Yup.string().required("Audit category is required"),
  // vendor: Yup.string().required("Vendor is required"),
  // purchase_date: Yup.date().required("Purchase date is required"),
  // purchase_no: Yup.string().required("Purchase number is required"),
  // purchase_quantity: Yup.number().min(1, "Quantity must be greater than 0").required("Quantity is required"),
  // purchase_value: Yup.number().min(0, "Value must be positive").required("Purchase value is required"),
  // description: Yup.string().required("Description is required"),
  // product: Yup.string().required("Product is required"),
  // branch: Yup.string().required("Branch is required"),
  // supervisor: Yup.string().required("Supervisor is required"),
  // arn_no: Yup.string().required("ARN Number is required"),
  // arn_date: Yup.date().required("ARN Date is required"),
});
