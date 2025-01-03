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
    <div className="flex flex-col gap-y-[150px]">
      <div className="flex items-center justify-center p-8">
        <div
          ref={contentRef}
          className={` w-full grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <div className=" rounded-[32px] overflow-hidden h-full p-4">
              <div className="aspect-[6/8] relative">
                <img
                  src="./assets/images/home/travel-ready.webp"
                  alt="Visa assistance demonstration"
                  className="w-full h-full object-cover rounded-[24px]"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 md:pl-8">
            <h1 className="text-2xl text-secondary_1 md:text-4xl font-bold tracking-tight">
              <div className=" inline-block mb-3">
                <span className="italic">Travel Ready?</span>
              </div>

              <h1 className="text-lg md:text-3xl">
                Let Us Handle <br /> your visa
              </h1>
            </h1>

            <p className="text-gray-700 text-base md:text-lg max-w-xl">
              Stress-free travel starts here. Skip the paperwork headaches and
              let us handle your visa processing. Ready to explore the world?
              Start now!
            </p>

            <CustomButton
              className="bg-[#9BB068] hover:bg-[#9BB068]/90 text-white transition-colors duration-200 rounded-full px-8 py-3 text-lg font-medium"
              onClick={() => navigate("/visa")}
            >
              Get Started
            </CustomButton>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8">
        <div
          ref={contentRef}
          className={` w-full grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative order-1 lg:order-2">
            <div className=" rounded-[32px] overflow-hidden h-full p-4">
              <div className="aspect-[6/8] relative">
                <img
                  src="./assets/images/home/drive.webp"
                  alt="Visa assistance demonstration"
                  className="w-full h-full object-cover rounded-[24px]"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 md:pl-8 order-2 lg:order-1">
            <h1 className="text-2xl text-secondary_1 md:text-4xl font-bold tracking-tight">
              <div className=" inline-block mb-3">
                <span className="italic">Drive Into Adventure,</span>
              </div>

              <h1 className="text-lg md:text-3xl">Choose Your Ride</h1>
            </h1>

            <p className="text-gray-700 text-base md:text-lg max-w-xl">
              Your ride, your way. Choose from a range of vehicles tailored to
              your journey. Hit the road with confidence—explore our car rental
              options!
            </p>

            <CustomButton
              className="bg-[#9BB068] hover:bg-[#9BB068]/90 text-white transition-colors duration-200 rounded-full px-8 py-3 text-lg font-medium"
              onClick={() => navigate("/visa")}
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
