import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import {
  companyDetails,
  socialLinks,
  homeContent,
  supportContent,
  companyContent,
} from "@/constants";

const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="w-full bg-[#394000]  mt-[70px] p-12 md:p-[100px]"
    >
      <motion.div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <motion.div
          variants={item}
          className="col-span-1 md:col-span-2 flex flex-col gap-6"
        >
          <NavLink to="/">
            <div className="bg-white rounded-2xl w-[120px] h-[120px] flex items-center justify-center">
              <img
                src="/assets/leapforce.svg"
                alt="logo"
                width="76px"
                height="82px"
              />
            </div>
          </NavLink>
          <motion.div variants={item} className="flex flex-col gap-4">
            {companyDetails?.map((detail) => {
              const renderText = () => {
                if (detail.type === "link") {
                  return (
                    <a
                      href={`mailto:${detail.text}`}
                      className="text-white underline"
                    >
                      {detail.text}
                    </a>
                  );
                }
                if (detail.type === "phone") {
                  return (
                    <a
                      href={`tel:${detail.text}`}
                      className="text-white underline"
                    >
                      {detail.text}
                    </a>
                  );
                }
                return <span className="text-white">{detail.text}</span>;
              };

              return (
                <div
                  key={detail.text}
                  className="flex text-xs items-center gap-3"
                >
                  <Icon
                    icon={detail.icon}
                    width="12"
                    height="12"
                    className="text-white"
                  />
                  {renderText()}
                </div>
              );
            })}
          </motion.div>
          {/* <motion.div variants={item} className="flex flex-col gap-4">
            {companyDetails?.map((detail) => (
              <div
                key={detail.text}
                className="flex text-xs items-center gap-3"
              >
                <Icon
                  icon={detail.icon}
                  width="12"
                  height="12"
                  className="text-white"
                />
                <span className="text-white">{detail.text}</span>
              </div>
            ))}
          </motion.div> */}
          <motion.div className="flex gap-x-4">
            {socialLinks?.map((social, index) => (
              <motion.a
                key={index + 1333}
                className="rounded-full p-[6px] border-[0.4px] border-[#9CA73A] cursor-pointer"
                target="_blank"
                href={social.url}
              >
                <Icon
                  width="12"
                  height="12"
                  icon={social.icon}
                  className="text-[#9CA73A]"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          className="space-y-6 lg:pt-[40px] text-white"
        >
          <h3 className="text-sm font-bold">Home</h3>
          <ul className="space-y-4">
            {homeContent.map((item) => (
              <motion.li
                key={item?.title}
                whileHover={{ x: 5 }}
                className="text-white text-xs font-normal"
              >
                <NavLink to={item?.href}>{item?.title}</NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={item}
          className="space-y-6 lg:pt-[40px] text-white"
        >
          <h3 className="text-sm font-bold">Company</h3>
          <ul className="space-y-4">
            {companyContent.map((item) => (
              <motion.li
                key={item.title}
                whileHover={{ x: 5 }}
                className="text-white text-xs font-normal"
              >
                <NavLink to={item?.href}>{item.title}</NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={item}
          className="space-y-6 lg:pt-[40px] text-white"
        >
          <h3 className="text-sm font-bold">Support</h3>
          <ul className="space-y-4">
            {supportContent.map((item) => (
              <motion.li
                key={item.title}
                whileHover={{ x: 5 }}
                className="text-white text-xs font-normal"
              >
                <NavLink to={item?.href}>{item.title}</NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-16 pt-8 border-t border-gray-200 text-center text-white text-sm"
      >
        © {new Date().getFullYear()} Leapforce Travels Limited. All rights
        reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
