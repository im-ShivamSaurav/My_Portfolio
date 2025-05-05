'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constants/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

// define props type

type props = {
    openNav: () => void;
}

const Nav = ({openNav}:props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if(window.scrollY >= 90){
                setNavBg(true);
            }if(window.scrollY < 90){
                setNavBg(false);
            }
        }
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        }
    },[]);

  return (
    <div className={`fixed ${navBg ? 'bg-[#0c040e]' : 'fixed'} h-[12vh] z-10 transition-all duration-200 w-full `}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Image
          src="/images/logo1.png"
          alt="logo"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />
        {/* Nav Links */}
        <div className="flex items-center space-x-10">
            <div className="hidden lg:flex items-center space-x-8"> 
                 {navLinks.map((navlink)=>{
                return <Link key={navlink.id} href={navlink.url}><p className="nav__link">{navlink.label}</p></Link>
            })}
            </div>
            {/* Button */}
            <div className="flex items-center space-x-4">
                <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">Hire Me</button>
            </div>
            {/* Hamburger Icon */}
            <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
        </div>  
      </div>
    </div>
  );
};

export default Nav;
