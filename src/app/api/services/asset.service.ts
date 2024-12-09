import { InitialValues } from "@/core/interfaces/data/asset.interface";
import { RequestMethod } from "@/lib/enums/httpMethods.enum";
import { ApiRoutesEnum } from "@/lib/enums/routes.enum";
import showErrorToast from "@/lib/serviceErrorHandler";

export async function CreateAsset(datas: InitialValues) {
  const formData: any = { url: ApiRoutesEnum.CREATE_ASSET, method: RequestMethod.POST, data: datas };

  const response = await fetch("/api", { method: RequestMethod.POST, body: JSON.stringify(formData) });

  const { data, error } = await response.json();

  console.log("error_1231", error);

  if (data) return data;

  showErrorToast(error);

  return {} as any;
}
