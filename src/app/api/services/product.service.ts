import { RequestMethod } from "@/lib/enums/httpMethods.enum";
import { ApiRoutesEnum } from "@/lib/enums/routes.enum";
import showErrorToast from "@/lib/serviceErrorHandler";

export async function CheckApi() {
  const apicheck: any = { url: ApiRoutesEnum.API_CHECK, method: RequestMethod.GET };

  const response = await fetch("/api", { method: RequestMethod.POST, body: JSON.stringify(apicheck) });

  const { data, error } = await response.json();

  if (data) return data;

  showErrorToast(error);

  return {} as any;
}


export async function updateProductProfile(values: any) {

  const apiPayload = {
    url: ApiRoutesEnum.UPDATE_PRODUCT_PROFILE,
    method: RequestMethod.PATCH,
    data: values, // Pass the form values or user data to be updated
  };

  const response = await fetch("/api", {
    method: RequestMethod.POST,
    body: JSON.stringify(apiPayload),
   
  });

  const { data, error } = await response.json();

  if (data) {
    return data; // Successfully updated
  }

  showErrorToast(error); // Display error toast if an error occurred
  return {} as any; // Return empty object if error occurs
}

export async function addProductProfile(values: any) {
  const apiPayload = {
    url: ApiRoutesEnum.ADD_PRODUCT_PROFILE,
    method: RequestMethod.POST,
    data: values, // Pass the form values or user data to be updated
  };

  const response = await fetch("/api", {
    method: RequestMethod.POST,
    body: JSON.stringify(apiPayload),
   
  });

  const { data, error } = await response.json();

  if (data) {
    return data; // Successfully updated
  }
  showErrorToast(error); // Display error toast if an error occurred
  return {} as any; // Return empty object if error occurs
}

export async function GetProductProfileList(values: any) {
  const apiPayload = {
    url: ApiRoutesEnum.GET_PRODUCT_PROFILE_LIST,
    method: RequestMethod.GET,
    data: values, // Pass the form values or user data to be updated
  };

  const response = await fetch("/api", {
    method: RequestMethod.POST,
    body: JSON.stringify(apiPayload),
   
  });

  const { data, error } = await response.json();

  if (data) {
    return data; // Successfully updated
  }

  showErrorToast(error); // Display error toast if an error occurred
  return {} as any; // Return empty object if error occurs
}

export async function GetOneProductProfile(id: any) {
  const apiPayload = {
    url: ApiRoutesEnum.GET_PRODUCT_PROFILE,
    method: RequestMethod.GET,
    params:id
  };

  const response = await fetch("/api", {
    method: RequestMethod.POST,
    body: JSON.stringify(apiPayload),
   
  });

  const { data, error } = await response.json();

  if (data) {
    return data; // Successfully updated
  }

  showErrorToast(error); // Display error toast if an error occurred
  return {} as any; // Return empty object if error occurs
}

