import video from "../assets/shark-tank.mp4";
import Video from "./Video";
import logo from "../assets/kunafa-world.png";

export default function Hero() {
  return (
    <section className="w-full grid grid-cols-2">
      <Video src={video} />
      <div className="w-full h-full flex items-center justify-center flex-col gap-1 font-switzer bg-old-lace text-leandro">
        <img
          className="h-30 object-cover"
          src={logo}
          alt="logo"
          loading="lazy"
        />
        <h1 className="">As seen on Shark Tank India</h1>
      </div>
    </section>
  );
}
