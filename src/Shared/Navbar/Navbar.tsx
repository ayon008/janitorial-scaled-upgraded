"use client";
import Image from "next/image";
import logo from "@/../public/assets/Blue_and_White_Simple_Cleaning_Services_Logo-removebg-preview-1.png";
import Link from "next/link";
import { poppins } from "@/fonts/poppins";
import { usePathname } from "next/navigation";
import DropDown from "@/app/icons/Dropdown/Dropdown";
import ButtonPrimary from "../Buttons/PrimaryButton";
import NavMobile from "./NavMobile";
import { useEffect, useState } from "react";

export const Logo = () => {
  return (
    <Link href={"/"} className="bg-transparent flex items-center">
      <Image
        src={logo}
        className="sm:w-[50px] w-[35px]"
        alt="janitorial-appointment-logo"
      />
      <p className={`${poppins.className} text-white font-light sm:text-lg text-base `}>
        Janitorial <br /> Appointments
      </p>
    </Link>
  );
};

export const Option = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <div className="py-3 pointer-events-auto w-full">
      <span className="flex items-center group">
        <span className="group-hover:w-[18px] w-[0px] group-hover:mr-2 transition-all duration-300 h-[4px] bg-red-500"></span>
        <Link href={`${href ? href : ""}`}>
          <span className="text-black group-hover:text-red-500 font-light">
            {children}
          </span>
        </Link>
      </span>
    </div>
  );
};

const Services = [
  { name: "Decision Maker", href: "/janitorial-decision-maker" },
  { name: "Single Decision Maker", href: "/single-cleaning-decision-maker" },
  { name: "Cleaning Calculator", href: "/commercial-cleaning-calculator" },
  { name: "Web & App Support", href: "/janitorial-lead-software-support" },
];

const Leads = [
  { name: "Exclusive Leads", href: "/exclusive-janitorial-leads" },
  { name: "Opportunities", href: "/commercial-cleaning-opportunities" },
  { name: "Lay Ups", href: "/qualified-cleaning-leads" },
];

const NavItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-janitorial-services" },
  { name: "Blogs", href: "/janitorial-cleaning-blogs" },
  { name: "Services", children: Services },
  { name: "Leads", children: Leads },
  { name: "Contacts", href: "/contact-cleaning-lead-experts" },
  { name: "Appointments", href: "/janitorial-cleaning-leads-appointments" },
];

// let UserDetails = [
//     { name: 'Profile', href: '/profile' },
//     { name: 'Dashboard', href: '/dashboard' },
//     isSeller && { href: '/sellerDashboard', name: 'Seller dashboard' },
//     isAdmin && { href: '/adminDashboard', name: 'Admin dashboard' },
// ].filter(Boolean); // Remove falsy values

const Navbar = () => {
  const pathname = usePathname();

  const [topPosition, setTopPosition] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 90) {
          setTopPosition(true);
        }
        else {
          setTopPosition(false)
        }
      }
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }

  }, [])


  return (
    <div className={`left-0 right-0 top-0 z-[100] transition-all duration-500 ease-in-out ${!topPosition ? 'absolute bg-transparent' : 'fixed bg-[#212121]'}`}>
      <nav className="max-w-[1580px] mx-auto sm:p-6 p-4 flex items-center justify-between">
        <Logo />
        <ul
          className={`lg:flex hidden navItems items-center justify-between xl:gap-6 lg:gap-4 text-white`}
        >
          {NavItems.map((nav, i) => {
            return (
              <li
                key={i}
                className={`text-base font-light hover:text-red-500 text-white transition-all duration-100 ${pathname === "/" ? "text-red-500" : ""
                  }`}
              >
                {nav?.href ? (
                  <Link href={`${nav.href}`} className="font-medium">
                    {nav.name}
                  </Link>
                ) : (
                  <span className="relative group/parent !z-30">
                    <span className="flex items-center justify-center gap-1">
                      <span className="font-medium">{nav.name}</span>
                      <span>
                        <DropDown />
                      </span>
                    </span>
                    <ul className="w-[350px] pt-10 px-10 pb-6 absolute top-[60px] left-0 bg-white shadow-2xl opacity-0 translate-x-0 translate-y-10 !-z-20 !pointer-events-none transition-all duration-500 ease-in-out invisible group-hover/parent:opacity-100 group-hover/parent:-translate-y-4 group-hover/parent:pointer-events-auto group-hover/parent:delay-0 delay-300 !group-hover/parent:z-30 group-hover/parent:visible">
                      {nav.children?.map((s, i) => (
                        <li
                          key={i}
                          className="border-b-[0.60px] border-opacity-30 border-b-gray relative last:border-b-0"
                        >
                          <Option href={s.href}>{s.name}</Option>
                        </li>
                      ))}
                    </ul>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
        <div>
          <div className="flex items-center justify-between gap-4">
            <Link href={"/login"}>
              <p
                className={`text-base font-light hover:text-red-500 transition-all duration-100 text-white ${poppins.className} hidden lg:block`}
              >
                Sign In
              </p>
            </Link>
            <Link href={"/register"}>
              <ButtonPrimary label="Get Start Free" />
            </Link>
            <NavMobile NavItems={NavItems} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
