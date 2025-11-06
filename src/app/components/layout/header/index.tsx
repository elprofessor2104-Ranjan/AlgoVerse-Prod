/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import MobileSidebar from "./MobileSidebar";
import Logo from "../logo";
import ThemeToggler from "./ThemeToggle";

const Header = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [menuData, setMenuData] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [user, setUser] = useState<{ user: any } | null>(null);
  const [sticky, setSticky] = useState(false);

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/layout-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setMenuData(data?.menuData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    signOut();
    setUser(null);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 bg-white dark:bg-surfaceDark transition-all ease-in-out ${
        sticky ? "shadow-xl" : ""
      } `}
    >
      <div className="container">
        <nav className="py-2">
          <div className="flex items-center justify-between py-4">
            <div>
              <Logo />
            </div>
            <ul className="hidden lg:flex items-center gap-8">
              {menuData &&
                menuData.map((item: any, index: number) => (
                  <li key={index} className="relative group">
                    <Link
                      href={item.href}
                      className={`py-1.5 flex items-center gap-2 ${
                        pathname === item.href
                          ? "text-primary font-semibold"
                          : ""
                      }`}
                    >
                      <span className="font-medium hover:text-primary">
                        {item.label}
                      </span>
                      {item?.submenu && (
                        <>
                          <Image
                            src="/images/icon/down-icon.svg"
                            alt="down-icon"
                            width={15}
                            height={15}
                            className="block dark:hidden"
                          />
                          <Image
                            src="/images/icon/white-down-arrow.svg"
                            alt="down-icon"
                            width={15}
                            height={15}
                            className="hidden dark:block"
                          />
                        </>
                      )}
                    </Link>

                    {item.submenu && (
                      <ul className="absolute top-full left-0 bg-white dark:bg-baseInk shadow-md mt-2 p-2 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        {item.submenu.map((subItem: any, subIndex: number) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className="block whitespace-nowrap px-4 py-2 hover:bg-primary/20 text-sm font-medium rounded-md"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
            <div className="flex items-center gap-3">
              <div>
                <ThemeToggler />
              </div>

              <div className="flex lg:hidden">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#FFF"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                      d="M2 4h12M2 8h12M2 12h12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* ------------------------- Mobile sidebar starts ------------------------- */}

      <MobileSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        menuData={menuData || []}
        openIndex={openIndex}
        toggleSubmenu={toggleSubmenu}
        user={user}
        sessionUser={session?.user}
        handleSignOut={handleSignOut}
      />
    </header>
  );
};

export default Header;
