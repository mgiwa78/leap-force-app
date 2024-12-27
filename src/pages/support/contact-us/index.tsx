import { Icon } from "@iconify/react";
import ContactUsForm from "@/components/pages/support/contact-us/contact-form";
import Faq from "@/components/pages/support/contact-us/faq";

const ContactUsPage = () => {
  return (
    <main className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div>
          <div className="mb-[65px]">
            <h2 className="text-xl font-medium text-secondary">Contact Us</h2>
            <h1 className="text-4xl font-bold text-text2 mt-3">
              How Can we
              <br />
              Assist You
            </h1>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Icon icon="ic:baseline-whatsapp" width="24" height="24" />
              <div>
                <h3 className="font-bold">WhatsApp</h3>
                <a href="tel:+2347025650047">+2347025650047</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Icon icon="ph:phone-call" width="24" height="24" />
              <div>
                <h3 className="font-bold">Call/SMS</h3>
                <a href="tel:+2347025650047">+2347025650047</a>
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
                <a href="mailto:info@315serviceslimited.com">
                  {" "}
                  info@315serviceslimited.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Icon icon="mingcute:location-line" width="24" height="24" />

              <div>
                <h3 className="font-bold">Office Address</h3>
                <p className="text-gray-600">
                  10b Taiye Olowu Street, Lekki Phase 1, Lagos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ContactUsForm />
      </div>

      <Faq />
    </main>
  );
};

export default ContactUsPage;
