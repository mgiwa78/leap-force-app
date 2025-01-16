const serviceText: {
  [key: string]: { text: any; subText: string; image: string };
} = {
  travels: {
    text: (
      <p>
        Your Journey,
        <br /> Your Way!
      </p>
    ),
    subText:
      "Whether it's a scenic cruise, a customized tour, or a relaxing vacation package, we tailor every detail to match your dream getaway.",
    image: "/assets/images/support/service vacation.webp",
  },
  flight: {
    text: (
      <p>
        Seamless Flights, <br /> Stress-Free Stays!
      </p>
    ),
    subText:
      "From booking flights to securing hotel stays and arranging smooth transfers, we ensure every part of your trip is effortless.",
    image: "/assets/images/support/service travelss.webp",
  },
  "travel-doc": {
    text: (
      <p>
        Travel Smart,
        <br /> Travel Secure!
      </p>
    ),
    subText:
      "Get insured, stay informed, and ensure all your travel documents are in order for a hassle-free journey.",
    image: "/assets/images/support/travel-doc.webp",
  },
  corporate: {
    text: "Effortless Corporate Travel Solutions!",
    subText:
      "Simplify business travel with expert planning, cost-effective solutions, and seamless logistics for your team",
    image: "/assets/images/support/travel 000.webp",
  },
};

const ServiceHeading = ({ service }: { service: string }) => {
  console.log(service);
  const selectedService = serviceText[service];
  console.log(selectedService);
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#FAFBF5] py-20 px-4 rounded-lg gap-6">
      <div className="space-y-4 w-full md:w-1/2 order-2 md:order-1">
        <h1 className="text-secondary_1 text-3xl md:text-[48px] md:leading-[57.6px] font-bold">
          {selectedService.text}
        </h1>
        <p className="text-black text-sm md:text-base">
          {selectedService.subText}
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-start md:justify-end order-1 md:order-2">
        <div className="relative  w-full">
          <img
            src={selectedService.image}
            alt={selectedService.text}
            className="object-cover w-full max-h-[500px] rounded-[24px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceHeading;
