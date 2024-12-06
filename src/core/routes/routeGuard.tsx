"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { Children, useEffect, useState } from "react";
import { PUBLIC_PATHS } from "./publicPaths";
import { useAppSelector } from "../store/redux/hooks";

export function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isUserAuthenticated } = useAppSelector((state: any) => state.user);
  const [hasRouteAccess, setHasRouteAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authCheck(pathname);
  }, [pathname]);

  async function authCheck(url: string) {
    const publicPaths = PUBLIC_PATHS;
    const path = url.split("?")[0];

    // Check if the path starts with any public path
    const isPathPublic = publicPaths.some((publicPath) => path.startsWith(publicPath));

    console.log("isPathPublic", isPathPublic);

    if (isPathPublic || isUserAuthenticated) {
      setHasRouteAccess(true);
      setLoading(false);
    } else {
      // Redirect to login Page
      router.push("/sign-in");
    }

    if (isUserAuthenticated && path === "/sign-in") {
      router.push("/");
    }
  }

  return <>{loading ? <div>Loading...</div> : hasRouteAccess && children}</>;
}
