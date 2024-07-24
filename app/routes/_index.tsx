import { MetaFunction, redirect } from "@remix-run/react";
import { usePocket } from "~/lib/PocketContext";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const {logout ,user} = usePocket()
  const userLogout = () => {
    logout();
    redirect("/login");
  };
  return (
   <main>
     <h2>Protected</h2>
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
      <button onClick={userLogout}>Logout</button>
   </main>    
  );
}