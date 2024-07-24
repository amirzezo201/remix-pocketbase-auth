import { Outlet } from "@remix-run/react";
import { redirect } from "@remix-run/node";

import { usePocket } from "../lib/PocketContext";

export const RequireAuth = () => {
  const { user } = usePocket();
  if (!user) {
    return (
        redirect("/login")
     
    );
  }
  return <Outlet />;
};