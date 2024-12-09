const userlogin = "/login";
const createAsset = "/create-asset";
const baseurl = "/";
const updateurl = "/user/update";
const useradd = "/add-user";
const userprofile = "/user";
const userlist = "/list";

const updatevendorurl = "/vendor/update";
const vendoradd = "/add-vendor";
const vednorprofile = "/vendor";
const vendorlist = "/vendor-list";

const updateproducturl = "/product/update";
const productadd = "/add-product";
const productprofile = "/product";
const productlist = "/product-list";

const imageUpload = "/image-upload";

export const ApiRoutes: any = {
  // user api section //
  LOGIN_USER: userlogin,
  API_CHECK: baseurl,
  UPDATE_USER_PROFILE: updateurl,
  ADD_USER_PROFILE: useradd,
  GET_USER_PROFILE_LIST: userlist,
  GET_USER_PROFILE: userprofile,

  UPDATE_VENDOR_PROFILE: updatevendorurl,
  ADD_VENDOR_PROFILE: vendoradd,
  GET_VENDOR_PROFILE_LIST: vendorlist,
  GET_VENDOR_PROFILE: vednorprofile,

  // asset api section //
  CREATE_ASSET: createAsset,

  UPDATE_PRODUCT_PROFILE: updateproducturl,
  ADD_PRODUCT_PROFILE: productadd,
  GET_PRODUCT_PROFILE_LIST: productlist,
  GET_PRODUCT_PROFILE: productprofile,

  UPLOAD_IMAGE: imageUpload,
};
