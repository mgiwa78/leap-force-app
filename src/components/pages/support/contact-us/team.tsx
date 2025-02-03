const OurTeam = () => {
  const teamMembers = [
    {
      name: "Oluwole Popoola",
      role: "CEO",
      image: "/assets/images/support/ceo.JPG", // Replace with actual image paths
    },
    {
      name: "Olawunmi Akomolafe",
      role: "Business Development Manager",
      image: "/assets/images/support/biz dev.JPG",
    },
    {
      name: "Anthony Ibekwe",
      role: "Travel Consultant",
      image: "/assets/images/support/travel consultant.JPG",
    },
    {
      name: "Promise Uche",
      role: "Graphics Designer & Digital Marketer",
      image: "/assets/images/support/graphics designer.JPG",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-primary text-3xl md:text-[48px] md:leading-[57.6px] font-bold">
          Our Team
        </h1>
        <p className="text-type w-full md:w-1/2 ">
          Get to know the passionate individuals behind Leapforce, dedicated to
          curating your perfect journey with expertise and care.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="relative rounded-lg overflow-hidden shadow-lg aspect-[6/9]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-2 left-0 w-full bg-black bg-opacity-70 text-white p-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm opacity-75">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
