import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import React, { useState, useEffect } from "react";
import Slider from "react-slick";


const Concept = () => {

    var settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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

                <section id="concepthero" className="w-full h-[120vh] relative flex justify-center  bg-[url('/assets/concept/S3-fogra39.webp')] bg-no-repeat bg-cover bg-top">
                    <div className="absolute w-full h-screen bg-gradient-to-b from-[#010F2A]/50 " />

                    <div className="absolute h-screen w-full max-w-7xl  flex flex-col  items-center  px-5 md:px-10 mt-14">

                        <div className="mt-20 flex top-0 relative ">
                            <div className="w-36 h-36 relative">
                                <Image
                                    src="/assets/logo.svg"
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>

                        <div className="max-w-[750px] w-full max-h-[200px] h-full relative my-5 ">
                            <Image
                                src="/assets/concept/conceptTilte.svg"
                                alt="conceptTilte"
                                layout="fill"
                                objectFit="contain"

                            />
                        </div>

                    </div>
                </section>

                <section id="conceptcontent" className="w-full h-screen relative mt-10">
                    <Slider {...settings} className="!w-full !h-screen bg-white !hidden xl:!flex">
                        <div id="part1" className="w-full h-screen overflow-hidden">
                            <div className="grid grid-cols-2 w-full h-full">
                                <div className="bg-[url('/assets/concept/concept2.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center gap-4">
                                    <p className="font-Heleness text-9xl text-white">1</p>
                                    <p className="font-kingsCaslon text-white text-lg text-center"> <span className="font-Libre text-[#B6A694]">Classy</span> is told by the way you live <br /> without having to speak.</p>

                                </div>
                                <div className="bg-white flex flex-col justify-center items-center gap-4">
                                    <div className="w-1/2 p-1 border border-[#B6A694] h-1/2 mb-28">

                                        <img src="/assets/concept/concept3.png" alt="concept2" className="object-cover w-full h-full object-center" />
                                    </div>
                                    <p className="font-Heleness text-9xl text-[#B6A694] ">2</p>
                                    <p className="font-kingsCaslon text-black text-lg text-center"> <span className="font-Libre text-[#B6A694]">Classy</span> reflects status</p>
                                </div>
                            </div>
                        </div>

                        <div id="part2" className="w-full h-screen overflow-hidden">
                            <div className="grid grid-cols-2 w-full h-full">
                                <div className="bg-white flex flex-col justify-center items-center gap-4">
                                    <div className="w-3/5 p-2 border border-[#B6A694] h-3/5 mb-8">

                                        <img src="/assets/concept/concept4.png" alt="concept4" className="object-cover w-full h-full object-center" />
                                    </div>
                                    <p className="font-Heleness text-9xl text-[#B6A694] ">3</p>
                                    <p className="font-kingsCaslon text-black text-lg text-center"> <span className="font-Libre text-[#B6A694]">Classy</span> is luxurious but humble</p>
                                </div>

                                <div className="bg-[url('/assets/concept/concept5.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-end items-center gap-4 pb-10">
                                    <p className="font-Heleness text-9xl text-white">4</p>
                                    <p className="font-kingsCaslon text-white text-lg text-center"> It not about owning the most expensive things <br />or rarer the rare items, <br /> It is simply knowing what you deserve </p>

                                </div>



                            </div>
                        </div>

                        <div id="part3" className="w-full h-screen overflow-hidden">
                            <div className="grid grid-cols-2 w-full h-full">
                                <div className="bg-white flex flex-col justify-center items-center gap-4">

                                    <p className="font-Heleness text-9xl text-[#B6A694] ">5</p>
                                    <p className="font-kingsCaslon text-black text-lg text-center"> <span className="font-Libre text-[#B6A694]">Classy</span> is is not to be chosen by things <br />but it is everything you choose</p>
                                </div>
                                <div className="w-full flex justify-center p-5">

                                    <div className=" w-3/4 p-2 border border-[#B6A694] h-full">
                                        <img src="/assets/concept/concept6.jpg" alt="concept5" className="object-cover w-full h-full object-center" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div id="part4" className="w-full h-screen overflow-hidden bg-[url('/assets/concept/concept7.jpg')] bg-no-repeat bg-center bg-cover !flex justify-center">
                            <div className="max-w-7xl w-full  flex flex-col items-end  pt-28">
                                <p className="font-Heleness text-9xl text-white pr-28 drop-shadow">6</p>
                                <p className="font-kingsCaslon text-white text-lg text-center drop-shadow"> <span className="font-Libre">Classy</span> must be felt in every moment of life</p>
                            </div>

                        </div>

                        <div id="part5" className="w-full h-screen overflow-hidden">
                            <div className="grid grid-cols-2 w-full h-full">
                                <div className="bg-[url('/assets/concept/concept8.jpg')] bg-no-repeat bg-center bg-cover flex flex-col justify-end items-center gap-4  pb-10">
                                    <p className="font-Heleness text-9xl text-white">7</p>
                                    <p className="font-kingsCaslon text-white text-lg text-center"> One who has a sight to see the true beauty</p>

                                </div>

                                <div className="bg-white flex flex-col justify-center items-center gap-4">
                                    <div className="w-3/5 p-2 border border-[#B6A694] h-3/5 mb-8">

                                        <img src="/assets/concept/concept9.jpg" alt="concept9" className="object-cover w-full h-full object-center" />
                                    </div>
                                    <p className="font-Heleness text-9xl text-[#B6A694] ">8</p>
                                    <p className="font-kingsCaslon text-black text-lg text-center"> One who falls in love with things by their stories</p>
                                </div>
                            </div>
                        </div>

                        <div id="part6" className="w-full h-screen overflow-hidden bg-[url('/assets/concept/S3-fogra39.webp')] bg-no-repeat bg-top bg-cover !flex justify-center">
                            <div className="max-w-7xl w-full  flex flex-col items-end hfull justify-end  pb-28">
                                <p className="font-Heleness text-9xl text-white pr-28 drop-shadow">9</p>
                                <p className="font-kingsCaslon text-white text-lg text-center drop-shadow"> One who lives one is life like a melody</p>
                            </div>

                        </div>

                        <div id="part7" className="w-full h-screen overflow-hidden">
                            <div className="grid grid-cols-2 w-full h-full">

                                <div className="w-full h-full bg-[url('/assets/concept/concept11.jpg')] bg-no-repeat bg-center bg-cover">


                                </div>

                                <div className="bg-white flex flex-col justify-center items-center gap-4">

                                    <p className="font-Heleness text-9xl text-[#B6A694] ">10</p>
                                    <p className="font-kingsCaslon text-black text-lg text-center"> The <span className="font-Libre text-[#B6A694]">classy</span> life is simply irresistible</p>
                                </div>

                            </div>
                        </div>
                    </Slider>

                    <Slider {...settings} className="!w-full !h-screen bg-white xl:!hidden">

                        <div id="mpart1" className="w-full h-screen overflow-hidden">
                            <div className="bg-[url('/assets/concept/concept2.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center  relative w-full h-full">
                                <p className="font-Heleness text-9xl text-white">1</p>
                                <p className="font-kingsCaslon text-white text-lg text-center"> <span className="font-Libre text-[#B6A694]">Classy</span> is told by the way you live <br /> without having to speak.</p>
                            </div>

                        </div>

                        <div id="mpart2" className="w-full h-screen overflow-hidden px-2  !flex !items-center justify-center ">

                            <div className="bg-white flex flex-col justify-center items-center  w-full h-ful  ">
                                <div className="w-full p-1 border border-[#B6A694]  mb-12 max-w-xl">

                                    <img src="/assets/concept/concept3.png" alt="concept2" className="object-cover w-full h-full object-center" />
                                </div>
                                <p className="font-Heleness text-9xl text-[#B6A694] ">2</p>
                                <p className="font-kingsCaslon text-black text-lg text-center"> <span className="font-Libre text-[#B6A694]">Classy</span> reflects status</p>
                            </div>




                        </div>

                        <div id="mpart3" className="w-full h-screen overflow-hidden px-2  !flex !items-center justify-center ">
                            <div className="bg-white flex flex-col justify-center items-center  w-full h-ful">
                                <div className="w-full p-2 border border-[#B6A694]  mb-12 max-w-xl">

                                    <img src="/assets/concept/concept4.png" alt="concept4" className="object-cover w-full h-full object-center" />
                                </div>
                                <p className="font-Heleness text-9xl text-[#B6A694] ">3</p>
                                <p className="font-kingsCaslon text-black text-lg text-center"> <span className="font-Libre text-[#B6A694]">Classy</span> is luxurious but humble</p>
                            </div>

                        </div>

                        <div id="mpart4" className="w-full h-screen overflow-hidden">


                            <div className="bg-[url('/assets/concept/concept5.png')]  bg-no-repeat bg-center bg-cover flex flex-col justify-end items-center  relative w-full h-full pb-20">
                                <p className="font-Heleness text-9xl text-white">4</p>
                                <p className="font-kingsCaslon text-white text-lg text-center"> It not about owning the most expensive things <br />or rarer the rare items, <br /> It is simply knowing what you deserve </p>

                            </div>

                        </div>


                        <div id="mpart5" className="w-full h-screen overflow-hidden px-2  !flex !items-center justify-center ">
                            <div className="bg-white flex flex-col justify-center items-center  w-full h-ful">
                                <div className="w-full p-2 border border-[#B6A694]  mb-12 max-w-xl">

                                    <img src="/assets/concept/concept6.jpg" alt="concept5" className="object-cover w-full h-96 object-center" />
                                </div>
                                <p className="font-Heleness text-9xl text-[#B6A694] ">5</p>
                                <p className="font-kingsCaslon text-black text-lg text-center"> <span className="font-Libre text-[#B6A694]">Classy</span> is is not to be chosen by things <br />but it is everything you choose</p>
                            </div>
                        </div>

                        <div id="mpart6" className="w-full h-screen overflow-hidden">
                            <div className="bg-[url('/assets/concept/concept7.jpg')] bg-no-repeat bg-left bg-cover flex flex-col justify-end items-center  relative w-full h-full pb-20">
                            </div>
                        </div>

                        <div id="mpart7" className="w-full h-screen overflow-hidden">
                            <div className="bg-[url('/assets/concept/concept7.jpg')] bg-no-repeat bg-right bg-cover flex flex-col justify-center items-center  relative w-full h-full pb-20">
                                <div className="max-w-7xl w-full  flex flex-col items-center absolute">
                                    <p className="font-Heleness text-9xl text-white drop-shadow">6</p>
                                    <p className="font-kingsCaslon text-white text-lg text-center drop-shadow"> <span className="font-Libre">Classy</span> must be felt in every moment of life</p>
                                </div>
                            </div>
                        </div>

                        <div id="mpart8" className="w-full h-screen overflow-hidden">

                            <div className="bg-[url('/assets/concept/concept8.jpg')]   bg-no-repeat bg-center bg-cover flex flex-col justify-end items-center  relative w-full h-full pb-20">
                                <p className="font-Heleness text-9xl text-white">7</p>
                                <p className="font-kingsCaslon text-white text-lg text-center"> One who has a sight to see the true beauty</p>

                            </div>

                        </div>

                        <div id="mpart9" className="w-full h-screen overflow-hidden px-2  !flex !items-center justify-center ">
                            <div className="bg-white flex flex-col justify-center items-center  w-full h-ful">
                                <div className="w-full p-2 border border-[#B6A694]  mb-12 max-w-xl">

                                    <img src="/assets/concept/concept9.jpg" alt="concept9" className="object-cover w-full h-full object-center" />
                                </div>
                                <p className="font-Heleness text-9xl text-[#B6A694] ">8</p>
                                <p className="font-kingsCaslon text-black text-lg text-center"> One who falls in love with things by their stories</p>
                            </div>

                        </div>


                        <div id="mpart10" className="w-full h-screen overflow-hidden">
                            <div className="bg-[url('/assets/concept/S3-fogra39.webp')]  bg-no-repeat bg-center bg-cover flex flex-col justify-end items-center  relative w-full h-full pb-20">
                            </div>
                        </div>

                        <div id="mpart11" className="w-full h-screen overflow-hidden">
                            <div className="bg-[url('/assets/concept/S3-fogra39.webp')]  bg-no-repeat bg-right bg-cover flex flex-col justify-center items-center  relative w-full h-full pb-20">
                                <div className="max-w-7xl w-full h-full  flex flex-col items-center absolute justify-end pb-20">
                                    <p className="font-Heleness text-9xl text-white  drop-shadow">9</p>
                                    <p className="font-kingsCaslon text-white text-lg text-center drop-shadow"> One who lives one is life like a melody</p>
                                </div>
                            </div>
                        </div>

                        <div id="mpart12" className="w-full h-screen overflow-hidden px-2  !flex !items-center justify-center ">

                            <div className="bg-white flex flex-col justify-center items-center  w-full h-ful  ">
                                <p className="font-Heleness text-9xl text-[#B6A694] ">10</p>
                                <p className="font-kingsCaslon text-black text-lg text-center"> The <span className="font-Libre text-[#B6A694]">classy</span> life is simply irresistible</p>
                                <div className="w-full p-1 border border-[#B6A694]  mt-12 max-w-xl h-[450px]">
                                    <img src="/assets/concept/concept11.jpg" alt="concept11" className="object-cover w-full h-full object-center" />
                                </div>
                            </div>

                        </div>


                    </Slider>
                </section>

            </div>
        </Layout>
    );
}

export default Concept;