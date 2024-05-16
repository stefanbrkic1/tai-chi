import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";

function Testimonials() {
  const sliderRef = useRef(null);

  const [activeClient, setActiveClient] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index) => {
      setActiveClient(index);
    },
  };

  return (
    <div className="bg-[url('/assets/img/testimonial.webp')] bg-contain mb-[5%]">
      <section className="relative container max-[575px]:px-[12px]">
        <div className="flex justify-center mb-4 pt-[40px]">
          <img
            src="/assets/style-elements/star.svg"
            alt="star"
            className="opacity-[20%] animate-rotate"
          />
        </div>
        <h3 className="relative font-tsushima text-secondary text-center  text-[20px] max-[991px]:text-[26px] max-[1199px]:text-[28px] max-[1399px]:text-[38px] min-[1400px]:text-[48px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] max-[991px]:mb-[20px] max-[1399px]:mb-[30px] min-[1400px]:mb-[40px] max-[767px]:text-center">
          OUR HAPPY <span className="text-primary">CLIENTS</span>
        </h3>

        <div
          onClick={() => sliderRef.current.slickPrev()}
          className="max-[767px]:top-[87%] z-30 absolute group hover:bg-primary cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] rounded-full w-[45px] h-[45px] flex justify-center items-center leading-[0px] top-[50%] max-[575px]:left-[12px] left-0"
        >
          <div className="w-[20px] h-[20px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] rotate-180 bg-contain bg-center bg-no-repeat"></div>
        </div>
        <div
          onClick={() => sliderRef.current.slickNext()}
          className="max-[767px]:top-[87%] z-30 group absolute hover:bg-primary cursor-pointer transition-all duration-[200ms] bg-[#D9D9D9] rounded-full w-[45px] h-[45px] flex justify-center items-center leading-[0px] top-[50%] max-[575px]:right-[12px] right-0"
        >
          <div className="w-[20px] h-[20px] bg-[url('/assets/style-elements/arrow-right-solid-black.svg')] group-hover:bg-[url('/assets/style-elements/arrow-right-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
        </div>

        <Slider
          ref={sliderRef}
          {...settings}
          className="overflow-x-hidden font-generalsans font-bold text-center"
        >
          <div>
            <div className="flex flex-col items-center">
              <p className="text-center max-[991px]:max-w-[580px] max-[1199px]:max-w-[780px] max-w-[872px] max-[991px]:text-[16px] text-[18px] text-secondary">
                Jack Kranski - Vulputate et elementum id tempor. In facilisis
                consequat feugiat sapien maecenas mi tempor. Gravida odio amet
                in ornare volutpat arcu. Enim tincidunt cursus at elit id.
                Aliquam nisi cras massa purus ultricies. Lectus lacus sit
                ullamcorper faucibus ultrices volutpat dignissim dolor turpis.
                Vehicula adipiscing sagittis pellentesque amet. Dui consequat
                fermentum habitasse libero nibh. Nibh arcu magna egestas urna
                elementum consequat bibendum nulla. Et ut sit consectetur morbi
                neque a metus ornare.
              </p>

              <div className="min-[768px]:hidden mt-[4%] max-w-[220px] flex clip-testimonial items-center bg-primary max-[991px]:px-[12px] max-[991px]:py-[12px] max-[1199px]:px-[20px] max-[1199px]:py-[20px] py-[35px] px-[40px] text-white">
                <img
                  src="/assets/img/testimonials/client-1.webp"
                  alt="client"
                  className="max-[991px]:w-[50px] max-[991px]:h-[50px] max-[991px]:mr-[8px] max-[1199px]:w-[60px] max-[1199px]:h-[60px] max-[1199px]:mr-[12px] w-[80px] h-[80px] mr-[12px]"
                />
                <div>
                  <div>Jack Kranski</div>
                  <img
                    src="/assets/style-elements/star-icons.svg"
                    alt="rating-stars"
                    className="rating-stars-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center">
              <p className="text-center max-[991px]:max-w-[580px] max-[1199px]:max-w-[780px] max-w-[872px] max-[991px]:text-[16px] text-[18px] text-secondary">
                Jakob Toretto - Vulputate et elementum id tempor. In facilisis
                consequat feugiat sapien maecenas mi tempor. Gravida odio amet
                in ornare volutpat arcu. Enim tincidunt cursus at elit id.
                Aliquam nisi cras massa purus ultricies. Lectus lacus sit
                ullamcorper faucibus ultrices volutpat dignissim dolor turpis.
                Vehicula adipiscing sagittis pellentesque amet. Dui consequat
                fermentum habitasse libero nibh. Nibh arcu magna egestas urna
                elementum consequat bibendum nulla. Et ut sit consectetur morbi
                neque a metus ornare.
              </p>

              <div className="min-[768px]:hidden mt-[4%] max-w-[220px] flex clip-testimonial items-center bg-primary max-[991px]:px-[12px] max-[991px]:py-[12px] max-[1199px]:px-[20px] max-[1199px]:py-[20px] py-[35px] px-[40px] text-white">
                <img
                  src="/assets/img/testimonials/client-2.webp"
                  alt="client"
                  className="max-[991px]:w-[50px] max-[991px]:h-[50px] max-[991px]:mr-[8px] max-[1199px]:w-[60px] max-[1199px]:h-[60px] max-[1199px]:mr-[12px] w-[80px] h-[80px] mr-[12px]"
                />
                <div>
                  <div>Jakob Torreto</div>
                  <img
                    src="/assets/style-elements/star-icons.svg"
                    alt="rating-stars"
                    className="rating-stars-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center">
              <p className="text-center max-[991px]:max-w-[580px] max-[1199px]:max-w-[780px] max-w-[872px] max-[991px]:text-[16px] text-[18px] text-secondary">
                Simon Bushido - Vulputate et elementum id tempor. In facilisis
                consequat feugiat sapien maecenas mi tempor. Gravida odio amet
                in ornare volutpat arcu. Enim tincidunt cursus at elit id.
                Aliquam nisi cras massa purus ultricies. Lectus lacus sit
                ullamcorper faucibus ultrices volutpat dignissim dolor turpis.
                Vehicula adipiscing sagittis pellentesque amet. Dui consequat
                fermentum habitasse libero nibh. Nibh arcu magna egestas urna
                elementum consequat bibendum nulla. Et ut sit consectetur morbi
                neque a metus ornare.
              </p>

              <div className="min-[768px]:hidden mt-[4%] max-w-[220px] flex clip-testimonial items-center bg-primary max-[991px]:px-[12px] max-[991px]:py-[12px] max-[1199px]:px-[20px] max-[1199px]:py-[20px] py-[35px] px-[40px] text-white">
                <img
                  src="/assets/img/testimonials/client-3.webp"
                  alt="client"
                  className="max-[991px]:w-[50px] max-[991px]:h-[50px] max-[991px]:mr-[8px] max-[1199px]:w-[60px] max-[1199px]:h-[60px] max-[1199px]:mr-[12px] w-[80px] h-[80px] mr-[12px]"
                />
                <div>
                  <div>Simon Bushido</div>
                  <img
                    src="/assets/style-elements/star-icons.svg"
                    alt="rating-stars"
                    className="rating-stars-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>

        <div className="max-[767px]:hidden mt-[5%] flex justify-between gap-7 font-generalsans max-[991px]:text-[16px] max-[1199px]:text-[18px] text-[24px]">
          <div
            className={`${
              activeClient === 0 ? "bg-primary text-white" : "bg-grey"
            } flex flex-1 clip-testimonial transition-all items-center max-[991px]:px-[12px] max-[991px]:py-[12px] max-[1199px]:px-[20px] max-[1199px]:py-[20px] py-[35px] px-[40px]`}
          >
            <img
              src="/assets/img/testimonials/client-1.webp"
              alt="client"
              className="max-[991px]:w-[50px] max-[991px]:h-[50px] max-[991px]:mr-[8px] max-[1199px]:w-[60px] max-[1199px]:h-[60px] max-[1199px]:mr-[12px] w-[80px] h-[80px] mr-[12px]"
            />
            <div>
              <div>Jack Kranski</div>
              <img
                src="/assets/style-elements/star-icons.svg"
                alt="rating-stars"
                className={`${activeClient === 0 && "rating-stars-white"}`}
              />
            </div>
          </div>

          <div
            className={`${
              activeClient === 1 ? "bg-primary text-white" : "bg-grey"
            } flex flex-1 clip-testimonial transition-all items-center max-[991px]:px-[12px] max-[991px]:py-[12px] max-[1199px]:px-[20px] max-[1199px]:py-[20px] py-[35px] px-[40px]`}
          >
            <img
              src="/assets/img/testimonials/client-2.webp"
              alt="client"
              className="max-[991px]:w-[50px] max-[991px]:h-[50px] max-[991px]:mr-[8px] max-[1199px]:w-[60px] max-[1199px]:h-[60px] max-[1199px]:mr-[12px] w-[80px] h-[80px] mr-[12px]"
            />
            <div>
              <div>Jakob Torreto</div>
              <img
                src="/assets/style-elements/star-icons.svg"
                alt="rating-stars"
                className={`${activeClient === 1 && "rating-stars-white"}`}
              />
            </div>
          </div>

          <div
            className={`${
              activeClient === 2 ? "bg-primary text-white" : "bg-grey"
            } flex flex-1 clip-testimonial transition-all items-center max-[991px]:px-[12px] max-[991px]:py-[12px] max-[1199px]:px-[20px] max-[1199px]:py-[20px] py-[35px] px-[40px]`}
          >
            <img
              src="/assets/img/testimonials/client-3.webp"
              alt="client"
              className="max-[991px]:w-[50px] max-[991px]:h-[50px] max-[991px]:mr-[8px] max-[1199px]:w-[60px] max-[1199px]:h-[60px] max-[1199px]:mr-[12px] w-[80px] h-[80px] mr-[12px]"
            />
            <div>
              <div>Simon Bushido</div>
              <img
                src="/assets/style-elements/star-icons.svg"
                alt="rating-stars"
                className={`${activeClient === 2 && "rating-stars-white"}`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
