import { Fragment } from "react";
import { Icon } from "@iconify/react";
import {
  Menu,
  MenuButton,
  Transition,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { logoutUser } from "@/utils/fn";

const MenuDropdown = () => {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex gap-x-1 items-center">
        <Icon icon="ph:caret-down" className="h-4 w-4 text-[#808491]" />
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-50"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-50"
      >
        <MenuItems className="absolute z-[1] right-0 mt-2 py-4 w-[220px] origin-top-right rounded-lg bg-white shadow-lg focus:outline-none">
          <MenuItem as="div" className="px-4 py-4 text-text2 text-sm">
            <NavLink
              className={({ isActive }) =>
                `text-sm text-text2/80 px-3  ${
                  isActive ? " bg-[#F1F1F1] rounded-full py-3 " : ""
                }`
              }
              to="/my-profile"
            >
              My Profile
            </NavLink>
          </MenuItem>

          <MenuItem as="div" className="px-4 py-4 text-text2 text-sm">
            <NavLink
              className={({ isActive }) =>
                `text-sm text-text2/80 px-3  ${
                  isActive ? " bg-[#F1F1F1] rounded-full py-3 " : ""
                }`
              }
              to="/change-password"
            >
              Change Password
            </NavLink>
          </MenuItem>

          <MenuItem as="div" className="px-4 py-4 text-primary text-sm">
            <button onClick={() => logoutUser()} className="px-4">
              Sign out
            </button>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default MenuDropdown;
