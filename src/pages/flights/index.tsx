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

        <div className="bg-secondary_1 min-h-[608px] my-[100px] rounded-[48px] px-6 py-10 lg:pb-0 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:flex-row justify-center items-center">
          <div className="flex justify-center">
            <div className="relative border-[22px] rounded-full border-[#FFFFFF57]/40 w-[324px] h-[324px]  flex-shrink-0 overflow-hidden">
              <img
                src="/assets/images/book-flights.webp"
                alt="flights"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>
          <div className="text-white space-y-4">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Looking for the best flight options?
            </h1>
            <p className="text-base leading-[25.6px]">
              Let us handle it! Share your details, and we'll find flights
              tailored just for you.
            </p>
            <button className="rounded-full bg-white text-sm lg:text-base text-primary px-3 py-[6px] lg:px-[24px] lg:py-[12px]">
              Start Now!
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FlightsPage;
