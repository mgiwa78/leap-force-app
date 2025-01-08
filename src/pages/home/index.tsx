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
      <div
        style={{
          background: `linear-gradient(147.16deg, #9CA73A 25.24%, #1D81D5 104.7%)`,
          boxShadow: `0px 10px 10px -5px #1D81D4`,
        }}
        className="min-h-[550px] w-full mx-auto  rounded-[32px] px-8 lg:px-[60px] relative overflow-hidden py-7"
      >
        <div className="flex flex-col md:flex-row items-center justify-center h-full">
          <div className="flex w-full md:w-1/2 items-center">
            <div className="space-y-[27px]">
              <h1 className=" text-white text-4xl md:text-[48px] md:leading-[58px] font-bold">
                Plan Your Journey with Ease -
                <span className="font-normal"> Your Adventure Awaits!</span>
              </h1>
              <h1 className="text-white lg:w-3/4">
                From flights to hotels and everything in between, Leapforce
                Travels makes it simple to explore the world. Enter your details
                below to find the best travel deals in seconds.
              </h1>

              <CustomButton className="bg-white border-none text-text2 rounded-full font-medium text-[10px] lg:text-base px-[12px] py-[6px] lg:py-3 lg:px-6">
                Plan your trip today
              </CustomButton>
            </div>
          </div>

          <div className="h-full w-full md:w-1/2 relative">
            <img
              src="/assets/images/home-flights.png"
              alt="home visa"
              className="max-h-[90%] md:h-[95%] w-full object-contain transform rotate-[40.81deg] relative"
            />
            <div className="absolute top-[22%] lg:top-[36%] rotate-[40.81deg] mix-blend-screen">
              <img
                src="/assets/images/home/flight-gas.png"
                alt="home visa"
                className=""
              />
            </div>
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

      {/* <div className="bg-white">
        <div className="max-w-5xl mx-auto py-[100px]">
          <ServiceOptions />
        </div>
      </div> */}

      {/* <div className="max-w-5xl mx-auto">
        <Newsletter />
      </div> */}

      {/* <div className="">
        <div className="max-w-5xl mx-auto py-[100px]">
          <Dreams />
        </div>
      </div> */}

      {/* <div className="">
        <div className="max-w-5xl mx-auto py-[100px]">
          <Testimonials />
        </div>
      </div> */}
    </main>
  );
};

export default Home;
