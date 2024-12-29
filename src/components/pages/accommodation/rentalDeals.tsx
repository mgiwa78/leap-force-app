import ImageCard from "@/components/core/Imagecard";
import { rentalDeals } from "@/constants/accommodation";

export default function RentalsDeals() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-20">
      {rentalDeals.map((deal) => (
        <ImageCard
          key={deal.id}
          image={deal.image}
          location={deal.location}
          rating={Number(deal.rating)}
        />
      ))}
    </div>
  );
}
