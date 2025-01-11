import { Icon } from "@iconify/react";
import { NavLink, useNavigate } from "react-router-dom";
// import { RenderIf } from "@/components/hoc/RenderIf";
import { routerLinks } from "@/constants";
// import { Avatar } from "@/components/core/Avatar/Avatar";
//import { logoutUser } from "@/utils/fn";

interface Props {
  toggleMenu: () => void;
  isOpen: boolean;
}
const MobileNavigation = ({ isOpen, toggleMenu }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="relative mt-0 ">
      <div
        className={`fixed top-0 right-0 h-screen w-3/4  bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="py-8 px-5 ">
          <div className="flex justify-between">
            <NavLink to="/">
              <img src="/assets/leapforce.svg" alt="logo" />
            </NavLink>
            <button onClick={toggleMenu}>
              <Icon icon="ph:x" width="26" height="26" />
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-y-6 text-xs pb-3 border-b-[0.25px] border-[#C8C8C8]">
            {routerLinks?.map((link) => (
              <NavLink
                key={link.url}
                className={({ isActive }) =>
                  `text-sm text-text2/80 px-3  ${
                    isActive && link.link
                      ? " bg-[#F1F1F1] rounded-full py-3 "
                      : ""
                  }`
                }
                to={link.url}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex gap-y-2 flex-col pt-3">
            <button
              className="bg-[#E0EBF5] text-secondary rounded-full py-2 px-4 cursor-pointer border-[0.5px] border-secondary "
              onClick={() => navigate("#contact")}
            >
              Contact Us
            </button>
            <button
              className="py-2 px-4 rounded-full bg-primary text-white cursor-pointer"
              onClick={() => navigate("/service-offering")}
            >
              Book a Trip
            </button>
          </div>

          {/* <RenderIf condition={!token}>
            <div className="flex gap-y-2 flex-col pt-3">
              <button
                className="bg-[#E0EBF5] text-secondary rounded-full py-2 px-4 cursor-pointer border-[0.5px] border-secondary "
                onClick={() => navigate("#contact")}
              >
                Contact Us
              </button>
              <button
                className="py-2 px-4 rounded-full bg-primary text-white cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Book a Trip
              </button>
            </div>
          </RenderIf> */}

          {/* <RenderIf condition={!!token && !!profile}>
            <div className="pt-3">
              <div className="px-3 flex items-center gap-x-3">
                <Avatar
                  image={`${profile?.first_name} ${profile?.last_name}`}
                  size="40"
                />
                <div className="text-text2 font-light text-[13px]">
                  <h1 className="font-medium">{`${profile?.first_name} ${profile?.last_name}`}</h1>
                  <p className="text-[10px]">{profile?.email ?? ""}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-y-6">
                <NavLink
                  className="text-text2 text-sm px-3 font-normal"
                  to="/my-profile"
                >
                  My Profile
                </NavLink>
                <NavLink
                  className="text-text2 text-sm px-3 font-normal"
                  to="/change-password"
                >
                  Change Password
                </NavLink>
                <button
                  className="px-3 text-start  text-primary text-sm"
                  onClick={() => logoutUser()}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </RenderIf> */}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
