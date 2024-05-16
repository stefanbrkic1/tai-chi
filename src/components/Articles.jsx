import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

function Articles() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="container flex max-[575px]:px-[12px] max-[767px]:flex-col pb-[5%] pt-[7%]">
      <div>
        <div className="min-[768px]:hidden">
          <div className="flex justify-center mb-4 pt-[40px]">
            <img
              src="/assets/style-elements/star.svg"
              alt="star"
              className="opacity-[20%] animate-rotate"
            />
          </div>
          <h3 className="relative font-tsushima text-secondary text-center  text-[20px] max-[991px]:text-[26px] max-[1199px]:text-[28px] max-[1399px]:text-[38px] min-[1400px]:text-[48px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] max-[991px]:mb-[20px] max-[1399px]:mb-[30px] min-[1400px]:mb-[40px] max-[767px]:text-center">
            READ LATEST <span className="text-primary">ARTICLES</span>
          </h3>
        </div>

        <div className="max-[767px]:hidden max-[991px]:mr-[40px] max-[1199px]:mr-[90px] max-[1399px]:mr-[110px]  mr-[150px]">
          <div className="mb-4">
            <img
              src="/assets/style-elements/star.svg"
              alt="star"
              className="opacity-[20%] animate-rotate"
            />
          </div>
          <h3 className="relative font-tsushima text-secondary text-[20px] max-[991px]:text-[26px] max-[1199px]:text-[28px] max-[1399px]:text-[38px] min-[1400px]:text-[48px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] max-[991px]:mb-[10px] max-[1399px]:mb-[20px] min-[1400px]:mb-[30px]">
            READ <div>LATEST</div> <div className="text-primary">ARTICLES</div>
          </h3>

          <div className="flex items-center gap-5">
            <div
              onClick={() => sliderRef.current.slickPrev()}
              className="group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[40px] h-[40px] flex justify-center items-center leading-[0px]"
            >
              <div className="w-[20px] h-[20px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] rotate-180 bg-contain bg-center bg-no-repeat"></div>
            </div>
            <div
              onClick={() => sliderRef.current.slickNext()}
              className="group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[40px] h-[40px] flex justify-center items-center leading-[0px]"
            >
              <div className="w-[20px] h-[20px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
            </div>
          </div>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings} className="overflow-x-hidden">
        <div className="relative group transition-all duration-300 cursor-pointer bg-white">
          <div className="relative max-[575px]:h-[325px] max-[991px]:h-[172px] max-[1199px]:h-[230px] max-[1399px]:h-[258px] h-[275px] bg-[url('/assets/img/articles/articles-1.webp')] bg-cover">
            <div className="absolute max-[575px]:hidden group-hover:opacity-0 transition-all duration-300 bg-[url('/assets/style-elements/mask.svg')] bg-contain articles-mask"></div>
          </div>
          <div className="font-generalsans p-5 transition-all duration-300">
            <h4 className="group-hover:text-primary">
              Exploring the Foundations of Tai Chi: A Journey to Inner Harmony
            </h4>
            <div className="flex justify-between items-center mt-4">
              <div className="group-hover:text-secondary text-primary">
                Read Now
              </div>
              <div className="text-[#AEAEAE]">June 14th, 2023</div>
            </div>
          </div>

          <div className="absolute max-[575px]:hidden top-0 right-[-10px] h-full w-[1px] bg-[#2d2d2d26]"></div>
        </div>

        <div className="relative group transition-all duration-300 cursor-pointer bg-white">
          <div className="relative max-[575px]:h-[325px] max-[991px]:h-[172px] max-[1199px]:h-[230px] max-[1399px]:h-[258px] h-[275px] bg-[url('/assets/img/articles/articles-2.webp')] bg-cover">
            <div className="absolute  max-[575px]:hidden group-hover:opacity-0 transition-all duration-300 bg-[url('/assets/style-elements/mask.svg')] bg-contain articles-mask"></div>
          </div>
          <div className="font-generalsans p-5 transition-all duration-300">
            <h4 className="group-hover:text-primary">
              Exploring the Foundations of Tai Chi: A Journey to Inner Harmony
            </h4>
            <div className="flex justify-between items-center mt-4">
              <div className="group-hover:text-secondary text-primary">
                Read Now
              </div>
              <div className="text-[#AEAEAE]">June 14th, 2023</div>
            </div>
          </div>
          <div className="absolute max-[575px]:hidden top-0 right-[-10px] h-full w-[1px] bg-[#2d2d2d26]"></div>
        </div>
      </Slider>
      <div className="flex justify-center items-center gap-5 mt-8">
        <div
          onClick={() => sliderRef.current.slickPrev()}
          className="min-[768px]:hidden group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[50px] h-[50px] flex justify-center items-center leading-[0px]"
        >
          <div className="w-[20px] h-[20px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] rotate-180 bg-contain bg-center bg-no-repeat"></div>
        </div>
        <div
          onClick={() => sliderRef.current.slickNext()}
          className="min-[768px]:hidden group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[50px] h-[50px] flex justify-center items-center leading-[0px]"
        >
          <div className="w-[20px] h-[20px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
