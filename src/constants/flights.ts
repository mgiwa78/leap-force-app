export const flightRentalDeals = [
  {
    id: 1,
    image: "./assets/images/flight/london.webp",
    location: "London, UK",
    price: 450,
    rating: 4.5,
  },
  {
    id: 2,
    image: "./assets/images/flight/dubai.webp",
    location: "Dubai, UAE",
    price: 450,
    rating: 4.5,
  },
  {
    id: 3,
    image: "./assets/images/flight/new york.webp",
    location: "New York City, USA",
    price: 450,
    rating: 4.5,
  },
  {
    id: 4,
    image: "./assets/images/flight/paris.webp",
    location: "Paris, France",
    price: 450,
    rating: 4.5,
  },
  {
    id: 5,
    image: "./assets/images/flight/lagos.webp",
    location: "Lagos, Nigeria",
    price: 450,
    rating: 4.5,
  },
  {
    id: 6,
    image: "./assets/images/flight/maldives.webp",
    location: "Male, Maldives",
    price: 450,
    rating: 4.5,
  },
];

interface Destination {
  id: number;
  image: string;
  title: string;
  price: string;
  rating: number;
}

export const destinations: Destination[] = [
  {
    id: 1,
    image: "/assets/images/home/destination1.webp",
    title: "Palm Trees Pool",
    price: "$350.00",
    rating: 4.8,
  },
  {
    id: 2,
    image: "./assets/images/home/destination2.webp",
    title: "Water Cave Pool",
    price: "$450.00",
    rating: 4.5,
  },
  {
    id: 3,
    image: "./assets/images/home/destination3.webp",
    title: "Bali",
    price: "$250.00",
    rating: 4.7,
  },
  {
    id: 4,
    image: "./assets/images/home/destination4.webp",
    title: "Mountain Retreat",
    price: "$550.00",
    rating: 4.9,
  },
  {
    id: 5,
    image: "./assets/images/home/destination5.webp",
    title: "F1 Las Vegas",
    price: "$400.00",
    rating: 4.6,
  },
  {
    id: 6,
    image: "./assets/images/home/destination6.webp",
    title: "Egyptian Suites",
    price: "$400.00",
    rating: 4.6,
  },
];
