"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable for any use case"
          paragraph="Choose the plan that best suits your needs"
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Starter"
            price={isMonthly ? "13.99" : "120"}
            duration={isMonthly ? "mo/per seat" : "yr/per seat"}
            subtitle="Ideal for individual users who want to game up their speaking skills"
          >
            <OfferList text="Realtime voice chat" status="active" />
            <OfferList text="50 minutes of speaking credit" status="active" />
            <OfferList text="Email support" status="active" />
            <OfferList text="1 speech analysis report" status="active" />
            <OfferList text="Lifetime access" status="inactive" />
            <OfferList text="Unlimited Voxpal groups with others" status="inactive" />
            <OfferList text="Personal native speaker support" status="inactive" />
            <OfferList text="Unlimited Voxpal threads with others" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Premium"
            price={isMonthly ? "45.99" : "599"}
            duration={isMonthly ? "mo/per seat" : "yr/per seat"}
            subtitle="Best suited for startups,corporate and government agencies."
          >
            <OfferList text="Realtime voice chat" status="active" />
            <OfferList text="120 minutes of speaking credit" status="active" />
            <OfferList text="Customer Success manager" status="active" />
            <OfferList text="Custom dashboard for business" status="active" />
            <OfferList text="4 speech analysis report" status="active" />
            <OfferList text="Audio and Video Breakout rooms" status="active" />
            <OfferList text="Unlimited Voxpal groups with others" status="active" />
            <OfferList text="Personal native speaker support" status="active" />
            <OfferList text="Discounts on the Merch Store" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "249.99" : "999"}
            duration={isMonthly ? "mo/per seat" : "yr/per seat"}
            subtitle="Mostly popular among large companies with varied AI solution integration needs."
          >
            <OfferList text="Everything in Premium" status="active" />
            <OfferList text="Custom SLAs for business" status="active" />
            <OfferList text="24/7 support" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
