import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "@/components/core/button";

const Dreams = () => {
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
    <div className="flex items-center justify-center p-8">
      <div
        ref={contentRef}
        className={` w-full grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative order-1 lg:order-2">
          <div className=" rounded-[32px] overflow-hidden h-full p-4">
            <div className="aspect-[4/4] relative">
              <img
                src="./assets/images/home/tourist.webp"
                alt="Visa assistance demonstration"
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-[48px] md:pl-8 order-2 lg:order-1">
          <h1 className="text-[32px] leading-[38.3px] text-primary md:text-[48px] md:leading-[57.6px] font-bold tracking-tight">
            Ready to Make Your Travel Dreams a Reality?
          </h1>

          <CustomButton
            className="bg-secondary_1 hover:bg-secondary_1/90 text-white transition-colors duration-200 rounded-full px-8 py-3 text-lg font-medium"
            onClick={() => {
              localStorage.setItem("current-service", "travels");
              navigate("/service-offering");
            }}
          >
            Contact Us Now
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Dreams;
