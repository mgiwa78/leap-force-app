import CustomButton from "@/components/core/button";
import HomeAccomodation from "@/components/pages/accommodation/accommodation";
import RentalsDeals from "@/components/pages/accommodation/rentalDeals";
import { useNavigate } from "react-router";

const AccommodationPage = () => {
  const navigate = useNavigate()
  return (
    <main>
      <div className="min-h-[500px] w-full mx-auto bg-secondary/10 rounded-[32px] px-8 relative py-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="flex items-center pl-16">
            <div className="space-y-6">
              <h1 className="text-[#2D82FF] text-2xl lg:text-5xl font-bold leading-tight">
                Book the,
                <br /> Best Hotels
              </h1>
              <p className="text-black text-sm ">
                Find accommodations tailored to your comfort, style, and budget
                with ease.
              </p>
              <CustomButton
                theme="primary"
                className="bg-[#A2B053] hover:bg-[#8A9647] text-white rounded-full font-medium text-[10px] lg:text-base px-[12px] py-[6px] lg:py-3 lg:px-6"
                onClick={() => navigate("/hotel-booking")}
              >
                Book Hotel
              </CustomButton>
            </div>
          </div>

          <div className="h-full flex items-center lg:items-end justify-end ">
            <img
              src="/assets/images/home-hotel.webp"
              alt="home hotel"
              className="w-full max-h-[100%] md:h-[95%] object-contain lg:translate-x-12"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-[100px]">
        <HomeAccomodation />
        <RentalsDeals />
      </div>
    </main>
  );
};

export default AccommodationPage;
