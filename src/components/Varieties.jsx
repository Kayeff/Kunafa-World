import { variety } from "../variety";
import Item from "./Item";

export default function Varieties() {
  return (
    <section className="w-full min-h-screen p-10">
      <div className="w-full text-old-lace flex items-center justify-center flex-col gap-10">
        <h1 className="font-kaushan-script capitalize text-4xl">
          our Varieties
        </h1>
        <div className="w-full grid grid-cols-3 gap-6">
          {variety.map((prod) => (
            <Item key={`item-${prod.id}`} prod={prod} />
          ))}
        </div>
        <div className="w-full flex items-center justify-center p-2">
          <a
            href="#"
            className="px-10 py-3 cursor-pointer bg-old-lace text-leandro hover:bg-transparent hover:text-old-lace border border-transparent hover:border-old-lace duration-300 font-switzer rounded-full font-medium text-lg"
          >
            Menu
          </a>
        </div>
      </div>
    </section>
  );
}
