import CustomButton from "@/components/core/button";
import { useNavigate } from "react-router-dom";

const VisaPage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="h-[600px] w-full mx-auto bg-[#E6E9CD] rounded-[32px] px-8 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="flex items-center">
            <div className="space-y-[27px]">
              <h1 className="capitalize text-[#9CA73A] text-2xl lg:text-5xl font-bold">
                Travel without Worries <br /> -We've got <br />
                your visa covered
              </h1>
              <p className="text-black lg:w-3/4">
                Simplify your visa application process with expert assistance
                from Leapforce Travels.
              </p>
              <CustomButton
                onClick={() => navigate("/visa-application")}
                className="bg-secondary text-white rounded-full font-medium text-[10px] lg:text-base px-[12px] py-[6px] lg:py-3 lg:px-6"
              >
                Get Visa Help Now
              </CustomButton>
            </div>
          </div>

          <div className="h-full flex items-end justify-center lg:absolute lg:right-0 lg:bottom-0">
            <img
              src="/assets/images/home-visa.webp"
              alt="home visa"
              className="max-h-[90%] lg:h-[95%] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default VisaPage;
