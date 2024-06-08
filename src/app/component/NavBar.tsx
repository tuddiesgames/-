"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FullPageNav from "./FullPageNav";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const navList = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Services",
      route: "/services",
    },
    {
      name: "Contact",
      route: "/contact",
    },
    // {
    //   name: "Admin",
    //   route: "/admin",
    // },
  ];

  const serviceList = [
    {
      name: "Web Design & Development",
      route: "/web-design-development",
    },
    {
      name: "Mobile App Development",
      route: "/mobile-app-development",
    },
    {
      name: "Billing Software",
      route: "/billing-software",
    },
    {
      name: "Digital Marketing",
      route: "/digital-marketing",
    },
    {
      name: "Game Development",
      route: "/game-development",
    },
    {
      name: "IoT Projects",
      route: "/iot-projects",
    },
    {
      name: "Business Innovative Solution",
      route: "/business-innovative-solution",
    },
  ];

  return (
    <div>
      <div className="hidden md:flex h-20 w-full items-center justify-center mb-10 rounded-lg">
        <div className="flex flex-row gap-10 md:gap-6 sm:gap-3 p-4 md:p-2 sm:p-1 shadow-xl text-white font-bold">
          {navList.map((nav) => (
            <li
              key={nav.name}
              className="relative list-none hover:text-complementary text-lg md:text-base sm:text-base"
              onMouseEnter={() => nav.name === "Services" && setIsServiceOpen(true)}
              onMouseLeave={() => nav.name === "Services" && setIsServiceOpen(false)}
            >
              <Link
                href={nav.route}
                className="hover:secondary px-3 py-1 rounded-md"
              >
                {nav.name}
              </Link>
              {nav.name === "Services" && isServiceOpen && (
                <ul className="absolute top-full left-0 mt-0 w-48 bg-white text-black shadow-lg rounded-lg">
                  {serviceList.map((service) => (
                    <li key={service.name} className="hover:bg-gray-200 border">
                      <Link href={service.route} className="block px-4 py-2">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </div>
      </div>

      <div className="md:hidden flex justify-between items-center p-4">
        <Image
          src="/menuIcon.png"
          alt="Menu Icon"
          width={40}
          height={40}
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && <FullPageNav navList={navList} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default NavBar;
