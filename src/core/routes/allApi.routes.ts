const userlogin = "/login";
const baseurl = "http://localhost:8001";
const updateurl = "/user/update";
const useradd = "/add-user";
const userprofile = "/user";
const userlist = "/list";

const updatevendorurl = "/vendor/update";
const vendoradd = "/add-vendor";
const vednorprofile = "/vendor";
const vendorlist = "/vendor-list";

export const ApiRoutes: any = {
  // user api section //
  LOGIN_USER: userlogin,
  API_CHECK: baseurl,
  UPDATE_USER_PROFILE:updateurl,
  ADD_USER_PROFILE:useradd,
  GET_USER_PROFILE_LIST:userlist,
  GET_USER_PROFILE:userprofile,

  UPDATE_VENDOR_PROFILE:updatevendorurl,
  ADD_VENDOR_PROFILE:vendoradd,
  GET_VENDOR_PROFILE_LIST:vendorlist,
  GET_VENDOR_PROFILE:vednorprofile
};
