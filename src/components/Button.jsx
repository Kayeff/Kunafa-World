import { twMerge } from "tailwind-merge";

export default function Button({ css, href, title }) {
  return (
    <a
      href={href}
      className={twMerge(
        "px-10 py-3 cursor-pointer bg-leandro text-old-lace hover:bg-transparent hover:text-leandro border border-transparent hover:border-leandro duration-300 font-switzer rounded-full",
        css
      )}
    >
      {title}
    </a>
  );
}
