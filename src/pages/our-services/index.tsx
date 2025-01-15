import CustomButton from "@/components/core/button";
import { useNavigate } from "react-router";
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
  animation,
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
const OurServices = () => {
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
        className="min-h-[600px] w-full mx-auto bg-[#E6E9CD] rounded-3xl py-4 px-8 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="capitalize text-[#9CA73A] text-2xl lg:text-5xl lg:leading-[66px] font-bold">
              Check out all our Services, we make your trips around the world
              super easy!
            </h1>

            <div className="flex justify-center md:justify-start">
              <CustomButton
                onClick={() => navigate("/service-offering")}
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

      <div className="max-w-5xl mx-auto py-[100px] space-y-[100px]">
        <div>
          <h1 className="text-center text-2xl md:text-[32px] md:leading-[51.2px] tracking-[10px] text-[#AEAFAA] pb-[80px] font-medium">
            TOURS & PACKAGES
          </h1>
          <div className="flex flex-col gap-y-6">
            <div className="flex items-center justify-center p-8">
              <div
                className={` w-full grid md:grid-cols-2 gap-2 lg:gap-[97px] items-center transition-all duration-1000`}
              >
                <AnimatedSection animation={imageVariants}>
                  <div className="relative">
                    <div className="overflow-hidden h-full p-4">
                      <div className="aspect-[5/6] relative">
                        <img
                          src="/assets/images/home/young couple.webp"
                          alt="Visa assistance demonstration"
                          className="w-full h-full object-cover absolute rounded-[32px]"
                          style={{ transform: "rotate(360deg)" }}
                        />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation={textVariants}>
                  <div>
                    <h1 className="pb-6 text-[#000A2340]/25 tracking-[5px] text-sm lg:text-base">
                      VACATION PACKAGE
                    </h1>
                    <div className="space-y-6 mb-[48px]">
                      <h1 className="text-2xl text-primary md:text-3xl font-bold tracking-tight">
                        Plan the perfect trip for your family, honeymoon, or
                        next big adventure with our expertly curated tours.
                      </h1>

                      <p className="text-gray-700 text-sm md:text-base max-w-xl">
                        From breathtaking sights to unforgettable moments, we
                        ensure every detail is taken care of. Skip the stress
                        and let us handle your visa processing—hassle-free.
                        Ready to make memories? Start your journey today!
                      </p>
                    </div>
                    <CustomButton
                      className="bg-secondary_1 hover:bg-secondary_1/90 text-white transition-colors duration-200 rounded-full px-8 py-3 text-sm font-medium"
                      onClick={() => navigate("/service-offering")}
                    >
                      Get Started
                    </CustomButton>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            <div className="flex items-center justify-center p-8">
              <div
                className={` w-full grid md:grid-cols-2 gap-2 lg:gap-[97px] items-center transition-all duration-1000`}
              >
                <div className="relative order-1 lg:order-2">
                  <AnimatedSection animation={imageVariants}>
                    <div className="overflow-hidden h-full p-4">
                      <div className="aspect-[6/6] relative">
                        <img
                          src="/assets/images/home/customized package.webp"
                          alt="Visa assistance demonstration"
                          className="w-full h-full object-cover absolute rounded-[32px]"
                          style={{ transform: "rotate(360deg)" }}
                        />
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                <AnimatedSection animation={textVariants}>
                  <div className="order-2 lg:order-1">
                    <h1 className="pb-6 text-[#000A2340]/25 tracking-[5px] text-sm lg:text-base">
                      CUSTOMIZED PACKAGE
                    </h1>
                    <div className="space-y-6 mb-[48px]">
                      <h1 className="text-2xl text-primary md:text-3xl font-bold tracking-tight">
                        Design your ideal getaway with packages tailored
                        specifically to your needs and preferences.
                      </h1>

                      <p className="text-gray-700 text-sm md:text-base max-w-xl">
                        From relaxing retreats to adventurous journeys, we
                        create the perfect travel experience just for you.
                        Forget about the paperwork—we handle everything so you
                        can focus on enjoying your trip. Your next adventure
                        starts here!
                      </p>
                    </div>
                    <CustomButton
                      className="bg-secondary_1 hover:bg-secondary_1/90 text-white transition-colors duration-200 rounded-full px-8 py-3 text-sm font-medium"
                      onClick={() => navigate("/service-offering")}
                    >
                      Get Started
                    </CustomButton>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            <div className="flex items-center justify-center p-8">
              <div
                className={` w-full grid md:grid-cols-2 gap-2 lg:gap-[97px] items-center transition-all duration-1000`}
              >
                <AnimatedSection animation={imageVariants}>
                  <div className="relative">
                    <div className="overflow-hidden h-full p-4">
                      <div className="aspect-[6/6] relative">
                        <img
                          src="/assets/images/home/cruise ship.webp"
                          alt="Visa assistance demonstration"
                          className="w-full h-full object-cover absolute rounded-[32px]"
                          style={{ transform: "rotate(360deg)" }}
                        />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation={textVariants}>
                  <div>
                    <h1 className="pb-6 text-[#000A2340]/25 tracking-[5px] text-sm lg:text-base">
                      CRUISE ACTIVITIES
                    </h1>
                    <div className="space-y-6 mb-[48px]">
                      <h1 className="text-2xl text-primary md:text-3xl font-bold tracking-tight">
                        Set sail on unforgettable cruises with our exclusive
                        deals designed for relaxation and adventure
                      </h1>

                      <p className="text-gray-700 text-sm md:text-base max-w-xl">
                        Explore new destinations, unwind, and let us take care
                        of all the details. Ready to set sail? Book your cruise
                        now and start your journey!
                      </p>
                    </div>
                    <CustomButton
                      className="bg-secondary_1 hover:bg-secondary_1/90 text-white transition-colors duration-200 rounded-full px-8 py-3 text-sm font-medium"
                      onClick={() => navigate("/service-offering")}
                    >
                      Get Started
                    </CustomButton>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-center text-2xl md:text-[32px] md:leading-[51.2px] tracking-[10px] text-[#AEAFAA] pb-[80px] font-medium">
            CORPORATE TRAVELS & CONFERENCES
          </h1>

          <div>
            <div className="flex items-center justify-center p-8">
              <div
                className={` w-full grid md:grid-cols-2 gap-2 lg:gap-[97px] items-center transition-all duration-1000`}
              >
                <AnimatedSection animation={imageVariants}>
                  <div className="relative">
                    <div className="overflow-hidden h-full p-4">
                      <div className="aspect-[5/6] relative">
                        <img
                          src="/assets/images/home/confrences.webp"
                          alt="Visa assistance demonstration"
                          className="w-full h-full object-cover absolute rounded-[32px]"
                          style={{ transform: "rotate(360deg)" }}
                        />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation={textVariants}>
                  <div>
                    {/* <h1 className="pb-6 text-[#000A2340]/25 tracking-[5px] text-sm lg:text-base">
                    VACATION PACKAGE
                  </h1> */}
                    <div className="space-y-6 mb-[48px]">
                      <h1 className="text-2xl text-primary md:text-3xl font-bold tracking-tight">
                        Simplify corporate travel with custom solutions for your
                        events, conferences, and team-building activities
                      </h1>

                      <p className="text-gray-700 text-sm md:text-base max-w-xl">
                        We handle everything—from flight bookings to visa
                        processing—so you can focus on what truly matters: your
                        business. Ready to take your business global? Start your
                        corporate journey today!
                      </p>
                    </div>
                    <CustomButton
                      className="bg-secondary_1 hover:bg-secondary_1/90 text-white transition-colors duration-200 rounded-full px-8 py-3 text-sm font-medium"
                      onClick={() => navigate("/service-offering")}
                    >
                      Get Started
                    </CustomButton>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-center text-2xl md:text-[32px] md:leading-[51.2px] tracking-[10px] text-[#AEAFAA] pb-[80px] font-medium">
            CAR RENTALS & TRANSFERS
          </h1>
          <div className="flex items-center justify-center p-8">
            <div
              className={` w-full grid md:grid-cols-2 gap-2 lg:gap-[97px] items-center transition-all duration-1000`}
            >
              <div className="relative order-1 lg:order-2">
                <AnimatedSection animation={imageVariants}>
                  <div className="overflow-hidden h-full p-4">
                    <div className="aspect-[6/6] relative">
                      <img
                        src="/assets/images/home/carrides.webp"
                        alt="Visa assistance demonstration"
                        className="w-full h-full object-cover absolute rounded-[32px]"
                        style={{ transform: "rotate(360deg)" }}
                      />
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <div className="order-2 lg:order-1">
                <AnimatedSection animation={textVariants}>
                  {/* <h1 className="pb-6 text-[#000A2340]/25 tracking-[5px] text-sm lg:text-base">
                  CUSTOMIZED PACKAGE
                </h1> */}
                  <div className="space-y-6 mb-[48px]">
                    <h1 className="text-2xl text-primary md:text-3xl font-bold tracking-tight">
                      Affordable & <br /> Convenient Ride for Every Journey
                    </h1>

                    <p className="text-gray-700 text-sm md:text-base max-w-xl">
                      Your ride, your way. Choose from a range of vehicles
                      tailored to your journey. Hit the road with
                      confidence—explore our car rental options!
                    </p>
                  </div>
                  <CustomButton
                    className="bg-secondary_1 hover:bg-secondary_1/90 text-white transition-colors duration-200 rounded-full px-8 py-3 text-sm font-medium"
                    onClick={() => navigate("/service-offering")}
                  >
                    Get Started
                  </CustomButton>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurServices;
