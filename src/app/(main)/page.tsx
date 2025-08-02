import Banner from "@/Shared/Banner/Banner";
import ButtonSecondary from "@/Shared/Buttons/SecondaryButton";
import Appointment from "@/Shared/Forms/Appoientment";
import Pricing from "@/Shared/Home/Pricing";
import { ProgressDemo } from "@/Shared/Home/Progress";
import UserReview from "@/Shared/Home/Review";
import Services from "@/Shared/Home/Services";
import Stepper from "@/Shared/Home/Stepper";
import Team from "@/Shared/Home/Team";
import ServiceImage from "@/Shared/Images/ServiceImage";
import Title from "@/Shared/Title/Title";
import Link from "next/link";

export default function Home() {
  return (
    <main id="main-content">
      <section className="relative">
        <Banner />
        <div className="absolute  w-full xl:-bottom-[150px] md:-bottom-[250px] -bottom-[420px] right-0 left-0">
          <div className="xl:w-[1150px] w-[90%] mx-auto">
            {/* Appointment form */}
            <Appointment />
          </div>
        </div>
      </section>
      <section className="xl:mt-40 lg:mt-72 md:mt-68 mt-[470px] overflow-hidden">
        {/* About Us section for call center */}
        <article className="2xl:py-20 xl:py-20 py-10 2xl:w-[1150px] xl:w-[1150px] w-[90%] mx-auto grid md:flex justify-between items-center md:gap-4 lg:gap-8 gap-8">
          {/* Text side */}
          <div className="flex-1">
            {/* Section Title*/}
            <Title
              head={<>About Us</>}
              details={<>World Class <br />Janitorial Lead <br /> Generator</>}
            />
            <p className="text-base text-[#777] font-light mt-7">Our agents are fully bilingual, bi-cultural, well educated <br /> and have expertise in a wide array of business functions <br /> such as Debt Collection, Customer Service.</p>
            <div className="mt-6 2xl:w-[75%] xl:w-[75%] w-full">
              {/* Progress Type (Customer Service) */}
              <ProgressDemo service="Customer Service" progressValue={85} bgColor="bg-[#FF00D3]" />
              <ProgressDemo service="Sales / Lead Generation" progressValue={90} bgColor="bg-primary" />
            </div>
            <div className="mt-12 w-[180px]">
              <Link href={'/about'}>
                <ButtonSecondary label={'Learn More'} />
              </Link>
            </div>
          </div>
          {/* Images */}
          <div className="flex-1">
            <ServiceImage />
          </div>
        </article>
        <section className="bg-[#F8F8F8] 2xl:my-20 xl:my-20 my-10 2xl:py-32 xl:py-32 py-16">
          <div className="2xl:w-[1150px] xl:w-[1150px] w-[90%] mx-auto">
            <Title
              head={<>Four easy steps</>}
              details={<>How To Get <br /> Started</>}
            />
            {/* Step Part */}
            <Stepper />
          </div>
        </section>
        <Services />
      </section>
      <section className="my-16">
        {/* <UserReviewWrapper /> */}
        <UserReview />
      </section>
      <section>
        <Pricing />
      </section>
      <section className="my-16">
        <Team />
      </section>
    </main>
  );
}