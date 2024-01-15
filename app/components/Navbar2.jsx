"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Navbar2() {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;
  const [isdark, setIsdark] = useState(false);
  useEffect(() => {
    setIsdark(JSON.parse(localStorage.getItem("isdark")));
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, []);
  return (
    <div className="drawer sticky top-0 z-10">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-1 px-2 mx-2 items-center">
            <Link href="/">
              <Image
                src="/crmLogo.png"
                width={80}
                height={80}
                className="rounded-full"
                alt="Crm Hizmetleri Logo"
              />
            </Link>
            <p className="font-semibold text-2xl tracking-wider ml-3">
              CRM Hizmetleri
            </p>
          </div>
          <div className="flex-none hidden md:block font-semibold">
            <ul className="menu menu-horizontal">
              <li
                className={isActive("/") ? "underline underline-offset-4" : ""}
              >
                <Link href="/">Anasayfa</Link>
              </li>
              <li
                className={
                  isActive("/packages") ? "underline underline-offset-4" : ""
                }
              >
                <Link href="/packages">Paketler</Link>
              </li>
              <li
                className={
                  isActive("/contact") ? "underline underline-offset-4" : ""
                }
              >
                <Link href="/contact">İletişim</Link>
              </li>
              <li
                className={
                  isActive("/whatsCrm") ? "underline underline-offset-4" : ""
                }
              >
                <Link href="/whatsCrm">CRM Nedir?</Link>
              </li>
              <li
                className={
                  isActive("/sss") ? "underline underline-offset-4" : ""
                }
              >
                <Link href="/sss">SSS</Link>
              </li>
              <li>
                <label className="flex cursor-pointer gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <input
                    checked={isdark}
                    onChange={() => setIsdark(!isdark)}
                    type="checkbox"
                    value="sunset"
                    className="toggle theme-controller"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </label>
              </li>
            </ul>
          </div>
          <div className="flex-none md:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          <div className="flex px-2 mx-2 items-center">
            <Link href="/">
              <Image
                src="/crmLogo.png"
                width={80}
                height={80}
                className="rounded-full"
                alt="Crm Hizmetleri Logo"
              />
            </Link>
            <p className="font-semibold text-xl tracking-wider ml-3">
              CRM Hizmetleri
            </p>
          </div>
          <li className={isActive("/") ? "underline underline-offset-4" : ""}>
            <Link href="/">Anasayfa</Link>
          </li>
          <li
            className={
              isActive("/packages") ? "underline underline-offset-4" : ""
            }
          >
            <Link href="/about">Paketler</Link>
          </li>
          <li
            className={
              isActive("/contact") ? "underline underline-offset-4" : ""
            }
          >
            <Link href="/contact">İletişim</Link>
          </li>
          <li
            className={
              isActive("/whatsCrm") ? "underline underline-offset-4" : ""
            }
          >
            <Link href="/whatsCrm">CRM Nedir?</Link>
          </li>
          <li
            className={isActive("/sss") ? "underline underline-offset-4" : ""}
          >
            <Link href="/sss">SSS</Link>
          </li>
          <li>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                checked={isdark}
                onChange={() => setIsdark(!isdark)}
                type="checkbox"
                value="sunset"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
