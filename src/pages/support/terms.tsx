const TermsOfService = () => {
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center mb-5">
        Terms of Service
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="font-semibold text-2xl "> Introduction</h1>
          <p className="text-type/60">
            Welcome to Leapforce. By accessing or using our website and
            services, you agree to be bound by these Terms of Service. If you do
            not agree with any part of these terms, please do not use our
            services. These terms govern your use of our website, booking
            platform, and all related services. We reserve the right to update
            or modify these terms at any time, and continued use of our services
            constitutes acceptance of any changes.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-2xl ">Booking and Payment</h1>
          <p className="text-type/60">
            When making a booking, you agree to provide complete and accurate
            information. Reservations are subject to availability and
            confirmation by our travel partners, including airlines, hotels, and
            transportation providers. Payments must be made in full or as
            specified at the time of booking. We accept various payment methods,
            but we are not responsible for any fees or additional charges
            imposed by financial institutions. Failure to complete payment may
            result in cancellation of your booking.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-2xl ">Cancellations and Refunds</h1>
          <p className="text-type/60">
            Cancellation policies vary depending on the travel service provider.
            Before making a reservation, you are responsible for reviewing the
            cancellation and refund terms associated with your booking. Refunds,
            if applicable, will be processed according to the provider's
            policies and may be subject to cancellation fees. Leapforce is not
            responsible for any penalties or losses resulting from changes or
            cancellations made by airlines, hotels, or other third-party service
            providers.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-2xl ">
            Travel Documents and Responsibilities
          </h1>
          <p className="text-type/60">
            It is your responsibility to ensure that you have the necessary
            travel documents, including passports, visas, and any required
            permits. LeapForce is not responsible for any issues arising from
            missing or incorrect travel documents, denied boarding, or entry
            restrictions imposed by authorities. You are also responsible for
            complying with all health and safety regulations, including
            vaccination and testing requirements for international travel.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-2xl ">
            Service Modifications and Availability
          </h1>
          <p className="text-type/60">
            {" "}
            We strive to provide accurate information and seamless travel
            arrangements, but we do not guarantee that all services will be
            available at all times. Airlines, hotels, and other providers may
            modify, cancel, or delay services due to unforeseen circumstances.
            In such cases, we will make reasonable efforts to assist you, but we
            are not liable for disruptions beyond our control.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-2xl ">
            {" "}
            User Conduct By using our website
          </h1>
          <p className="text-type/60">
            You agree not to engage in fraudulent activities, unauthorized
            transactions, or any behavior that may harm our platform or other
            users. Any misuse of our services, including providing false
            information or attempting to manipulate pricing, may result in the
            suspension or termination of your account. We reserve the right to
            take legal action if necessary.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-2xl ">Limitation of Liability</h1>
          <p className="text-type/60">
            {" "}
            Leapforce acts as an intermediary between customers and travel
            service providers, including airlines, hotels, and transportation
            companies. We do not own or operate these services and cannot be
            held liable for any disruptions, delays, or changes made by third
            parties. While we strive to provide accurate information, we are not
            responsible for any errors, omissions, or misinterpretations on our
            website. You agree that we are not liable for any loss, injury,
            damage, or expense resulting from your use of our services.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-2xl ">Force Majeure</h1>
          <p className="text-type/60">
            {" "}
            We are not responsible for service disruptions caused by events
            beyond our control, including but not limited to natural disasters,
            pandemics, strikes, war, government actions, or technical failures.
            In such cases, refunds or rescheduling will be subject to the
            policies of our travel partners.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-2xl ">Intellectual Property</h1>
          <p className="text-type/60">
            {" "}
            All content on our website, including text, images, logos, and
            software, is the property of Leapforce or its licensors and is
            protected by intellectual property laws. You may not reproduce,
            modify, or distribute any content without our written permission.
            Unauthorized use of our intellectual property may result in legal
            action.{" "}
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-2xl ">
            Changes to Terms of Service
          </h1>
          <p className="text-type/60">
            We reserve the right to update or modify these Terms of Service at
            any time. Any changes will be posted on our website, and continued
            use of our services after such updates constitutes acceptance of the
            revised terms. We encourage you to review these terms periodically.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-2xl ">How to Contact Us</h1>
          <p className="text-type/60">
            If you have any questions or concerns regarding these Terms of
            Service, please contact us at{" "}
            <span className="font-medium text-type">
              info@leapforcetravels.com
            </span>{" "}
            or through our official website. Our customer support team is
            available to assist you with any inquiries related to our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
