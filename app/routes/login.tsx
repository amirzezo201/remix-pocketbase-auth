import { useCallback } from "react";
import { useActionData, useNavigation, Link,useOutletContext, redirect } from "@remix-run/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "~/components/ui/card";
import { Alert, AlertDescription } from "~/components/ui/alert";
import { usePocket } from "~/lib/PocketContext";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export default function Login() {
  const { login } = usePocket();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit =  useCallback(
    async (data: z.infer<typeof formSchema>) => {
      const result = await login(data.email, data.password);
      if (result.success) {
        redirect("/login");
      }
    },
    [login]
  );

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Log in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter your login email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter your password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Log In"}
              </Button>
            </form>
          </Form>
          {actionData?.error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{actionData.error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild>
            <Link to="/register">Don't have an account? Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}