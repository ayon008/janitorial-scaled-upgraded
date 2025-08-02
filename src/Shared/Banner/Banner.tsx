"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import image1 from "@/../public/assets/slide01.jpg";
import image2 from "@/../public/assets/slide02.jpg";
import image3 from "@/../public/assets/slide03.jpg";
import { useRef, useState } from "react";
import Link from "next/link";
import ButtonSecondary from "../Buttons/SecondaryButton";
import UpAnimation from "../Animations/UpAnimation";
import 'swiper/css/effect-fade';

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  const HeroBannerContent = ({
    heading,
    paragraph,
    buttonLabel,
    positionClasses = "absolute md:left-0 md:-translate-x-0 -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 w-full 2xl:p-0 xl:p-0 md:pl-16 p-4 z-[60]",
    headingClasses = "text-white 2xl:text-5xl xl:text-5xl text-3xl font-semibold md:text-left text-center",
    paragraphClasses = "text-white 2xl:text-lg xl:text-lg text-base md:text-left text-center",
  }: { heading: React.ReactNode, paragraph: React.ReactNode, buttonLabel: string, positionClasses?: string, headingClasses?: string, paragraphClasses?: string }) => {
    return (
      <div className={positionClasses}>
        <div className="2xl:space-y-8 xl:space-y-8 space-y-6 max-w-[1150px] mx-auto">
          <UpAnimation delay={0.8} animationKey={activeIndex}>
            <h1 className={headingClasses}>{heading}</h1>
          </UpAnimation>
          <UpAnimation delay={1} animationKey={activeIndex}>
            <p className={paragraphClasses}>{paragraph}</p>
          </UpAnimation>
          <div className="w-fit md:mx-0 mx-auto">
            <UpAnimation delay={1.2} animationKey={activeIndex}>
              <Link href={"#pricing"}>
                <ButtonSecondary label="Request Pricing" />
              </Link>
            </UpAnimation>
          </div>
        </div>
      </div>
    );
  };
  const swiperRef = useRef<{ swiper: SwiperClass } | null>(null);

  const handleSlideChange = (index: number): void => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        autoplay={{ delay: 10000 }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        initialSlide={0}
        loop={true}
        speed={1000}
        effect={`fade`}
        fadeEffect={{ crossFade: true }} // Enable fade effect
        slidesPerView={1}
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        className="mySwiper pointer-events-none"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        <SwiperSlide>
          <div className="w-full xl:h-[890px] lg:h-[590px] md:h-[590px] h-[480px] aspect-[1920/890] relative z-40 after:content-[''] after:inset-0 after:z-50 after:bg-[#27205F4D] after:absolute">
            <Image
              src={image1}
              sizes="(max-width: 768px) 40vw, 100vw"
              fill
              alt="janitorial-leads-generation"
              priority
              className="object-cover w-full h-full"
            />
            <HeroBannerContent
              heading={
                <>
                  Schedule an <br /> Appointment with Us
                </>
              }
              paragraph={
                <>
                  Book now to get leads tailored to your business and unlock{" "}
                  <br /> new opportunities.
                </>
              }
              buttonLabel={"Request Pricing"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full xl:h-[890px] lg:h-[590px] md:h-[590px] h-[480px] aspect-[1920/890] relative z-40 after:content-[''] after:inset-0 after:z-50 after:bg-[#27205F4D] after:absolute">
            <Image
              src={image2}
              sizes="(max-width: 768px) 80vw, 100vw"
              fill
              alt="Telemarketing agent doing a call"
              priority={false}
              loading="lazy"
              className="object-cover w-full h-full"
            />
            <HeroBannerContent
              heading={
                <>
                  Find Qualified ,<br /> Exclusive Janitorial <br /> Leads in
                  your area
                </>
              }
              paragraph={
                <>
                  A reliable and stress-free appointment setting <br />
                  service for janitorial business owner
                </>
              }
              buttonLabel={"Request Pricing"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full xl:h-[890px] lg:h-[590px] md:h-[590px] h-[480px] aspect-[1920/890] relative z-40 after:content-[''] after:inset-0 after:z-50 after:bg-[#27205F4D] after:absolute">
            <Image
              src={image3}
              sizes="(max-width: 768px) 80vw, 100vw"
              fill
              priority={false}
              loading="lazy"
              alt="Commercial cleaning lead pricing"
              className="object-cover w-full h-full"
            />
            <HeroBannerContent
              heading={
                <>
                  Convert Leads With <br /> Integrated Call Center
                </>
              }
              paragraph={
                <>
                  Connect with key-decision makers and receive valuable <br />{" "}
                  opportunities delivered straight to your inbox-automatically
                </>
              }
              buttonLabel={"Request Pricing"}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Pagination Dots */}
      <div className="absolute md:top-1/2 top-[385px] md:-translate-y-1/2 z-50 pointer-events-auto left-1/2  nd:-translate-x-0 -translate-x-1/2 md:left-3 2xl:left-14">
        <div className="flex md:flex-col flex-row md:gap-4 gap-3 sm:pl-6 md:pl-6 lg:pl-6">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full bg-transparent pointer-events-auto ${activeIndex === index ? "border-red-600 border" : "border-none"
                } relative`}
            >
              <button
                onClick={() => handleSlideChange(index)}
                aria-label={index.toString()}
                className={`2xl:w-4 2xl:h-4 xl:w-4 xl:h-4 w-2 h-2 rounded-full transition-all cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${activeIndex === index ? "bg-red-700" : "bg-white"
                  }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
