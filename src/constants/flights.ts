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
    image: "/assets/images/home/paris.webp",
    title: "Paris",
    price: "$350.00",
    rating: 4.8,
  },
  {
    id: 2,
    image: "./assets/images/home/france.webp",
    title: "France",
    price: "$450.00",
    rating: 4.5,
  },
  {
    id: 3,
    image: "./assets/images/home/london.webp",
    title: "London",
    price: "$250.00",
    rating: 4.7,
  },
  {
    id: 4,
    image: "./assets/images/home/rome.webp",
    title: "Rome",
    price: "$550.00",
    rating: 4.9,
  },
  {
    id: 5,
    image: "./assets/images/home/thailand.webp",
    title: "Thailand",
    price: "$400.00",
    rating: 4.6,
  },
  {
    id: 6,
    image: "./assets/images/home/istanbul.webp",
    title: "Istanbul",
    price: "$400.00",
    rating: 4.6,
  },
];

export const travelClassOptions = [
  { label: "Business", value: "business" },
  { label: "Economy", value: "economy" },
  { label: "First Class", value: "first class" },
];

export const passengersNumberOptions = [
  { label: "1 Passenger", value: "1" },
  { label: "2 Passengers", value: "2" },
  { label: "3 Passengers", value: "3" },
  { label: "4 Passengers", value: "4" },
  { label: "5 Passengers", value: "5" },
];
