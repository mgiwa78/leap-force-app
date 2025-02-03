const PrivacyPolicy = () => {
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center mb-5">
        Privacy Policy
      </h1>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <p className="text-type/60">
            At Leapforce, we respect your privacy and are committed to
            protecting your personal information. This Privacy Policy outlines
            how we collect, use, store, and share your data when you visit our
            website or use our services. By using our website, you agree to the
            terms outlined in this policy.
          </p>
          <div className="space-y-2">
            <h1 className="font-semibold text-2xl ">Information We Collect</h1>
            <p className="text-type/60">
              We may collect personal information such as your name, email
              address, phone number, and payment details when you make a booking
              or inquiry. Additionally, we may gather non-personal data such as
              your IP address, browser type, and website usage information
              through cookies and similar technologies. How We Use Your
              Information Your information is used to process bookings, provide
              customer support, improve our website and services, and
              communicate with you about promotions and offers. We may also use
              your data for legal and compliance purposes.
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="font-semibold text-2xl ">Data Protection</h1>
            <p className="text-type/60">
              We implement security measures to safeguard your personal data
              from unauthorized access, loss, or misuse. While we take all
              reasonable precautions, we cannot guarantee absolute security. You
              are encouraged to take necessary steps to protect your personal
              information.
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="font-semibold text-2xl"> Third-Party Sharing</h1>
            <p className="text-type/60">
              We do not sell your personal data. However, we may share your
              information with trusted partners such as airlines, hotels, and
              travel service providers to fulfill your bookings. In certain
              cases, we may be required to disclose information to comply with
              legal obligations.
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="font-semibold text-2xl"> Your Rights</h1>
            <p className="text-type/60">
              You have the right to access, update, or delete your personal
              data. You may also opt out of marketing communications at any
              time. If you wish to exercise any of these rights, please contact
              us using the details provided in the "How Can You Contact Us About
              This Policy" section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
