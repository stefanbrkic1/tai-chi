import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import blogsData from "../data/blogs";

function Blog() {
  const { blogId } = useParams();
  const sliderRef = useRef(null);

  const [displayingBlog, setDisplayingBlog] = useState({});

  useEffect(() => {
    setDisplayingBlog(blogsData.find((blog) => blog.id === Number(blogId)));
  }, [blogId]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
          BLOGS <span className="text-secondary">DETAILS</span>
        </h2>
        <div className="flex justify-center font-generalsans max-[991px]:text-[16px] text-[18px]">
          <div className="flex max-[991px]:gap-2 gap-3">
            <Link to={"/"} className="text-black opacity-70 hover:opacity-100">
              Home
            </Link>
            <span className="text-primary">|</span>
            <Link
              to={"/blog"}
              className="text-black opacity-70 hover:opacity-100"
            >
              Blog
            </Link>
            <span className="text-primary max-[575px]:hidden">|</span>
            <span className="text-primary max-[575px]:hidden">
              {displayingBlog.title}
            </span>
          </div>
        </div>
      </section>

      <section className="relative container max-[575px]:px-[12px] pb-[50px]">
        <div className="relative">
          <img src={displayingBlog.img} alt="" className="w-full" />

          <div className="absolute w-[100%] h-[100%] bg-[url('/assets/style-elements/blog-img-frame.webp')] bg-cover top-0"></div>
        </div>
        <h2 className="font-generalbold text-secondary max-[575px]:text-[22px] max-[767px]:mb-[15px] max-[1199px]:mb-[20px] mb-[24px] max-[767px]:text-[26px] max-[991px]:text-[32px] max-[1199px]:text-[36px] max-[1399px]:text-[42px] text-[48px] mt-[50px]">
          {displayingBlog.title}
        </h2>
        <div className="max-[767px]:text-[15px] font-generalsans">
          <p>
            Nunc laoreet consequat turpis massa mauris amet gravida porttitor
            nisi. Mus vulputate laoreet et nec arcu mi. Faucibus aliquam purus
            non cum at. Facilisis blandit dignissim lectus vitae sit. Tortor
            euismod justo arcu id volutpat nec pellentesque semper sagittis.
            Consequat quam rhoncus non dignissim habitasse non pellentesque
            adipiscing sem. Massa sit elit donec vel purus odio morbi
            ullamcorper. Urna turpis sed etiam proin senectus. Ut porttitor et
            mi fringilla proin condimentum auctor hac vel. Id dui sed volutpat
            eget turpis eleifend. Phasellus vel ac pellentesque amet quis congue
            diam enim. Adipiscing dignissim dolor cursus sit maecenas aliquam
            non ullamcorper.
          </p>
          <p className="mt-6">
            Scelerisque ipsum ultricies viverra mauris. Nibh in orci pulvinar
            morbi nunc lacus nunc. Vel faucibus vel turpis in vitae nisi magnis.
            Quam mauris integer mi integer fermentum leo. Dictumst vestibulum
            justo tortor integer ornare posuere risus. Enim massa aliquet enim
            nullam vitae dictum tristique. A risus mauris nunc erat elementum ac
            aliquet sed molestie. Amet sed mauris donec eu. Viverra neque vel
            lorem id. Consequat dictumst massa cursus ornare neque pretium id.
            Semper a blandit tristique tellus nec quis purus orci enim.
            Ultricies blandit urna magna in. Duis eu vestibulum sapien congue.
            Fusce amet semper at et. Dolor phasellus in lobortis congue.
          </p>
        </div>

        <div className="flex max-[991px]:flex-col gap-7 mt-7">
          <div className="flex-1 relative">
            <div className="absolute w-[100%] h-[100%] bg-[url('/assets/style-elements/mask.svg')] bg-cover top-0"></div>
            <div className="absolute w-[100%] h-[100%] bg-[url('/assets/style-elements/mask.svg')] bg-cover bottom-0 rotate-180"></div>

            <img src="/assets/img/blog-dtls-one.webp" alt="" />
          </div>
          <div className="flex-1">
            <h3 className="font-generalbold mt-3 mb-[10px] text-secondary max-[375px]:text-[18px] max-[575px]:text-[20px] max-[991px]:text-[22px] max-[1199px]:text-[26px] max-[1399px]:text-[28px] text-[32px]">
              Est dignissim diam orci netus imperdiet non dui amet varius.
              Tellus sapien vitae.
            </h3>
            <p className="max-[767px]:text-[15px] font-generalsans">
              Nunc laoreet consequat turpis massa mauris amet gravida porttitor
              nisi. Mus vulputate laoreet et nec arcu mi. Faucibus aliquam purus
              non cum at.
            </p>
            <div className="font-generalsans max-[575px]:text-[14px] max-[767px]:text-[15px] mt-6 flex flex-col gap-6">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-[26px] h-[26px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                <div>
                  Adipiscing odio in ac integer habitant tristique aliquam.
                  Arcu.
                </div>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className="w-[26px] h-[26px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                <div>
                  Tristique bibendum elit libero sollicitudin eget elementum.
                </div>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className="w-[26px] h-[26px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                <div>
                  Rutrum pellentesque a quis magna nulla. Morbi nisl aliquet.
                </div>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className="w-[26px] h-[26px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                <div>
                  Orci pulvinar cursus libero urna nullam eget integer quis.
                </div>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className="w-[26px] h-[26px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                <div>
                  Pulvinar eu accumsan etiam fames donec aliquet pulvinar
                  aenean.
                </div>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className="w-[26px] h-[26px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                <div>
                  Morbi fringilla id donec orci. Risus amet id habitant
                  pellentesque.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex max-[991px]:flex-col gap-7 mt-7">
          <div className="flex-1">
            <h3 className="font-generalbold mt-7 mb-[10px] text-secondary max-[375px]:text-[18px] max-[575px]:text-[20px] max-[991px]:text-[22px] max-[1199px]:text-[26px] max-[1399px]:text-[28px] text-[32px]">
              Commodo bibendum facilisis non venenatis. Placerat neque libero
              quis.
            </h3>
            <p className="max-[767px]:text-[15px] font-generalsans">
              Facilisis accumsan orci a faucibus lectus porttitor. Blandit
              tristique sit hendrerit sollicitudin nulla ut eleifend arcu eget.
              Augue id amet feugiat nulla enim a velit sed. Sed semper mauris
              vel elementum nisi blandit tellus. Ut turpis amet et in vulputate
              sed commodo tempus eget. Massa tristique nunc vulputate porta
              pellentesque ac.
            </p>
            <p className="max-[767px]:text-[15px] font-generalsans mt-6">
              Sed viverra nisl vulputate laoreet sit facilisis eget natoque
              varius. Tincidunt turpis vel et interdum mattis enim eget sem
              tellus. Aliquet leo augue scelerisque euismod id gravida
              vestibulum morbi. Dignissim consectetur fermentum phasellus
              pellentesque venenatis duis malesuada ultricies. Maecenas
              tristique aliquet neque pulvinar commodo nunc viverra amet
              egestas. In turpis mauris orci ullamcorper duis augue. Vel in
              lectus enim bibendum dolor justo. Odio hendrerit vitae consectetur
              sed. Viverra feugiat suspendisse id vitae.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="absolute w-[100%] h-[100%] bg-[url('/assets/style-elements/mask.svg')] bg-cover top-0"></div>
            <div className="absolute w-[100%] h-[100%] bg-[url('/assets/style-elements/mask.svg')] bg-cover bottom-0 rotate-180"></div>
            <img src="/assets/img/blog-dtls-two.webp" alt="" />
          </div>
        </div>

        <p className="max-[767px]:text-[15px] font-generalsans max-[991px]:mt-[30px] mt-[40px]">
          Nunc laoreet consequat turpis massa mauris amet gravida porttitor
          nisi. Mus vulputate laoreet et nec arcu mi. Faucibus aliquam purus non
          cum at. Facilisis blandit dignissim lectus vitae sit. Tortor euismod
          justo arcu id volutpat nec pellentesque semper sagittis. Consequat
          quam rhoncus non dignissim habitasse non pellentesque adipiscing sem.
        </p>

        <div className="relative max-[575px]:px-[12px] container max-[767px]:py-[20px] max-[1199px]:py-[20px] py-[30px]">
          <section className="relative bg-primary max-[991px]:py-[35px] py-[60px] px-[32px] text-white flex flex-col items-center ">
            <h1 className="font-generalsans font-bold max-[575px]:text-[16px] max-[767px]:text-[18px] max-[767px]:mb-[15px] max-[991px]:text-[20px] max-[991px]:mb-[20px] max-[1199px]:text-[22px] max-[1399px]:text-[26px] max-[1399px]:mb-[30px] mb-[35px] text-[30px] text-center  max-[575px]:px-[0px] max-[767px]:px-[30px] max-[991px]:px-[65px] max-[1199px]:px-[90px] px-[60px]">
              Tai Chi is the dance of mind and body in perfect harmony, a
              graceful flow of energy guided by the wisdom of the soul.
            </h1>

            <div className="italic max-[575px]:text-[15px] max-[767px]:text-[16px] max-[991px]:text-[18px] text-[20px]">
              -Confucius
            </div>
            <div className="absolute h-[33px] w-full bg-[url('/assets/style-elements/cutted-border-large.webp')] bg-contain max-[px]:bottom-[-25px] max-[443px]:bottom-[-25px] max-[767px]:bottom-[-22px] max-[991px]:bottom-[-19px] max-[1199px]:bottom-[-12px] max-[1399px]:bottom-[-6px] bottom-[-2px]"></div>
            <div className="absolute h-[33px] w-full bg-[url('/assets/style-elements/cutted-border-large.webp')] bg-contain max-[443px]:top-[-25px] max-[767px]:top-[-22px] max-[991px]:top-[-19px] max-[1199px]:top-[-12px] max-[1399px]:top-[-6px] top-[-2px] rotate-180"></div>

            <div className="absolute h-full w-[33px] bg-[url('/assets/style-elements/cutted-border-small.webp')] bg-contain right-[-15px] top-0"></div>
            <div className="absolute h-full w-[33px] bg-[url('/assets/style-elements/cutted-border-small.webp')] bg-contain top-0 left-[-15px] rotate-180"></div>

            <img
              src="/assets/style-elements/quote.svg"
              alt=""
              className="absolute max-[575px]:hidden max-[767px]:left-[30px] left-[40px] max-[991px]:top-[30px] top-[50px] max-[991px]:w-[40px] max-[991px]:h-[30px] w-[60px] h-[40px]"
            />
            <img
              src="/assets/style-elements/quote.svg"
              alt=""
              className="absolute max-[575px]:hidden max-[767px]:right-[30px] right-[40px] max-[991px]:bottom-[60px] bottom-[50px] rotate-180 max-[991px]:w-[40px] max-[991px]:h-[30px] w-[60px] h-[40px]"
            />
          </section>
        </div>

        <Slider ref={sliderRef} {...settings} className="overflow-hidden">
          <div>
            <h3 className="font-generalbold mt-3 mb-[10px] text-secondary max-[375px]:text-[18px] max-[575px]:text-[20px] max-[991px]:text-[22px] max-[1199px]:text-[26px] max-[1399px]:text-[28px] text-[32px]">
              Commodo bibendum facilisis non venenatis. Placerat neque libero
              quis.
            </h3>
            <p className="max-[767px]:text-[15px] font-generalsans">
              Facilisis accumsan orci a faucibus lectus porttitor. Blandit
              tristique sit hendrerit sollicitudin nulla ut eleifend arcu eget.
              Augue id amet feugiat nulla enim a velit sed. Sed semper mauris
              vel elementum nisi blandit tellus. Ut turpis amet et in vulputate
              sed commodo tempus eget. Massa tristique nunc vulputate porta
              pellentesque ac.
            </p>
            <p className="max-[767px]:text-[15px] font-generalsans mt-6">
              Sed viverra nisl vulputate laoreet sit facilisis eget natoque
              varius. Tincidunt turpis vel et interdum mattis enim eget sem
              tellus. Aliquet leo augue scelerisque euismod id gravida
              vestibulum morbi. Dignissim consectetur fermentum phasellus
              pellentesque venenatis duis malesuada ultricies. Maecenas
              tristique aliquet neque pulvinar commodo nunc viverra amet
              egestas. In turpis mauris orci ullamcorper duis augue. Vel in
              lectus enim bibendum dolor justo. Odio hendrerit vitae consectetur
              sed. Viverra feugiat suspendisse id vitae.
            </p>
          </div>

          <div>
            <h3 className="font-generalbold mt-3 mb-[10px] text-secondary max-[375px]:text-[18px] max-[575px]:text-[20px] max-[991px]:text-[22px] max-[1199px]:text-[26px] max-[1399px]:text-[28px] text-[32px]">
              Commodo bibendum facilisis non venenatis. Placerat neque libero
              quis.
            </h3>
            <p className="max-[767px]:text-[15px] font-generalsans">
              Facilisis accumsan orci a faucibus lectus porttitor. Blandit
              tristique sit hendrerit sollicitudin nulla ut eleifend arcu eget.
              Augue id amet feugiat nulla enim a velit sed. Sed semper mauris
              vel elementum nisi blandit tellus. Ut turpis amet et in vulputate
              sed commodo tempus eget. Massa tristique nunc vulputate porta
              pellentesque ac.
            </p>
            <p className="max-[767px]:text-[15px] font-generalsans mt-6">
              Sed viverra nisl vulputate laoreet sit facilisis eget natoque
              varius. Tincidunt turpis vel et interdum mattis enim eget sem
              tellus. Aliquet leo augue scelerisque euismod id gravida
              vestibulum morbi. Dignissim consectetur fermentum phasellus
              pellentesque venenatis duis malesuada ultricies. Maecenas
              tristique aliquet neque pulvinar commodo nunc viverra amet
              egestas. In turpis mauris orci ullamcorper duis augue. Vel in
              lectus enim bibendum dolor justo. Odio hendrerit vitae consectetur
              sed. Viverra feugiat suspendisse id vitae.
            </p>
          </div>

          <div>
            <h3 className="font-generalbold mt-3 mb-[10px] text-secondary max-[375px]:text-[18px] max-[575px]:text-[20px] max-[991px]:text-[22px] max-[1199px]:text-[26px] max-[1399px]:text-[28px] text-[32px]">
              Commodo bibendum facilisis non venenatis. Placerat neque libero
              quis.
            </h3>
            <p className="max-[767px]:text-[15px] font-generalsans">
              Facilisis accumsan orci a faucibus lectus porttitor. Blandit
              tristique sit hendrerit sollicitudin nulla ut eleifend arcu eget.
              Augue id amet feugiat nulla enim a velit sed. Sed semper mauris
              vel elementum nisi blandit tellus. Ut turpis amet et in vulputate
              sed commodo tempus eget. Massa tristique nunc vulputate porta
              pellentesque ac.
            </p>
            <p className="max-[767px]:text-[15px] font-generalsans mt-6">
              Sed viverra nisl vulputate laoreet sit facilisis eget natoque
              varius. Tincidunt turpis vel et interdum mattis enim eget sem
              tellus. Aliquet leo augue scelerisque euismod id gravida
              vestibulum morbi. Dignissim consectetur fermentum phasellus
              pellentesque venenatis duis malesuada ultricies. Maecenas
              tristique aliquet neque pulvinar commodo nunc viverra amet
              egestas. In turpis mauris orci ullamcorper duis augue. Vel in
              lectus enim bibendum dolor justo. Odio hendrerit vitae consectetur
              sed. Viverra feugiat suspendisse id vitae.
            </p>
          </div>
        </Slider>

        <div className="flex justify-between items-center py-3 border-y-[1px] border-primary mt-10 border-opacity-30">
          <div className="flex items-center gap-7">
            <img src="/assets/style-elements/fb.svg" alt="" />
            <img src="/assets/style-elements/insta.svg" alt="" />
            <img src="/assets/style-elements/yt.svg" alt="" />
            <img src="/assets/style-elements/linkedin-red.svg" alt="" />
          </div>
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
      </section>

      <section className="flex max-[991px]:flex-col gap-8 container pb-[70px] max-[575px]:px-[12px]">
        <div className="flex-[1.5]">
          <h3 className="font-tsushima text-secondary max-[575px]:text-[24px] max-[767px]:text-[26px] max-[991px]:text-[28px] max-[1199px]:text-[32px] max-[1399px]:text-[40px] min-[1400px]:text-[45px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] mb-[55px]">
            COMMENTS
          </h3>
          <div className="font-generalsans border-b-[1px] pb-5 mb-10">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <img
                  src="/assets/img/testimonials/client-2.webp"
                  alt=""
                  className="max-[767px]:max-w-[60px]"
                />
                <div>
                  <h4 className="font-bold text-secondary max-[767px]:text-[18px] max-[1199px]:text-[20px] max-[1199px]:mb-[6px] text-[24px] mb-[3px]">
                    Jakob Torreto
                  </h4>
                  <div className="max-[767px]:text-[15px]">
                    January 19th, 2022
                  </div>
                </div>
              </div>
              <div className="w-[42px] h-[42px] bg-primary flex justify-center items-center">
                <img src="/assets/style-elements/cmt-flag.svg" alt="" />
              </div>
            </div>

            <p className="max-[767px]:text-[15px] mt-[15px]">
              Nunc laoreet consequat turpis massa mauris amet gravida porttitor
              nisi. Mus vulputate laoreet et nec arcu mi. Faucibus aliquam purus
              non cum at. Facilisis blandit dignissim lectus vitae sit. Tortor
              euismod justo arcu id volutpat nec pellentesque semper sagittis.
            </p>

            <div className="text-primary font-bold tracking-widest mt-[17px] cursor-pointer hover:text-secondary transition-all duration-200 inline-block">
              REPLY
            </div>
          </div>

          <div className="font-generalsans border-b-[1px] pb-5">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <img
                  src="/assets/img/testimonials/client-3.webp"
                  alt=""
                  className="max-[767px]:max-w-[60px]"
                />
                <div>
                  <h4 className="font-bold text-secondary max-[767px]:text-[18px] max-[1199px]:text-[20px] max-[1199px]:mb-[6px] text-[24px] mb-[3px]">
                    Jakob Torreto
                  </h4>
                  <div className="max-[767px]:text-[15px]">
                    January 19th, 2022
                  </div>
                </div>
              </div>
              <div className="w-[42px] h-[42px] bg-primary flex justify-center items-center">
                <img src="/assets/style-elements/cmt-flag.svg" alt="" />
              </div>
            </div>

            <p className="max-[767px]:text-[15px] mt-[15px]">
              Nunc laoreet consequat turpis massa mauris amet gravida porttitor
              nisi. Mus vulputate laoreet et nec arcu mi. Faucibus aliquam purus
              non cum at. Facilisis blandit dignissim lectus vitae sit. Tortor
              euismod justo arcu id volutpat nec pellentesque semper sagittis.
            </p>

            <div className="text-primary font-bold tracking-widest mt-[17px] cursor-pointer hover:text-secondary transition-all duration-200 inline-block">
              REPLY
            </div>
          </div>

          <h3 className="font-tsushima text-secondary max-[375px]:text-[20px] max-[575px]:text-[22px] max-[575px]:mb-[20px] max-[991px]:text-[26px] max-[767px]:mb-[30px] max-[991px]:mb-[35px] text-[30px] mb-[42px] mt-[40px]">
            DROP YOUR <span className="text-primary">COMMENT</span>
          </h3>
          <form action="" className="flex flex-col gap-5">
            <div className="flex gap-5 max-[767px]:flex-col">
              <input
                type="text"
                placeholder="Enter First Name"
                className="placeholder:font-generalsans border-[1px] border-primary w-full py-[14px] px-[24px] text-[15px]"
              />
              <input
                type="text"
                placeholder="Enter Last Name"
                className="placeholder:font-generalsans border-[1px] border-primary w-full py-[14px] px-[24px] text-[15px]"
              />
            </div>
            <input
              type="text"
              placeholder="Enter E-mail"
              className="placeholder:font-generalsans border-[1px] border-primary w-full py-[14px] px-[24px] text-[15px]"
            />
            <textarea
              placeholder="Write Your Message"
              className="placeholder:font-generalsans border-[1px] border-primary w-full py-[14px] px-[24px] text-[15px] h-[120px] resize-none"
            ></textarea>

            <button className="bg-primary text-white font-generalbold text-[15px] max-[575px]:px-[15px]  max-[575px]:py-[12px] max-[575px]:max-w-[200px] w-full px-[20px] py-[14px] clip-button hover:bg-secondary transition-all max-w-[300px]">
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
        <div className="flex-1">
          <h3 className="max-[991px]:mt-10 font-tsushima text-secondary max-[575px]:text-[24px] max-[767px]:text-[26px] max-[991px]:text-[28px] max-[1199px]:text-[32px] max-[1399px]:text-[40px] min-[1400px]:text-[45px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] max-[991px]:mb-[8px] max-[1399px]:mb-[12px] min-[1400px]:mb-[20px]">
            RELATED BLOGS
          </h3>
          <div className="bg-primary px-5 max-[575px]:py-5 py-7 font-generalsans">
            <div className="flex gap-4 border-bottom-opacity pb-5">
              <div className="relative max-[375px]:w-[200px] max-[575px]:w-[168px] max-[767px]:w-[120px] max-[991px]:w-[100px] max-[1199px]:w-[175px] max-[1399px]:w-[170px] w-[145px] bg-[url('/assets/img/articles/articles-5.webp')] bg-cover">
                <div className="max-[575px]:hidden absolute w-full h-full bg-[url('/assets/style-elements/blog-mask.webp')] top-0 left-0"></div>
                <div className="max-[575px]:hidden absolute w-full h-full bg-[url('/assets/style-elements/blog-mask.webp')] bottom-0 right-0 rotate-180"></div>
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="text-white max-[360px]:text-[14px] max-[1199px]:text-[16px] text-[18px]">
                  From Ancient Roots to Modern Benefits: The History of Tai Chi
                </h4>
                <div className="flex justify-between items-center mt-4">
                  <div className=" text-white font-generalbold">Read Now</div>
                  <div className="text-white opacity-70">June 14th, 2023</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 border-bottom-opacity pb-5 mt-5">
              <div className="relative max-[375px]:w-[200px] max-[575px]:w-[168px] max-[767px]:w-[120px] max-[991px]:w-[100px] max-[1199px]:w-[175px] max-[1399px]:w-[170px] w-[145px] bg-[url('/assets/img/articles/articles-6.webp')] bg-cover">
                <div className="max-[575px]:hidden absolute w-full h-full bg-[url('/assets/style-elements/blog-mask.webp')] top-0 left-0"></div>
                <div className="max-[575px]:hidden absolute w-full h-full bg-[url('/assets/style-elements/blog-mask.webp')] bottom-0 right-0 rotate-180"></div>
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="text-white max-[360px]:text-[14px] max-[1199px]:text-[16px] text-[18px]">
                  From Ancient Roots to Modern Benefits: The History of Tai Chi
                </h4>
                <div className="flex justify-between items-center mt-4">
                  <div className=" text-white font-generalbold">Read Now</div>
                  <div className="text-white opacity-70">June 14th, 2023</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 border-bottom-opacity pb-5 mt-5">
              <div className="relative max-[375px]:w-[200px] max-[575px]:w-[168px] max-[767px]:w-[120px] max-[991px]:w-[100px] max-[1199px]:w-[175px] max-[1399px]:w-[170px] w-[145px] bg-[url('/assets/img/articles/articles-7.webp')] bg-cover">
                <div className="max-[575px]:hidden absolute w-full h-full bg-[url('/assets/style-elements/blog-mask.webp')] top-0 left-0"></div>
                <div className="max-[575px]:hidden absolute w-full h-full bg-[url('/assets/style-elements/blog-mask.webp')] bottom-0 right-0 rotate-180"></div>
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="text-white max-[360px]:text-[14px] max-[1199px]:text-[16px] text-[18px]">
                  From Ancient Roots to Modern Benefits: The History of Tai Chi
                </h4>
                <div className="flex justify-between items-center mt-4">
                  <div className=" text-white font-generalbold">Read Now</div>
                  <div className="text-white opacity-70">June 14th, 2023</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-5">
              <div className="relative max-[375px]:w-[200px] max-[575px]:w-[168px] max-[767px]:w-[120px] max-[991px]:w-[100px] max-[1199px]:w-[175px] max-[1399px]:w-[170px] w-[145px] bg-[url('/assets/img/articles/articles-4.webp')] bg-cover">
                <div className="max-[575px]:hidden absolute w-full h-full bg-[url('/assets/style-elements/blog-mask.webp')] top-0 left-0"></div>
                <div className="max-[575px]:hidden absolute w-full h-full bg-[url('/assets/style-elements/blog-mask.webp')] bottom-0 right-0 rotate-180"></div>
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="text-white max-[360px]:text-[14px] max-[1199px]:text-[16px] text-[18px]">
                  From Ancient Roots to Modern Benefits: The History of Tai Chi
                </h4>
                <div className="flex justify-between items-center mt-4">
                  <div className=" text-white font-generalbold">Read Now</div>
                  <div className="text-white opacity-70">June 14th, 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;
