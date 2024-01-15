"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const isActive = (path) => path === pathname;
  return (
    <nav className="w-full bg-red-200 mb-2 shadow-md">
      <div className="w-full flex lg:justify-between items-center">
        <Link
          href="/"
          className="w-full bg-emerald-200 flex justify-center items-center text-gray-800 text-xl font-bold tracking-wider"
        >
          <Image
            src="/crmLogo.png"
            alt="CRM Hizmetleri Logo"
            width={100}
            height={100}
            className="rounded-full mr-2"
          />
          <p>CRM Hizmetleri</p>
        </Link>
        <button onClick={() => setShowMenu(!showMenu)} className="lg:hidden">
          {showMenu ? (
            <XMarkIcon className="w-12" />
          ) : (
            <Bars3Icon className="w-12" />
          )}
        </button>
        <div className="w-3/5 absolute rounded-lg bg-slate-200 p-4 right-2 top-24">
          <ul className="w-full tracking-wide font-semibold">
            <li className="bg-slate-100 p-2 rounded-md">
              <Link href="/">Anasayfa</Link>
            </li>
            <li>
              <Link href="/about">Hakkımızda</Link>
            </li>
            <li>
              <Link href="/contact">İletişim</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block bg-emerald-200">
          <Link href="/">Yeni Yıl İndirimini Kaçırma Hemen Tıkla</Link>
        </div>
        <div className="hidden lg:block bg-emerald-200">
          <ul className="flex space-x-4 font-semibold text-gray-800 tracking-wide">
            <li className={isActive("/") ? "underline underline-offset-8" : ""}>
              <Link href="/">Anasayfa</Link>
            </li>
            <li
              className={
                isActive("/about") ? "underline underline-offset-8" : ""
              }
            >
              <Link href="/about">Hakkımızda</Link>
            </li>
            <li
              className={
                isActive("/contact") ? "underline underline-offset-8" : ""
              }
            >
              <Link href="/contact">İletişim</Link>
            </li>
            {/* Add more navigation items here */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
