'use client'
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import team1 from '@/../public/assets/team_01-625x855.jpg'
import team2 from '@/../public/assets/team_02-625x855.jpg'
import team3 from '@/../public/assets/team_03-625x855.jpg'
import team4 from '@/../public/assets/team_04-625x855.jpg'
import team5 from '@/../public/assets/team_05-625x855.jpg'
import team6 from '@/../public/assets/team_06-625x855.jpg'
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import DownAnimation from "../Animations/DownAnimation";
import Title from "../Title/Title";



const People = ({ image, name, position }: { image: string, name: string, position: string }) => {
    return (
        <div className="2xl:w-full 2xl:h-full xl:w-full xl:h-full max-w-[520px] mx-auto transition-all duration-300 ease-in-out people">
            <div className="relative overflow-hidden h-fit">
                <Image loading="lazy" src={image} height={370} width={270} alt="our team members" className="2xl:w-[270px] 2xl:h-[370px] xl:w-[270px] xl:h-[370px] w-full mx-auto h-auto z-10" />
                <div className="bg-[#27205F4D] inset-0 bottom-0 left-0 right-0 absolute transition-all duration-300 ease-in-out z-20 opacity-0 team-image"></div>
            </div>
            <div className="p-6">
                <h3 className="font-semibold text-xl">{name}</h3>
                <p className="text-[#777] font-light text-base mt-3">{position}</p>
            </div>
        </div>
    )
}


export default function Team() {
    return (
        <div className="max-w-[1150px] mx-auto w-full">
            <DownAnimation>
                <Title
                    head={<>Our team</>}
                    details={<>Our Best Specialists <br />
                        Work For You</>}
                />
            </DownAnimation>
            <DownAnimation delay={0.4}>
                <Swiper modules={[Autoplay]} loop={true} autoplay={{ delay: 6000, disableOnInteraction: false }}
                    speed={800} slidesPerView={4} spaceBetween={30} breakpoints={{
                        0: {
                            slidesPerView: 1, // 👈 1 slide on all screen sizes below 640px
                        },
                        640: {
                            slidesPerView: 4, // 👈 auto on medium screens and up
                        }
                    }} className="mySwiper team mt-20">
                    <SwiperSlide>
                        <People image={team1.src} name="Alice Johnson" position="Chief Executive Officer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <People image={team2.src} name="Michael Lee" position="Head of Operations" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <People image={team3.src} name="Sofia Martinez" position="Marketing Director" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <People image={team4.src} name="David Kim" position="Lead Developer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <People image={team5.src} name="Emily Zhang" position="Sales Manager" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <People image={team6.src} name="James Anderson" position="Customer Success Lead" />
                    </SwiperSlide>
                </Swiper>
            </DownAnimation>
        </div>
    );
}