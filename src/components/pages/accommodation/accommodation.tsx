import { Link, useNavigate, useLocation } from "react-router-dom";
import CustomButton from "@/components/core/button";
import { RenderIf } from "@/components/hoc/RenderIf";

export default function HomeAccomodation() {
  const navigate = useNavigate();
  const location = useLocation();
  const isRouteMatch = location.pathname === "/accommodation";

  const handleRouting = () => {
    if (isRouteMatch) {
      navigate("/accommodation/hotel-booking");
    } else {
      navigate("/accommodation");
    }
  };

  return (
    <div className="bg-[#FAFAFA] p-12 rounded-lg mb-[100px]">
      <div className="">
        <RenderIf condition={!isRouteMatch}>
          <div className="flex flex-col lg:flex-row gap-4 justify-between  mb-12">
            <div className="space-y-4">
              <h1 className="text-secondary_1 text-2xl md:text-4xl font-bold tracking-tight">
                Accommodation Reservations
              </h1>
              <p className="text-muted-foreground text-lg">
                Dreaming of the perfect getaway? Explore stays handpicked to
                <br />
                match your comfort, style, and budget. Let’s find your ideal
                home away from home!
              </p>
            </div>
            <div className="">
              <CustomButton
                className="hidden md:inline-flex bg-primary shadow transition-colors hover:bg-primary/90 text-white text-sm lg:text-base rounded-full px-4 py-2 lg:px-[24px] lg:py-[12px]"
                onClick={() => handleRouting()}
              >
                Book an hotel!
              </CustomButton>
            </div>
          </div>
        </RenderIf>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          <div className="md:col-span-2 lg:col-span-1 row-span-2">
            <Link
              to="#hotels"
              className="group relative block h-full overflow-hidden rounded-xl"
            >
              <img
                src="./assets/images/accomodation/hotel.webp"
                alt="Luxury hotel room interior"
                width={600}
                height={800}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
              <div className="absolute bottom-0 p-6 flex items-center justify-between w-full">
                <h2 className="text-2xl font-semibold text-white">Hotels</h2>
              </div>
            </Link>
          </div>

          <Link
            to="#apartments"
            className="group relative block overflow-hidden rounded-xl"
          >
            <img
              src="./assets/images/accomodation/apartment.webp"
              alt="Modern apartment interior"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            <div className="absolute bottom-0 p-6 flex items-center justify-between w-full">
              <h2 className="text-2xl font-semibold text-white">Apartment</h2>
            </div>
          </Link>

          <Link
            to="#resorts"
            className="group relative block overflow-hidden rounded-xl"
          >
            <img
              src="./assets/images/accomodation/resort.webp"
              alt="Resort poolside with palm trees"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-0 p-6 flex items-center justify-between w-full">
              <h2 className="text-2xl font-semibold text-white">Resorts</h2>
              {/* <img
                alt=""
                src={arrowRed}
                className="transition-transform duration-300 group-hover:translate-x-1"
              /> */}
            </div>
          </Link>

          <Link
            to="#villas"
            className="group relative block overflow-hidden rounded-xl md:col-span-2"
          >
            <img
              src="./assets/images/accomodation/villa.webp"
              alt="Modern luxury villa exterior"
              width={1200}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-0 p-6 flex items-center justify-between w-full">
              <h2 className="text-2xl font-semibold text-white">Villas</h2>
              {/* <img
                alt=""
                src={arrowRed}
                className="transition-transform duration-300 group-hover:translate-x-1"
              /> */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
