import { Icon } from "@iconify/react";

const ChooseLeapforce = () => {
  const service = [
    {
      icon: "ph:list-star",
      title: "Diverse Services",
      text: "Covering all your travel needs in one platform.",
    },
    {
      icon: "si:wallet-detailed-line",
      title: "Unbeatable Prices",
      text: "The best deals across airlines, hotels, and more.",
    },
    {
      icon: "mdi:customer-service",
      title: "Expert Support",
      text: "24/7 customer assistance from experienced professionals.",
    },
    {
      icon: "hugeicons:global-search",
      title: "Global Reach.",
      text: "Partnerships with reputable airlines and hotels worldwide.",
    },
  ];

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[52px]">
        <div className="col-span-1 space-y-4 lg:space-y-[43px]">
          <div className="bg-[#1D81D40D]/5 px-6 py-3 rounded-full text-center">
            <span>Why Choose Leapforce Travels?</span>
          </div>
          <p className="text-primary font-bold text-3xl lg:text-[48px] lg:leading-[56px]">
            Your Trusted <br /> Travel Partner
          </p>
        </div>

        <div className="col-span-1 md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {service.map((item) => (
              <div key={item.title} className="space-y-6">
                <Icon
                  icon={item.icon}
                  className="text-primary h-[36px] w-[36px]"
                />
                <div className="space-y-2">
                  <p className="text-text2 font-semibold text-base mg:text-lg">
                    {item.title}
                  </p>
                  <p className="text-[#707070] text-base md:text-lg">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChooseLeapforce;
