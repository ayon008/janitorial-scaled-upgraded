import { Check } from 'lucide-react';
import Link from 'next/link';
import TickCircle from '../icons/TickIcon';
import { Button } from '@/components/ui/button';
import ButtonPrimary from '../Buttons/PrimaryButton';
// import TickCircle from './TickCircle';
// import PaymentLink from './PaymentLink';
// import ButtonPrimary from '../Shared/Buttons/ButtonPrimary';

const pricingPlans = [
    {
        title: "Free",
        description: "Free To Start",
        price: "$0",
        priceUnit: "/year",
        features: [
            "View 1 cleaning opportunity per 30 days.",
            "Find contact information for decision makers.",
            "Find contact information for local businesses.",
            "Cleaning opportunities sent to your inbox.",
        ],
        buttonLabel: "Start Now",
        buttonclassName: "btn-outline hover:bg-green-700 hover:text-white",
        containerclassName: "bg-white border-2 border-gray-200",
        priceclassName: "text-6xl font-bold",
        priceUnitclassName: "text-gray-500 font-semibold text-base",
        descriptionclassName: " text-xs font-normal",
        register: '/register'
    },
    {
        title: "Professional Plan",
        description: "Advanced Features for Power Users",
        price: "$70",
        priceUnit: "/year",
        discount: "Saved 20%! Annual Billing",
        features: [
            "View unlimited cleaning opportunities.",
            "Contact information for decision makers and local businesses.",
            "10% off all leads!",
            "Instant Notifications when anyof leads are uploaded"
        ],
        buttonLabel: "Start Now",
        buttonclassName: "text-black bg-white hover:bg-green-700 hover:text-white",
        containerclassName: "border-2 border-primary bg-white",
        priceclassName: "text-6xl font-bold text-primary",
        priceUnitclassName: "font-semibold text-base text-primary",
        descriptionclassName: "text-xs font-normal text-primary",
        paymentLink: process.env.NEXT_PUBLIC_STRIPE_YEARLY_LINK
    },
    {
        title: "Essential Plan",
        description: "Affordable and Reliable",
        price: "$50",
        priceUnit: "/bi-annually",
        discount: "Billed every 6 months",
        features: [
            "View unlimited cleaning opportunities.",
            "Contact information for decision makers and local businesses.",
            "10% off all Exclusive Leads!",
            "Instant Notifications when an Exclusive Lead is posted."
        ],
        buttonLabel: "Start Now",
        buttonclassName: "btn-outline hover:bg-green-700 hover:text-white",
        containerclassName: "bg-white border-2 border-gray-200",
        priceclassName: "text-6xl font-bold",
        priceUnitclassName: "text-gray-500 font-semibold text-base",
        descriptionclassName: " text-xs font-normal",
        paymentLink: process.env.NEXT_PUBLIC_STRIPE_BI_ANNUALLY_LINK
    }
];

const Pricing = () => {
    return (

        <div className='md:px-10 px-6 grid md:grid-cols-3 grid-cols-1 gap-6 items-end 2xl:mt-20 xl:mt-20 mt-10 max-w-[1150px] mx-auto w-full'>
            {pricingPlans.map((plan, index) => (
                <div className={`relative`} key={index}>
                    {
                        index === 1 && <div className='bg-primary w-fit rounded-xl absolute -top-6 px-6 h-[90px] z-20'>
                            <p className='text-white text-center'>Most Popular</p>
                        </div>
                    }
                    <div key={index} className={`rounded-[30px] py-12 px-10 ${plan.containerclassName} flex flex-col z-30 relative`}>
                        <h2 className={`text-2xl font-medium `}>{plan.title}</h2>
                        <small className={` text-xs font-normal`}>{plan.description}</small>
                        <div className='mt-10'>
                            <small className={` text-xs font-normal`}>Starting from</small>
                            <div>
                                <span className={` ${plan.priceclassName} inter`}>{plan.price}</span>
                                <span className={` ${plan.priceUnitclassName}`}>{plan.priceUnit}</span>
                            </div>
                            {plan.discount && <p className={`text-sm `}>{plan.discount}</p>}
                        </div>
                        <div className='my-7 space-y-6'>
                            {plan.features.map((feature, index) => (
                                <div key={index} className='flex items-center gap-2'>
                                    <TickCircle />
                                    <p className={`text-base  font-normal`}>{feature}</p>
                                </div>
                            ))}
                        </div>
                        <div className='mt-auto'>
                            <Link href={'/'}>
                                <ButtonPrimary label='Start Now' />
                            </Link>
                        </div>
                        {/* <div className='mt-auto mx-auto'>
                        {index !== 0 ? <PaymentLink plan={plan} link={`${plan.paymentLink}`} register={index} /> : <Link href={`/login`}> <ButtonPrimary label={'Start Now'} /></Link>}
                    </div> */}
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Pricing;