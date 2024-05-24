import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useEffect } from "react";
import PrivateSession from "../components/PrivateSession";

function ProgramsPage() {
  const beginnerSliderRef = useRef(null);
  const amateurSliderRef = useRef(null);
  const proSliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="absolute w-full overflow-hidden pb-[5%]">
        <div className="relative max-[1399px]:h-[310px] h-[450px]">
          <div className="absolute w-full max-[991px]:top-[-35px] max-[1399px]:top-[-25px] top-[-55px] max-[991px]:left-[0px] max-[1399px]:left-[70px] left-[200px]">
            <div className="max-[1399px]:h-[310px] h-[450px] bg-[url('/assets/style-elements/breadcrumbs.webp')] bg-bottom bg-cover bg-no-repeat"></div>
          </div>
          <div className="absolute w-full h-[70%] fade-opacity bottom-0 left-0"></div>
        </div>

        <img
          src="/assets/style-elements/star-2.svg"
          alt="star"
          className="absolute z-10 max-[991px]:left-[-35px] left-[-65px] max-[991px]:bottom-[40%] max-[1199px]:bottom-[30%] max-[1399px]:bottom-[20%] bottom-[34%] animate-rotate max-[767px]:w-[70px] min-[768px]:w-[100px] min-[992px]:w-[130px] min-[1200px]:w-[150px] min-[1400px]:w-[180px]"
        />

        <img
          src="/assets/style-elements/star-2.svg"
          alt="star"
          className="absolute z-10 max-[767px]:right-[-20px] right-[-45px] top-[80px] animate-rotate max-[767px]:w-[45px] max-[991px]:w-[80px] max-[1199px]:w-[80px] min-[1200px]:w-[110px]"
        />
      </div>

      <section className="relative max-[575px]:pt-[4%] max-[991px]:pt-[2%] pt-[5%] max-[575px]:pb-[13%] max-[991px]:pb-[10%] pb-[8%]">
        <div className="flex justify-center mb-4 pt-[40px]">
          <img
            src="/assets/style-elements/star.svg"
            alt="star"
            className="opacity-[20%] animate-rotate max-[1199px]:w-[30px] max-[1199px]:h-[30px] max-[1399px]:w-[40px] max-[1399px]:h-[40px] w-[52px] h-[52px]"
          />
        </div>
        <h2 className="font-tsushima text-primary text-center text-[28px] min-[768px]:text-[28px] min-[992px]:text-[36px] min-[1200px]:text-[52px] min-[1400px]:text-[62px]">
          PROGRAMS
        </h2>
        <div className="flex justify-center font-generalsans max-[991px]:text-[16px] text-[18px]">
          <div className="flex max-[991px]:gap-2 gap-3">
            <Link to={"/"} className="text-black opacity-70 hover:opacity-100">
              Home
            </Link>
            <span className="text-primary">|</span>
            <span className="text-primary">Programs</span>
          </div>
        </div>
      </section>

      <section className="relative container">
        <div className="flex justify-between items-center pb-5 max-[767px]:justify-center">
          <div className="font-tsushima text-secondary max-[575px]:text-[20px] max-[991px]:text-[26px] max-[1199px]:text-[28px] text-[32px]">
            BEGINNER
          </div>
          <div className="flex justify-center items-center gap-5">
            <div
              onClick={() => beginnerSliderRef.current.slickPrev()}
              className="max-[767px]:hidden group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[45px] h-[45px] flex justify-center items-center leading-[0px]"
            >
              <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] rotate-180 bg-contain bg-center bg-no-repeat"></div>
            </div>
            <div
              onClick={() => beginnerSliderRef.current.slickNext()}
              className="max-[767px]:hidden group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[45px] h-[45px] flex justify-center items-center leading-[0px]"
            >
              <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
            </div>
          </div>
        </div>

        <Slider
          ref={beginnerSliderRef}
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
            onClick={() => beginnerSliderRef.current.slickPrev()}
            className="min-[768px]:hidden group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[45px] h-[45px] flex justify-center items-center leading-[0px]"
          >
            <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] rotate-180 bg-contain bg-center bg-no-repeat"></div>
          </div>
          <div
            onClick={() => beginnerSliderRef.current.slickNext()}
            className="min-[768px]:hidden group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[45px] h-[45px] flex justify-center items-center leading-[0px]"
          >
            <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
          </div>
        </div>
      </section>

      <section className="relative container pt-[70px]">
        <div className="flex justify-between items-center pb-5 max-[767px]:justify-center">
          <div className="font-tsushima text-secondary max-[575px]:text-[20px] max-[991px]:text-[26px] max-[1199px]:text-[28px] text-[32px]">
            AMATEUR
          </div>
          <div className="flex justify-center items-center gap-5">
            <div
              onClick={() => amateurSliderRef.current.slickPrev()}
              className="max-[767px]:hidden group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[45px] h-[45px] flex justify-center items-center leading-[0px]"
            >
              <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] rotate-180 bg-contain bg-center bg-no-repeat"></div>
            </div>
            <div
              onClick={() => amateurSliderRef.current.slickNext()}
              className="max-[767px]:hidden group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[45px] h-[45px] flex justify-center items-center leading-[0px]"
            >
              <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
            </div>
          </div>
        </div>

        <Slider
          ref={amateurSliderRef}
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
            onClick={() => amateurSliderRef.current.slickPrev()}
            className="min-[768px]:hidden group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[45px] h-[45px] flex justify-center items-center leading-[0px]"
          >
            <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] rotate-180 bg-contain bg-center bg-no-repeat"></div>
          </div>
          <div
            onClick={() => amateurSliderRef.current.slickNext()}
            className="min-[768px]:hidden group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[45px] h-[45px] flex justify-center items-center leading-[0px]"
          >
            <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
          </div>
        </div>
      </section>

      <section className="relative container pt-[70px]">
        <div className="flex justify-between items-center pb-5 max-[767px]:justify-center">
          <div className="font-tsushima text-secondary max-[575px]:text-[20px] max-[991px]:text-[26px] max-[1199px]:text-[28px] text-[32px]">
            PROFESSIONAL
          </div>
          <div className="flex justify-center items-center gap-5">
            <div
              onClick={() => proSliderRef.current.slickPrev()}
              className="max-[767px]:hidden group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[45px] h-[45px] flex justify-center items-center leading-[0px]"
            >
              <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] rotate-180 bg-contain bg-center bg-no-repeat"></div>
            </div>
            <div
              onClick={() => proSliderRef.current.slickNext()}
              className="max-[767px]:hidden group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[45px] h-[45px] flex justify-center items-center leading-[0px]"
            >
              <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
            </div>
          </div>
        </div>

        <Slider
          ref={proSliderRef}
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
            onClick={() => proSliderRef.current.slickPrev()}
            className="min-[768px]:hidden group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[45px] h-[45px] flex justify-center items-center leading-[0px]"
          >
            <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] rotate-180 bg-contain bg-center bg-no-repeat"></div>
          </div>
          <div
            onClick={() => proSliderRef.current.slickNext()}
            className="min-[768px]:hidden group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[45px] h-[45px] flex justify-center items-center leading-[0px]"
          >
            <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
          </div>
        </div>
      </section>

      <PrivateSession />
      <Footer />
    </>
  );
}

export default ProgramsPage;
