import logo from "../assets/kunafa-world.png";
import { links } from "../links";

export default function Footer() {
  return (
    <footer className="w-full bg-leandro p-10 text-old-lace font-switzer">
      <div className="w-full grid grid-cols-3 gap-4">
        <div className="h-full w-full p-2">
          <img className="object-cover" src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-full flex flex-col gap-1">
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
          <div className="w-full flex flex-col gap-1">
            <h1 className=" font-medium uppercase text-old-lace/80">
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
                <a className="text-old-lace hover:text-orange-moyen" href="#">
                  Monday - Saturday <br />
                  10AM to 5PM
                </a>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex items-start flex-col gap-1 font-switzer">
            <h1 className="font-medium uppercase text-old-lace/80">
              Opening hours
            </h1>
            <div className="w-full flex flex-col">
              <h1>Monday - Sunday</h1>
              <h1>12:30PM - 11:30PM</h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
