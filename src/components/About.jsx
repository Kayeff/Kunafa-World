import kunafa from "../assets/kunafa.avif";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="w-full grid grid-cols-2 text-old-lace">
      <div className="w-full h-full flex items-center justify-center flex-col font-switzer gap-4 bg-old-lace text-leandro p-20">
        <div className="px-2 overflow-hidden">
          <h1 className="text-4xl font-medium tracking-tight font-kaushan-script">
            What is Kunafa World ?
          </h1>
        </div>
        <div className="w-full gap-4 flex flex-col items-center justify-center">
          <div className="w-[90%] flex flex-col gap-2">
            <p className="text-pretty text-center font-switzer text-lg">
              <span className="font-medium">Kunafa</span> - A traditional,
              Middle Eastern dessert made with fine semolina dough, soaked in
              sweet, sugar-based syrup, then layered with cheese, or with
              ingredients such as cream and nuts. It is a well-loved dessert
              across the world. Now exclusively brought to you in India, with
              our own blend. <br /> Sounds good doesn't it ? That's "
              <span className="font-semibold">Kunafa World</span>" for you!
            </p>
            <div className="flex flex-col items-end -space-y-1">
              <p className="font-medium font-switzer text-lg">- Jameela Ruhi</p>
              <p className="font-switzer text-eden/60 font-medium text-sm">
                Co Founder
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Button href={"#"} title={"About us"} />
          </div>
        </div>
      </div>
      <img
        className="w-full h-full object-cover"
        loading="lazy"
        src={kunafa}
        alt="kunafa"
      />
    </section>
  );
}
