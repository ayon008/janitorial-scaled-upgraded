'use client'
import Image from 'next/image';
import cs1 from '@/../public/assets/testimonials_01.jpg'
import cs2 from '@/../public/assets/testimonial_03.jpg'
import cs3 from '@/../public/assets/testimonial_04.jpg'
import cs4 from '@/../public/assets/testimonial_05.jpg'
import cs5 from '@/../public/assets/testimonials_02.jpg'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import { QuoteIcon } from 'lucide-react';
import ParticlesComponent from './ParticaleComponent';
import { Swiper as SwiperClass } from 'swiper/types';



const ReviewSwiper = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<{ swiper: SwiperClass } | null>(null);
    const handleSlideChange = (index: number) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideToLoop(index);
        }
    };

    const BigSlide = ({ review, name, title, image }: { name: React.ReactNode, title: React.ReactNode, image: string, review: React.ReactNode }) => {
        return (
            <div className='p-10 bg-white w-full h-[420px] 2xl:block xl:block hidden'>
                <div className='w-[490px] flex items-start justify-between gap-10'>
                    <Image src={image} alt='Customer One' loading='lazy' height={340} className='w-[240px] h-[340px]' width={240} />
                    <div className='h-[300px] flex flex-col justify-between'>
                        <div className='w-fit ml-auto'>
                            <QuoteIcon color='red' size={'2.5rem'} />
                        </div>
                        <p className="text-base text-[#777] font-light leading-7 service-text">{review}</p>
                        <div className='space-y-2'>
                            <h3 className='text-2xl font-semibold text-black'>{name}</h3>
                            <p className="text-base text-[#777] font-light leading-7 service-text">{title}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    const SmallSlide = ({ review, name, title, image }: { name: React.ReactNode, title: React.ReactNode, image: string, review: React.ReactNode }) => {
        return (
            <div className='p-10 bg-white w-full h-[420px] 2xl:block xl:block hidden'>
                <div className='w-[190px]'>
                    <div className='h-[300px] flex flex-col justify-between w-full'>
                        <div className='w-fit ml-auto'>
                            <QuoteIcon color='red' size={'2.5rem'} />
                        </div>
                        <p className="text-sm text-[#777] font-light leading-7 service-text">{review}</p>
                        <div className='flex gap-2 items-center'>
                            <Image src={image} width={50} height={50} alt='customer 2' className='w-[50px] h-[50px] rounded-full' />
                            <div className='space-y-2'>
                                <h3 className='text-xl font-semibold text-black'>{name}</h3>
                                <p className="text-sm text-[#777] font-light leading-7 service-text">{title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const MobileSlide = ({ name, title, image, review }: { name: React.ReactNode, title: React.ReactNode, image: string, review: React.ReactNode }) => {
        return (
            <div className='bg-white w-full max-w-[370px] space-y-6 p-6 md:p-10 mx-auto 2xl:hidden xl:hidden block h-[420px] flex flex-col justify-between'>
                <div className='w-fit ml-auto'>
                    <QuoteIcon color='red' size={'2.5rem'} className='md:w-14 md:h-14 w-12 h-12' />
                </div>
                <p className="text-sm text-[#777] font-light leading-6 md:leading-7 service-text flex-1">{review}</p>
                <div className='flex gap-2 items-center'>
                    <Image src={image} width={50} height={50} alt="customer 3" className='w-[50px] h-[50px] rounded-full' />
                    <div className='space-y-1 md:space-y-2'>
                        <h3 className='text-lg md:text-xl font-semibold text-black'>{name}</h3>
                        <p className="text-sm text-[#777] font-light leading-6 md:leading-7 service-text">{title}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='max-w-[1150px] !w-full mx-auto relative pb-16'>
            <Swiper
                ref={swiperRef}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                initialSlide={2}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={20}
                slidesPerView={'auto'}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                    }
                }}
                modules={[Pagination]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mySwiper review-items !overflow-hidden">

                <SwiperSlide className="w-full xl:!w-[570px] h-[420px]">
                    <div className="h-full">
                        <BigSlide image={cs1.src} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                        <MobileSlide image={cs1.src} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full xl:!w-[270px] h-[420px]">
                    <div className="h-full">
                        <SmallSlide image={cs4.src} name={<>Albert M. Doyle</>} title={<>CEO</>} review={<>You made it so simple.My new site is so much faster and easier work to with than my old.</>} />
                        <MobileSlide image={cs2.src} name={<>Albert M. Doyle</>} title={<>CEO</>} review={<>You made it so simple.My new site is so much faster and easier work to with than my old.</>} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full xl:!w-[270px] h-[420px]">
                    <div className="h-full">
                        <SmallSlide image={cs2.src} name={<>Jacob B. Ginley</>} title={<>Manager</>} review={<>High-quality janitorial leads that actually convert—saved us tons of time.</>} />
                        <MobileSlide image={cs3.src} name={<>Jacob B. Ginley</>} title={<>Manager</>} review={<>High-quality janitorial leads that actually convert—saved us tons of time.</>} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full xl:!w-[570px] h-[420px]">
                    <div className="h-full">
                        <BigSlide image={cs3.src} name={<>Devon Carter</>} title={<>Cleaning Business Owner</>} review={<>Great service! We closed three deals in the first week.</>} />
                        <MobileSlide image={cs4.src} name={<>Devon Carter</>} title={<>Cleaning Business Owner</>} review={<>Great service! We closed three deals in the first week.</>} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full xl:!w-[270px] h-[420px]">
                    <div className="h-full">
                        <SmallSlide image={cs5.src} name={<>Angela Ramirez</>} title={<>Sales Director</>} review={<>Reliable appointments every week—no fluff, just results.</>} />
                        <MobileSlide image={cs5.src} name={<>Angela Ramirez</>} title={<>Sales Director</>} review={<>Reliable appointments every week—no fluff, just results.</>} />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='absolute !z-50 left-1/2 -translate-x-1/2 bottom-0'>
                <div className='md:flex hidden flex-row 2xl:gap-4 xl:gap-4 gap-3'>
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 rounded-full bg-transparent pointer-events-auto ${activeIndex === index ? '!border-red-600 border' : 'border-none'
                                } relative`}
                        >
                            <button
                                onClick={() => handleSlideChange(index)}
                                aria-label={index.toString()}
                                className={`w-2 h-2 rounded-full transition-all cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${activeIndex === index ? 'bg-red-700' : 'bg-white'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
                <div className='md:hidden flex flex-row gap-3'>
                    {[0, 1, 2, 3, 4].map((index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full bg-transparent pointer-events-auto ${activeIndex === index ? '!border-red-600 border' : 'border-none'
                                } relative`}
                        >
                            <button
                                onClick={() => handleSlideChange(index)}
                                aria-label={index.toString()}
                                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${activeIndex === index ? 'bg-red-700' : 'bg-white'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const UserReview = () => {
    return (
        <div className="relative !h-[890px] flex flex-col !overflow-hidden">
            {/* Background */}
            <ParticlesComponent id="particles" />
            {/* Swiper Reviews */}
            <div className="w-fit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <div className="space-y-5 mb-10">
                    <p className="text-white text-lg font-medium text-center">Testimonial</p>
                    <h3 className="text-white text-2xl font-bold text-center">What People Say About <br />Our Service</h3>
                </div>
                {/* Swiper */}
                <ReviewSwiper />
            </div>
        </div>
    )
}

export default UserReview;