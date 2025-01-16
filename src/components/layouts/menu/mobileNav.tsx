import { Icon } from "@iconify/react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { routerLinks } from "@/constants";

interface Props {
  toggleMenu: () => void;
  isOpen: boolean;
}

const MobileNavigation = ({ isOpen, toggleMenu }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  return (
    <div className="relative mt-0">
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="py-8 px-5">
          <div className="flex justify-between">
            <NavLink to="/" onClick={toggleMenu}>
              <img src="/assets/leapforce.svg" alt="logo" />
            </NavLink>
            <button onClick={toggleMenu}>
              <Icon icon="ph:x" width="26" height="26" />
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-y-6 text-xs pb-5 border-b-[0.25px] border-[#C8C8C8]">
            {routerLinks?.map((link) =>
              link.link ? (
                <NavLink
                  key={link.url}
                  className={({ isActive }) =>
                    `text-sm text-text2/80 px-3 ${
                      isActive ? " bg-[#F1F1F1] rounded-full py-3 " : ""
                    }`
                  }
                  to={link.url}
                  onClick={toggleMenu} // Close navbar on click
                >
                  {link.name}
                </NavLink>
              ) : (
                <Link
                  smooth
                  key={link.url}
                  className="text-sm text-type font-light px-3"
                  to={isHomeRoute ? link.url : `/${link?.url}`}
                  onClick={toggleMenu} // Close navbar on click
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="flex gap-y-2 flex-col pt-5">
            <button
              className="bg-[#E0EBF5] text-secondary rounded-full py-2 px-4 cursor-pointer border-[0.5px] border-secondary"
              onClick={() => {
                navigate("#contact");
                toggleMenu(); // Close navbar
              }}
            >
              Contact Us
            </button>
            <button
              className="py-2 px-4 rounded-full bg-primary text-white cursor-pointer"
              onClick={() => {
                navigate("/service-offering");
                toggleMenu(); // Close navbar
              }}
            >
              Book a Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
