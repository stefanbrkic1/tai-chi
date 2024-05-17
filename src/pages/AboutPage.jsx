import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Articles from "../components/Articles";
import InstagramCaroussel from "../components/InstagramCaroussel";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import { useEffect, useRef, useState } from "react";
import { inView } from "framer-motion";

function AboutPage() {
  const numbersSection = useRef(null);

  const [numbersVal, setNumbersVal] = useState({
    students: 0,
    lessons: 0,
    instructors: 0,
    resources: 0,
    outlets: 0,
  });

  useEffect(() => {
    if (numbersSection.current) {
      const unsubscribe = inView(numbersSection.current, () => {
        setNumbersVal({
          students: 58,
          lessons: 252,
          instructors: 100,
          resources: 400,
          outlets: 60,
        });
      });

      return () => unsubscribe();
    }
  }, [numbersSection]);

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
          className="absolute z-10 left-[-65px] max-[991px]:bottom-[40%]  max-[1199px]:bottom-[30%] max-[1399px]:bottom-[20%] bottom-[34%] animate-rotate max-[767px]:w-[100px] min-[768px]:w-[130px] min-[992px]:w-[130px] min-[1200px]:w-[150px] min-[1400px]:w-[180px]"
        />

        <img
          src="/assets/style-elements/star-2.svg"
          alt="star"
          className="absolute z-10 right-[-65px] max-[767px]:bottom-[0px] min-[768px]:bottom-[0px] animate-rotate max-[767px]:w-[100px] min-[768px]:w-[130px] min-[992px]:w-[130px] min-[1200px]:w-[150px] min-[1400px]:w-[180px]"
        />
      </div>

      <section className="relative max-[575px]:pt-[4%] max-[991px]:pt-[2%] pt-[5%] pb-[15%]">
        <div className="flex justify-center mb-4 pt-[40px]">
          <img
            src="/assets/style-elements/star.svg"
            alt="star"
            className="opacity-[20%] animate-rotate max-[1199px]:w-[30px] max-[1199px]:h-[30px] max-[1399px]:w-[40px] max-[1399px]:h-[40px] w-[52px] h-[52px]"
          />
        </div>
        <h2 className="font-tsushima text-primary text-center text-[28px] min-[768px]:text-[28px] min-[992px]:text-[36px] min-[1200px]:text-[52px] min-[1400px]:text-[62px]">
          ABOUT <span className="text-secondary">US</span>
        </h2>
        <div className="flex justify-center font-generalsans max-[991px]:text-[16px] text-[18px]">
          <div className="flex max-[991px]:gap-2 gap-3">
            <Link to={"/"} className="text-black opacity-70 hover:opacity-100">
              Home
            </Link>
            <span className="text-primary">|</span>
            <span className="text-primary">About Us</span>
          </div>
        </div>

        <div className="relative container bg-white max-[575px]:pt-[55px] pt-[7%]">
          <div className="relative z-10 flex items-center max-[767px]:flex-col-reverse min-[768px]:flex-row max-[767px]:gap-[30px] min-[768px]:gap-[60px]">
            <div className="flex-1 max-[575px]:px-5 relative min-[576px]:px-[90px] min-[768px]:px-[0px]">
              <img
                src="/assets/img/how-we-started.webp"
                alt="basic"
                className=""
              />
              <div className="absolute top-0 z-10 text-secondary upright-text max-[991px]:text-[24px] max-[1199px]:text-[32px] min-[1200px]:text-[44px] min-[992px]:bottom-[-250px] max-[1199px]:bottom-[-250px] min-[1200px]:bottom-[-300px] min-[1400px]:bottom-[-400px] leading-[35px]">
                信念
              </div>
            </div>
            <div className="flex-1 min-[768px]:flex-[1.5] min-[992px]:flex-1">
              <h3 className="font-tsushima flex justify-center gap-3 min-[768px]:flex-col min-[768px]:gap-0 text-primary text-[20px] max-[991px]:text-[26px] max-[1199px]:text-[28px] max-[1399px]:text-[38px] min-[1400px]:text-[48px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] max-[991px]:mb-[8px] max-[1399px]:mb-[12px] min-[1400px]:mb-[20px] max-[767px]:text-center">
                HOW WE <div className="text-secondary">STARTED</div>
              </h3>
              <div className="font-generalsans max-[575px]:px-[12px] max-[575px]:text-[14px] max-[767px]:text-[15px] min-[768px]:text-[16px] max-[767px]:text-center">
                <p className="max-[991px]:mb-[15px] min-[992px]:mb-[20px]">
                  Tellus viverra donec scelerisque vivamus ipsum proin nisl in.
                  Diam duis ullamcorper tempor eget. Duis donec id est facilisi
                  nullam id praesent rhoncus est. Auctor sed ornare quis porta
                  blandit egestas a. Massa tincidunt cursus nisi varius.
                </p>
                <p>
                  Adipiscing id nunc consequat in. Bibendum sed aliquam est non
                  id dignissim et aliquet. Tellus nam integer nunc mauris velit
                  etiam enim.
                </p>
              </div>
            </div>
          </div>
          <img
            src="/assets/img/transformation-1.webp"
            alt="style-img"
            className="absolute max-w-[1600px] mx-auto w-full max-[575px]:top-[550px] max-[767px]:top-[470px] max-[991px]:top-[60px] max-[1199px]:top-[235px] max-[1399px]:top-[300px] min-[1400px]:top-[360px]"
          />
        </div>
      </section>

      <section className="relative container max-[575px]:px-[12px]">
        <div className="absolute max-[767px]:hidden top-[60px] text-primary upright-text max-[991px]:text-[24px] max-[1199px]:text-[32px] min-[1200px]:text-[44px] leading-[35px]">
          不屈
        </div>
        <div className="flex justify-center mb-4 pt-[40px]">
          <img
            src="/assets/style-elements/star.svg"
            alt="star"
            className="opacity-[20%] animate-rotate max-[1199px]:w-[30px] max-[1199px]:h-[30px] max-[1399px]:w-[40px] max-[1399px]:h-[40px] w-[52px] h-[52px]"
          />
        </div>
        <h2 className="font-tsushima text-secondary text-center text-[28px] min-[768px]:text-[28px] min-[992px]:text-[36px] min-[1200px]:text-[52px] min-[1400px]:text-[62px] max-[991px]:mb-[10px] min-[1200px]:mb-[12px] min-[1400px]:mb-[24px]">
          ORIGIN <span className="text-primary">OF TAI CHI</span>
        </h2>
        <div className="text-center font-generalsans text-secondary max-[575px]:text-[14px] max-[767px]:text-[15px] min-[768px]:text-[16px] flex flex-col max-[991px]:gap-[15px] min-[992px]:gap-[20px] mb-[30px] min-[992px]:px-[50px]">
          <p>
            Tai Chi, also known as Tai Chi Chuan, is an ancient Chinese martial
            art that originated in the 17th century. It was developed by Zhang
            Sanfeng, a Taoist monk who drew inspiration from observing nature
            and combined his knowledge of martial arts, philosophy, and
            traditional Chinese medicine. Tai Chi aims to harmonize the mind,
            body, and spirit, emphasizing balance, relaxation, and the
            cultivation of internal energy or &quot;qi.&quot; Originally
            practiced as a martial art, Tai Chi evolved into a popular form of
            exercise and meditation. Today, it is widely practiced for its
            numerous health benefits, promoting physical fitness, stress
            reduction, and mind-body awareness. Different styles of Tai Chi have
            emerged, each with its own unique characteristics. Tai Chi continues
            to be embraced for its holistic approach to well-being, helping
            individuals cultivate balance, harmony, and inner peace.
          </p>
        </div>
        <img src="/assets/img/origin-of-tai-chi.webp" alt="tai-chi" />

        <div className="container overflow-hidden relative pb-[6%]">
          <div className="relative z-10 flex items-center max-[767px]:flex-col-reverse min-[768px]:flex-row max-[767px]:gap-[30px] min-[768px]:gap-[60px] pt-[140px]">
            <div className="flex-1 min-[768px]:flex-[1.5] min-[992px]:flex-1">
              <h3 className="font-tsushima flex justify-center gap-3 min-[768px]:flex-col min-[768px]:gap-0 text-primary text-[20px] max-[991px]:text-[26px] max-[1199px]:text-[28px] max-[1399px]:text-[38px] min-[1400px]:text-[48px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] max-[991px]:mb-[8px] max-[1399px]:mb-[12px] min-[1400px]:mb-[20px] max-[767px]:text-center">
                OUR <div className="text-secondary">GOALS</div>
              </h3>
              <div className="font-generalsans max-[575px]:px-[12px] max-[575px]:text-[14px] max-[767px]:text-[15px] min-[768px]:text-[16px] max-[767px]:text-center">
                <p className="max-[991px]:mb-[15px] min-[992px]:mb-[20px]">
                  Tellus viverra donec scelerisque vivamus ipsum proin nisl in.
                  Diam duis ullamcorper tempor eget. Duis donec id est facilisi
                  nullam id praesent rhoncus est. Auctor sed ornare quis porta
                  blandit egestas a. Massa tincidunt cursus nisi varius.
                </p>
                <p>
                  Adipiscing id nunc consequat in. Bibendum sed aliquam est non
                  id dignissim et aliquet. Tellus nam integer nunc mauris velit
                  etiam enim.
                </p>
              </div>
            </div>
            <div className="flex-1 max-[575px]:px-5 relative min-[576px]:px-[90px] min-[768px]:px-[0px]">
              <img src="/assets/img/our-goals.webp" alt="basic" className="" />
              <div className="absolute top-0 right-0 z-10 text-primary upright-text max-[991px]:text-[24px] max-[1199px]:text-[32px] min-[1200px]:text-[44px] min-[992px]:bottom-[-250px] max-[1199px]:bottom-[-250px] min-[1200px]:bottom-[-300px] min-[1400px]:bottom-[-400px] leading-[52px]">
                信念
              </div>
            </div>
          </div>
          <img
            src="/assets/img/transformation-2.webp"
            alt="style-img"
            className="absolute max-w-[1600px] mx-auto w-full max-[575px]:top-[90px] max-[767px]:top-[90px] max-[991px]:top-[90px] max-[1199px]:top-[150px] max-[1399px]:top-[200px] min-[1400px]:top-[160px]"
          />
        </div>
      </section>

      <div className="overflow-hidden max-[575px]:mt-[30px] mt-[50px] max-[767px]:mb-[25px] max-[991px]:mb-[40px] max-[1199px]:mb-[60px] max-[1399px]:mb-[80px] mb-[100px] max-[575px]:px-[12px]">
        <section
          ref={numbersSection}
          className="relative bg-primary container text-white flex max-[767px]:gap-y-10 justify-around max-[991px]:flex-wrap max-[767px]:py-[45px] px-[35px] py-[65px] max-[575px]:px-[0px]"
        >
          <div className="text-center max-[767px]:min-w-[132px]">
            <h3 className="font-tsushima max-[991px]:text-[26px] max-[1199px]:text-[36px] text-[48px] flex justify-center items-center">
              <Odometer format="d" value={numbersVal.students}></Odometer>
              <span className="ml-1">k</span>
            </h3>
            <div className="font-generalsans max-[991px]:text-[14px] text-[18px]">
              Total Students
            </div>
          </div>

          <div className="text-center max-[767px]:min-w-[132px]">
            <h3 className="font-tsushima max-[991px]:text-[26px] max-[1199px]:text-[36px] text-[48px]">
              <Odometer format="d" value={numbersVal.lessons}></Odometer>
            </h3>
            <div className="font-generalsans max-[991px]:text-[14px] text-[18px]">
              Lessons Covered
            </div>
          </div>

          <div className="text-center max-[767px]:min-w-[132px]">
            <h3 className="font-tsushima max-[991px]:text-[26px] max-[1199px]:text-[36px] text-[48px] flex justify-center items-center">
              <Odometer format="d" value={numbersVal.instructors}></Odometer>
              <span className="ml-1">+</span>
            </h3>
            <div className="font-generalsans max-[991px]:text-[14px] text-[18px]">
              Pro Instructors
            </div>
          </div>

          <div className="text-center max-[767px]:min-w-[132px]">
            <h3 className="font-tsushima max-[991px]:text-[26px] max-[1199px]:text-[36px] text-[48px] flex justify-center items-center">
              <Odometer format="d" value={numbersVal.resources}></Odometer>
              <span className="ml-1">+</span>
            </h3>
            <div className="font-generalsans max-[991px]:text-[14px] text-[18px]">
              Resources
            </div>
          </div>

          <div className="text-center max-[767px]:min-w-[132px]">
            <h3 className="font-tsushima max-[991px]:text-[26px] max-[1199px]:text-[36px] text-[48px] flex justify-center items-center">
              <Odometer format="d" value={numbersVal.outlets}></Odometer>
              <span className="ml-1">+</span>
            </h3>
            <div className="font-generalsans max-[991px]:text-[14px] text-[18px]">
              Outlets
            </div>
          </div>

          <div className="absolute h-[33px] w-full bg-[url('/assets/style-elements/cutted-border-large.webp')] bg-contain max-[px]:bottom-[-25px] max-[443px]:bottom-[-25px] max-[767px]:bottom-[-22px] max-[991px]:bottom-[-19px] max-[1199px]:bottom-[-12px] max-[1399px]:bottom-[-6px] bottom-[-2px]"></div>
          <div className="absolute h-[33px] w-full bg-[url('/assets/style-elements/cutted-border-large.webp')] bg-contain max-[443px]:top-[-25px] max-[767px]:top-[-22px] max-[991px]:top-[-19px] max-[1199px]:top-[-12px] max-[1399px]:top-[-6px] top-[-2px] rotate-180"></div>

          <div className="absolute h-full w-[33px] bg-[url('/assets/style-elements/cutted-border-small.webp')] bg-contain right-[-15px] top-0"></div>
          <div className="absolute h-full w-[33px] bg-[url('/assets/style-elements/cutted-border-small.webp')] bg-contain top-0 left-[-15px] rotate-180"></div>
        </section>
      </div>

      <Testimonials />
      <Articles />
      <InstagramCaroussel />
      <Footer />
    </>
  );
}

export default AboutPage;
