import CustomButton from "@/components/core/button";
import { useNavigate } from "react-router-dom";
import ChooseLeapforce from "@/components/pages/home/why-choose";
import Faq from "@/components/pages/support/contact-us/faq";
import OurTeam from "@/components/pages/support/contact-us/team";

const AboutUsPage = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="h-[600px] w-full mx-auto bg-[#E6E9CD] rounded-[32px] px-8 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="flex items-center">
            <div className="space-y-[27px]">
              <h1 className="capitalize text-[#9CA73A] text-2xl lg:text-5xl font-bold">
                At Leapforce Travels, <br /> we turn journeys into unforgettable
                experiences.
              </h1>

              <CustomButton
                onClick={() => navigate("/visa-application")}
                className="bg-secondary text-white rounded-full font-medium text-[10px] lg:text-base px-[12px] py-[6px] lg:py-3 lg:px-6"
              >
                Learn more
              </CustomButton>
            </div>
          </div>

          <div className="h-full flex items-end justify-center lg:absolute lg:right-0 lg:bottom-0">
            <img
              src="/assets/images/home-visa.webp"
              alt="home visa"
              className="max-h-[90%] lg:h-[95%] w-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="my-[200px] max-w-6xl mx-auto">
          <h1 className="pb-6 text-[#000A2340]/25 tracking-[5px] text-sm lg:text-base">
            OUR VISION
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[52px]">
            <h1 className="w-full text-[#1A1A1B] font-bold text-2xl lg:text-[32px] lg:leading-[44.8px]">
              To be the go-to travel <br /> agency for seamless <br /> travel
              experiences across <br />
              Africa and beyond, <br /> creating memories that last a lifetime.
            </h1>
            <div className="w-full col-span-1 md:col-span-2 space-y-6 font-medium text-base md:text-[20px] md:leading-[30px] md:space-y-8">
              <p>
                At Leapforce Travels, we are more than just a travel agency—we
                are your partners in creating seamless and memorable travel
                experiences. With a global reach and a team of experienced
                professionals, we specialize in delivering personalized travel
                solutions for corporate, leisure, and educational journeys.
              </p>

              <p className="text-sm md:text-base">
                Our mission is simple: to simplify the complexities of travel
                while ensuring every trip is stress-free and unforgettable. From
                real-time bookings to travel documentation, we provide
                end-to-end services tailored to meet your unique needs.
              </p>
            </div>
          </div>
        </div>

        <div className="my-[200px] max-w-6xl mx-auto">
          <ChooseLeapforce />
        </div>

        <div className="my-[200px] max-w-6xl mx-auto">
          <OurTeam />
        </div>

        <div className="max-w-6xl mx-auto">
          <Faq />
        </div>
      </div>
    </main>
  );
};

export default AboutUsPage;
