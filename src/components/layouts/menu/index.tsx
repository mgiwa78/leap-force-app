import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { routerLinks } from "@/constants";
import { RenderIf } from "@/components/hoc/RenderIf";
import MobileNavigation from "./mobileNav";

import { Icon } from "@iconify/react";

const Menu = () => {
  const token = null;
  const [openNav, setOpenNav] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="relative flex justify-between items-center py-6 lg:px-4">
      <NavLink to="/">
        <img src="/assets/leapforce.svg" alt="logo" />
      </NavLink>

      <div className="hidden lg:flex gap-x-8 uppercase text-sm">
        {routerLinks.map((link) => (
          <NavLink
            key={link.url}
            className={({ isActive }) =>
              `text-sm text-type  ${isActive ? "font-bold" : "font-light"}`
            }
            to={link.url}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-x-3">
        <Icon
          icon="ph:magnifying-glass"
          className="border-[0.5px] text-type h-5 w-5"
        />

        <RenderIf condition={!token}>
          <div className="hidden lg:flex items-center gap-x-1">
            <button
              className="bg-[#E0EBF5] text-secondary rounded-full py-2 px-4 cursor-pointer border-[0.5px] border-secondary "
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
            <button
              className="py-2 px-4 rounded-full bg-primary text-white cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Sign up
            </button>
          </div>
        </RenderIf>
        <button className="block lg:hidden" onClick={() => setOpenNav(true)}>
          <Icon
            icon="material-symbols:menu-rounded"
            width="24"
            height="24"
            className="text-type"
          />
        </button>
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
