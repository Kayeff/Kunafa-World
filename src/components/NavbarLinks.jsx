import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function NavbarLinks({ link }) {
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          "text-lg font-switzer hover:text-orange-moyen duration-300 font-medium",
          isActive ? "text-orange-moyen" : ""
        )
      }
      to={link.src}
    >
      {link.title}
    </NavLink>
  );
}
