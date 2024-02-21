import { NavLinkType } from "@/types";
import Link from "next/link";

const NavLink = (props: NavLinkType) => {

  const { href, title } = props
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
