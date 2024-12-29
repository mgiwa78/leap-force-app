import CustomButton from "@/components/core/button";
import RentalsDeals from "@/components/pages/accommodation/rentalDeals";

const FlightsPage = () => {
  return (
    <main>
      <div className="h-[550px] w-full mx-auto bg-secondary_1 rounded-[32px] px-8 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="flex items-center">
            <div className="space-y-[27px]">
              <h1 className="capitalize text-white text-2xl lg:text-5xl font-bold">
                Your gateway <br /> to the world <br />
              </h1>
              <p className="text-white lg:w-3/4">
                Find the perfect flight in minutes with our simple and intuitive
                form.
              </p>
              <CustomButton className="bg-primary border-none text-white rounded-full font-medium text-[10px] lg:text-base px-[12px] py-[6px] lg:py-3 lg:px-6">
                Book your flight now
              </CustomButton>
            </div>
          </div>

          <div className="h-full flex items-end justify-center lg:absolute lg:right-0 lg:bottom-0 ">
            <img
              src="/assets/images/home-flights.png"
              alt="home visa"
              className="max-h-full w-auto object-contain rotate-[-32.81] transform"
              style={{ transform: "rotate(32.81deg)" }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-[100px]">
        <h1 className="text-[#0D0D0D] text-sm lg:text-lg mb-6">
          Top Rental Deals
        </h1>
        <RentalsDeals />
      </div>
    </main>
  );
};

export default FlightsPage;
