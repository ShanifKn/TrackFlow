import { useToast } from "@/hooks/use-toast";
import { ApiError } from "next/dist/server/api-utils";

export default function showErrorToast(error: ApiError[]) {
  const { toast } = useToast();
  if (!toast) {
    console.log("Toast is not available. Ensure the ToastProvider is correctly set up.");
    return;
  }

  error.forEach((e) => {
    toast({
      title: `Error: ${e.name || e.statusCode}`,
      description: e.message,
      duration: 5000,
    });
  });

  if (error[0]?.message === "Token is not valid or expired, please authenticate again") {
    setTimeout(() => {
      localStorage.removeItem("persist:user");
      window.location.reload();
    }, 1000); // 1 second
  }
}
