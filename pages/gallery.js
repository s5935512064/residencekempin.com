import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import React, { useState, useEffect } from "react";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";


const interior = [

    { id: 4, src: "/assets/gallery/service7.jpg", alt: "interior" },
    { id: 5, src: "/assets/gallery/service11.jpg", alt: "interior" },
    { id: 6, src: "/assets/gallery/service15.jpg", alt: "interior" },

]

const exterior = [
    { id: 1, src: "/assets/gallery/service2.jpg", alt: "exterior" },
    { id: 2, src: "/assets/gallery/service4.jpg", alt: "exterior" },
    { id: 3, src: "/assets/gallery/service6.jpg", alt: "exterior" },
    { id: 7, src: "/assets/gallery/swimming3.jpg", alt: "exterior" },
    { id: 8, src: "/assets/gallery/swimming4.jpg", alt: "exterior" },

]

const videoList = [
    { id: 1, src: "https://www.youtube.com/embed/pFsgzj7bBQ4" },
    { id: 2, src: "https://www.youtube.com/embed/Z_iIfOIeSSY" },
    { id: 3, src: "https://www.youtube.com/embed/lf7Lt0-tRt0" },
    { id: 4, src: "https://www.youtube.com/embed/mc1lnlzZRRQ" },
    { id: 5, src: "https://www.youtube.com/embed/LGRZ2iswkmg" },
    { id: 6, src: "https://www.youtube.com/embed/UqLwSSU4Chk" },
    { id: 7, src: "https://www.youtube.com/embed/YvLBIfz3pVg" }

]

const Gallery = () => {

    const [openTab, setOpenTab] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [openTab])

    useEffect(() => {
        document.body.style.background = "white"
    }, [])

    useEffect(() => {
        Fancybox.bind('[data-fancybox]', {
            Carousel: {
                on: {
                    change: (that) => {
                        mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                            friction: 0,
                        });
                    },
                },
            },
        });

        const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
            Dots: false,
            friction: 0.9,
            center: true,
            slidesPerPage: 1,
        });

        const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
            Sync: {
                target: mainCarousel,
                friction: 0.96,
            },
            Dots: false,
            Navigation: false,
            center: true,
            slidesPerPage: 1,
            infinite: false,
        });

    }, [openTab])

    useEffect(() => {
        if (openTab == 2) {
            setTimeout(() => {
                Fancybox.bind('[data-fancybox', {
                    Carousel: {
                        on: {
                            change: (that) => {
                                mainCarousel2.slideTo(mainCarousel2.findPageForSlide(that.page), {
                                    friction: 0,
                                });
                            },
                        },
                    },
                });

                const mainCarousel2 = new Carousel(document.querySelector("#mainCarousel2"), {
                    Dots: false,
                    friction: 0.9,
                    center: true,
                    slidesPerPage: 1,
                });

                const thumbCarousel2 = new Carousel(document.querySelector("#thumbCarousel2"), {
                    Sync: {
                        target: mainCarousel2,
                        friction: 0.96,
                    },
                    Dots: false,
                    Navigation: false,
                    center: true,
                    slidesPerPage: 1,
                    infinite: false,
                });
            }, 600)


        }
    })


    return (
        <Layout>
            <div className="min-h-screen h-full w-full relative overflow-hidden">

                <section id="galleryhero" className="w-full h-[120vh] relative flex justify-center  bg-[url('/assets/gallery/gallery.jpg')] bg-no-repeat bg-cover bg-center">
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

                        <div className="max-w-[750px] w-full max-h-[200px] h-full relative my-5">
                            <Image
                                src="/assets/gallery/galleryTitle.svg"
                                alt="galleryTitle"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>

                    </div>
                </section>

                <section id="gallerycontent" className="w-full h-full relative flex justify-center mt-4 md:mt-20 px-2 md:px-10">
                    <div className="max-w-7xl w-full relative h-full">
                        <div className="flex flex-wrap">
                            <div className="w-full h-full relative ">
                                <div className="absolute md:relative top-5  z-10 w-full pb-2 flex justify-center" >
                                    <ul
                                        className="flex mb-0 list-none flex-wrap flex-row w-fit justify-center"
                                        role="tablist"
                                        aria-owns="tab-1 tab-2 tab-3"
                                    >
                                        <li id="tab-1" role="tab" className="w-44 -mb-px last:mr-0 flex-auto text-center border border-[#B5A191] ">
                                            <a
                                                className={
                                                    "text-sm px-5 py-3  block leading-normal " +
                                                    (openTab === 1
                                                        ? "text-white bg-[#B5A191]"
                                                        : "text-[#B5A191]  duration-300")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(1);
                                                }}
                                                data-toggle="tab"
                                                href="#link1"

                                            >
                                                INTERIOR
                                            </a>
                                        </li>
                                        <li id="tab-2" role="tab" className="w-44 -mb-px last:mr-0 flex-auto text-center border border-[#B5A191] ">
                                            <a
                                                className={
                                                    "text-sm px-5 py-3  block leading-normal " +
                                                    (openTab === 2
                                                        ? "text-white bg-[#B5A191]"
                                                        : "text-[#B5A191]  duration-300  ")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(2);
                                                }}
                                                data-toggle="tab"
                                                href="#link2"

                                            >
                                                EXTERIOR
                                            </a>
                                        </li>

                                        <li id="tab-3" role="tab" className="w-44 -mb-px last:mr-0 flex-auto text-center border border-[#B5A191] ">
                                            <a
                                                className={
                                                    "text-sm px-5 py-3  block leading-normal " +
                                                    (openTab === 3
                                                        ? "text-white bg-[#B5A191]"
                                                        : "text-[#B5A191]  duration-300 ")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(3);
                                                }}
                                                data-toggle="tab"
                                                href="#link3"

                                            >
                                                VIDEO
                                            </a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="relative flex flex-col min-w-0 break-words w-full mt-2">
                                    <div className="md:py-5 flex-auto ">
                                        <div className="tab-content tab-space h-full mt-20 md:mt-0" >
                                            <div className={openTab === 1 ? "w-full grid grid-cols-1" : "hidden"} id="link1">

                                                <div id="mainCarousel" className="carousel w-full h-[700px] ">

                                                    {interior.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="carousel__slide w-full h-[700px]  "
                                                            data-src={item.src}
                                                            data-fancybox
                                                        >
                                                            <img src={item.src}
                                                                className="object-cover h-full w-full object-center " />
                                                        </div>
                                                    ))

                                                    }

                                                </div>

                                                <div id="thumbCarousel" className="carousel mt-3 -translate-y-28 md:translate-y-0">
                                                    {interior.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="carousel__slide">
                                                            <img className="panzoom__content object-cover" src={item.src} />
                                                        </div>
                                                    ))

                                                    }

                                                </div>



                                            </div>
                                            <div className={openTab === 2 ? "w-full grid grid-cols-1" : "hidden"} id="link2">

                                                {loading ? <div className="w-full min-h-[700px] h-full flex justify-center items-center">
                                                    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                        width="40px" height="40px" viewBox="0 0 50 50" >
                                                        <path fill="#b5a191" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                                                            <animateTransform attributeType="xml"
                                                                attributeName="transform"
                                                                type="rotate"
                                                                from="0 25 25"
                                                                to="360 25 25"
                                                                dur="0.6s"
                                                                repeatCount="indefinite" />
                                                        </path>
                                                    </svg>
                                                </div> :
                                                    <div >
                                                        <div id="mainCarousel2" className="carousel w-full h-[700px]">


                                                            {exterior.map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="carousel__slide w-full h-[700px]  "
                                                                    data-src={item.src}
                                                                    data-fancybox

                                                                >
                                                                    <img src={item.src}
                                                                        className="object-cover h-full w-full object-center " />
                                                                </div>
                                                            ))

                                                            }



                                                        </div>

                                                        <div id="thumbCarousel2" className="carousel mt-3 -translate-y-28 md:translate-y-0">
                                                            {exterior.map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="carousel__slide">
                                                                    <img className="panzoom__content object-cover" src={item.src} />
                                                                </div>
                                                            ))

                                                            }

                                                        </div>
                                                    </div>

                                                }




                                            </div>
                                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">

                                                {loading ? <div className="w-full min-h-[700px] h-full flex justify-center items-center">
                                                    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                        width="40px" height="40px" viewBox="0 0 50 50" >
                                                        <path fill="#b5a191" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                                                            <animateTransform attributeType="xml"
                                                                attributeName="transform"
                                                                type="rotate"
                                                                from="0 25 25"
                                                                to="360 25 25"
                                                                dur="0.6s"
                                                                repeatCount="indefinite" />
                                                        </path>
                                                    </svg>
                                                </div> :
                                                    <div className=" w-full min-h-[700px] h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2  ">
                                                        {videoList.map((item, index) => (
                                                            <div key={index}>
                                                                <iframe className="w-full aspect-video" src={item.src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                            </div>
                                                        ))
                                                        }
                                                    </div>

                                                }







                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </section >




            </div >
        </Layout >
    );
}

export default Gallery;