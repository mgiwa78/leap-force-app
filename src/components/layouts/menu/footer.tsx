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
      className="w-full bg-[#F4F9FD] rounded-3xl my-[70px] p-12 md:p-[100px]"
    >
      <motion.div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <motion.div
          variants={item}
          className="col-span-1 lg:col-span-2 flex flex-col gap-6"
        >
          <NavLink to="/">
            <img
              src="/assets/leapforce.svg"
              alt="logo"
              width="76px"
              height="82px"
            />
          </NavLink>
          <motion.div variants={item} className="flex flex-col gap-4">
            {companyDetails?.map((detail) => (
              <div
                key={detail.text}
                className="flex text-xs items-center gap-3"
              >
                <Icon
                  icon={detail.icon}
                  width="12"
                  height="12"
                  className="text-text2"
                />
                <span>{detail.text}</span>
              </div>
            ))}
          </motion.div>
          <motion.div className="flex gap-x-4">
            {socialLinks?.map((social, index) => (
              <motion.a
                key={index + 1333}
                className="rounded-full p-1 border-[0.4px] border-secondary"
              >
                <Icon
                  width="12"
                  height="12"
                  icon={social.icon}
                  className="text-secondary_1"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="space-y-6 lg:pt-[40px]">
          <h3 className="text-sm font-bold">Home</h3>
          <ul className="space-y-4">
            {homeContent.map((item) => (
              <motion.li
                key={item?.title}
                whileHover={{ x: 5 }}
                className="text-[#1F1F1F] text-xs font-normal"
              >
                <NavLink to={item?.href}>{item?.title}</NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={item} className="space-y-6 lg:pt-[40px]">
          <h3 className="text-sm font-bold">Company</h3>
          <ul className="space-y-4">
            {companyContent.map((item) => (
              <motion.li
                key={item.title}
                whileHover={{ x: 5 }}
                className="text-[#1F1F1F] text-xs font-normal"
              >
                <NavLink to={item?.href}>{item.title}</NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={item} className="space-y-6 lg:pt-[40px]">
          <h3 className="text-sm font-bold">Support</h3>
          <ul className="space-y-4">
            {supportContent.map((item) => (
              <motion.li
                key={item.title}
                whileHover={{ x: 5 }}
                className="text-[#1F1F1F] text-xs font-normal"
              >
                <NavLink to={item?.href}>{item.title}</NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm"
      >
        ©{new Date().getFullYear()} 315 Travels & Tours. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
