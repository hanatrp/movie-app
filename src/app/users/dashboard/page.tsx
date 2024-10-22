import { authUserSession } from "@/libs/auth";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  return (
    <div className="text-light px-4 md:px-7 py-4 flex flex-col justify-center items-center">
      <h5 className="md:text-2xl text-xl font-bold">
        welcome, {user?.name || "guest"}🙌
      </h5>
      <Image
        className="object-cover"
        src={user?.image || "/default-image.jpg"}
        alt={user?.name || "user avatar"}
        width={200}
        height={200}
      />
      <div className="py-8 flex flex-wrap gap-4">
        <Link
          href="/users/dashboard/collection"
          className="bg-primary text-dark font-bold px-4 py-2 rounded text-sm md:text-xl"
        >
          my collection
        </Link>
        <Link
          href="/users/dashboard/review"
          className="bg-primary text-dark font-bold px-4 py-2 rounded text-sm md:text-xl"
        >
          review
        </Link>
      </div>
    </div>
  );
};

export default Page;
