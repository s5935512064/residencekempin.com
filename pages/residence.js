import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll, scroller } from 'react-scroll'


const Residence = () => {

    const [color, setColor] = useState("");
    const [color2, setColor2] = useState("");
    const [color3, setColor3] = useState("");
    const [color4, setColor4] = useState("");
    const [color5, setColor5] = useState("");
    const [colorBtn, setColorBtn] = useState("");

    const [floor, setFloor] = useState(0);
    const [roomType, setRoomtype] = useState(0);

    useEffect(() => {
        if (floor == 1) {
            setColor("#B5A191")
        }
        else {
            setColor("transparent")
        }

        if (floor == 2) {
            setColor2("#B5A191")
        }
        else {
            setColor2("transparent")
        }

        if (floor == 3) {
            setColor3("#B5A191")
        }
        else {
            setColor3("transparent")
        }

        if (floor == 4) {
            setColor4("#B5A191")
        }
        else {
            setColor4("transparent")
        }

        if (floor == 5) {
            setColor5("#B5A191")
        }
        else {
            setColor5("transparent")
        }


    }, [floor])

    const TypeContent = () => {
        if (floor == 5) {
            if (roomType == "34th") {
                return (
                    <div className="w-[650px] h-full relative p-5">

                        {/* <div className="w-full flex justify-between text-[#B5A191] text-sm h-full items-end ">
                            <p className="z-40">Floor : 34th </p>
                        </div> */}

                        <Image
                            src="/assets/residence/Floor-34.png"
                            alt="Floor-34"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"



                        />
                    </div>
                )
            }
            else if (roomType == "ph") {
                return (
                    <div className="w-[650px] h-full relative p-5">

                        <div className="w-full flex justify-between text-[#B5A191] text-sm h-full items-end">
                            <p>Floor : 34th </p>

                            <p>Type : Penthouse</p>

                        </div>
                        <Image
                            src="/assets/residence/UnitTypePH.png"
                            alt="UnitTypePH"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                            className="hover:scale-150 duration-300"


                        />
                    </div>
                )
            }
        }
        else if (floor == 4) {
            if (roomType == "33th") {
                return (
                    <div className="w-[650px] h-full relative p-5">

                        {/* <div className="w-full flex justify-between text-[#B5A191] text-sm h-full items-end ">
                            <p className="z-40">Floor : 34th </p>
                        </div> */}

                        <Image
                            src="/assets/residence/Floor-31-33.png"
                            alt="Floor-31-33"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"



                        />
                    </div>
                )
            }

            else if (roomType == "3B") {
                return (
                    <div className="w-[650px] h-full relative p-5">
                        <div className="w-full flex justify-between text-[#B5A191] text-sm h-full items-end">
                            <p>Floor : 31st-33rd</p>

                            <p>Type : 3B</p>

                        </div>
                        <Image
                            src="/assets/residence/UnitType3B.png"
                            alt="UnitType3B"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"

                        />
                    </div>
                )
            }
            else if (roomType == "3C") {
                return (
                    <div className="w-[650px] h-full relative p-5">
                        <div className="w-full flex justify-between text-[#B5A191] text-sm h-full items-end">
                            <p>Floor : 31st-33rd</p>

                            <p>Type : 3C</p>

                        </div>
                        <Image
                            src="/assets/residence/UnitType3C.png"
                            alt="UnitType3C"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"

                        />
                    </div>
                )
            }
        }

        else if (floor == 3) {
            if (roomType == "29th") {
                return (
                    <div className="w-[650px] h-full relative p-5">

                        {/* <div className="w-full flex justify-between text-[#B5A191] text-sm h-full items-end ">
                            <p className="z-40">Floor : 34th </p>
                        </div> */}

                        <Image
                            src="/assets/residence/Floor-27-28.png"
                            alt="Floor-27-28"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"



                        />
                    </div>
                )
            }
        }
        else if (floor == 2) {
            if (roomType == "26th") {
                return (
                    <div className="w-[650px] h-full relative p-5">

                        {/* <div className="w-full flex justify-between text-[#B5A191] text-sm h-full items-end ">
                            <p className="z-40">Floor : 34th </p>
                        </div> */}

                        <Image
                            src="/assets/residence/Floor-14-26.png"
                            alt="Floor-14-26"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"



                        />
                    </div>
                )
            }
        }
        else if (floor == 1) {
            if (roomType == "12nd") {
                return (
                    <div className="w-[650px] h-full relative p-5">

                        {/* <div className="w-full flex justify-between text-[#B5A191] text-sm h-full items-end ">
                            <p className="z-40">Floor : 34th </p>
                        </div> */}

                        <Image
                            src="/assets/residence/Floor-03-12.png"
                            alt="Floor-03-12"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"



                        />
                    </div>
                )
            }
        }
    }

    useEffect(() => {

        const btnPH = document.querySelector("#ph");
        const btn3AA = document.querySelector("#spacial");
        const btn3A = document.querySelector("#threea");
        const btn3B = document.querySelector("#threeb");
        const btn3C = document.querySelector("#threec");
        const btn2A = document.querySelector("#twoa");
        const btn2B = document.querySelector("#twob");
        const btn2C = document.querySelector("#twoc");
        const btn1A = document.querySelector("#onea");
        const btn11A = document.querySelector("#oneonea");


        btnPH.style.background = "transparent"
        btnPH.style.color = "#343F55"

        btn3AA.style.background = "transparent"
        btn3AA.style.color = "#343F55"

        btn3A.style.background = "transparent"
        btn3A.style.color = "#343F55"

        btn3B.style.background = "transparent"
        btn3B.style.color = "#343F55"

        btn3C.style.background = "transparent"
        btn3C.style.color = "#343F55"

        btn2A.style.background = "transparent"
        btn2A.style.color = "#343F55"

        btn2B.style.background = "transparent"
        btn2B.style.color = "#343F55"

        btn2C.style.background = "transparent"
        btn2C.style.color = "#343F55"

        btn1A.style.background = "transparent"
        btn1A.style.color = "#343F55"

        btn11A.style.background = "transparent"
        btn11A.style.color = "#343F55"


        if (floor == 5) {
            btnPH.style.background = "#B5A191"
            btnPH.style.color = "white"

        }
        else if (floor == 4) {

            btn3B.style.background = "#B5A191"
            btn3B.style.color = "white"

            btn3C.style.background = "#B5A191"
            btn3C.style.color = "white"
        }

        else if (floor == 3) {

            btn3B.style.background = "#B5A191"
            btn3B.style.color = "white"

            btn3C.style.background = "#B5A191"
            btn3C.style.color = "white"

        }

        else if (floor == 2) {

            btn3A.style.background = "#B5A191"
            btn3A.style.color = "white"

            btn2C.style.background = "#B5A191"
            btn2C.style.color = "white"


        }

        else if (floor == 1) {

            btn2A.style.background = "#B5A191"
            btn2A.style.color = "white"

            btn2B.style.background = "#B5A191"
            btn2B.style.color = "white"

            btn1A.style.background = "#B5A191"
            btn1A.style.color = "white"

            btn11A.style.background = "#B5A191"
            btn11A.style.color = "white"

        }



        TypeContent()

    }, [floor, roomType])


    useEffect(() => {
        document.body.style.backgroundImage = "url('/assets/background.jpg')";

    }, [])

    return (
        <Layout>


            <div className="h-full w-full relative overflow-hidden ">

                <section id="residencehero" className="w-full h-[80vh] relative flex justify-center  ">
                    <div className="w-full h-[150vh]  absolute">
                        <div className="w-1/3 h-full bg-[url('/assets/Artwork8-r.png')] bg-left bg-cover bg-no-repeat absolute  translate-y-16 right-0  " />
                    </div>
                    <div className="absolute w-full h-screen bg-gradient-to-b from-[#010F2A]/10 " />

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
                                src="/assets/residence/residenceTitle.svg"
                                alt="residenceTitle"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>

                    </div>



                </section>

                <section className="w-full h-full flex justify-center relative py-10 ">

                    <div className="max-w-7xl w-full h-[500px] bg-white">

                    </div>

                </section>

                <section className="w-full min-h-screen h-full relative grid grid-cols-1 xl:grid-cols-2">
                    <div className="w-full relative  flex justify-center h-full items-center">

                        <div className="h-fit w-[400px] absolute  right-5 z-10">
                            <div className="flex justify-around w-full">

                                <div className="flex flex-col items-center gap-2">

                                    {/* <Link
                                        activeClass="active"
                                        to="edit-polygon-B1166"
                                        spy={true}
                                        offset={-150}
                                        smooth={true}
                                        duration={1000}
                                    >
                                    </Link> */}
                                    <button onClick={e => {
                                        e.preventDefault();
                                        setFloor(5);
                                        setRoomtype("34th");
                                    }} className=" hover:scale-150 duration-300 w-16 h-fit !z-50 text-3xl font-Heleness text-[#B5A191] ">34 <span className="text-sm align-top -ml-1 ">th</span></button>

                                    {/* <Link
                                        activeClass="active"
                                        to="edit-polygon-B1165"
                                        spy={true}
                                        offset={-150}
                                        smooth={true}
                                        duration={1000}
                                    >
                                    </Link> */}
                                    <button onClick={e => {
                                        e.preventDefault();
                                        setFloor(4);
                                        setRoomtype("33th");
                                    }} className="hover:scale-150 duration-300 w-fit h-fit !z-50 text-3xl font-Heleness text-[#B5A191] ">31 <span className="text-sm align-top -ml-1 ">st</span> - 33 <span className="text-sm align-top -ml-1 ">rd</span></button>
                                    {/* <Link
                                        activeClass="active"
                                        to="edit-polygon-B1164"
                                        spy={true}
                                        offset={-150}
                                        smooth={true}
                                        duration={1000}
                                    >
                                    </Link> */}
                                    <button onClick={e => {
                                        e.preventDefault();
                                        setFloor(3);
                                        setRoomtype("29th");
                                    }} className="hover:scale-150 duration-300 w-fit h-fit !z-50 text-3xl font-Heleness text-[#B5A191] ">27 <span className="text-sm align-top -ml-1 ">th</span> - 29 <span className="text-sm align-top -ml-1 ">th</span></button>

                                    {/* <Link
                                        activeClass="active"
                                        to="edit-polygon-B1163"
                                        spy={true}
                                        offset={-150}
                                        smooth={true}
                                        duration={1000}
                                    >
                                    </Link> */}
                                    <button onClick={e => {
                                        e.preventDefault();
                                        setFloor(2);
                                        setRoomtype("26th");
                                    }} className="hover:scale-150 duration-300 w-fit h-fit !z-50 text-3xl font-Heleness text-[#B5A191] ">14 <span className="text-sm align-top -ml-1 ">th</span> - 26 <span className="text-sm align-top -ml-1 ">th</span></button>

                                    {/* <Link
                                        activeClass="active"
                                        to="edit-polygon-B1162"
                                        spy={true}
                                        offset={-330}
                                        smooth={true}
                                        duration={1000}
                                    >
                                    </Link> */}
                                    <button onClick={e => {
                                        e.preventDefault();
                                        setFloor(1);
                                        setRoomtype("12nd");
                                    }} className="hover:scale-150 duration-300 w-fit h-fit !z-50 text-3xl font-Heleness text-[#B5A191] ">3 <span className="text-sm align-top -ml-1 ">rd</span> - 12 <span className="text-sm align-top -ml-1 ">nd</span></button>
                                </div>

                                <div className="flex flex-col items-center gap-2">

                                    {/* <Link
        activeClass="active"
        to="edit-polygon-B1166"
        spy={true}
        offset={-64}
        smooth={true}
        duration={1000}
    > */}
                                    <button
                                        id="ph"
                                        onClick={e => {
                                            e.preventDefault();
                                            setRoomtype("ph");
                                        }}

                                        className="rounded-full hover:scale-150 duration-300 w-12 h-12 !z-50 text-3xl font-Heleness text-[#B5A191]">PH</button>
                                    {/* </Link> */}

                                    {/* <Link
        activeClass="active"
        to="edit-polygon-B1166"
        spy={true}
        offset={-64}
        smooth={true}
        duration={1000}
    > */}
                                    <button
                                        id="spacial"
                                        // onClick={e => {
                                        // e.preventDefault();
                                        // setFloor(5);}} 

                                        className=" hover:scale-150 duration-300 rounded-full w-12 h-12 !z-50 text-3xl font-Heleness text-[#B5A191] ">3A</button>
                                    {/* </Link> */}

                                    <div className="flex gap-3">
                                        {/* <Link
        activeClass="active"
        to="edit-polygon-B1166"
        spy={true}
        offset={-64}
        smooth={true}
        duration={1000}
    > */}
                                        <button
                                            id="threea"
                                            // onClick={e => {
                                            // e.preventDefault();
                                            // setFloor(5);}} 

                                            className=" hover:scale-150 duration-300 rounded-full w-12 h-12 !z-50 text-3xl font-Heleness text-[#B5A191] ">3A</button>
                                        {/* </Link> */}
                                        {/* <Link
        activeClass="active"
        to="edit-polygon-B1166"
        spy={true}
        offset={-64}
        smooth={true}
        duration={1000}
    > */}
                                        <button
                                            id="threeb"
                                            onClick={e => {
                                                e.preventDefault();
                                                setRoomtype("3B");
                                            }}

                                            className=" hover:scale-150 duration-300 rounded-full w-12 h-12 !z-50 text-3xl font-Heleness text-[#B5A191] ">3B</button>
                                        {/* </Link> */}
                                        {/* <Link
        activeClass="active"
        to="edit-polygon-B1166"
        spy={true}
        offset={-64}
        smooth={true}
        duration={1000}
    > */}
                                        <button
                                            id="threec"
                                            onClick={e => {
                                                e.preventDefault();
                                                setRoomtype("3C");
                                            }}

                                            className=" hover:scale-150 duration-300 rounded-full w-12 h-12 !z-50 text-3xl font-Heleness text-[#B5A191] ">3C</button>
                                        {/* </Link> */}
                                    </div>

                                    <div className="flex gap-3">
                                        {/* <Link
        activeClass="active"
        to="edit-polygon-B1166"
        spy={true}
        offset={-64}
        smooth={true}
        duration={1000}
    > */}
                                        <button
                                            id="twoa"
                                            // onClick={e => {
                                            // e.preventDefault();
                                            // setFloor(5);}} 

                                            className=" hover:scale-150 duration-300 rounded-full w-12 h-12 !z-50 text-3xl font-Heleness text-[#B5A191] ">2A</button>
                                        {/* </Link> */}
                                        {/* <Link
        activeClass="active"
        to="edit-polygon-B1166"
        spy={true}
        offset={-64}
        smooth={true}
        duration={1000}
    > */}
                                        <button
                                            id="twob"
                                            // onClick={e => {
                                            // e.preventDefault();
                                            // setFloor(5);}} 

                                            className=" hover:scale-150 duration-300 rounded-full w-12 h-12 !z-50 text-3xl font-Heleness text-[#B5A191] ">2B</button>
                                        {/* </Link> */}
                                        {/* <Link
        activeClass="active"
        to="edit-polygon-B1166"
        spy={true}
        offset={-64}
        smooth={true}
        duration={1000}
    > */}
                                        <button
                                            id="twoc"
                                            // onClick={e => {
                                            // e.preventDefault();
                                            // setFloor(5);}} 

                                            className=" hover:scale-150 duration-300 rounded-full w-12 h-12 !z-50 text-3xl font-Heleness text-[#B5A191] ">2C</button>
                                        {/* </Link> */}
                                    </div>

                                    <div className="flex gap-3">
                                        {/* <Link
        activeClass="active"
        to="edit-polygon-B1166"
        spy={true}
        offset={-64}
        smooth={true}
        duration={1000}
    > */}
                                        <button
                                            id="onea"
                                            // onClick={e => {
                                            // e.preventDefault();
                                            // setFloor(5);}} 

                                            className=" rounded-full  hover:scale-150 duration-300 w-12 h-12 !z-50 text-3xl font-Heleness text-[#B5A191] ">1</button>
                                        {/* </Link> */}
                                        {/* <Link
        activeClass="active"
        to="edit-polygon-B1166"
        spy={true}
        offset={-64}
        smooth={true}
        duration={1000}
    > */}
                                        <button
                                            id="oneonea"
                                            // onClick={e => {
                                            // e.preventDefault();
                                            // setFloor(5);}} 

                                            className="rounded-full hover:scale-150 duration-300 w-12 h-12 !z-50 text-3xl font-Heleness text-[#B5A191] ">1+1</button>
                                        {/* </Link> */}

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute scale-[1.2] !z-0 ">
                            <svg id="mysvg" version="1.2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1500" height="750"
                                style={{ backgroundImage: "url(/assets/residence/F0099-floorplan-1655814479.png)", backgroundPosition: "center center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                                className="relative"

                            >
                                <defs>
                                    <circle id="point-handle" r="3" x="0" y="0" strokeWidth="0" fillOpacity="1" stroke="#FF0000"></circle>
                                </defs>



                                <polygon id="edit-polygon-B1162" stroke="1" strokeWidth="0" className="element_select" data-id="B1162" data-boothtitle="Test-SDK-[Level 3rd - 12th]" strokeLinejoin="round" fill={color} fillOpacity="0.7" points="554,462 752,463 753,631 554,631"></polygon>




                                <polygon id="edit-polygon-B1163" stroke="1" strokeWidth="0" className="element_select" data-id="B1163" data-boothtitle="Test-SDK-[Level 14th - 26th]" strokeLinejoin="round" fill={color2} fillOpacity="0.7" points="553,245 751,244 752,463 554,462"></polygon>


                                <polygon id="edit-polygon-B1164" stroke="1" strokeWidth="0" className="element_select" data-id="B1164" data-boothtitle="Test-SDK-[Level 27th - 29th]" strokeLinejoin="round" fill={color3} fillOpacity="0.7" points="553,209 648,209 648,186 752,187 752,244 553,245"></polygon>


                                <polygon id="edit-polygon-B1165" stroke="1" strokeWidth="0" className="element_select" data-id="B1165" data-boothtitle="Test-SDK-[Level 31th - 33th]" strokeLinejoin="round" fill={color4} fillOpacity="0.7" points="619,101 750,101 751,159 618,159"></polygon>

                                <polygon id="edit-polygon-B1166" stroke="1" strokeWidth="0" className="element_select" data-id="B1166" data-boothtitle="Test-SDK-[Level 34th]" strokeLinejoin="round" fill={color5} fillOpacity="0.7" points="619,78 750,78 750,101 618,101"></polygon>

                            </svg>
                        </div>
                    </div>
                    <div className="w-full h-full relative p-10 flex justify-center items-center -translate-x-10">
                        <div className="bg-white h-[750px] w-full flex justify-center ">
                            <TypeContent />
                        </div>
                    </div>


                </section>

                <section className=" w-full h-full relative overflow-hidden flex flex-col justify-center items-end md:items-center mt-14">
                    <div

                        className="max-w-7xl w-full h-full relative px-6 md:px-10  mb-16">
                        <h1 className="font-bold  text-xl md:text-4xl  text-[#B6A694] mb-5 text-center">PROJECT DETAILS</h1>



                        <table className="border-collapse  table-fixed md:table-auto  w-full text-sm font-light ">
                            <tbody >
                                <tr >
                                    <td className="italic font-serif font-medium border-b p-2 text-[#B6A694] ">Project</td>
                                    <td className="border-b p-2 text-white">Bann Sindhorn</td>

                                </tr>
                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#B6A694]">Developer</td>
                                    <td className="border-b p-2 text-white">Siam Sindhorn Co., Ltd.</td>
                                </tr>
                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#B6A694]">Address</td>
                                    <td className="border-b p-2 text-white">Sarasin Road, Lumpini, Bangkok</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#B6A694]">Product Type</td>
                                    <td className="border-b p-2 text-white">Leasehold residential condominium</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#B6A694]">Ownership Structure</td>
                                    <td className="border-b p-2 text-white">30-year leasehold, plus option to renew for another 30 years</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#B6A694]">Total Land Area</td>
                                    <td className="border-b p-2 text-white">1-1-53 Rai</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#B6A694]">Tower Height</td>
                                    <td className="border-b p-2 text-white">8 stories</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#B6A694]">Unit Size</td>
                                    <td className="border-b p-2 text-white">122 sq.m. to 392 sq.m.</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#B6A694]">Total Number of Units</td>
                                    <td className="border-b p-2 text-white">32 units</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#B6A694]">Type of Units</td>
                                    <td className="border-b p-2 text-white">2 bedroom and Penthouse</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#B6A694]">Ceiling Height</td>
                                    <td className="border-b p-2 text-white">Up to 3.0 m. in primary spaces (living/dining/bedrooms)</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#B6A694]">Parking</td>
                                    <td className="border-b p-2 text-white">62 car parking spaces</td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium border-b p-2 text-[#B6A694]">Facilities</td>
                                    <td className="border-b p-2"><ul className="text-white list-disc list-inside">
                                        <li>
                                            Residence lobby
                                        </li>
                                        <li>
                                            Residence lounge
                                        </li>
                                        <li>
                                            Indoor swimming pool with saltwater chlorination system
                                        </li>
                                        <li>
                                            Fully-equipped fitness room
                                        </li>
                                        <li>
                                            Changing rooms and locker rooms with sauna and steam rooms
                                        </li>
                                        <li>
                                            Rooftop garden
                                        </li>
                                    </ul></td>
                                </tr>

                                <tr>
                                    <td className="italic font-serif font-medium p-2 text-[#B6A694] ">Services</td>
                                    <td className="p-2"><ul className=" text-white list-disc list-inside">
                                        <li>
                                            Property management provided by Siam Sindhorn Co., Ltd.
                                        </li>
                                        <li>
                                            Concierge
                                        </li>
                                        <li>
                                            Doorman
                                        </li>
                                        <li>
                                            Shuttle service
                                        </li>
                                        <li>
                                            24-hour security system with direct security card access control
                                        </li>
                                        <li>
                                            Room cleaning (upon request with extra charge)
                                        </li>
                                        <li>
                                            Laundry (upon request with extra charge)
                                        </li>
                                    </ul></td>
                                </tr>

                            </tbody>
                        </table>

                    </div>





                </section>

            </div>




        </Layout>
    );
}

export default Residence;