import { useRef, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import CustomButton from "@/components/core/button";
import HomeAccomodation from "@/components/pages/accommodation/accommodation";
import DestinationCarousel from "@/components/pages/home/destinationSlider";
import ServiceOptions from "@/components/pages/home/service-options";
import Newsletter from "@/components/pages/home/newsletter";
import Dreams from "@/components/pages/home/dreams";
import Testimonials from "@/components/pages/home/testimonials";
import ContactUsPage from "../support/contact-us";
import ChooseLeapforce from "@/components/pages/home/why-choose";

const verticalVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const horizontalVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const AnimatedSection = ({
  children,
  animation = verticalVariants,
}: {
  children: ReactNode;
  animation?: any;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      variants={animation}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <main>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          background: `linear-gradient(147.16deg, #9CA73A 25.24%, #1D81D5 104.7%)`,
          boxShadow: `0px 10px 10px -5px #1D81D4`,
        }}
        className="min-h-[550px] w-full mx-auto  rounded-[32px] px-8 lg:px-[60px]  overflow-hidden py-7"
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

              <CustomButton
                onClick={() => navigate("/service-offering")}
                className="bg-white border-none text-text2 rounded-full font-medium text-[10px] lg:text-base px-[12px] py-[6px] lg:py-3 lg:px-6"
              >
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
      </motion.div>

      <div className="bg-white min-h-[700px]">
        <div className="max-w-5xl mx-auto py-[100px]">
          <AnimatedSection>
            <DestinationCarousel />
          </AnimatedSection>
        </div>
      </div>

      <div className="bg-[#FAFAFA]  ">
        <div className="max-w-5xl mx-auto py-[100px]">
          <AnimatedSection animation={horizontalVariants}>
            <HomeAccomodation />
          </AnimatedSection>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-5xl mx-auto py-[100px]">
          <AnimatedSection animation={horizontalVariants}>
            <ServiceOptions />
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-[100px]">
        <AnimatedSection animation={horizontalVariants}>
          <ChooseLeapforce />
        </AnimatedSection>
      </div>

      <div className="">
        <div className="max-w-5xl mx-auto py-[100px]">
          <AnimatedSection>
            <Testimonials />
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <Newsletter />
        </AnimatedSection>
      </div>

      <div className="">
        <div className="max-w-5xl mx-auto py-[100px]">
          <AnimatedSection>
            <Dreams />
          </AnimatedSection>
        </div>
      </div>

      <div id="contact">
        <div className="max-w-5xl mx-auto py-[100px]">
          <AnimatedSection animation={horizontalVariants}>
            <ContactUsPage />
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
};

export default Home;
