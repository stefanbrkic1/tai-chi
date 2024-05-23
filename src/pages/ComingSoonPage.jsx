import { Link } from "react-router-dom";
import { useEffect } from "react";

function ComingSoonPage() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <>
      <div className="absolute w-full h-full bg-[url('/assets/img/transformation-2.webp')] bg-center bg-cover"></div>
      <div className="overflow-hidden absolute top-[-10px] whitespace-nowrap h-full">
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
      <nav className="absolute w-full mt-6">
        <div className="relative container-2 flex justify-between">
          <img
            src="/assets/style-elements/header-line.svg"
            alt=""
            className="max-[991px]:hidden max-[1070px]:max-w-[410px] max-[1199px]:max-w-[450px] absolute flip-vertical"
          />
          <div className="absolute left-[50%] translate-x-[-50%] pt-[13px]">
            <div className="">
              <Link to={"/"}>
                <img
                  src="/assets/style-elements/logo.svg"
                  alt="logo"
                  width="119"
                  height="21"
                />
              </Link>
            </div>
          </div>
          <img
            src="/assets/style-elements/header-line.svg"
            alt=""
            className="max-[991px]:hidden max-[1070px]:max-w-[410px] max-[1199px]:max-w-[450px] absolute rotate-180 right-0"
          />
        </div>
      </nav>

      <section className="relative flex container max-[575px]:h-auto h-screen min-h-[700px] max-[575px]:px-[12px]">
        <div className="flex-1 flex flex-col items-center justify-center gap-[70px] pb-[120px]">
          <div>
            <div className="flex justify-center mb-4">
              <img
                src="/assets/style-elements/star.svg"
                alt="star"
                className="opacity-[20%] animate-rotate max-[1399px]:w-[30px] max-[1399px]:h-[40px] w-[42px] h-[42px]"
              />
            </div>
            <h3 className=" font-tsushima text-secondary text-center max-[991px]:text-[26px] max-[1199px]:text-[28px] max-[1399px]:text-[38px] min-[1400px]:text-[48px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] mb-[3px] max-[767px]:text-center">
              COMING<span className="text-primary">SOON</span>
            </h3>
            <p className="text-center max-[767px]:text-[16px] text-[18px] font-generalsans font-bold">
              Embark on a yourney to harmony.
              <span className="text-primary"> Coming Soon, Stay Tuned!</span>
            </p>
          </div>

          <div className="w-full flex flex-col items-center">
            <h2 className="text-primary text-center font-generalbold max-[1199px]:text-[20px] text-[24px] mb-[14px]">
              Get Notification
              <span className="text-secondary"> Once We&apos;re Back</span>
            </h2>
            <div className="relative w-full max-w-[650px] bg-white">
              <input
                type="text"
                className="bg-transparent border-[1px] w-full border-primary max-[991px]:py-[13px] max-[991px]:px-[15px] py-[15px] px-[30px] placeholder:font-generalsans"
                placeholder="Enter E-mail"
              />
              <div className="absolute top-0 right-0 h-[100%] py-[5px] px-[5px] text-white font-satoshi">
                <div className="cursor-pointer w-full h-full flex justify-center items-center bg-primary hover:bg-secondary hover:text-primary px-[55px]">
                  <div className="w-[20px] h-[20px] bg-[url('/assets/style-elements/plane.svg')] bg-contain"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="absolute w-full z-30 bottom-0 bg-secondary">
        <div className="container py-[15px] font-generalsans text-[#909090] flex justify-between max-[1199px]:text-[14px] max-[575px]:text-[11px] max-[767px]:flex-col max-[767px]:items-center">
          <div className="max-[767px]:mb-2">
            Copyright © 2023. All rights reserved
          </div>
          <div className="flex items-center max-[991px]:gap-5 gap-10">
            <div className="hover:text-white cursor-pointer">
              Privacy Policy
            </div>
            <div className="hover:text-white cursor-pointer">Cookie Policy</div>
            <div className="hover:text-white cursor-pointer">Refund Policy</div>
            <div className="hover:text-white cursor-pointer">
              Terms of Policy
            </div>
          </div>
        </div>
      </div>

      <img
        src="/assets/style-elements/star-2.svg"
        alt="star"
        className="absolute z-10 top-[70px] right-[-65px] animate-rotate max-[767px]:w-[100px] min-[768px]:w-[130px] min-[992px]:w-[130px] min-[1200px]:w-[150px] min-[1400px]:w-[180px]"
      />
      <img
        src="/assets/style-elements/star-2.svg"
        alt="star"
        className="absolute z-10 left-[-65px] bottom-[90px] min-[768px]:bottom-[170px] animate-rotate max-[767px]:w-[100px] min-[768px]:w-[130px] min-[992px]:w-[130px] min-[1200px]:w-[150px] min-[1400px]:w-[180px]"
      />
    </>
  );
}

export default ComingSoonPage;
