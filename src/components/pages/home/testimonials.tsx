import { useEffect, useRef, useState } from "react";
import { Avatar } from "@/components/core/Avatar/Avatar";
import { testimonials } from "@/constants";

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 testimonials
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, testimonials.length));
  };

  const handleShowLess = () => {
    setVisibleCount((prev) => prev - 3);
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    testimonialRefs.current.forEach((ref) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              ref.classList.add("opacity-100", "translate-y-0");
              observer.disconnect(); // Stop observing once visible
            }
          },
          { threshold: 0.1 }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [visibleCount]);

  return (
    <div className="">
      <h1
        className="text-secondary_1 font-semibold text-xl lg
      :text-4xl text-center"
      >
        Testimonials{" "}
      </h1>

      <div className="mb-20 grid md:grid-cols-3 gap-8 ">
        {testimonials.slice(0, visibleCount).map((testimonial, index) => (
          <div
            key={index}
            ref={(el) => (testimonialRefs.current[index] = el)}
            className={`${
              (index + 1) % 3 === 2 ? "bg-secondary_1" : "bg-[#F4F4F4]"
            } px-1 py-1 text-xs  rounded-xl shadow-sm transform translate-y-10 opacity-0 transition-all duration-700 ease-out delay-300`}
          >
            <div className="bg-white p-3 min-h-[100px] rounded-xl">
              <p
                className={`
                text-[#7A7A7A]
              relative`}
              >
                {`${testimonial.text.slice(0, 200)}...`}
              </p>
            </div>

            <div className="flex mt-4 p-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar
                  image={testimonial.name}
                  size="48"
                  // className={` ${
                  //   (index + 1) % 2 === 0
                  //     ? "bg-primary text-white"
                  //     : "bg-white text-red-600"
                  // } `}
                />
                <div>
                  <h3
                    className={` ${
                      (index + 1) % 3 === 2 ? "text-white" : "text-text2"
                    } font-semibold`}
                  >
                    {testimonial.name}
                  </h3>
                </div>
              </div>

              <img alt="" src={testimonial.quote} />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        {visibleCount < testimonials.length && (
          <button
            onClick={handleShowMore}
            className="bg-primary text-white py-2 px-4 rounded-lg mr-4"
          >
            Show More
          </button>
        )}
        {visibleCount > 3 && (
          <button
            onClick={handleShowLess}
            className="bg-secondary text-white py-2 px-4 rounded-lg"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
