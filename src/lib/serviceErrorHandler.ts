import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function showErrorToast(error: ApiError[]) {
  const { toast } = useToast(); // Destructure the 'toast' function from the returned object

  error.forEach((e) =>
    toast({
      title: `Error: ${e.name || e.statusCode}`,
      description: e.message,
      duration: 5000,
    })
  );

  if (error[0].message === "Token is not valid or expired, please authenticate again") {
    setTimeout(() => {
      localStorage.removeItem("persist:user");
      window.location.reload();
    }, 1000); // 1 second = 1000 milliseconds
  }
}
