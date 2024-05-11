import Navbar from "../components/Navbar";

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

        <div className="overflow-hidden absolute top-[-5px] whitespace-nowrap z-0">
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

        <div className="absolute w-full top-[240px] min-[576px]:top-[260px] md:top-[180px] min-[1200px]:top-[200px] min-[1400px]:top-[280px] left-[50%] translate-x-[-50%] translate-y-[-1%] z-20 flex justify-center">
          <div className="relative w-[310px] h-[310px] min-[992px]:w-[400px] min-[992px]:h-[400px] min-[1200px]:w-[450px] min-[1200px]:h-[450px] min-[1400px]:w-[550px] min-[1400px]:h-[550px] bg-primary rounded-full">
            <div className="top-0 left-0 absolute w-[310px] h-[310px] min-[992px]:w-[400px] min-[992px]:h-[400px] min-[1200px]:w-[450px] min-[1200px]:h-[450px] min-[1400px]:w-[550px] min-[1400px]:h-[550px] bg-primary rounded-full animate-scale-pulse-1 "></div>
            <div className="top-0 left-0 absolute w-[310px] h-[310px] min-[992px]:w-[400px] min-[992px]:h-[400px] min-[1200px]:w-[450px] min-[1200px]:h-[450px] min-[1400px]:w-[550px] min-[1400px]:h-[550px] bg-primary rounded-full animate-scale-pulse-2 "></div>
            <img
              src="/assets/img/banner.webp"
              alt="sensei"
              className="absolute top-[-33px] left-[20px] min-[992px]:top-[-28px] min-[992px]:left-[22px] min-[1200px]:top-[-30px] min-[1200px]:left-[35px] min-[1400px]:top-[-70px] min-[1400px]:left-[12px] w-[270px] min-[992px]:w-[340px] min-[1200px]:w-[380px] min-[1400px]:w-auto animate-meditate z-10"
            />
          </div>
          <h1 className="absolute top-[-120px] min-[768px]:top-[47px] min-[992px]:top-[73px] min-[1200px]:top-[63px] min-[1400px]:top-[80px] font-drukwide text-[34px] min-[576px]:text-[46px] min-[768px]:text-[84px] min-[992px]:text-[113px] min-[1200px]:text-[134px] min-[1400px]:text-[156px] text-secondary">
            DISCIPLINE
          </h1>
          <h1 className="absolute top-[-120px] min-[768px]:top-[47px] min-[992px]:top-[73px] min-[1200px]:top-[63px] min-[1400px]:top-[80px] font-drukwide text-[34px] min-[576px]:text-[46px] min-[768px]:text-[84px] min-[992px]:text-[113px] min-[1200px]:text-[134px] min-[1400px]:text-[156px] min-[767px]:stroke-header text-transparent z-20">
            DISCIPLINE
          </h1>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
