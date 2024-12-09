import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastData {
  title: string;
  description: string;
  status: "success" | "error" | "info" | "warning";
  duration?: number;
}

export const showToast = ({ title, description, status, duration }: ToastData) => {
  const toastOptions: any = {
    position: "top-right",
    autoClose: duration || 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
  };

  switch (status) {
    case "success":
      toast.success(description, toastOptions);
      break;
    case "error":
      toast.error(description, toastOptions);
      break;
    case "info":
      toast.info(description, toastOptions);
      break;
    case "warning":
      toast.warning(description, toastOptions);
      break;
    default:
      toast(description, toastOptions);
  }
};
