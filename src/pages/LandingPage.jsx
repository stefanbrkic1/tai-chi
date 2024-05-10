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

        <div className="absolute w-full top-[240px] md:top-[180px] lg:top-[200px] xl:top-[280px] left-[50%] translate-x-[-50%] translate-y-[-1%] z-20 flex justify-center">
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px] bg-primary rounded-full">
            <div className="top-0 left-0 absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px] bg-primary rounded-full animate-scale-pulse-1 "></div>
            <div className="top-0 left-0 absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px] bg-primary rounded-full animate-scale-pulse-2 "></div>
            <img
              src="/assets/img/banner.webp"
              alt="sensei"
              className="absolute top-[-29px] left-[20px] md:top-[-28px] md:left-[22px] lg:top-[-30px] lg:left-[35px] xl:top-[-70px] xl:left-[12px] w-[260px] lg:w-[340px] xl:w-auto animate-meditate"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
