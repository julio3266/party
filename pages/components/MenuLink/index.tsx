import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export interface IMenuLink {
  href: string;
  children: React.ReactNode;
}

const MenuLink: React.FC<IMenuLink> = ({ href, children }) => {
  const router = useRouter();
  const { pathname } = router;
  let selected = pathname === href;
  return (
    <Link href={href}>
      <span
        className={
          selected
            ? `w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500`
            : `w-full text-gray-400 dark:text-gray flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-trasparent-500`
        }
      >
        {children}
      </span>
    </Link>
  );
};

export default MenuLink;
