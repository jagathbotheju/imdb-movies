"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

export default function MenuItem({ title, address, Icon, param }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  let active = false;

  if (genre) {
    active = param === genre;
  } else {
    active = pathname === param;
  }

  return (
    <>
      <Link
        href={address}
        className={`mx-4 lg:mx-6 hover:text-amber-600 font-semibold ${
          active &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
      >
        <Icon className="text-2xl sm:hidden" />
        <p className="hidden sm:inline my-2">{title}</p>
      </Link>
    </>
  );
}
