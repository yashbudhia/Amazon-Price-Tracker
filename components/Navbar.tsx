"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          ></Image>
          <p className="nav-logo">
            SteaL<span className="text-primary">TheDeaL</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          <Image
            src="/assets/icons/search.svg"
            width={27}
            height={27}
            className="object-contain"
            alt="search"
          />
          <Image
            src="/assets/icons/black-heart.svg"
            width={27}
            height={27}
            className="object-contain"
            alt="heart"
          />
          {status !== "authenticated" ? (
            <Link href="/signin">
              <Image
                src="/assets/icons/user.svg"
                width={27}
                height={27}
                className="object-contain"
                alt="user"
              />
            </Link>
          ) : (
            <p>Signed In</p>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
