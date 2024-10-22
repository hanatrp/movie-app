import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Dashboard/header";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";

const PageCollection = async () => {
  const user = await authUserSession();
  if (!user?.email) {
    return (
      <section className="text-light px-4 md:px-7 py-4">
        <Header title="My Collection" />
        <p>No collection found. Please login to view your collection.</p>
      </section>
    );
  }

  const collection = await prisma?.collection.findMany({
    where: {
      user_email: user.email,
    },
  });

  if (!collection || collection.length === 0) {
    return (
      <section className="text-light px-4 md:px-7 py-6">
        <Header title="My Collection" />
        <p>Your collection is empty.</p>
      </section>
    );
  }

  return (
    <section className="text-light px-4 md:px-7 py-6">
      <Header title="My Collection" />
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-4 grid-cols-2">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative"
            >
              <Image
                priority={true}
                src={collect.anime_image || ""}
                alt={collect.anime_title || ""}
                width={230}
                height={230}
                className="w-full rounded-sm object-cover"
              />
              <div className="flex justify-center items-center absolute w-full bottom-0 bg-primary h-10 sm:h-16">
                <h5 className="text-sm sm:text-xl w-full text-center font-bold">
                  {collect.anime_title}
                </h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PageCollection;
