import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import React, { useState, useEffect } from "react";

import Slider from "react-slick";

const Service = () => {

    var settings = {
        speed: 1400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: true,
        fade: true,
    };


    useEffect(() => {
        document.body.style.background = "white"
    }, [])

    return (
        <Layout>
            <div className="min-h-screen h-full w-full relative overflow-hidden">

                <section id="servicehero" className="w-full h-[120vh] relative flex justify-center  bg-[url('/assets/service/service1.jpg')] bg-no-repeat bg-cover bg-center">
                    <div className="absolute w-full h-screen bg-gradient-to-b from-[#010F2A]/30 " />

                    <div className="absolute h-screen w-full max-w-7xl  flex flex-col  items-center  px-5 md:px-10 mt-14">

                        <div className="mt-20 flex  top-0 relative ">
                            <div className="w-36 h-36 relative">
                                <Image
                                    src="/assets/logo-w.svg"
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>

                        <div className="max-w-[750px] w-full max-h-[200px] h-full relative my-5">
                            <Image
                                src="/assets/service/serviceTitle.svg"
                                alt="serviceTitle"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>

                    </div>
                </section>

                <section id="service1" className="min-h-screen h-full w-full relative mt-4 bg-[#B6A694] overflow-hidden flex justify-center p-2 md:px-10 items-center">
                    <div className="absolute w-1/2 h-full right-0 bg-[url('/assets/Artwork7.png')] bg-left-top bg-no-repeat bg-cover translate-y-32 translate-x-56 scale-110 opacity-40" />

                    <div className="max-w-7xl w-full h-full z-10 grid grid-cols-1 md:grid-cols-2 ">

                        <div className="flex h-[650px] md:h-[800px]  w-full justify-center items-center ">
                            <div className="max-h-[800px] h-full max-w-[650px] w-full grid grid-cols-2 gap-2">
                                <div className="max-h-[400px] h-full w-full relative">
                                    <Image
                                        src="/assets/service/kempinski.jpg"
                                        alt="service"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="max-h-[400px] h-full w-full relative">
                                    <Image
                                        src="/assets/service/kempinski4.jpg"
                                        alt="service"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="max-h-[400px] h-full w-full relative">
                                    <Image
                                        src="/assets/service/kempinski3.jpg"
                                        alt="service"
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="right"
                                    />
                                </div>
                                <div className="max-h-[400px] h-full w-full relative">
                                    <Image
                                        src="/assets/service/kempinski2.jpg"
                                        alt="service"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>


                            </div>
                        </div>

                        <div className="flex flex-col h-full w-full justify-center items-center p-5">
                            <div className="w-full md:pl-20">
                                <p className="pl-16 text-xs uppercase">serviced by</p>


                                <img src="/assets/corp_logo_websit.svg" alt="kempinski" className="object-contain h-28 -translate-y-8 " />
                            </div>
                            <ul className="list-disc list-inside font-kingsCaslon -translate-y-12 w-full md:pl-20">
                                <li>
                                    Property management provided by Kempinski
                                </li>
                                <li>
                                    24-hour Concierge/Reception
                                </li>
                                <li>
                                    Doormen
                                </li>
                                <li>
                                    Shuttle services
                                </li>
                                <li>
                                    Security guards / 24-hour centralized TV surveillance systems
                                </li>
                                <li>
                                    Fitness Trainer/ Masseuse
                                </li>
                                <li>
                                    Trolley cart services
                                </li>
                                <li>
                                    Local and International postage and shipping services
                                </li>
                                <li>
                                    Tenancy services
                                </li>
                                <li>
                                    Homecare program and maintenance services
                                </li>
                                <li>
                                    Resident assistance services
                                </li>
                                <li>
                                    Laundry (upon request with extra charge)
                                </li>
                                <li>
                                    Housekeeping (upon request with extra charge)
                                </li>
                                <li>
                                    Exclusive hotel services (upon request with extra charge)
                                </li>

                            </ul>
                        </div>

                    </div>

                </section>

                <section
                    id="service2"
                    className="
                h-screen w-full mt-4 relative
                 flex justify-center items-center overflow-hidden "
                >

                    <div className="mb-80 w-full h-screen bg-white flex justify-center items-center absolute">
                        <Slider {...settings} className="!w-full h-screen  ">
                            <div className="w-full h-screen  bg-[url('/assets/service/service2.jpg')] bg-cover bg-center bg-no-repeat" />
                            <div className="w-full h-screen  bg-[url('/assets/service/service3.jpg')] bg-cover bg-center bg-no-repeat" />
                            <div className="w-full h-screen  bg-[url('/assets/service/service4.jpg')] bg-cover bg-center bg-no-repeat" />
                            <div className="w-full h-screen  bg-[url('/assets/service/service5.jpg')] bg-cover bg-center bg-no-repeat" />
                            <div className="w-full h-screen  bg-[url('/assets/service/service6.jpg')] bg-cover bg-center bg-no-repeat" />

                        </Slider>
                    </div>

                    <div className="w-full h-52 absolute bottom-5 bg-white  flex justify-center items-center">
                        <p className="text-5xl text-[#B6A694] font-medium font-sans">GREEN SPACE</p>
                    </div>

                </section>

                <section
                    id="service3"
                    className=" w-full h-screen relative flex justify-center items-center overflow-hidden mt-4"
                >
                    <div className="w-full h-52 absolute bottom-0 z-10 flex justify-center items-center">
                        <p className="text-5xl text-white font-sans drop-shadow font-medium">RESIDENCE LOBBY</p>

                    </div>


                    <div className="snap-start w-full h-screen bg-white flex justify-center items-center absolute">
                        <Slider {...settings} className="!w-full !h-screen  ">
                            <div className="w-full h-screen  bg-[url('/assets/service/service10.jpg')] bg-cover bg-center bg-no-repeat" />
                            <div className="w-full h-screen  bg-[url('/assets/service/service9.jpg')] bg-cover bg-center bg-no-repeat" />
                            <div className="w-full h-screen  bg-[url('/assets/service/service8.jpg')] bg-cover bg-center bg-no-repeat" />
                            <div className="w-full h-screen  bg-[url('/assets/service/service7.jpg')] bg-cover bg-center bg-no-repeat" />
                        </Slider>
                    </div>

                </section>

                <section
                    id="service3"
                    className=" w-full h-screen relative flex justify-center items-center overflow-hidden mt-4"
                >
                    <div className="w-full h-52 absolute bottom-0  z-10 flex justify-center items-center">
                        <p className="text-5xl text-white font-sans drop-shadow  font-medium">RESIDENCE LOUNGE</p>

                    </div>


                    <div id="content" className="snap-start w-full h-screen bg-white flex justify-center items-center absolute">
                        <Slider {...settings} className="!w-full !h-screen  ">

                            <div className="w-full h-screen  bg-[url('/assets/service/service11.jpg')] bg-cover bg-center bg-no-repeat" />




                            <div className="w-full h-screen  bg-[url('/assets/service/service12.jpg')] bg-cover bg-center bg-no-repeat" />




                            <div className="w-full h-screen  bg-[url('/assets/service/service13.jpg')] bg-cover bg-center bg-no-repeat" />




                            <div className="w-full h-screen  bg-[url('/assets/service/service14.jpg')] bg-cover bg-center bg-no-repeat" />




                            <div className="w-full h-screen  bg-[url('/assets/service/service15.jpg')] bg-cover bg-center bg-no-repeat" />

                        </Slider>
                    </div>

                </section>

                <section
                    id="service4"
                    className=" w-full h-screen relative flex justify-center items-center overflow-hidden mt-4"
                >
                    <div className="w-full h-52 absolute bottom-0  z-10 flex justify-center items-center">
                        <p className="text-5xl text-white font-sans drop-shadow  font-medium">ROOFTOP SWIMMING POOL</p>

                    </div>


                    <div className="w-full h-screen bg-white flex justify-center items-center absolute">
                        <Slider {...settings} className="!w-full !h-screen  ">
                            <div className="w-full h-screen  bg-[url('/assets/service/swimming1.jpg')] bg-cover bg-center bg-no-repeat" />
                            <div className="w-full h-screen  bg-[url('/assets/service/swimming2.jpg')] bg-cover bg-bottom bg-no-repeat" />
                            <div className="w-full h-screen  bg-[url('/assets/service/swimming3.jpg')] bg-cover bg-center bg-no-repeat" />
                            <div className="w-full h-screen  bg-[url('/assets/service/swimming4.jpg')] bg-cover bg-center bg-no-repeat" />
                        </Slider>
                    </div>

                </section>

                <section
                    id="service5"
                    className="w-full h-screen relative flex justify-center items-center overflow-hidden mt-4 "
                >
                    <div className="w-full h-52 absolute bottom-0  z-10 flex justify-center items-center">
                        <p className="text-5xl text-white  drop-shadow font-medium font-sans">FITNESS ROOM</p>

                    </div>


                    <div className="snap-start w-full h-screen bg-white flex justify-center items-center absolute">
                        <Slider {...settings} className="!w-full !h-screen  ">
                            <div className="w-full h-screen  bg-[url('/assets/service/gym1.jpg')] bg-cover bg-center bg-no-repeat" />
                            <div className="w-full h-screen  bg-[url('/assets/service/gym2.jpg')] bg-cover bg-center bg-no-repeat" />
                            <div className="w-full h-screen  bg-[url('/assets/service/gym3.jpg')] bg-cover bg-center bg-no-repeat" />

                        </Slider>
                    </div>

                </section>


            </div>
        </Layout>
    );
}

export default Service;