import { NavLink } from "react-router-dom";
import { routerLinks } from "@/constants";
import { RenderIf } from "@/components/hoc/RenderIf";
import { Icon } from "@iconify/react";

const Menu = () => {
  const token = null;

  return (
    <div className="flex justify-between items-center py-6 lg:px-4">
      <NavLink to="/">
        <img src="/assets/leapforce.svg" alt="logo" />
      </NavLink>

      <div className="hidden lg:flex gap-x-8 uppercase text-sm">
        {routerLinks.map((link) => (
          <NavLink key={link.url} className={``} to={link.url}>
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
          <div className="flex items-center gap-x-3">
            <button className="bg-[#E0EBF5] text-secondary rounded-full py-2 px-4">
              Log in
            </button>
            <button className="py-2 px-4 rounded-full bg-primary text-white">
              Sign up
            </button>
          </div>
        </RenderIf>
        <div className="block lg:hidden">
          <Icon
            icon="material-symbols:menu-rounded"
            width="24"
            height="24"
            className="text-type"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
