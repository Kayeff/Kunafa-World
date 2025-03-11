import { testimonial_data } from "../testimonial";
import Card from "./Card";
import { Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import left from "../assets/left-1.png";
import right from "../assets/right-1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="w-full py-10 bg-old-lace text-leandro">
      <div className="w-full flex items-center justify-center flex-col gap-10">
        <div className="flex items-center justify-center flex-col gap-1">
          <h1 className="font-kaushan-script capitalize text-4xl">
            Testimonials
          </h1>
          <p className="font-switzer text-lg">
            Don’t take our word for it, hear what our customers have to say
            about us.
          </p>
        </div>
        <div className="grid grid-cols-4 w-full">
          <img src={left} alt="" />
          <div className="w-full p-4 relative border border-leandro/10 col-span-2">
            <Swiper
              slidesPerView={1}
              cssMode={true}
              loop={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
              className="custom-swiper"
            >
              {testimonial_data.map((prod) => (
                <SwiperSlide key={`card-${prod.id}`}>
                  <Card data={prod} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <img className="place-self-end" src={right} alt="" />
        </div>
      </div>
    </section>
  );
}
