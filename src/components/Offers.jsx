import viralKunafa from "../assets/viral-kunafa.jpg";
import Button from "./Button";

export default function Offers() {
  return (
    <section className="w-full grid grid-cols-2">
      <div className="w-full h-full flex items-center justify-center flex-col gap-8 font-switzer bg-old-lace text-leandro">
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-switzer font-semibold tracking-tight text-4xl">
            Order Now for
          </h1>
          <h1 className="font-kaushan-script text-4xl">
            Kunafa Chocolate bars
          </h1>
        </div>
        <Button href={"#"} title="Explore other flavours" />
      </div>
      <img src={viralKunafa} alt="kunafa-bar" loading="lazy" />
    </section>
  );
}
