import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";
import Link from "next/link";

export default function Home() {
  var setting = {
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  var settings = {
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,

  };

  useEffect(() => {
    document.body.style.background = "#f5f1ea";
  }, [])


  return (
    <Layout>

      <div className="min-h-screen h-full w-full relative overflow-hidden">

        <section id="hero" className="h-[120vh] w-full  relative flex justify-center">
          <div className="h-screen w-full bg-gradient-to-b from-[#010F2A]/70 absolute" />

          <div className="h-screen max-w-7xl w-full  absolute flex flex-col items-center  mt-32 text-white px-5 ">

            <div className="w-32 h-32 sm:w-44 sm:h-44 relative">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="max-w-[620px] w-full relative mt-5">

              <Image
                src="/assets/home/classyTitle.svg"
                alt="title"
                layout="responsive"
                width={100}
                height={30}
                objectFit="contain"



              />
            </div>

            <p className="text-xl mt-2">is luxury but humble</p>

            <p className="text-center text-white text-xl md:text-3xl p-5 w-full max-w-3xl mt-10 leading-tight">
              The Residences at Sindhorn Kempinski Hotel Bangkok <br />
              <span className="text-xl h-fit">
                Creates a new benchmark for unique cosmopolitan living in the heart of Bangkok.harmonizes environmental-friendliness, peacefulness and verdant green surroundings with exceptional amenities.
              </span>
            </p>
          </div>

          <Slider {...setting} className="!absolute !w-full !h-full !z-[-10] ">
            <div className="w-full h-[120vh] relative">

              <Image
                src="/assets/home/hero_1.jpg"
                alt="homehero1"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="w-full h-[120vh] relative">

              <Image
                src="/assets/home/hero_2.jpg"
                alt="homehero2"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="w-full h-[120vh] relative">

              <Image
                src="/assets/home/hero_3.jpg"
                alt="homehero3"
                layout="fill"
                objectFit="cover"
              />
            </div>

          </Slider>


        </section>

        <section className="h-full w-full relative flex px-4 md:px-10 flex-col items-center" >

          <div className="max-w-7xl w-full h-full pt-10 flex  flex-col items-center gap-3 justify-center mt-10">

            <h1 className="text-center text-6xl md:text-8xl font-Heleness text-[#B6A694] font-medium">RESIDENCE</h1>
            <p className="max-w-3xl w-full md:text-center text-sm md:text-lg text-[#3C4858]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nesciunt magnam quaerat ducimus tempora laudantium ipsa similique obcaecati neque? Ipsam a ducimus nostrum consectetur veniam ad fugit, eligendi maxime accusantium.</p>
            <Link href={"/residence"}>


              <button className="w-fit px-4 py-2 border border-[#B6A694] text-white h-fit  hover:scale-110 duration-500 mt-2 text-sm bg-[#B6A694] inline-flex uppercase">Discover More
                <span className="scale-75 ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8.389" height="18.079" viewBox="0 0 8.389 18.079">
                    <path id="Path_493511" data-name="Path 493511" d="M129.565,72.889l6.843,8.571-6.843,8.572" transform="translate(-128.979 -72.421)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                  </svg>
                </span></button>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full mt-5">
              <div className="h-96  relative overflow-hidden">
                <Image
                  src="/assets/home/typeroom.jpg"
                  alt="typeroom"
                  layout="fill"

                  objectFit="cover"



                />

                <div className="w-full h-full bg-white absolute bottom-0 hover:opacity-80 opacity-0 duration-500 cursor-pointer flex justify-center items-center">

                  <p className="text-4xl font-medium  text-[#3C4858]  ">PENHOUSE</p>

                </div>

              </div>

              <div className="h-96  relative overflow-hidden">
                <Image
                  src="/assets/home/typeroom3.jpg"
                  alt="typeroom3"
                  layout="fill"

                  objectFit="cover"
                  objectPosition="left"



                />

                <div className="w-full h-full bg-white absolute bottom-0 hover:opacity-80 opacity-0 duration-500 cursor-pointer flex justify-center items-center">

                  <p className="text-4xl font-medium  text-[#3C4858]  ">TWO BED</p>

                </div>

              </div>

              <div className="h-96  relative overflow-hidden">
                <Image
                  src="/assets/home/typeroom2.jpg"
                  alt="typeroom2"
                  layout="fill"

                  objectFit="cover"



                />

                <div className="w-full h-full bg-white absolute bottom-0 hover:opacity-80 opacity-0 duration-500 cursor-pointer flex justify-center items-center">

                  <p className="text-4xl font-medium text-[#3C4858]  ">ONE BED</p>

                </div>

              </div>



            </div>
          </div>

          <div className="max-w-7xl w-full h-full pt-10 flex  flex-col items-center gap-3 md:mt-10 ">

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col justify-center md:pr-10 mb-5">
                <h1 className="text-6xl md:text-8xl font-Heleness text-[#B6A694] font-medium">CONCEPT</h1>
                <p className=" w-full  text-sm md:text-lg text-[#3C4858]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nesciunt magnam quaerat ducimus tempora laudantium ipsa similique obcaecati neque? Ipsam a ducimus nostrum consectetur veniam ad fugit, eligendi maxime accusantium.</p>
                <Link href={"/concept"}>
                  <button className="w-fit px-4 py-2 border border-[#B6A694] text-white h-fit  hover:scale-110 duration-500 mt-2 text-sm bg-[#B6A694] inline-flex uppercase">Discover More
                    <span className="scale-75 ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="8.389" height="18.079" viewBox="0 0 8.389 18.079">
                        <path id="Path_493511" data-name="Path 493511" d="M129.565,72.889l6.843,8.571-6.843,8.572" transform="translate(-128.979 -72.421)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                      </svg>
                    </span></button>
                </Link>

              </div>

              <div className="h-[400px] md:h-[500px] relative flex justify-center ">
                <div className="max-w-[550px] absolute h-[400px] md:h-[550px] md:scale-90 w-full  overflow-hidden">
                  <Image
                    src="/assets/home/concept2.png"
                    alt="concept2"
                    layout="fill"

                    objectFit="cover"
                  />
                </div>

                <div className="absolute h-[450px] w-[450px] translate-x-56 -translate-y-10 opacity-20 z-[-10] ">
                  <Image
                    src="/assets/home/concept5.png"
                    alt="concept5"
                    layout="fill"
                    objectFit="cover"

                  />
                </div>





              </div>

            </div>
          </div>

          <div className="w-full  h-full pt-10 flex  flex-col items-center gap-3 md:mt-10 max-w-7xl  ">

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="h-96 md:h-[500px]  row-start-2 md:row-start-1 relative">
                <Slider {...settings} className="!w-full h-96 md:h-[500px] ">

                  <div className="w-full h-96 md:h-[500px] relative overflow-hidden" >
                    <Image
                      src="/assets/home/service2.jpg"
                      alt="service2"
                      layout="fill"
                      objectFit="cover"

                    />
                  </div>

                  <div className="w-full h-96 md:h-[500px] relative overflow-hidden" >
                    <Image
                      src="/assets/home/service4.jpg"
                      alt="service2"
                      layout="fill"
                      objectFit="cover"

                    />
                  </div>

                  <div className="w-full h-96 md:h-[500px] relative overflow-hidden" >
                    <Image
                      src="/assets/home/service6.jpg"
                      alt="service2"
                      layout="fill"
                      objectFit="cover"

                    />
                  </div>


                  <div className="w-full h-96 md:h-[500px] relative overflow-hidden" >
                    <Image
                      src="/assets/home/swimming3.jpg"
                      alt="service2"
                      layout="fill"
                      objectFit="cover"

                    />
                  </div>

                  <div className="w-full h-96 md:h-[500px] relative overflow-hidden" >
                    <Image
                      src="/assets/home/swimming4.jpg"
                      alt="service2"
                      layout="fill"
                      objectFit="cover"

                    />
                  </div>


                </Slider>
              </div>

              <div className="flex flex-col justify-center md:pl-10 mb-5 row-start-1 ">
                <h1 className="text-6xl md:text-8xl font-Heleness text-[#B6A694] font-medium">GALLERY</h1>
                <p className=" w-full  text-sm md:text-lg max-w-lg text-[#3C4858]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nesciunt magnam quaerat ducimus tempora laudantium ipsa similique obcaecati neque? Ipsam a ducimus nostrum consectetur veniam ad fugit, eligendi maxime accusantium.</p>
                <Link href={"/gallery"}>
                  <button className="w-fit px-4 py-2 border border-[#B6A694] text-white h-fit  hover:scale-110 duration-500 mt-2 text-sm bg-[#B6A694] inline-flex uppercase">Discover More
                    <span className="scale-75 ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="8.389" height="18.079" viewBox="0 0 8.389 18.079">
                        <path id="Path_493511" data-name="Path 493511" d="M129.565,72.889l6.843,8.571-6.843,8.572" transform="translate(-128.979 -72.421)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                      </svg>
                    </span></button>
                </Link>

              </div>



            </div>




          </div>

          <div className="max-w-7xl w-full  h-full pt-10 flex  flex-col items-center gap-3 md:mt-10">

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col justify-center md:pr-10 mb-5">
                <h1 className="text-6xl md:text-8xl font-Heleness text-[#B6A694] font-medium">SERVICE</h1>
                <p className=" w-full  text-sm md:text-lg text-[#3C4858]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nesciunt magnam quaerat ducimus tempora laudantium ipsa similique obcaecati neque? Ipsam a ducimus nostrum consectetur veniam ad fugit, eligendi maxime accusantium.</p>

                <Link href={"/service"}>
                  <button className="w-fit px-4 py-2 border border-[#B6A694] text-white h-fit  hover:scale-110 duration-500 mt-2 text-sm bg-[#B6A694] inline-flex uppercase">Discover More
                    <span className="scale-75 ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="8.389" height="18.079" viewBox="0 0 8.389 18.079">
                        <path id="Path_493511" data-name="Path 493511" d="M129.565,72.889l6.843,8.571-6.843,8.572" transform="translate(-128.979 -72.421)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                      </svg>
                    </span></button>
                </Link>
              </div>

              <div className="h-[450px] relative">
                <Image
                  src="/assets/home/bellboy.jpg"
                  alt="bellboy"
                  layout="fill"

                  objectFit="cover"



                />
              </div>

            </div>
          </div>




        </section>

      </div>

    </Layout>
  )
}


