import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
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

      <div className="max-[991px]:absolute max-[991px]:top-[40%] max-[991px]:left-[50%] max-[991px]:translate-x-[-50%] max-[575px]:translate-y-[-50%] max-[991px]:translate-y-[-60%] w-full">
        <div className="min-[992px]:pt-[90px] relative z-20 flex flex-col items-center">
          <h3 className=" font-tsushima text-secondary text-center max-[991px]:text-[26px] max-[1199px]:text-[28px] max-[1399px]:text-[38px] min-[1400px]:text-[48px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] mb-[3px] max-[767px]:text-center">
            OOP<span className="text-primary">S</span>
          </h3>
          <p className="text-center max-[767px]:text-[16px] text-[18px] font-generalsans font-bold">
            We can&apos;t find the page that you&apos;re looking for{" "}
            <span className="text-primary">:(</span>
          </p>
          <div className="relative max-[991px]:w-[200px] max-[991px]:h-[200px] max-[1199px]:w-[250px] max-[1199px]:h-[250px] max-[1399px]:w-[270px] max-[1399px]:h-[270px] w-[350px] h-[350px] bg-primary rounded-full mt-[50px]">
            <div className="top-0 left-0 absolute max-[991px]:w-[200px] max-[991px]:h-[200px] max-[1199px]:w-[250px] max-[1199px]:h-[250px] max-[1399px]:w-[270px] max-[1399px]:h-[270px] w-[350px] h-[350px] bg-primary rounded-full animate-scale-pulse-1 "></div>
            <div className="top-0 left-0 absolute max-[991px]:w-[200px] max-[991px]:h-[200px] max-[1199px]:w-[250px] max-[1199px]:h-[250px] max-[1399px]:w-[270px] max-[1399px]:h-[270px] w-[350px] h-[350px] bg-primary rounded-full animate-scale-pulse-2 "></div>

            <div className="absolute max-[575px]:hidden max-[767px]:left-[-130px] max-[1399px]:left-[-200px] left-[-180px] top-20 text-primary upright-text max-[991px]:text-[24px] max-[1199px]:text-[32px] min-[1200px]:text-[44px] leading-[35px]">
              月次
            </div>
            <div className="absolute max-[575px]:hidden max-[767px]:right-[-140px] max-[1399px]:right-[-220px] right-[-150px] max-[575px]:bottom-[74px] max-[1399px]:bottom-10 bottom-20 text-secondary upright-text max-[991px]:text-[24px] max-[1199px]:text-[32px] min-[1200px]:text-[44px] leading-[35px]">
              年間
            </div>
          </div>
          <img
            src="/assets/img/404.webp"
            alt=""
            className="absolute max-[991px]:top-[100px] top-[200px] max-[767px]:w-[100%]"
          />
        </div>
      </div>

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

export default NotFoundPage;
