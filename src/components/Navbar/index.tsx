import Link from "next/link";
import InputSearch from "./inputSearch";
import UserAction from "./user.action";

const Navbar = () => {
  return (
      <div className="flex justify-between items-center my-4 mx-2 md:mx-7 bg-dark">
        <Link
          className="text-primary font-extrabold xl:text-5xl md:text-4xl text-2xl"
          href="/"
        >
          weeboo
        </Link>
        <InputSearch />
        <UserAction/>
      </div>
    
  );
};

export default Navbar;
