import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";
import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <>
      <div className="flex max-w-6xl sm:mx-auto items-center py-6 justify-between">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
        <div className="flex items-center">
          <MenuItem title="HOME" address="/" Icon={AiFillHome} />
          <MenuItem
            title="ABOUT"
            address="/about"
            Icon={BsFillInfoCircleFill}
          />
          <DarkModeSwitch />
        </div>
      </div>
    </>
  );
}
