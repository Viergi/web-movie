import AccountDetail from "@/components/Dashboard/AccountDetail";
import Link from "next/link";
import { getCurrentUser } from "@/libs/getUser";
import Comment from "@/components/Dashboard/Comment";

import dynamic from "next/dynamic";

const FavoriteMovie = dynamic(
  () => {
    return import("@/components/Dashboard/FavoriteMovie");
  },
  {
    ssr: false,
  }
);

export default async function Page() {
  const user = await getCurrentUser();

  return (
    <div className="p-4 md:p-10 flex flex-col">
      <AccountDetail user={user} />
      <FavoriteMovie user={user} />
      <Comment user={user} />
    </div>
  );
}
