import Link from "next/link";

interface HeaderProps {
  title: string;
  linkHref?: string;
  linkTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, linkHref, linkTitle }) => {
  return (
    <div>
      <div className=" flex justify-between items-center">
        <h1 className="py-9 font-bold md:text-2xl text-light text-xl">
          {title}
        </h1>
        {linkHref && linkTitle ? (
          <Link
            href={linkHref}
            className="text-sm md:text-xl py-9 text-light underline underline-offset-2 hover:text-primary"
          >
            {linkTitle}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
