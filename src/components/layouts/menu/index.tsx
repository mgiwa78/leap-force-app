import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { routerLinks } from "@/constants";
// import { RenderIf } from "@/components/hoc/RenderIf";
import MobileNavigation from "./mobileNav";
import "./index.css";
// import MenuDropdown from "./menuDropdown";
// import { Avatar } from "@/components/core/Avatar/Avatar";
import { Icon } from "@iconify/react";

const Menu = () => {
  const [openNav, setOpenNav] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isHomeRoute = location.pathname === "/";

  return (
    <nav className="relative ">
      <div className="">
        <div className="flex justify-between items-center py-6 lg:px-4">
          <NavLink to="/">
            <img src="/assets/leapforce.svg" alt="logo" />
          </NavLink>

          <div className="hidden lg:flex gap-x-8 uppercase text-sm">
            {routerLinks.map((link) => {
              return link.link ? (
                <NavLink
                  key={link.url}
                  className={({ isActive }) =>
                    `nav-link text-sm  ${
                      isActive
                        ? "font-bold text-primary"
                        : "font-light text-type"
                    }`
                  }
                  to={link.url}
                  // onClick={() =>
                  //   localStorage.setItem("current-service", "flight")
                  // }
                >
                  {link.name}
                </NavLink>
              ) : (
                <Link
                  smooth
                  key={link.url}
                  className="nav-link text-sm text-type font-light"
                  to={isHomeRoute ? link.url : `/${link?.url}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-x-3">
            {/* <Icon
              icon="ph:magnifying-glass"
              className="border-[0.5px] text-type h-5 w-5"
            /> */}

            <div className="hidden lg:flex items-center gap-x-2 ">
              <Link
                className="bg-[#E0EBF5]  text-secondary rounded-full py-[8px] px-[24px] text-sm cursor-pointer border-[0.5px] hover:text-white border-secondary "
                to={isHomeRoute ? "#contact" : "/#contact"}
              >
                Contact Us
              </Link>
              <button
                className="py-[8px]  px-[24px] text-sm rounded-full bg-primary hover:text-white text-white cursor-pointer"
                onClick={() => {
                  localStorage.setItem("current-service", "travels");
                  navigate("/service-offering");
                }}
              >
                Book a trip
              </button>
            </div>

            <button
              className="block lg:hidden"
              onClick={() => setOpenNav(true)}
            >
              <Icon
                icon="material-symbols:menu-rounded"
                width="24"
                height="24"
                className="text-type"
              />
            </button>
          </div>
        </div>
      </div>

      {openNav && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-40"
            onClick={() => setOpenNav(false)}
          />

          <MobileNavigation
            isOpen={openNav}
            toggleMenu={() => setOpenNav(!openNav)}
          />
        </>
      )}
    </nav>
  );
};

export default Menu;
