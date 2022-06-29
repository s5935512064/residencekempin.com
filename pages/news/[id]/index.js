import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../../components/Layout'
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";

const Index = () => {

    const router = useRouter();
    const { id } = router.query

    useEffect(() => {
        document.body.style.background = "#F5F1EA"
    }, [])

    return (
        <Layout>
            <div className="h-full w-full flex justify-center relative  ">

                <div className="max-w-5xl w-full h-full flex-wrap justify-center items-center mt-28  px-5 md:px-10 relative">
                    <div>
                        <h1 className="text-4xl font-bold uppercase ">Sindhorn จับมือ Kempinski เปิดตัว The Residences at Sindhorn Kempinski ใจกลางย่านหลังสวน</h1>
                        <p className="text-gray-500 mb-5">November 22, 2018</p>

                        <p>สยามสินธร จับมือกับแบรนด์โรงแรมชั้นนำของโลกอย่าง Kempinski Hotel เปิดตัวโครงการใหม่ The Residences at Sindhorn Kempinski (เดอะ เรสซิเดนซ์ แอท สินธร เคมปินสกี้) ซึ่งเป็นโครงการที่ 4 ภายใต้โครงการมิกซ์ยูส Sindhorn Village ใจกลางย่านหลังสวน</p>

                        <div className="w-full flex  py-5">

                            <div className="w-[600px] h-80 relative bg-black">
                                <Image
                                    src="/assets/news/news1.jpg"
                                    alt="news"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>

                            <div className="w-1/2 pl-10">

                                <p>นายชลาลักษณ์ บุนนาค กรรมการผู้จัดการ บริษัท สยามสินธร จำกัด เล่าว่า The Residences at Sindhorn Kempinski เป็นโครงการที่ 4 ภายใน สินธร วิลเลจ (Sindhorn Village) ซึ่งทางสยามสินธรได้เปิดตัวโครงการไปก่อนหน้านี้แล้ว 3 โครงการ ได้แก่
                                </p>
                                <ul className="list-disc list-inside pl-5">
                                    <li> สินธร เรสซิเดนซ์ (Sindhorn Residence)</li>
                                    <li>สินธร ต้นสน (Sindhorn Tonson)</li>
                                    <li> สินธร ลุมพินี (Sindhorn Lumpini) </li>
                                </ul>

                                <p className="mt-4">ซึ่งทั้ง 3 โครงการต่างได้รับผลตอบรับที่ดี ในครั้งนี้ทางสยามสินธรจึงเลือกจับมือกับ Kempinski (เคมปินสกี้) แบรนด์โรงแรมชั้นนำระดับโลกให้มาเป็นผู้บริหารโครงการใหม่ที่กำลังพัฒนาในชื่อโครงการว่า The Residences at Sindhorn Kempinski มูลค่าโครงการมากกว่า 10,000 ล้านบาท รวมถึง โรงแรมระดับ 5 ดาว Sindhorn Kempinski (สินธรเคมปินสกี้) และโรงแรมในเครือคิมป์ตัน</p>
                            </div>



                        </div>

                        <p>นอกจากนี้ ในพื้นที่กับโครงการ Sindhorn Village  ยังมีโรงแรมระดับ 5 ดาว ชื่อ “โรงแรมสินธรเคมปินสกี้”  ที่สามารถให้บริการด้านต่างๆ กับลูกบ้านของโครงการฯ อีกด้วย</p>

                        <div className="w-full h-96 relative mb-4 flex gap-2">
                            <div className="w-1/2 h-96 relative">

                                <Image
                                    src="/assets/news/news2.jpg"
                                    alt="news"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div className="w-1/2 h-96 relative">

                                <Image
                                    src="/assets/news/news3.jpg"
                                    alt="news"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>

                        <p>
                            The Residences at Sindhorn Kempinski และ Sindhorn Kempinski ถือเป็นส่วนหนึ่งในโครงการ Sindhorn Village โดยมีมูลค่าโครงการรวมกว่า 39,000 ล้านบาท ตัวโครงการเป็นอาคาร High Rise 33 ชั้น 231 ยูนิต  มีขนาดห้องตั้งแต่ 50-500 ตารางเมตร

                            ตัวโครงการ เดอะ เรสซิเดนซ์ แอท สินธร เคมปินสกี้ อยู่บนพื้นที่ขนาด 3-3-57 ไร่  บนถนนสารสิน ใจกลางย่านหลังสวน อยู่จุดกึ่งกลางระหว่างย่านสุขุมวิทและสีลม ใกล้กับสวนลุมพินี, จุดเชื่อมโยงระบบรถไฟฟ้า BTS ใกล้โรงพยาบาล แหล่งช้อปปิ้งชั้นนำ ร้านค้า ร้านอาหาร และโรงเรียนชื่อดัง
                        </p>

                        <p className="mt-2">
                            โครงการ The Residences at Sindhorn Kempinski เป็นโครงการในรูปแบบ Leasehold สัญญาเช่า 30 ปี และมี option ต่อขยายอีก 30 ปี  โดยโครงการมีที่จอดรถให้ถึง 495 คัน  คิดเป็น 214% ของจำนวน 231 ยูนิต  และมีบริการระดับโรงแรมทั้ง Concierge, Doorman, Shuttle Service รวมถึงบริการที่ต้องจ่ายเพิ่มอย่าง Room Cleaning, Laundry
                        </p>

                        <div className="w-full flex justify-between items-end">

                            <p className="mt-10">Refference : https://yusabuy.com/2018/11/22/the-residences-at-sindhorn-kempinski/</p>

                            <Link href={"/news"}>
                                <button className="px-2 py-1 border border-black">ข่าวทั้งหมด</button>
                            </Link>

                        </div>

                    </div>


                </div>

            </div>

        </Layout>
    );
}

export default Index;