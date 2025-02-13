import LoginForm from "@/components/AuthForm/LogInForm";
import { getCurrentUser } from "@/libs/getUser";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className="rounded-md border-2 flex flex-col justify-center items-center w-[80%] md:w-1/2 lg:w-3/12 bg-white shadow-md shadow-black">
      <h1 className="font-bold text-xl py-2 border-b-2 border-black w-[90%] flex justify-center items-center">
        Log In
      </h1>
      <LoginForm />
    </div>
  );
}
