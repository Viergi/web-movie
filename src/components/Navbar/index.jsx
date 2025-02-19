import { getCurrentUser } from "@/libs/getUser";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const user = await getCurrentUser();
  return <NavbarClient userLoggedIn={user} />;
}
