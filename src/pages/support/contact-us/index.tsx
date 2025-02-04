import { Icon } from "@iconify/react";
import ContactUsForm from "@/components/pages/support/contact-us/contact-form";
// import Faq from "@/components/pages/support/contact-us/faq";

const ContactUsPage = () => {
  return (
    <main id="contact" className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
        <div className="col-span-1">
          <div className="pb-[65px] text-primary">
            <h2 className="text-xl font-medium">Contact Us</h2>
            <h1 className="text-4xl font-bold  mt-3">
              Let’s Make Your Travel Dreams a Reality
            </h1>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Icon icon="ic:baseline-whatsapp" width="24" height="24" />
              <div>
                <h3 className="font-bold">WhatsApp</h3>
                <a
                  href="https://wa.me/2348186459368"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +2348186459368
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Icon icon="ph:phone-call" width="24" height="24" />
              <div>
                <h3 className="font-bold">Call/SMS</h3>
                <a href="tel:+2348186459368">+2348186459368</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Icon
                icon="fluent:mail-unread-20-regular"
                width="24"
                height="24"
              />
              <div>
                <h3 className="font-bold">E-mail Address</h3>
                <a href="mailto:info@leapforcetravels.com">
                  {" "}
                  info@leapforcetravels.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Icon icon="mingcute:location-line" width="24" height="24" />

              <div>
                <h3 className="font-bold">Office Address</h3>
                <p className="text-gray-600">
                  89 Allen Avenue Ikeja Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <ContactUsForm />
        </div>
      </div>

      {/* <Faq /> */}
    </main>
  );
};

export default ContactUsPage;
