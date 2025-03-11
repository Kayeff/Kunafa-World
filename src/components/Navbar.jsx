import logo from "../assets/kunafa-world.png";
import { links } from "../links";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 w-full flex items-center justify-center text-old-lace bg-leandro z-40">
      <div className="w-[80%] flex justify-between items-center relative p-7">
        <div className="flex items-center justify-center gap-5">
          {links
            .filter((link) => link.id < 4)
            .map((link) => (
              <NavbarLinks link={link} key={`link-${link.id}`} />
            ))}
        </div>
        <img
          className="h-30 object-cover absolute -bottom-1/2 left-1/2 -translate-x-1/2"
          src={logo}
          alt="logo"
          loading="lazy"
        />
        <div className="flex items-center justify-center gap-5">
          {links
            .filter((link) => link.id >= 4)
            .map((link) => (
              <NavbarLinks link={link} key={`link-${link.id}`} />
            ))}
        </div>
      </div>
    </nav>
  );
}
