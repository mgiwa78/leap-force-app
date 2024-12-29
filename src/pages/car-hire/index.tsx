import CustomButton from "@/components/core/button";
import CarRentals from "@/components/pages/car-hire/rentals";
import CarHireForm from "@/components/pages/car-hire/form";
const CarHirePage = () => {
  return (
    <main>
      <div className="h-[690px] w-full mx-auto bg-[#F5F5F5] rounded-[32px] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="flex items-center pl-16">
            <div className="space-y-6">
              <h1 className="text-[#2D82FF] text-2xl lg:text-5xl font-bold leading-tight">
                Drive Into Adventure,
                <br /> Choose Your Ride
              </h1>
              <p className="text-black text-sm w-3/4">
                Your ride, your way. Choose from a range of vehicles tailored to
                your journey. Hit the road with confidence—explore our car
                rental options!
              </p>
              <CustomButton
                theme="primary"
                className="bg-[#A2B053] hover:bg-[#8A9647] text-white rounded-full font-medium text-[10px] lg:text-base px-[12px] py-[6px] lg:py-3 lg:px-6"
              >
                Hire a Car!
              </CustomButton>
            </div>
          </div>

          <div className="h-full flex items-center justify-end overflow-hidden">
            <img
              src="/assets/images/home-car.webp"
              alt="home car"
              className="max-h-[120%] w-auto object-contain "
              style={{ transform: "rotate(-180deg)" }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <CarRentals />

        <CarHireForm />
      </div>
    </main>
  );
};

export default CarHirePage;
