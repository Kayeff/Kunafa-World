import logo from "../assets/kunafa-world.png";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "@remixicon/react";

function SocialLink({ href, Icon }) {
  return (
    <a
      href={href}
      className="hover:text-orange-moyen  duration-300 flex items-center justify-center text-old-lace"
    >
      <Icon />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-leandro text-old-lace font-switzer flex items-center justify-between flex-col gap-8 p-8">
      <div className="w-full grid grid-cols-2 p-2">
        <div className="w-full">
          <img className="object-cover" src={logo} alt="" />
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="w-full flex flex-col gap-8">
            <div className="w-full flex flex-col gap-2">
              <h1 className="font-switzer font-medium uppercase text-old-lace/80">
                Contact us
              </h1>
              <div>
                <h1 className="text-old-lace/80">
                  Phone:{" "}
                  <a className="text-old-lace hover:text-orange-moyen" href="#">
                    6361156364
                  </a>
                </h1>
                <h1 className="text-old-lace/80">
                  Mail:{" "}
                  <a className="text-old-lace hover:text-orange-moyen" href="#">
                    info@kunafaworld.com
                  </a>
                </h1>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <h1 className="font-medium uppercase text-old-lace/80">
                Visit us
              </h1>
              <div className="flex flex-col gap-1">
                <h1 className="text-old-lace/80">
                  Location :{" "}
                  <a className="text-old-lace hover:text-orange-moyen" href="#">
                    Near KNS College, No 15/3,4, Thirumenahalli, |Jakkur Post,
                    Bengaluru Urban, Karnataka, 560064
                  </a>
                </h1>
                <h1 className="text-old-lace/80">
                  Office Timings :{" "}
                  <span className="text-old-lace" href="#">
                    Monday to Saturday - 10AM to 5PM
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-8">
            <div className="flex items-start flex-col gap-2 font-switzer">
              <h1 className="font-medium uppercase text-old-lace/80">
                Opening hours
              </h1>
              <div className="w-full flex flex-col">
                <h1>
                  Monday to Sunday <br /> 12:30PM - 11:30PM
                </h1>
              </div>
            </div>
            <div className="flex items-start flex-col gap-2  font-switzer">
              <h1 className="font-medium uppercase text-old-lace/80">
                Socials
              </h1>
              <div className="w-full flex gap-4">
                <SocialLink href={"#"} Icon={RiFacebookFill} />
                <SocialLink href={"#"} Icon={RiLinkedinFill} />
                <SocialLink href={"#"} Icon={RiTwitterFill} />
                <SocialLink href={"#"} Icon={RiInstagramFill} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border border-old-lace/20"></div>
      <div className="w-full flex items-center justify-between">
        <h1 className="">
          Copyright @2025 Kunafa World Desserts Private Limited.
        </h1>
        <div className="flex gap-4">
          <h1>Privacy Policy</h1>
          <h1>Cookies</h1>
        </div>
      </div>
    </footer>
  );
}
