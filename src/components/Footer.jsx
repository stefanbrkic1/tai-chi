import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="relative bg-primary">
      <footer className="bg-primary pt-[100px] pb-[60px] container flex max-[767px]:flex-col items-stretch max-[767px]:gap-[25px] max-[991px]:gap-[50px] gap-[80px] max-[575px]:px-[12px]">
        <div className="flex flex-col justify-between max-[767px]:items-center">
          <div className="max-[767px]:flex max-[767px]:flex-col max-[767px]:items-center">
            <img
              src="/assets/style-elements/logo-light.svg"
              alt="logo"
              className="max-[991px]:w-[140px] max-[991px]:h-[24px]"
            />
            <h3 className="font-generalsans text-white mt-5">
              Enhance you physical and mental well-being
            </h3>
          </div>
          <div className="max-[767px]:hidden flex items-center gap-6 mt-5">
            <img
              src="/assets/style-elements/facebook.svg"
              alt="facebook"
              className="hover:scale-[1.2] cursor-pointer transition-all duration-200"
            />
            <img
              src="/assets/style-elements/footer-insta.svg"
              alt="instagram"
              className="hover:scale-[1.2] cursor-pointer transition-all duration-200"
            />
            <img
              src="/assets/style-elements/twitter.svg"
              alt="twitter"
              className="hover:scale-[1.2] cursor-pointer transition-all duration-200"
            />
            <img
              src="/assets/style-elements/youtube.svg"
              alt="youtube"
              className="hover:scale-[1.2] cursor-pointer transition-all duration-200"
            />
            <img
              src="/assets/style-elements/linkedin.svg"
              alt="linkedin"
              className="hover:scale-[1.2] cursor-pointer transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-end max-[767px]:items-center">
          <div className="relative w-full max-w-[650px] bg-white">
            <input
              type="text"
              className="bg-primary border-[1px] w-full border-white placeholder:text-white max-[991px]:py-[13px] max-[991px]:px-[15px] py-[15px] px-[30px] placeholder:font-generalsans min-[768px]:min-w-[420px]"
              placeholder="ENTER E-MAIL"
            />
            <div className="absolute top-0 right-0 h-[100%] py-[5px] px-[5px] text-white font-satoshi">
              <div className="cursor-pointer w-full h-full flex justify-center items-center bg-secondary hover:bg-white hover:text-primary px-[30px]">
                <div>SUBSCRIBE</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-5 font-generalsans text-white max-[575px]:text-[13px] max-[1199px]:text-[14px] min-[1200px]:text-[16px] text-nowrap">
            <Link to={"/"}>Home</Link>
            <Link to={"/programs"}>Programs</Link>
            <Link to={"/contact"}>Contact Us</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/blogs"}>Blogs</Link>
          </div>

          <div className="min-[768px]:hidden flex items-center gap-6 mt-5">
            <img src="/assets/style-elements/facebook.svg" alt="facebook" />
            <img
              src="/assets/style-elements/footer-insta.svg"
              alt="instagram"
            />
            <img src="/assets/style-elements/twitter.svg" alt="twitter" />
            <img src="/assets/style-elements/youtube.svg" alt="youtube" />
            <img src="/assets/style-elements/linkedin.svg" alt="linkedin" />
          </div>

          <img
            src="/assets/style-elements/card.svg"
            alt="cards"
            className="mt-5"
          />
        </div>
      </footer>
      <div className="bg-secondary">
        <div className="container py-[15px] font-generalsans text-[#909090] flex justify-between max-[1199px]:text-[14px] max-[575px]:text-[11px] max-[767px]:flex-col max-[767px]:items-center">
          <div className="max-[767px]:mb-2">
            Copyright © 2023. All rights reserved
          </div>
          <div className="flex items-center max-[991px]:gap-5 gap-10">
            <div className="hover:text-white">Privacy Policy</div>
            <div className="hover:text-white">Cookie Policy</div>
            <div className="hover:text-white">Refund Policy</div>
            <div className="hover:text-white">Terms of Policy</div>
          </div>
        </div>
      </div>
      <img
        src="/assets/style-elements/cutted-border.webp"
        alt=""
        className="rotate-180 absolute top-[-5px] min-[1500px]:hidden"
      />
      <div className="max-[1499px]:hidden absolute top-[-5px] w-full h-[40px] bg-[url('/assets/style-elements/cutted-border.webp')] bg-cover rotate-180"></div>
    </div>
  );
}

export default Footer;
