import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


const listMenu = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Concept", href: "/concept" },
    { id: 3, name: "Residence", href: "/residence" },
    { id: 4, name: "Gallery", href: "/gallery" },
    { id: 5, name: "Service", href: "/service" },
    { id: 6, name: "News", href: "/news" },
    { id: 7, name: "Contact", href: "/contact" },
];
const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "200%" },
}

const variantText = {
    open: { opacity: 1, y: 0, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75, delay: 0.5 } },
    closed: { opacity: 0, y: "50%", transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.80 } },
}


const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 3
        }
    }
}

const Navbar = () => {

    const router = useRouter();

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [navbarOffset, setNavbarOffset] = useState(false);


    // const handleMouseOut = () => setTimeout(() => setHover(false), 2000);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };


    useEffect(() => {

        var prevScrollpos = window.pageYOffset;
        const navbar = document.querySelector("#navbar");
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            // if (prevScrollpos > currentScrollPos) {
            //     navbar.style.top = "0";

            // } else {
            //     navbar.style.top = "-64px";
            // }

            if (window.pageYOffset >= 100) {
                setNavbarOffset(true);
            }
            else {
                setNavbarOffset(false);
            }
            prevScrollpos = currentScrollPos;
        }
    })





    return (
        <>
            <div id="navbar" className={classNames(navbarOffset ? "bg-[#010F2A]/80 " : "bg-transparent", "fixed top-0 h-16 w-full flex  z-40  md:px-5 py-2")}>

                <div className="relative inline-flex justify-end w-full h-full items-center pr-4 text-white">
                    <div
                        id="menu"
                        className={navbarOpen ? "menu open " : "menu "}
                    >
                        <span className=""></span>

                        <button
                            id="hamburgerBtn"
                            className="menu-link"
                            onClick={handleToggle}

                        >
                            <span className="menu-icon">
                                <span className="menu-line menu-line-1"></span>
                                <span className="menu-line menu-line-2"></span>
                                <span className="menu-line menu-line-3"></span>
                            </span>

                            <span className="font-sans ml-8 text-sm">{navbarOpen ? "CLOSE" : "MENU"}</span>

                        </button>
                    </div>


                    <Link href={"/enquiry"}>
                        <button className="px-4 py-1  uppercase text-sm font-sans border rounded-2xl mt-2 hover:bg-white hover:text-black duration-300">ENQUIRY</button>
                    </Link>
                </div>

            </div>

            <div id="menuoverlay" className={classNames(navbarOpen ? "opacity-100 " : "opacity-0 !z-[0]", "bg-[#010F2A]/80 w-full h-full fixed z-30 duration-1000 flex items-center justify-center p-5 transform")}>
                <div className="max-w-7xl w-full text-white py-5">
                    <div className=" pt-5">

                        <motion.ul
                            variants={container}
                            animate={navbarOpen ? "show" : "hidden"}
                            className="space-y-2"
                        >

                            {listMenu.map((item, index) => (
                                <Link key={index} href={item.href}>
                                    <motion.li
                                        key={index}
                                        animate={navbarOpen ? "open" : "closed"}
                                        variants={variants}
                                        transition={
                                            { ease: [0.455, 0.03, 0.515, 0.955], delay: index * 0.05 }
                                        }
                                        className={classNames(router.pathname === item.href ? "font-bold" : "text-slate-300", "text-5xl hover:font-bold uppercase cursor-pointer")}
                                    >
                                        {item.name}

                                    </motion.li>
                                </Link>

                            ))}

                        </motion.ul>

                    </div>

                    <motion.p

                        animate={navbarOpen ? "open" : "closed"}
                        variants={variantText}

                        className="my-4 text-sm h-28 overflow-y-scroll md:overflow-visible font-sans border-t border-white pt-2"
                    >
                        The Residences at Sindhorn Kempinski Hotel Bangkok is developed, marketed and leased by Siam Sindhorn Co., Ltd., a company independent from the Kempinski group, and the Kempinski name is used by the developer under a license from Kempinski Hotels SA. The role of the Kempinski group is limited to supervising the management of the residential facility.
                        All information, images and perspectives contained in this website are for information and illustrative purposes only, illustrations are artistís impressions and have been enhanced by computer graphics for reference. The exact construction appearance may differ from the specifications, images and perspectives contained in this website. The information and/or details contained herein are subject to change without prior notice and cannot form part of an offer, recommendation to purchase or contract. Siam Sindhorn Co., Ltd. reserves the right to make revisions of any features and amenities denoted in the website at any time.
                    </motion.p>
                </div>

            </div>
        </ >
    );
};

export default Navbar;