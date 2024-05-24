import Navbar from "../components/Navbar";
import PrivateSession from "../components/PrivateSession";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useEffect } from "react";

function BlogPage() {
  const sliderRefOne = useRef(null);
  const sliderRefTwo = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
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
          BLOGS
        </h2>
        <div className="flex justify-center font-generalsans max-[991px]:text-[16px] text-[18px]">
          <div className="flex max-[991px]:gap-2 gap-3">
            <Link to={"/"} className="text-black opacity-70 hover:opacity-100">
              Home
            </Link>
            <span className="text-primary">|</span>
            <span className="text-primary">Blogs</span>
          </div>
        </div>
      </section>

      <section className="relative container">
        <div className="flex justify-center mb-4">
          <img
            src="/assets/style-elements/star.svg"
            alt="star"
            className="opacity-[20%] animate-rotate max-[1199px]:w-[30px] max-[1199px]:h-[30px] max-[1399px]:w-[40px] max-[1399px]:h-[40px] w-[52px] h-[52px]"
          />
        </div>
        <h3 className="font-tsushima text-secondary text-center max-[991px]:text-[26px] max-[1199px]:text-[28px] max-[1399px]:text-[38px] min-[1400px]:text-[48px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] max-[991px]:mb-[8px] max-[1399px]:mb-[12px] min-[1400px]:mb-[20px] max-[767px]:text-center">
          LATEST BLOGS <span className="text-primary">FOR YOU</span>
        </h3>
        <Slider ref={sliderRefOne} {...settings} className="overflow-x-hidden">
          <div className="relative group transition-all duration-300 cursor-pointer bg-white">
            <div className="relative max-[575px]:h-[325px] max-[991px]:h-[172px] max-[1199px]:h-[230px] max-[1399px]:h-[258px] h-[275px] bg-[url('/assets/img/articles/articles-2.webp')] bg-cover">
              <div className="absolute group-hover:opacity-0 transition-all duration-300 bg-[url('/assets/style-elements/mask.svg')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
              <div className="absolute group-hover:opacity-0 transition-all duration-300 bg-[url('/assets/style-elements/mask.svg')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
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
            <div className="relative max-[575px]:h-[325px] max-[991px]:h-[172px] max-[1199px]:h-[230px] max-[1399px]:h-[258px] h-[275px] bg-[url('/assets/img/articles/articles-3.webp')] bg-cover">
              <div className="absolute group-hover:opacity-0 transition-all duration-300 bg-[url('/assets/style-elements/mask.svg')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
              <div className="absolute group-hover:opacity-0 transition-all duration-300 bg-[url('/assets/style-elements/mask.svg')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
            </div>
            <div className="font-generalsans p-5 transition-all duration-300">
              <h4 className="group-hover:text-primary">
                The Art of Balance: How Tai Chi Enhances Your Physical Stability
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
            <div className="relative max-[575px]:h-[325px] max-[991px]:h-[172px] max-[1199px]:h-[230px] max-[1399px]:h-[258px] h-[275px] bg-[url('/assets/img/articles/articles-4.webp')] bg-cover">
              <div className="absolute group-hover:opacity-0 transition-all duration-300 bg-[url('/assets/style-elements/mask.svg')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
              <div className="absolute group-hover:opacity-0 transition-all duration-300 bg-[url('/assets/style-elements/mask.svg')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
            </div>
            <div className="font-generalsans p-5 transition-all duration-300">
              <h4 className="group-hover:text-primary">
                Mindfulness in Motion: The Meditative Aspects of Tai Chi
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

        <div className="min-[1200px]:hidden flex justify-center items-center gap-5 mt-8">
          <div
            onClick={() => sliderRefOne.current.slickPrev()}
            className="group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[50px] h-[50px] flex justify-center items-center leading-[0px]"
          >
            <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] rotate-180 bg-contain bg-center bg-no-repeat"></div>
          </div>
          <div
            onClick={() => sliderRefOne.current.slickNext()}
            className="group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[50px] h-[50px] flex justify-center items-center leading-[0px]"
          >
            <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
          </div>
        </div>

        <div
          onClick={() => sliderRefOne.current.slickPrev()}
          className="z-30 max-[1199px]:hidden absolute group hover:bg-primary cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] rounded-full w-[45px] h-[45px] flex justify-center items-center leading-[0px] top-[50%] left-[-20px]"
        >
          <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] rotate-180 bg-contain bg-center bg-no-repeat"></div>
        </div>
        <div
          onClick={() => sliderRefOne.current.slickNext()}
          className="z-30 max-[1199px]:hidden group absolute hover:bg-primary cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] rounded-full w-[45px] h-[45px] flex justify-center items-center leading-[0px] top-[50%] right-[-20px]"
        >
          <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
        </div>
      </section>

      <div className="relative max-[991px]:mt-[60px] max-[991px]:mb-[60px] max-[767px]:mb-[30px] max-[575px]:mb-[20px] mt-[120px] mb-[120px]">
        <section className="relative z-10 container flex flex-col max-[575px]:px-[12px]">
          <img
            src="/assets/img/newsletter-img.webp"
            alt="TAI-CHI"
            className="max-[991px]:w-full max-[1399px]:w-[70%] w-[75%]"
          />
          <div className="bg-white min-[992px]:shadow-2xl min-[992px]:absolute max-[991px]:w-full max-[1199px]:w-[40%] max-[1399px]:w-[35%] w-[33%] right-0 top-[50%] min-[992px]:translate-y-[-50%] py-[50px] px-[30px]">
            <div className="flex justify-center mb-4">
              <img
                src="/assets/style-elements/star.svg"
                alt="star"
                className="opacity-[20%] animate-rotate max-[1199px]:w-[30px] max-[1199px]:h-[30px] max-[1399px]:w-[40px] max-[1399px]:h-[40px] w-[52px] h-[52px]"
              />
            </div>
            <div className="flex justify-center">
              <h3 className="font-tsushima text-secondary max-[575px]:text-[22px] max-[767px]:text-[26px] text-[28px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] max-[991px]:mb-[8px] max-[1399px]:mb-[12px] min-[1400px]:mb-[20px] text-center max-[991px]:max-w-[500px]">
                SUBSCRIBE TO OUR NEWSLETTER
              </h3>
            </div>
            <p className="font-generalsans text-center max-[575px]:text-[14px] max-[991px]:text-[15px] mb-5">
              Get monthly articles from Gymfit and if you want to cancel you do
              it from your inbox directly
            </p>
            <input
              type="text"
              placeholder="Enter e-mail"
              className="placeholder:font-generalsans border-[1px] border-primary w-full py-[14px] px-[24px] text-[15px] mb-3"
            />
            <div className="flex justify-center">
              <button className="bg-primary text-white font-generalbold text-[15px] max-[575px]:px-[15px]  max-[575px]:py-[12px] max-[575px]:max-w-[200px] w-full px-[20px] py-[14px] clip-button hover:bg-secondary transition-all">
                SUBMIT
              </button>
            </div>
          </div>
        </section>
        <div className="max-[991px]:hidden">
          <div className="absolute bg-[url('/assets/img/news-bg.webp')] top-[-160px] right-[0px] w-full h-full"></div>
          <div className="absolute bottom-[160px] fade-opacity right-0 w-full h-[100px]"></div>
        </div>
      </div>

      <section className="relative container">
        <div className="flex justify-center mb-4">
          <img
            src="/assets/style-elements/star.svg"
            alt="star"
            className="opacity-[20%] animate-rotate max-[1199px]:w-[30px] max-[1199px]:h-[30px] max-[1399px]:w-[40px] max-[1399px]:h-[40px] w-[52px] h-[52px]"
          />
        </div>
        <h3 className="font-tsushima text-secondary text-center max-[991px]:text-[26px] max-[1199px]:text-[28px] max-[1399px]:text-[38px] min-[1400px]:text-[48px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] max-[991px]:mb-[8px] max-[1399px]:mb-[12px] min-[1400px]:mb-[20px] max-[767px]:text-center">
          LATEST BLOGS <span className="text-primary">FOR YOU</span>
        </h3>
        <Slider ref={sliderRefTwo} {...settings} className="overflow-x-hidden">
          <div className="relative group transition-all duration-300 cursor-pointer bg-white">
            <div className="relative max-[575px]:h-[325px] max-[991px]:h-[172px] max-[1199px]:h-[230px] max-[1399px]:h-[258px] h-[275px] bg-[url('/assets/img/articles/articles-5.webp')] bg-cover">
              <div className="absolute group-hover:opacity-0 transition-all duration-300 bg-[url('/assets/style-elements/mask.svg')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
              <div className="absolute group-hover:opacity-0 transition-all duration-300 bg-[url('/assets/style-elements/mask.svg')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
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
            <div className="relative max-[575px]:h-[325px] max-[991px]:h-[172px] max-[1199px]:h-[230px] max-[1399px]:h-[258px] h-[275px] bg-[url('/assets/img/articles/articles-6.webp')] bg-cover">
              <div className="absolute group-hover:opacity-0 transition-all duration-300 bg-[url('/assets/style-elements/mask.svg')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
              <div className="absolute group-hover:opacity-0 transition-all duration-300 bg-[url('/assets/style-elements/mask.svg')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
            </div>
            <div className="font-generalsans p-5 transition-all duration-300">
              <h4 className="group-hover:text-primary">
                The Art of Balance: How Tai Chi Enhances Your Physical Stability
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
            <div className="relative max-[575px]:h-[325px] max-[991px]:h-[172px] max-[1199px]:h-[230px] max-[1399px]:h-[258px] h-[275px] bg-[url('/assets/img/articles/articles-7.webp')] bg-cover">
              <div className="absolute group-hover:opacity-0 transition-all duration-300 bg-[url('/assets/style-elements/mask.svg')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
              <div className="absolute group-hover:opacity-0 transition-all duration-300 bg-[url('/assets/style-elements/mask.svg')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
            </div>
            <div className="font-generalsans p-5 transition-all duration-300">
              <h4 className="group-hover:text-primary">
                Mindfulness in Motion: The Meditative Aspects of Tai Chi
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

        <div className="min-[1200px]:hidden flex justify-center items-center gap-5 mt-8">
          <div
            onClick={() => sliderRefTwo.current.slickPrev()}
            className="group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[50px] h-[50px] flex justify-center items-center leading-[0px]"
          >
            <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] rotate-180 bg-contain bg-center bg-no-repeat"></div>
          </div>
          <div
            onClick={() => sliderRefTwo.current.slickNext()}
            className="group text-[18px] rounded-full text-secondary hover:bg-primary hover:text-white cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] w-[50px] h-[50px] flex justify-center items-center leading-[0px]"
          >
            <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
          </div>
        </div>

        <div
          onClick={() => sliderRefTwo.current.slickPrev()}
          className="z-30 max-[1199px]:hidden absolute group hover:bg-primary cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] rounded-full w-[45px] h-[45px] flex justify-center items-center leading-[0px] top-[50%] left-[-20px]"
        >
          <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] rotate-180 bg-contain bg-center bg-no-repeat"></div>
        </div>
        <div
          onClick={() => sliderRefTwo.current.slickNext()}
          className="z-30 max-[1199px]:hidden group absolute hover:bg-primary cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] rounded-full w-[45px] h-[45px] flex justify-center items-center leading-[0px] top-[50%] right-[-20px]"
        >
          <div className="w-[15px] h-[15px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
        </div>
      </section>

      <PrivateSession />
      <Footer />
    </>
  );
}

export default BlogPage;
