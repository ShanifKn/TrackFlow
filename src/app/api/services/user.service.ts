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
