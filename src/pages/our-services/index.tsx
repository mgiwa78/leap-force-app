import CustomButton from "@/components/core/button";
import { useNavigate } from "react-router";
const OurServices = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="min-h-[600px] w-full mx-auto bg-[#E6E9CD] rounded-3xl py-4 px-8 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="capitalize text-[#9CA73A] text-2xl lg:text-5xl lg:leading-[66px] font-bold">
              At Leapforce Travels, <br /> we turn journeys into unforgettable
              experiences.
            </h1>

            <div className="flex justify-center md:justify-start">
              <CustomButton
                onClick={() => navigate("/service-offering")}
                className="bg-secondary text-white rounded-full font-medium text-xs lg:text-base px-3 py-2 lg:py-3 lg:px-6"
              >
                Learn more
              </CustomButton>
            </div>
          </div>

          <div className="flex image-container justify-center items-center h-full">
            <img
              src="/assets/images/home/board.webp"
              alt="home visa"
              className="h-4/5 lg:h-3/5 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurServices;
