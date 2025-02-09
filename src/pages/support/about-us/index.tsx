import CustomButton from "@/components/core/button";
import { useNavigate } from "react-router-dom";
import ChooseLeapforce from "@/components/pages/home/why-choose";
import Faq from "@/components/pages/support/contact-us/faq";
import OurTeam from "@/components/pages/support/contact-us/team";
import "./index.css";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AnimatedSection = ({
  children,
  animation = imageVariants,
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

const AboutUsPage = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <main className="overflow-x-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-[600px] w-full mx-auto bg-[#E6E9CD] rounded-3xl py-4 px-8 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="capitalize text-[#9CA73A] text-2xl lg:text-5xl lg:leading-[66px] font-bold">
              At Leapforce Travels, <br /> we turn journeys into unforgettable
              experiences.
            </h1>

            <div className="flex justify-center md:justify-start">
              <CustomButton
                onClick={() => {
                  localStorage.setItem("current-service", "travels");
                  navigate("/service-offering");
                }}
                className="bg-secondary text-white rounded-full font-medium text-xs lg:text-base px-3 py-2 lg:py-3 lg:px-6"
              >
                Learn more
              </CustomButton>
            </div>
          </div>

          <div className="flex image-container justify-center items-center h-full">
            <img
              src="/assets/images/home/board.webp"
              alt="home visa"
              className="h-4/5 lg:h-3/5 w-auto object-contain"
            />
          </div>
        </div>
      </motion.div>

      <div className="">
        <div className="my-[100px] max-w-6xl mx-auto">
          <AnimatedSection animation={textVariants}>
            <h1 className="pb-6 text-[#000A2340]/25 tracking-[5px] text-sm lg:text-base">
              OUR VISION
            </h1>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[52px]">
            <AnimatedSection>
              <h1 className="w-full text-[#1A1A1B] font-bold text-2xl lg:text-[32px] lg:leading-[44.8px]">
                To be the go-to travel <br /> agency for seamless <br /> travel
                experiences across <br />
                Africa and beyond, <br /> creating memories that last a
                lifetime.
              </h1>
            </AnimatedSection>
            <div className="w-full col-span-1 md:col-span-2 space-y-6 font-medium text-base md:text-[20px] md:leading-[30px] md:space-y-8">
              <AnimatedSection animation={textVariants}>
                <p>
                  At Leapforce Travels, we are more than just a travel agency—we
                  are your partners in creating seamless and memorable travel
                  experiences. With a global reach and a team of experienced
                  professionals, we specialize in delivering personalized travel
                  solutions for corporate, leisure, and educational journeys.
                </p>
              </AnimatedSection>
              <AnimatedSection>
                <p className="text-sm md:text-base">
                  Our mission is simple: to simplify the complexities of travel
                  while ensuring every trip is stress-free and unforgettable.
                  From real-time bookings to travel documentation, we provide
                  end-to-end services tailored to meet your unique needs.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>

        <div className="my-[200px] max-w-6xl mx-auto">
          <AnimatedSection>
            <ChooseLeapforce />
          </AnimatedSection>
        </div>

        <div className="my-[200px] max-w-6xl mx-auto">
          <AnimatedSection animation={textVariants}>
            <OurTeam />
          </AnimatedSection>
        </div>

        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <Faq />
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
};

export default AboutUsPage;
