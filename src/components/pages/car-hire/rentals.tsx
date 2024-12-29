const CarRentals = () => {
  return (
    <div>
      <div className="container max-w-7xl flex flex-col gap-y-10 py-20 px-5">
        <h3 className="text-sm lg:text-xl font-normal text-[#0D0D0D]">
          Top Rental Deals
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index: number) => (
            <div
              className="min-h-[300px] bg-[#F5F5F575] rounded-xl p-10 flex flex-col justify-between"
              key={index}
            >
              <div className="">
                <div className="flex items-center justify-between">
                  <h5 className="max-w-[75px]">Automobili Lamborghini</h5>

                  <img src="/assets/svgs/turo.svg" alt="" className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-medium">
                  48 <span className="text-[8px]">/day</span>
                </h3>
              </div>
              <img src="/assets/images/car.png" alt="" />
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-y-2 items-center">
                  <img
                    alt=""
                    src="/assets/svgs/steering-wheel.svg"
                    className="w-[15px] h-[15px]"
                  />
                  <h5 className="font-light text-[10px]">Auto</h5>
                </div>
                <div className="flex flex-col gap-y-2 items-center">
                  <img
                    alt=""
                    src="/assets/svgs/person-seat.svg"
                    className="w-[15px] h-[15px]"
                  />
                  <h5 className="font-light text-[10px]">2 seat</h5>
                </div>
                <div className="flex flex-col gap-y-2 items-center">
                  <img
                    alt=""
                    src="/assets/svgs/gas-pump.svg"
                    className="w-[15px] h-[15px]"
                  />
                  <h5 className="font-light text-[10px]">34MPG</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarRentals;
