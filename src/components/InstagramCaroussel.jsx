import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

function InstagramCaroussel() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToScroll: 6,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="mb-[60px] max-[820px]:px-[12px]">
      <div className="flex justify-center mb-4 pt-[40px]">
        <img
          src="/assets/style-elements/star.svg"
          alt="star"
          className="opacity-[20%] animate-rotate"
        />
      </div>
      <h3 className="relative font-generalsans font-bold text-primary text-center text-[20px] max-[991px]:text-[26px] max-[1199px]:text-[28px] max-[1399px]:text-[38px] min-[1400px]:text-[48px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] mb-[6px] max-[767px]:text-center">
        @<span className="font-tsushima text-secondary">GYMFIT</span>
      </h3>
      <h5 className="text-[#ABABAB] text-center font-generalsans font-bold mb-6">
        Follow us on <span className="text-primary">Instagram</span>
      </h5>

      <Slider ref={sliderRef} {...settings} className="overflow-x-hidden">
        <div className="relative cursor-pointer group max-[767px]:h-[210px] max-[991px]:h-[250px] max-[1199px]:h-[300px] max-[1399px]:h-[290px] max-[1899px]:h-[230px] min-[1900px]:h-[300px]  bg-[url('/assets/img/instagram/post-1.webp')] bg-cover bg-no-repeat">
          <div className="group-hover:opacity-[85%] transition-all duration-300 opacity-0 absolute w-full h-full bg-primary flex justify-center items-center">
            <div
              style={{
                backgroundImage: "url('/assets/style-elements/instagram.svg')",
              }}
              className="w-[30px] h-[30px] bg-[url('/assets/style-elements/instagram.svg')] bg-contain bg-no-repeat bg-center"
            ></div>
          </div>
        </div>
        <div className="relative cursor-pointer group max-[767px]:h-[210px] max-[991px]:h-[250px] max-[1199px]:h-[300px] max-[1399px]:h-[290px] max-[1899px]:h-[230px] min-[1900px]:h-[300px]  bg-[url('/assets/img/instagram/post-2.webp')] bg-cover bg-no-repeat">
          <div className="group-hover:opacity-[85%] transition-all duration-300 opacity-0 absolute w-full h-full bg-primary flex justify-center items-center">
            <div
              style={{
                backgroundImage: "url('/assets/style-elements/instagram.svg')",
              }}
              className="w-[30px] h-[30px] bg-[url('/assets/style-elements/instagram.svg')] bg-contain bg-no-repeat bg-center"
            ></div>
          </div>
        </div>
        <div className="relative cursor-pointer group max-[767px]:h-[210px] max-[991px]:h-[250px] max-[1199px]:h-[300px] max-[1399px]:h-[290px] max-[1899px]:h-[230px] min-[1900px]:h-[300px]  bg-[url('/assets/img/instagram/post-3.webp')] bg-cover bg-no-repeat">
          <div className="group-hover:opacity-[85%] transition-all duration-300 opacity-0 absolute w-full h-full bg-primary flex justify-center items-center">
            <div
              style={{
                backgroundImage: "url('/assets/style-elements/instagram.svg')",
              }}
              className="w-[30px] h-[30px] bg-[url('/assets/style-elements/instagram.svg')] bg-contain bg-no-repeat bg-center"
            ></div>
          </div>
        </div>
        <div className="relative cursor-pointer group max-[767px]:h-[210px] max-[991px]:h-[250px] max-[1199px]:h-[300px] max-[1399px]:h-[290px] max-[1899px]:h-[230px] min-[1900px]:h-[300px]  bg-[url('/assets/img/instagram/post-4.webp')] bg-cover bg-no-repeat">
          <div className="group-hover:opacity-[85%] transition-all duration-300 opacity-0 absolute w-full h-full bg-primary flex justify-center items-center">
            <div
              style={{
                backgroundImage: "url('/assets/style-elements/instagram.svg')",
              }}
              className="w-[30px] h-[30px] bg-[url('/assets/style-elements/instagram.svg')] bg-contain bg-no-repeat bg-center"
            ></div>
          </div>
        </div>
        <div className="relative cursor-pointer group max-[767px]:h-[210px] max-[991px]:h-[250px] max-[1199px]:h-[300px] max-[1399px]:h-[290px] max-[1899px]:h-[230px] min-[1900px]:h-[300px]  bg-[url('/assets/img/instagram/post-5.webp')] bg-cover bg-no-repeat">
          <div className="group-hover:opacity-[85%] transition-all duration-300 opacity-0 absolute w-full h-full bg-primary flex justify-center items-center">
            <div
              style={{
                backgroundImage: "url('/assets/style-elements/instagram.svg')",
              }}
              className="w-[30px] h-[30px] bg-[url('/assets/style-elements/instagram.svg')] bg-contain bg-no-repeat bg-center"
            ></div>
          </div>
        </div>
        <div className="relative cursor-pointer group max-[767px]:h-[210px] max-[991px]:h-[250px] max-[1199px]:h-[300px] max-[1399px]:h-[290px] max-[1899px]:h-[230px] min-[1900px]:h-[300px]  bg-[url('/assets/img/instagram/post-6.webp')] bg-cover bg-no-repeat">
          <div className="group-hover:opacity-[85%] transition-all duration-300 opacity-0 absolute w-full h-full bg-primary flex justify-center items-center">
            <div
              style={{
                backgroundImage: "url('/assets/style-elements/instagram.svg')",
              }}
              className="w-[30px] h-[30px] bg-[url('/assets/style-elements/instagram.svg')] bg-contain bg-no-repeat bg-center"
            ></div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default InstagramCaroussel;
