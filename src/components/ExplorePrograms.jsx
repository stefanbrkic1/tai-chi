import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

function ExplorePrograms() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
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
    <section className="relative pb-[5%] container">
      <div className="flex justify-center mb-4 pt-[40px]">
        <img
          src="/assets/style-elements/star.svg"
          alt="star"
          className="opacity-[20%] animate-rotate"
        />
      </div>
      <h3 className="relative font-tsushima text-secondary text-center  text-[20px] max-[991px]:text-[26px] max-[1199px]:text-[28px] max-[1399px]:text-[38px] min-[1400px]:text-[48px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] max-[991px]:mb-[20px] max-[1399px]:mb-[30px] min-[1400px]:mb-[40px] max-[767px]:text-center">
        EXPLORE <span className="text-primary">PROGRAMS</span>
        <div
          onClick={() => sliderRef.current.slickPrev()}
          className="max-[767px]:hidden absolute group text-[18px] hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] rounded-full w-[45px] h-[45px] flex justify-center items-center leading-[0px] max-[991px]:top-[-8px] top-[-2px] left-0"
        >
          <div className="w-[20px] h-[20px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] rotate-180 bg-contain bg-center bg-no-repeat"></div>
        </div>
        <div
          onClick={() => sliderRef.current.slickNext()}
          className="max-[767px]:hidden group absolute text-[18px] hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] rounded-full w-[45px] h-[45px] flex justify-center items-center leading-[0px] max-[991px]:top-[-8px] top-[-2px] right-0"
        >
          <div className="w-[20px] h-[20px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
        </div>
      </h3>

      <Slider
        ref={sliderRef}
        className="overflow-x-hidden max-[575px]:px-[12px]"
        {...settings}
      >
        <div className="relative group transition-all duration-300 hover:clip-carousel cursor-pointer bg-grey border-[1px] border-transparent  hover:border-primary">
          <div className="h-[250px] bg-[url('/assets/img/programs-caroussel/1.webp')] bg-cover"></div>
          <div className="font-generalsans p-5">
            <h4>Secrets of powerful, Perfect & Beautiful Tai Chi</h4>
            <div className="flex justify-between items-center mt-4">
              <div>23 Lectures</div>
              <div>Beginner</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-primary h-[0px] overflow-hidden group-hover:h-[50px] text-white font-generalbold text-center flex justify-center items-center transition-all duration-300">
            <div>ENROLL NOW</div>
          </div>
        </div>

        <div className="relative group transition-all duration-300 hover:clip-carousel cursor-pointer bg-grey border-[1px] border-transparent  hover:border-primary">
          <div className="h-[250px] bg-[url('/assets/img/programs-caroussel/2.webp')] bg-cover"></div>
          <div className="font-generalsans p-5">
            <h4>Secrets of powerful, Perfect & Beautiful Tai Chi</h4>
            <div className="flex justify-between items-center mt-4">
              <div>21 Lectures</div>
              <div>Beginner</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-primary h-[0px] overflow-hidden group-hover:h-[50px] text-white font-generalbold text-center flex justify-center items-center transition-all duration-300">
            <div>ENROLL NOW</div>
          </div>
        </div>

        <div className="relative group transition-all duration-300 hover:clip-carousel cursor-pointer bg-grey border-[1px] border-transparent  hover:border-primary">
          <div className="h-[250px] bg-[url('/assets/img/programs-caroussel/3.webp')] bg-cover"></div>
          <div className="font-generalsans p-5">
            <h4>Secrets of powerful, Perfect & Beautiful Tai Chi</h4>
            <div className="flex justify-between items-center mt-4">
              <div>18 Lectures</div>
              <div>Beginner</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-primary h-[0px] overflow-hidden group-hover:h-[50px] text-white font-generalbold text-center flex justify-center items-center transition-all duration-300">
            <div>ENROLL NOW</div>
          </div>
        </div>

        <div className="relative group transition-all duration-300 hover:clip-carousel cursor-pointer bg-grey border-[1px] border-transparent  hover:border-primary">
          <div className="h-[250px] bg-[url('/assets/img/programs-caroussel/4.webp')] bg-cover"></div>
          <div className="font-generalsans p-5">
            <h4>Secrets of powerful, Perfect & Beautiful Tai Chi</h4>
            <div className="flex justify-between items-center mt-4">
              <div>16 Lectures</div>
              <div>Beginner</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-primary h-[0px] overflow-hidden group-hover:h-[50px] text-white font-generalbold text-center flex justify-center items-center transition-all duration-300">
            <div>ENROLL NOW</div>
          </div>
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

export default ExplorePrograms;
