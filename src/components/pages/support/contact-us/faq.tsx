import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { faqs } from "@/constants";
import { Icon } from "@iconify/react";
const Faq = () => {
  return (
    <div className="mt-[216px]">
      <h1 className="text-primary text-4xl font-bold">
        Frequently Asked <br /> Questions (FAQS)
      </h1>

      <div className="mt-10">
        <div className="divide-y  rounded-xl ">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-x-3 w-full py-8 text-sm ">
                    <Icon
                      icon={`${
                        open ? "ic:baseline-minus" : "ic:baseline-plus"
                      }`}
                      className={`w-5 h-5 text-primary`}
                    />
                    <span className="font-bold text-start text-lg lg:text-2xl">
                      {faq.question}
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-black">
                    <div className="p-7 ml-4 text-start border-l-[1px] border-primary">
                      {faq.answer || "Answer not available."}
                    </div>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
