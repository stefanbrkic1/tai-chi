import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ContactPage() {
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
      <section className="relative max-[575px]:pt-[4%] max-[991px]:pt-[2%] pt-[5%] max-[575px]:pb-[13%] max-[991px]:pb-[10%] pb-[5%]">
        <div className="flex justify-center mb-4 pt-[40px]">
          <img
            src="/assets/style-elements/star.svg"
            alt="star"
            className="opacity-[20%] animate-rotate max-[1199px]:w-[30px] max-[1199px]:h-[30px] max-[1399px]:w-[40px] max-[1399px]:h-[40px] w-[52px] h-[52px]"
          />
        </div>
        <h2 className="font-tsushima text-primary text-center text-[28px] min-[768px]:text-[28px] min-[992px]:text-[36px] min-[1200px]:text-[52px] min-[1400px]:text-[62px]">
          CONTACT <span className="text-secondary">US</span>
        </h2>
        <div className="flex justify-center font-generalsans max-[991px]:text-[16px] text-[18px]">
          <div className="flex max-[991px]:gap-2 gap-3">
            <Link to={"/"} className="text-black opacity-70 hover:opacity-100">
              Home
            </Link>
            <span className="text-primary">|</span>
            <span className="text-primary">Contact Us</span>
          </div>
        </div>
      </section>

      <section className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.22155558685!2d-105.01991994255846!3d39.76448633496159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1716311756783!5m2!1sen!2srs"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full max-[575px]:h-[330px] max-[991px]:h-[400px] max-[1199px]:h-[500px] h-[600px]"
        ></iframe>
        <div className="absolute bg-[url('/assets/style-elements/cutted-border.webp')] w-full h-[33px] top-0 rotate-180"></div>
        <div className="absolute bg-[url('/assets/style-elements/cutted-border.webp')] w-full h-[33px] bottom-0"></div>
      </section>

      <div className="relative">
        <img
          src="/assets/img/transformation-1.webp"
          alt="style-img"
          className="absolute max-w-[1600px] mx-auto w-full top-[-60px]"
        />
        <section className="relative container flex flex-col items-center max-[575px]:px-[12px] ">
          <div className="bg-primary max-[575px]:px-[20px] p-[35px] max-[575px]:max-w-none max-[991px]:max-w-[500px] max-w-[520px] translate-y-[-80px] clip-contact">
            <div className="flex justify-center mb-4">
              <img
                src="/assets/style-elements/union.svg"
                alt="star"
                className="animate-rotate max-[1199px]:w-[30px] max-[1199px]:h-[30px] max-[1399px]:w-[40px] max-[1399px]:h-[40px] w-[52px] h-[52px]"
              />
            </div>
            <h3 className="font-tsushima text-white max-[575px]:text-[26px] max-[991px]:text-[30px] text-[34px] mb-[25px] text-center">
              WRITE US
            </h3>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="placeholder:font-generalsans border-[1px] border-white bg-transparent w-full py-[14px] px-[24px] text-[15px] mb-3 placeholder:text-white"
            />
            <input
              type="text"
              placeholder="Enter E-mail"
              className="placeholder:font-generalsans border-[1px] border-white bg-transparent w-full py-[14px] px-[24px] text-[15px] mb-3 placeholder:text-white"
            />
            <input
              type="text"
              placeholder="Enter Subject"
              className="placeholder:font-generalsans border-[1px] border-white bg-transparent w-full py-[14px] px-[24px] text-[15px] mb-3 placeholder:text-white"
            />
            <textarea
              placeholder="Write Your Concern"
              className="resize-none placeholder:font-generalsans border-[1px] border-white bg-transparent w-full py-[14px] px-[24px] text-[15px] mb-3 placeholder:text-white"
            />
            <button className="bg-white hover:text-white text-primary font-generalbold text-[15px] max-[575px]:px-[15px] max-[575px]:py-[12px] w-full px-[20px] py-[14px] clip-button hover:bg-secondary transition-all">
              SUBMIT
            </button>
          </div>

          <div className="flex gap-5 max-[575px]:mb-[20px] max-[575px]:translate-y-[-40px] mb-[80px] w-full justify-center max-[767px]:flex-col">
            <div className="relative bg-secondary text-white py-[50px] pl-[50px] max-[991px]:w-full max-[991px]:pr-[50px] pr-[200px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <img
                    src="/assets/style-elements/union.svg"
                    alt=""
                    className="absolute animate-rotate"
                  />
                  <div className="relative z-10 w-[30px] h-[30px] bg-[url('/assets/style-elements/contact-call.svg')] bg-contain bg-no-repeat"></div>
                </div>
                <div className="font-drukwide max-[575px]:text-[20px] max-[991px]:text-[22px] text-[24px]">
                  Call Us
                </div>
              </div>
              <div className="mb-3 font-generalsans">
                <div className="font-generalbold text-primary">
                  Business Inquiry
                </div>
                <div>+1 6533 (452) 488</div>
              </div>
              <div className="font-generalsans">
                <div className="font-generalbold text-primary">Toll Free</div>
                <div>
                  1234 567 890 <span className="opacity-60 mx-2">Or</span> 1234
                  567 890
                </div>
              </div>

              <div className="absolute bg-[url('/assets/style-elements/contact-us-mask.webp')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
              <div className="absolute bg-[url('/assets/style-elements/contact-us-mask.webp')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
            </div>

            <div className="relative bg-secondary text-white py-[50px] pl-[50px] max-[991px]:w-full max-[991px]:pr-[50px] pr-[200px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <img
                    src="/assets/style-elements/union.svg"
                    alt=""
                    className="absolute animate-rotate"
                  />
                  <div className="relative z-10 w-[30px] h-[30px] bg-[url('/assets/style-elements/contact-mail.svg')] bg-contain bg-no-repeat"></div>
                </div>
                <div className="font-drukwide max-[575px]:text-[20px] max-[991px]:text-[22px] text-[24px]">
                  Mail Us
                </div>
              </div>
              <div className="mb-3 font-generalsans">
                <div className="font-generalbold text-primary">
                  Business Inquiry
                </div>
                <a
                  href="mailto:business@gymfit.email"
                  className="cursor-pointer"
                >
                  business@gymfit.email
                </a>
              </div>
              <div className="font-generalsans">
                <div className="font-generalbold text-primary">Toll Free</div>
                <a
                  href="mailto:support@gymfit.email"
                  className="cursor-pointer hover:opacity-60"
                >
                  support@gymfit.email
                </a>
              </div>

              <div className="absolute bg-[url('/assets/style-elements/contact-us-mask.webp')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
              <div className="absolute bg-[url('/assets/style-elements/contact-us-mask.webp')] bg-cover top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;
