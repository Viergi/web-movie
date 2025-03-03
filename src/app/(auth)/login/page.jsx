import LoginForm from "@/components/AuthForm/LogInForm";
import { getCurrentUser } from "@/libs/getUser";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className="rounded-md flex flex-col justify-center items-center w-[80%] md:w-1/2 lg:w-5/12 xl:w-3/12 backdrop-blur-xs bg-background-primary/90 text-white">
      <h1 className="font-bold text-xl py-2 border-b-2 w-[90%] flex justify-center items-center">
        Log In
      </h1>
      <LoginForm />
    </div>
  );
}
