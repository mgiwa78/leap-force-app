import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "@/components/core/button";

const ServiceOptions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={contentRef}
      className={`flex flex-col gap-y-[20px] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-center justify-center p-8">
        <div
          className={` w-full grid md:grid-cols-2 gap-2 lg:gap-[97px] items-center transition-all duration-1000`}
        >
          <div>
            <h1 className="pb-6 text-[#000A2340]/25 tracking-[5px] text-sm lg:text-base">
              CAR RENTALS
            </h1>
            <div className="space-y-6 mb-[48px]">
              <h1 className="text-2xl text-primary md:text-4xl font-bold tracking-tight">
                Affordable & <br /> Convenient Ride for Every Journey
              </h1>

              <p className="text-gray-700 text-sm md:text-base max-w-xl">
                Stress-free travel starts here. Skip the paperwork headaches and
                let us handle your visa processing. Ready to explore the world?
                Start now!
              </p>
            </div>
            <CustomButton
              className="bg-secondary_1 hover:bg-secondary_1/90 text-white transition-colors duration-200 rounded-full px-8 py-3 text-base font-medium"
              onClick={() => {
                localStorage.setItem("current-service", "car-rental");
                navigate("/service-offering");
              }}
            >
              Book a Ride
            </CustomButton>
          </div>
          <div className="relative">
            <div className="overflow-hidden h-full p-4">
              <div className="h-full aspect-[5/6] relative">
                <img
                  src="/assets/images/home/luxury cars.webp"
                  alt="Visa assistance demonstration"
                  className="w-full h-full object-cover absolute rounded-[32px]"
                  style={{ transform: "rotate(360deg)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8">
        <div
          className={` w-full grid md:grid-cols-2 gap-2 lg:gap-[97px] items-center transition-all duration-1000`}
        >
          <div className="relative">
            <div className="overflow-hidden h-full p-4">
              <div className="aspect-[6/8] relative">
                <img
                  src="/assets/images/home/honeymooners.webp"
                  alt="Visa assistance demonstration"
                  className="w-full h-full object-cover absolute rounded-[32px]"
                  style={{ transform: "rotate(360deg)" }}
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="pb-6 text-[#000A2340]/25 tracking-[5px] text-sm lg:text-base">
              VACATION PACKAGES
            </h1>
            <div className="space-y-6 mb-[48px]">
              <h1 className="text-2xl text-primary md:text-4xl font-bold tracking-tight">
                Curated trips for families, <br /> honeymooners, & adventurers.
              </h1>

              <p className="text-gray-700 text-sm md:text-base max-w-xl">
                Stress-free travel starts here. Skip the paperwork headaches and
                let us handle your visa processing. Ready to explore the world?
                Start now!
              </p>
            </div>
            <CustomButton
              className="bg-secondary_1 hover:bg-secondary_1/90 text-white transition-colors duration-200 rounded-full px-8 py-3 text-base font-medium"
              onClick={() => {
                localStorage.setItem("current-service", "travels");
                navigate("/service-offering");
              }}
            >
              Get Started
            </CustomButton>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8">
        <div
          className={` w-full grid md:grid-cols-2 gap-2 lg:gap-[97px] items-center transition-all duration-1000`}
        >
          <div>
            <h1 className="pb-6 text-[#000A2340]/25 tracking-[5px] text-sm lg:text-base">
              CUSTOMIZED TOURS
            </h1>
            <div className="space-y-6 mb-[48px]">
              <h1 className="text-2xl text-primary md:text-4xl font-bold tracking-tight">
                Tailored experiences to match your preferences.
              </h1>

              <p className="text-black text-sm md:text-base max-w-xl">
                Stress-free travel starts here. Skip the paperwork headaches and
                let us handle your visa processing. Ready to explore the world?
                Start now!
              </p>
            </div>
            <CustomButton
              className="bg-secondary_1 hover:bg-secondary_1/90 text-white transition-colors duration-200 rounded-full px-8 py-3 text-base font-medium"
              onClick={() => {
                localStorage.setItem("current-service", "travels");
                navigate("/service-offering");
              }}
            >
              Get Started
            </CustomButton>
          </div>

          <div className="relative">
            <div className="overflow-hidden h-full p-4">
              <div className="h-full aspect-[5/6] relative">
                <img
                  src="/assets/images/home/newtours.webp"
                  alt="Visa assistance demonstration"
                  className="w-full h-full object-cover absolute rounded-[32px]"
                  style={{ transform: "rotate(360deg)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8">
        <div
          className={` w-full grid md:grid-cols-2 gap-2 lg:gap-[97px] items-center transition-all duration-1000`}
        >
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden h-full p-4">
              <div className="h-full aspect-[6/7] relative">
                <img
                  src="/assets/images/home/travelling group.webp"
                  alt="Visa assistance demonstration"
                  className="w-full h-full object-cover rounded-[24px] absolute"
                  style={{ transform: "rotate(360deg)" }}
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="pb-6 text-[#000A2340]/25 tracking-[5px] text-sm lg:text-base">
              TRAVEL INSURANCE
            </h1>
            <div className="space-y-6 mb-[48px]">
              <h1 className="text-2xl text-primary md:text-4xl font-bold tracking-tight">
                Secure your trips with competitively priced packages.
              </h1>

              <p className="text-gray-700 text-sm md:text-base max-w-xl">
                Stress-free travel starts here. Skip the paperwork headaches and
                let us handle your visa processing. Ready to explore the world?
                Start now!
              </p>
            </div>
            <CustomButton
              className="bg-secondary_1 hover:bg-secondary_1/90 text-white transition-colors duration-200 rounded-full px-8 py-3 text-base font-medium"
              onClick={() => {
                localStorage.setItem("current-service", "travel-doc");
                navigate("/service-offering");
              }}
            >
              Get Started
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOptions;
