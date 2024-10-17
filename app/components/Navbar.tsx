"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between max-w-7xl mx-auto py-4 z-50 px-2 sm:px-0 relative">
      <Link href="/">
        <Image
          src="/images/logo.png"
          height={60}
          width={60}
          alt=""
          className="size-10 sm:size-12"
        />
      </Link>

      <div className="hidden sm:flex gap-5">
        <Link
          href="/about"
          className={
            pathname === "/about"
              ? "text-[#00EEFF]"
              : "hover:text-[#00EEFF] transition-all ease-in-out duration-300"
          }
        >
          About Us
        </Link>
        <Link
          href="/products"
          className={
            pathname === "/products"
              ? "text-[#00EEFF]"
              : "hover:text-[#00EEFF] transition-all ease-in-out duration-300"
          }
        >
          Products
        </Link>
        <Link
          href="/services"
          className={
            pathname === "/services"
              ? "text-[#00EEFF]"
              : "hover:text-[#00EEFF] transition-all ease-in-out duration-300"
          }
        >
          Services
        </Link>
        <Link
          href="/careers"
          className={
            pathname === "/careers"
              ? "text-[#00EEFF]"
              : "hover:text-[#00EEFF] transition-all ease-in-out duration-300"
          }
        >
          Careers
        </Link>
        <Link
          href="/research"
          className={
            pathname === "/research"
              ? "text-[#00EEFF]"
              : "hover:text-[#00EEFF] transition-all ease-in-out duration-300"
          }
        >
          Research
        </Link>
        <Link
          href="/contact"
          className={
            pathname === "/contact"
              ? "text-[#00EEFF]"
              : " hover:text-[#00EEFF] transition-all ease-in-out duration-300"
          }
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
