import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { authUserSession } from "@/libs/auth";
import Link from "next/link";

const UserAction = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "sign out" : "sign in";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="text-light text-xs sm:text-xl flex justify-between gap-2">
      {user ? <Link href="/users/dashboard">Dashboard</Link> : null}

      <Link
        href={actionURL}
        className=" underline underline-offset-2"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserAction;
