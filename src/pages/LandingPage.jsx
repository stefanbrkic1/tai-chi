import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Navbar />

      <section>
        <img
          src="/assets/style-elements/header-bg-1.webp"
          alt="style-image"
          className="relative z-10"
        />

        <div className="overflow-hidden fixed top-[-5px] whitespace-nowrap z-0">
          <span className="relative inline-block">
            <img
              src="/assets/style-elements/mountains.webp"
              alt="mountain"
              className="w-full inline-block"
            />
            <div className="absolute w-full h-full fade-opacity top-0 left-0"></div>
          </span>
        </div>

        <div className="overflow-hidden absolute top-[-10px] whitespace-nowrap">
          <span className="animate-slide-left">
            <img
              src="/assets/style-elements/clouds/cloud-03.webp"
              alt="cloud"
              className="w-full cloud inline-block"
            />

            <img
              src="/assets/style-elements/clouds/cloud-02.webp"
              alt="cloud"
              className="w-full cloud inline-block"
            />

            <img
              src="/assets/style-elements/clouds/cloud-03.webp"
              alt="cloud"
              className="w-full cloud inline-block"
            />

            <img
              src="/assets/style-elements/clouds/cloud-02.webp"
              alt="cloud"
              className="w-full cloud inline-block"
            />
          </span>

          <span className="animate-slide-left">
            <img
              src="/assets/style-elements/clouds/cloud-03.webp"
              alt="cloud"
              className="w-full cloud inline-block"
            />

            <img
              src="/assets/style-elements/clouds/cloud-02.webp"
              alt="cloud"
              className="w-full cloud inline-block"
            />

            <img
              src="/assets/style-elements/clouds/cloud-03.webp"
              alt="cloud"
              className="w-full cloud inline-block"
            />

            <img
              src="/assets/style-elements/clouds/cloud-02.webp"
              alt="cloud"
              className="w-full cloud inline-block"
            />
          </span>
        </div>

        <div className="container absolute w-full top-[260px] md:top-[180px] min-[1200px]:top-[200px] min-[1400px]:top-[280px] left-[50%] translate-x-[-50%] translate-y-[-1%] z-20 flex justify-center">
          <div className="relative w-[310px] h-[310px] min-[992px]:w-[400px] min-[992px]:h-[400px] min-[1200px]:w-[450px] min-[1200px]:h-[450px] min-[1400px]:w-[550px] min-[1400px]:h-[550px] bg-primary rounded-full">
            <div className="top-0 left-0 absolute w-[310px] h-[310px] min-[992px]:w-[400px] min-[992px]:h-[400px] min-[1200px]:w-[450px] min-[1200px]:h-[450px] min-[1400px]:w-[550px] min-[1400px]:h-[550px] bg-primary rounded-full animate-scale-pulse-1 "></div>
            <div className="top-0 left-0 absolute w-[310px] h-[310px] min-[992px]:w-[400px] min-[992px]:h-[400px] min-[1200px]:w-[450px] min-[1200px]:h-[450px] min-[1400px]:w-[550px] min-[1400px]:h-[550px] bg-primary rounded-full animate-scale-pulse-2 "></div>
            <img
              src="/assets/img/banner.webp"
              alt="sensei"
              className="absolute top-[-33px] left-[20px] min-[992px]:top-[-28px] min-[992px]:left-[22px] min-[1200px]:top-[-30px] min-[1200px]:left-[35px] min-[1400px]:top-[-70px] min-[1400px]:left-[12px] w-[270px] min-[992px]:w-[340px] min-[1200px]:w-[380px] min-[1400px]:w-auto animate-meditate z-10"
            />
          </div>
          <div className="absolute top-[-150px] min-[768px]:top-[47px] min-[992px]:top-[73px] min-[1200px]:top-[63px] min-[1400px]:top-[80px] ">
            <h2 className="absolute top-[-5px] left-0 max-[767px]:block max-[767px]:static max-[767px]:text-center font-tsushima text-secondary max-[767px]:text-[16px] max-[991px]:text-[13px] max-[1199px]:text-[18px] max-[1399px]:text-[22px] min-[1400px]:text-[28px]">
              LEARN <span className="text-primary">TAI CHI WITH</span>
            </h2>
            <h1 className="font-drukwide text-[34px] min-[576px]:text-[46px] min-[768px]:text-[84px] min-[992px]:text-[113px] min-[1200px]:text-[134px] min-[1400px]:text-[156px] text-secondary">
              DISCIPLINE
            </h1>
            <div className="absolute flex flex-col items-center min-[576px]:flex-row min-[576px]:justify-between min-[576px]:items-start w-full max-[767px]:bottom-[-525px] max-[991px]:bottom-[-70px] max-[1199px]:bottom-[-65px] max-[1399px]:bottom-[-40px] min-[1400px]:bottom-[-61px]">
              <p className="font-generalsans text-secondary max-[576px]:max-w-[1000px] max-[576px]:mb-2 max-[576px]:text-center max-[991px]:max-w-[210px] max-[1199px]:max-w-[260px] max-[1399px]:max-w-[328px] min-[1400px]:max-w-[348px]">
                Enhance your physical and mental well-being with our holistic
                Tai-Chi training.
              </p>
              <h2 className="font-drukwide text-primary max-[991px]:text-[24px] max-[1199px]:text-[32px] max-[1399px]:text-[40px] min-[1400px]:text-[56px]">
                ENERGY
              </h2>
            </div>
          </div>
          <h1 className="absolute min-[767px]:top-[47px] min-[992px]:top-[73px] min-[1200px]:top-[63px] min-[1400px]:top-[80px] font-drukwide text-[34px] min-[576px]:text-[46px] min-[768px]:text-[84px] min-[992px]:text-[113px] min-[1200px]:text-[134px] min-[1400px]:text-[156px] min-[767px]:stroke-header text-transparent z-20">
            DISCIPLINE
          </h1>
          <div className="upright-text max-[767px]:hidden max-[991px]:text-[24px] max-[1199px]:text-[32px] min-[1200px]:text-[44px] leading-[35px]">
            <div className="absolute left-0 text-secondary max-[991px]:top-[-60px] max-[1199px]:top-[-50px] min-[1200px]:top-[-70px] min-[1400px]:top-[-140px]">
              我是
            </div>
            <div className="absolute bottom-[-50px] right-0 text-primary max-[991px]:bottom-[-60px] max-[1199px]:bottom-[-50px] min-[1200px]:bottom-[-70px] min-[1400px]:bottom-[-140px]">
              最好的
            </div>
          </div>

          <Link to={"/programs"}>
            <img
              src="/assets/style-elements/btn.svg"
              alt="button"
              className="fixed left-[350px] z-10 animate-rotate max-[767px]:bottom-[-320px] max-[991px]:bottom-[10px] max-[991px]:left-[200px] max-[1199px]:bottom-[30px] max-[1199px]:left-[270px] min-[1200px]:bottom-[55px] min-[1400px]:bottom-[55px] max-[1399px]:w-[110px] max-[1399px]:h-[110px] min-[1400px]:w-[148px] min-[1400px]:h-[148px]"
            />
            <div className="flex justify-center items-center fixed left-[350px] w-[148px] h-[148px] z-10 text-white font-satoshi max-[767px]:bottom-[-320px] max-[991px]:bottom-[10px] max-[991px]:left-[200px] max-[1199px]:bottom-[30px] max-[1199px]:left-[270px] min-[1200px]:bottom-[55px] min-[1400px]:bottom-[55px] max-[1399px]:w-[110px] max-[1399px]:h-[110px] max-[1399px]:text-[13px]">
              GET STARTED
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
