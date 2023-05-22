"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDownRightIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 z-10 w-full bg-transparent backdrop-filter backdrop-blur-lg ${
                isScrolled ? "bg-gray-800 bg-opacity-80" : ""
            }`}>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <Link href='#about'>
                    <h3 className='title-font font-medium text-black mb-4 md:mb-0 ml-3 text-xl'>
                        Avijit Biswas
                    </h3>
                </Link>
                <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center'>
                    <Link href='#projects'>
                        <h3 className='mr-5 hover:text-white'>Past Work</h3>
                    </Link>
                    <Link href='#skills'>
                        <h3 className='mr-5 hover:text-white'>Skills</h3>
                    </Link>
                    <Link href='#testimonials'>
                        <h3 className='mr-5 hover:text-white'>Testimonials</h3>
                    </Link>
                </nav>
                <Link href='#contact'>
                    <h3 className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
                        Hire Me
                        <ArrowDownRightIcon className='w-4 h-4 ml-1' />
                    </h3>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
