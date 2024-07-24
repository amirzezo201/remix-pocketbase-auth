import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { PocketProvider, usePocket } from "~/lib/PocketContext";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <PocketProvider>{children}</PocketProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const pocketContext = usePocket();
  return (
    
      <Outlet context={pocketContext} />
    
  );
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}