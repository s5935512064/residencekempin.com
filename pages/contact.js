import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import React, { useState, useEffect } from "react";

import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";


const Contact = () => {

    const [openTab, setOpenTab] = useState(1);

    useEffect(() => {
        document.body.style.backgroundImage = "url('/assets/background.jpg')";
    }, [])

    return (
        <Layout>
            <div className="min-h-screen h-full w-full relative overflow-y-visible">

                <section id="contacthero" className="w-full h-[120vh] relative flex justify-center  bg-[url('/assets/contact/contact.jpg')] bg-no-repeat bg-cover bg-center">
                    <div className="absolute w-full h-screen bg-gradient-to-b from-[#010F2A]/50 " />

                    <div className="absolute h-screen w-full max-w-7xl  flex flex-col  items-center  px-5 md:px-10 mt-14">

                        <div className="mt-20 flex  top-0 relative ">
                            <div className="w-36 h-36 relative">
                                <Image
                                    src="/assets/logo.svg"
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>

                        <div className="max-w-[750px] w-full max-h-[200px] h-full relative my-5">
                            <Image
                                src="/assets/contact/contactTitle.svg"
                                alt="contactTitle"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>

                    </div>
                </section>

                <section id="contactcontent" className="min-h-screen h-full w-full relative">

                    <div className="w-full h-[155vh]  absolute">
                        <div className="w-1/3 h-full bg-[url('/assets/Artwork8.png')] bg-right bg-cover bg-no-repeat absolute opacity-80 translate-y-16 " />
                    </div>

                    <div className="w-full h-full  relative  flex flex-col justify-between items-center ">
                        <div className="max-w-7xl w-full h-full relative px-4 md:px-10">
                            <div className="w-full min-h-[500px] h-full my-5 ">
                                <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full ">
                                    <div className="lg:col-span-2 lg:p-5 h-[300px] lg:h-[500px]  ">
                                        <div className="w-full h-[300px] lg:h-[500px] relative">
                                            <Image
                                                src="/assets/contact/MAP-Midtown.jpg"
                                                alt="MAP-Midtown"
                                                layout="fill"
                                                quality={100}
                                                objectFit="cover"

                                            />

                                        </div>
                                    </div>

                                    <div className=" h-full w-full py-5 relative ">

                                        <div className="h-[300px] bg-white">

                                            <img src="/assets/contact/sindhornbuilding_6.jpg" alt="building" className="object-cover w-full h-full object-center" />

                                        </div>
                                        <div className="text-[#B6A694] pt-8">
                                            <p className="text-xl font-semibold">
                                                Sindhorn Building
                                            </p>
                                            <p className="text-sm font-light">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio aperiam iure, ex debitis in. Perferendis, eveniet deleniti ad obcaecati officiis explicabo voluptatum facilis. Dolor quas odio expedita ad harum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-full mb-4  ">
                                <div className="w-full relative  h-full">
                                    <div className="flex flex-wrap h-full">
                                        <div className="w-full flex flex-col items-center h-full gap-3">
                                            <div className="relative flex flex-col min-w-0 break-words w-full">
                                                <div className="md:px-6 md:py-5 flex-auto overflow-hidden">
                                                    <div className="tab-content tab-space max-h-[500px] h-full">
                                                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                                            <div
                                                                data-caption=""
                                                                href="/assets/contact/MAP-Village.jpg"
                                                                data-fancybox="map"

                                                                className="hidden md:block w-full h-[500px] relative bg-white">
                                                                <Image
                                                                    src="/assets/contact/MAP-Village.jpg"
                                                                    alt="MAP-Village"
                                                                    layout="fill"

                                                                    quality={100}
                                                                    objectFit="cover"

                                                                />

                                                            </div>

                                                            <div
                                                                data-caption=""
                                                                href="/assets/contact/MAP-Village-M.png"
                                                                data-fancybox="map"

                                                                className="md:hidden w-full h-[350px] relative bg-[#f6f1eb]">
                                                                <Image
                                                                    src="/assets/contact/MAP-Village-M.png"
                                                                    alt="MAP-Village"
                                                                    layout="fill"
                                                                    quality={100}
                                                                    objectFit="contain"

                                                                />

                                                            </div>
                                                        </div>

                                                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                            <div>
                                                                <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.710909883244!2d100.5413388153292!3d13.735944301360343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed9a7ecb2ad%3A0x30c6a65f0f9ed6ab!2sThe%20Residences%20at%20Sindhorn%20Kempinski%20Hotel%20Bangkok!5e0!3m2!1sth!2sth!4v1651562244653!5m2!1sth!2sth" width="600" height="500" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <ul
                                                className="flex mb-0 list-none flex-wrap flex-row w-fit justify-center"
                                                role="tablist"
                                                aria-owns="tab-1 tab-2"
                                            >
                                                <li id="tab-1" role="tab" className="w-44 -mb-px md:mr-2 last:mr-0 flex-auto text-center border border-[#B5A191]">
                                                    <a
                                                        className={
                                                            "text-sm px-5 py-3  block leading-normal uppercase " +
                                                            (openTab === 1
                                                                ? "text-white bg-[#B5A191]"
                                                                : "text-[#B5A191] duration-300 hover:text-white hover:bg-[#B5A191] ")
                                                        }
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            setOpenTab(1);
                                                        }}
                                                        data-toggle="tab"
                                                        href="#link1"

                                                    >
                                                        Photo Map
                                                    </a>
                                                </li>

                                                <li id="tab-2" role="tab" className="w-44 -mb-px mr-2 last:mr-0 flex-auto text-center">
                                                    <a
                                                        className={
                                                            "text-sm px-5 py-3  block leading-normal uppercase border border-[#B5A191] " +
                                                            (openTab === 2
                                                                ? "text-white bg-[#B5A191]"
                                                                : "text-[#B5A191] duration-300 hover:text-white hover:bg-[#B5A191] ")
                                                        }
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            setOpenTab(2);
                                                        }}
                                                        data-toggle="tab"
                                                        href="#link2"
                                                    >
                                                        Google Map
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full ">
                                <div className="flex  flex-col justify-start items-center">
                                    <p className="text-[#B6A694] pt-8 text-center">
                                        88 Soi Tonson Lumpini, Pathumwan Bangkok 10330
                                    </p>
                                    <p className="text-[#B6A694] ">
                                        Tel: 02-650-9899
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </Layout>
    );
}

export default Contact;