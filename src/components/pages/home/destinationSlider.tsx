import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { destinations } from "@/constants/flights";

export default function DestinationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Calculate the number of visible items based on screen size
  const getVisibleItems = () => {
    return isMobile ? 1 : 3;
  };

  // Calculate the maximum index based on visible items
  const maxIndex = destinations.length - getVisibleItems();

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideRight = () => {
    if (currentIndex >= maxIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const slideLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(maxIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Swipe handling for mobile
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (
      touchStartX - touchEndX > 50 &&
      currentIndex < destinations.length - 1
    ) {
      slideRight(); // Swipe left
    } else if (touchStartX - touchEndX < -50 && currentIndex > 0) {
      slideLeft(); // Swipe right
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <div className="relative" id="services">
      {/* Header */}
      <p className="pb-6 lg:pb-12 text-black font-light">
        Our Services at a Glance
      </p>
      <div className="flex md:justify-between mb-[48px]">
        <div className="space-y-3">
          <h1 className="text-2xl lg:text-[36px] lg:leading-[43.2px] text-primary font-bold">
            Comprehensive Travel Solutions at Your Fingertips
          </h1>
          <p className="text-xs lg:text-base text-black">
            Real-time flight schedules and cost-effective tickets.
          </p>
        </div>
        {!isMobile && (
          <div className="flex justify-end items-center">
            <button
              onClick={slideLeft}
              className="mr-4 rounded-full bg-[#F5F6E7] w-[48px] h-[48px] transition-colors hover:bg-gray-300 flex items-center justify-center"
              aria-label="Previous slide"
            >
              <Icon icon="ph:caret-left" className="h-6 w-6 text-[#292D32]" />
            </button>
            <button
              onClick={slideRight}
              className="rounded-full bg-primary p-3 transition-colors hover:bg-gray-300 flex items-center justify-center"
              aria-label="Next slide"
            >
              <Icon icon="ph:caret-right" className="h-6 w-6 text-white" />
            </button>
          </div>
        )}
      </div>

      <div
        className="overflow-hidden mb-7"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / getVisibleItems())
            }%)`,
          }}
        >
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="flex-shrink-0 w-full md:w-1/3 px-3 transition-all"
            >
              <div className="bg-[#9CA73A0D]/5 rounded-[24px] shadow-md p-6 mb-5">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-[15px] text-text2 pb-3">
                  {destination.title}
                </h3>

                <div className="w-full flex  justify-between">
                  <p className="text-text2 text-xl font-bold">
                    {destination.price}
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-primary text-xs">★</span>
                    <span className="font-medium text-xs">
                      {destination.rating}/5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
