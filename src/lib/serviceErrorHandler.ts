import { showToast } from "@/hooks/toast";
import { useToast } from "@/hooks/use-toast";
import { ApiError } from "next/dist/server/api-utils";

export default function showErrorToast(error: ApiError[]) {
  console.log(error);

  error.forEach((e) => showToast({ title: `Error: ${e.name || e.statusCode}`, description: e.message, status: "error", duration: 5000 }));

  if (error[0]?.message === "Token is not valid or expired, please authenticate again") {
    setTimeout(() => {
      localStorage.removeItem("persist:user");
      window.location.reload();
    }, 1000); // 1 second
  }
}
