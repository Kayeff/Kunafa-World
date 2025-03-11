export default function NavbarLinks({ link }) {
  return (
    <a
      className="text-lg font-switzer hover:text-orange-moyen duration-300"
      href={link.src}
    >
      {link.title}
    </a>
  );
}
