import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { routerLinks } from "@/constants";
import { RenderIf } from "@/components/hoc/RenderIf";
import MobileNavigation from "./mobileNav";
import MenuDropdown from "./menuDropdown";
import { Avatar } from "@/components/core/Avatar/Avatar";

import { Icon } from "@iconify/react";

const Menu = () => {
  const token = null;
  const [openNav, setOpenNav] = useState(false);
  const profile: any = null;

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
          <div className="hidden lg:flex items-center gap-x-[3px]">
            <button
              className="bg-[#E0EBF5] text-secondary rounded-full py-[8px] px-[24px] text-sm cursor-pointer border-[0.5px] border-secondary "
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
            <button
              className="py-[8px] px-[24px] text-sm rounded-full bg-primary text-white cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Sign up
            </button>
          </div>
        </RenderIf>

        <RenderIf condition={!!token && !!profile}>
          <div className="hidden lg:flex items-center gap-x-3">
            <Avatar
              image={`${profile?.first_name} ${profile?.last_name}`}
              size="40"
            />
            <div className="text-type text-[12px]">
              <h1 className="capitalize font-semibold">{`${profile?.first_name} ${profile?.last_name}`}</h1>
              <p>{profile?.email ?? ""}</p>
            </div>

            <MenuDropdown />
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
