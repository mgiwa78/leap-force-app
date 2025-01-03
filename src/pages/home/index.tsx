import CustomButton from "@/components/core/button";
import HomeAccomodation from "@/components/pages/accommodation/accommodation";
import DestinationCarousel from "@/components/pages/home/destinationSlider";
import ServiceOptions from "@/components/pages/home/service-options";
import Newsletter from "@/components/pages/home/newsletter";
import Dreams from "@/components/pages/home/dreams";
import Testimonials from "@/components/pages/home/testimonials";

const Home = () => {
  return (
    <main>
      <div className="min-h-[550px] w-full mx-auto bg-secondary_1 rounded-[32px] px-8 relative overflow-hidden py-7">
        <div className="flex flex-col md:flex-row items-center justify-center h-full">
          <div className="flex w-full md:w-1/2 items-center">
            <div className="space-y-[27px]">
              <h1 className=" text-white text-4xl md:text-[60px] md:leading-[70px] font-bold">
                Travel with <br /> <span>Confidence.</span> <br />
              </h1>
              <p className="text-white lg:w-3/4">
                Book flights, find accommodations, rent cars, and handle
                visas—all in one place. Leapforce Travels simplifies every step
                of your adventure.
              </p>
              <CustomButton className="bg-primary border-none text-white rounded-full font-medium text-[10px] lg:text-base px-[12px] py-[6px] lg:py-3 lg:px-6">
                Plan your next trip!
              </CustomButton>
            </div>
          </div>

          <div className="h-full w-full md:w-1/2  ">
            <img
              src="/assets/images/home-flights.png"
              alt="home visa"
              className="max-h-[90%] md:h-[95%] w-full object-contain transform rotate-[32.81deg]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white min-h-[700px]">
        <div className="max-w-5xl mx-auto py-[100px]">
          <DestinationCarousel />
        </div>
      </div>

      <div className="bg-[#FAFAFA]  ">
        <div className="max-w-5xl mx-auto py-[100px]">
          <HomeAccomodation />
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-5xl mx-auto py-[100px]">
          <ServiceOptions />
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <Newsletter />
      </div>

      <div className="">
        <div className="max-w-5xl mx-auto py-[100px]">
          <Dreams />
        </div>
      </div>

      <div className="">
        <div className="max-w-5xl mx-auto py-[100px]">
          <Testimonials />
        </div>
      </div>
    </main>
  );
};

export default Home;
