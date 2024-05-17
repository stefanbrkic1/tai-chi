import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function openSidebar() {
    setIsSidebarOpen(true);
    document.body.classList.add("overflow-hidden");
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
    document.body.classList.remove("overflow-hidden");
  }

  // Close sidebar if window is resized above 1024px
  useEffect(() => {
    const handleSidebarOnResize = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleSidebarOnResize);

    return () => window.removeEventListener("resize", handleSidebarOnResize);
  }, []);

  function scrollToPricing() {
    const pricingSection = document.getElementById("pricingSection");
    pricingSection.scrollIntoView({ behavior: "smooth" });
  }

  function handlePricingScroll() {
    if (location.pathname === "/") {
      scrollToPricing();
    } else {
      setTimeout(() => {
        scrollToPricing();
      }, 0);
    }
  }

  return (
    <>
      <div className="relative bg-primary text-center font-satoshi text-[10px] sm:text-[12px] text-white py-[7px] sm:py-[6px] z-40">
        GET OUR BEST DEALS ON THIS LUNAR YEAR{" "}
        <span className="text-black">30% FLAT OFF</span>
      </div>

      <nav className="hidden min-[993px]:block min-[993px]:absolute w-full font-generalsans text-[14px] text-secondary z-40">
        <div className="container flex items-stretch justify-between">
          <ul className="flex items-center flex-1 justify-start max-[1199px]:gap-[30px] max-[1400px]:gap-[40px] min-[1401px]:gap-[60px] fade-border-bottom-right fade-border-bottom">
            <Link
              to={"/"}
              className={`transition-all duration-500 relative h-full flex items-center justify-center after:content-[''] after:h-[2px] after:bg-primary after:absolute after:bottom-[-2px] after:transition-all after:duration-500 ${
                location.pathname === "/"
                  ? "text-primary after:w-[22px]"
                  : "hover:text-primary after:w-0 hover:after:w-[22px]"
              }`}
            >
              HOME
            </Link>
            <Link
              to={"/about"}
              className={`transition-all duration-500 relative h-full flex items-center justify-center after:content-[''] after:h-[2px] after:bg-primary after:absolute after:bottom-[-2px] after:transition-all after:duration-500 ${
                location.pathname === "/about"
                  ? "text-primary after:w-[22px]"
                  : "hover:text-primary after:w-0 hover:after:w-[22px]"
              }`}
            >
              ABOUT US
            </Link>
            <Link
              to={"/programs"}
              className={`transition-all duration-500 relative h-full flex items-center justify-center after:content-[''] after:h-[2px] after:bg-primary after:absolute after:bottom-[-2px] after:transition-all after:duration-500 ${
                location.pathname === "/programs"
                  ? "text-primary after:w-[22px]"
                  : "hover:text-primary after:w-0 hover:after:w-[22px]"
              }`}
            >
              PROGRAMS
            </Link>
            <Link
              to={"/"}
              onClick={handlePricingScroll}
              className="cursor-pointer transition-all duration-500 relative h-full flex items-center justify-center after:content-[''] after:h-[2px] after:bg-primary after:absolute after:bottom-[-2px] after:transition-all after:duration-500 hover:text-primary after:w-0 hover:after:w-[22px]"
            >
              PRICING
            </Link>
          </ul>
          <div className="pt-[19px] pb-[20px] fade-border-left fade-border-right">
            <div className="min-[993px]:px-[35px] xl:px-[55px] 2xl:px-[65px]">
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
          <ul className="flex items-center flex-1 justify-end max-[1200px]:gap-[30px] max-[1400px]:gap-[40px] min-[1401px]:gap-[60px] fade-border-bottom-left">
            <Link
              to={"/gallery"}
              className={`transition-all duration-500 relative h-full flex items-center justify-center after:content-[''] after:h-[2px] after:bg-primary after:absolute after:bottom-[-2px] after:transition-all after:duration-500 ${
                location.pathname === "/gallery"
                  ? "text-primary after:w-[22px]"
                  : "hover:text-primary after:w-0 hover:after:w-[22px]"
              }`}
            >
              GALLERY
            </Link>

            <div className="group transition-all duration-500 relative h-full flex items-center justify-center after:content-[''] hover:after:h-[2px] after:bg-primary after:absolute after:bottom-[-2px] after:transition-all after:duration-500 hover:text-primary hover:after:w-[130px] cursor-pointer z-10">
              PAGES
              <span>
                <img
                  src="assets/style-elements/dropdown.webp"
                  alt="dropdown icon"
                  width="12"
                  height="6"
                  className="ml-[6px]"
                />
              </span>
              <div className="text-secondary top-[60px] w-[130px] h-[0px] overflow-hidden group-hover:h-[75px] absolute bg-white flex flex-col transition-[height] duration-500 shadow-md">
                <Link to={"/coming-soon"} className="hover:text-primary m-2">
                  COMING SOON
                </Link>
                <Link to={"/*"} className="hover:text-primary m-2">
                  404 PAGE
                </Link>
              </div>
            </div>

            <Link
              to={"/blog"}
              className={`transition-all duration-500 relative h-full flex items-center justify-center after:content-[''] after:h-[2px] after:bg-primary after:absolute after:bottom-[-2px] after:transition-all after:duration-500 ${
                location.pathname === "/blog"
                  ? "text-primary after:w-[22px]"
                  : "hover:text-primary after:w-0 hover:after:w-[22px]"
              }`}
            >
              BLOG
            </Link>
            <Link
              to={"/contact"}
              className={`transition-all duration-500 relative h-full flex items-center justify-center after:content-[''] after:h-[2px] after:bg-primary after:absolute after:bottom-[-2px] after:transition-all after:duration-500 ${
                location.pathname === "/contact"
                  ? "text-primary after:w-[22px]"
                  : "hover:text-primary after:w-0 hover:after:w-[22px]"
              }`}
            >
              CONTACT US
            </Link>
          </ul>
        </div>
      </nav>

      <nav className="relative min-[992px]:hidden p-[12px] z-40">
        <div className="container flex items-center justify-between">
          <Link to={"/"}>
            <img
              src="/assets/style-elements/logo.svg"
              alt="logo"
              width="119"
              height="21"
            />
          </Link>

          <button
            onClick={openSidebar}
            className="w-[47px] p-2 flex flex-col items-end"
          >
            <div className="w-[60%] h-[3px] bg-primary rounded-2xl mb-[4px]"></div>
            <div className="w-[80%] h-[3px] bg-primary rounded-2xl mb-[4px]"></div>
            <div className="w-full h-[3px] bg-primary rounded-2xl"></div>
          </button>
        </div>

        <div
          className={`font-generalsans top-0 right-0 font-bold bg-white fixed z-50 h-screen w-[270px] sm:w-[300px] p-5 flex flex-col transition-all duration-500 ${
            isSidebarOpen ? "translate-x-[0px]" : "translate-x-[120%]"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link to={"/"}>
              <img
                src="/assets/style-elements/logo.svg"
                alt="logo"
                width="119"
                height="21"
              />
            </Link>
            <button
              onClick={closeSidebar}
              style={{
                backgroundImage: "url(/assets/style-elements/xmark-solid.svg)",
              }}
              className="w-[30px] h-[30px] bg-center bg-no-repeat bg-contain"
            ></button>
          </div>
          <div className="flex-1 flex items-center">
            <div className="w-full flex flex-col gap-[20px]">
              <div>
                <Link
                  to={"/"}
                  onClick={closeSidebar}
                  className={`transition-all duration-300 ${
                    location.pathname === "/"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                >
                  HOME
                </Link>
              </div>

              <div>
                <Link
                  to={"/about"}
                  onClick={closeSidebar}
                  className={`transition-all duration-300 ${
                    location.pathname === "/about"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                >
                  ABOUT US
                </Link>
              </div>

              <div>
                <Link
                  to={"/programs"}
                  onClick={closeSidebar}
                  className={`transition-all duration-300 ${
                    location.pathname === "/programs"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                >
                  PROGRAMS
                </Link>
              </div>

              <div>
                <Link
                  to={"/"}
                  onClick={() => {
                    closeSidebar();
                    handlePricingScroll();
                  }}
                  className="transition-all duration-300 hover:text-primary"
                >
                  PRICING
                </Link>
              </div>

              <div>
                <Link
                  to={"/gallery"}
                  onClick={closeSidebar}
                  className={`transition-all duration-300 ${
                    location.pathname === "/gallery"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                >
                  GALLERY
                </Link>
              </div>

              <div className="group transition-all duration-500 relative h-full hover:text-primary cursor-pointer flex flex-col">
                <div className="flex items-center">
                  PAGES
                  <span>
                    <img
                      src="assets/style-elements/dropdown.webp"
                      alt="dropdown icon"
                      width="12"
                      height="6"
                      className="ml-2"
                    />
                  </span>
                </div>
                <div className="transition-[height] duration-500 h-[0px] overflow-hidden group-hover:h-[107px] flex items-center">
                  <div className="text-secondary w-full h-[0px] overflow-hidden group-hover:h-[80px] bg-white flex flex-col transition-all duration-500 shadow-md border-t-2 group-hover: border-primary">
                    <Link
                      to={"/coming-soon"}
                      onClick={closeSidebar}
                      className="hover:text-primary m-2"
                    >
                      COMING SOON
                    </Link>
                    <Link to={"/*"} className="hover:text-primary m-2">
                      404 PAGE
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  to={"/blog"}
                  onClick={closeSidebar}
                  className={`transition-all duration-300 ${
                    location.pathname === "/blog"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                >
                  BLOG
                </Link>
              </div>

              <div>
                <Link
                  to={"/contact"}
                  onClick={closeSidebar}
                  className={`transition-all duration-300 ${
                    location.pathname === "/contact"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
          <img
            src="/assets/style-elements/cutted-border-2.webp"
            alt="styling-element"
            className="absolute left-[-35px] top-[-40px]"
          />
        </div>
        {isSidebarOpen && (
          <div className="overlay fixed w-full h-full bg-black z-40 top-0 left-0"></div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
