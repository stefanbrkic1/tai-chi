import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import ExplorePrograms from "../components/ExplorePrograms";
import Testimonials from "../components/Testimonials";
import Articles from "../components/Articles";
import InstagramCaroussel from "../components/InstagramCaroussel";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Navbar />

      <section>
        <img
          src="/assets/style-elements/header-bg-1.webp"
          alt="style-image"
          className="absolute top-0 left-0"
        />

        <div className="absolute top-[-5px]">
          <img
            src="/assets/style-elements/mountains.webp"
            alt="mountain"
            className=""
          />
          <div className="absolute w-full h-full fade-opacity top-0 left-0"></div>
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
          <h1 className="absolute min-[768px]:top-[47px] min-[992px]:top-[73px] min-[1200px]:top-[63px] min-[1400px]:top-[80px] font-drukwide text-[34px] min-[576px]:text-[46px] min-[768px]:text-[84px] min-[992px]:text-[113px] min-[1200px]:text-[134px] min-[1400px]:text-[156px] min-[768px]:stroke-header text-transparent z-20">
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

          <Link to={"/programs"} className="max-[767px]:hidden">
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

      <section className="overflow-hidden relative bg-white mt-[660px] min-[576px]:mt-[660px] min-[768px]:mt-[510px] min-[992px]:mt-[660px] min-[1200px]:mt-[760px] min-[1400px]:mt-[1060px]">
        <div className="relative container max-[575px]:px-[12px]">
          <div className="absolute top-[40px] text-primary upright-text max-[991px]:text-[24px] max-[1199px]:text-[32px] min-[1200px]:text-[44px] leading-[35px]">
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
            WHO <span className="text-primary">WE ARE</span>
          </h2>
          <div className="text-center font-generalsans text-secondary max-[575px]:text-[14px] max-[767px]:text-[15px] min-[768px]:text-[16px] flex flex-col max-[991px]:gap-[15px] min-[992px]:gap-[20px] mb-[30px]">
            <p>
              We embody the essence of Tai Chi in our daily lives and strive to
              inspire others to embark on their own journey of self-discovery
              and well-being. With years of experience and a deep understanding
              of the art, we are committed to providing high-quality instruction
              and resources to individuals of all ages
            </p>
            <p>
              Our mission is to crfestival u novembrueate a supportive and
              inclusive community where practitioners can cultivate balance,
              harmony, and inner peace through the practice of Tai Chi. We
              believe in the power of mindful movement, breath, and meditation
              to enhance physical health, mental clarity, and emotional
              well-being. Whether you are a beginner or an experienced
              practitioner, our website offers a wealth of information,
              instructional videos, and resources to help you deepen your
              practice and unlock the transformative potential of Tai Chi.
            </p>
            <p>
              Join us on this incredible journey of self-discovery and let the
              beauty of Tai Chi enrich your life. Together, we can cultivate a
              harmonious and balanced existence, both on and off the practice
              mat. Explore our website, connect with our community, and embark
              on a path of holistic well-being with us.
            </p>
          </div>
          <div className="absolute right-0 z-10 text-secondary upright-text max-[991px]:text-[24px] max-[1199px]:text-[32px] min-[1200px]:text-[44px] max-[991px]:hidden min-[992px]:bottom-[-250px] max-[1199px]:bottom-[-250px] min-[1200px]:bottom-[-300px] min-[1400px]:bottom-[-400px] leading-[35px]">
            持不
          </div>
        </div>

        <div className="relative bg-[url('/assets/style-elements/who-we-are.webp')] bg-cover bg-no-repeat flex justify-center max-[767px]:items-end max-[991px]:items-center min-[992px]:items-end min-[768px]:h-[400px] h-300px] min-[992px]:h-[400px] min-[1200px]:h-[500px] min-[1400px]:h-[600px] min-[1700px]:h-[700px] min-[2000px]:h-[800px] min-[2300px]:h-[900px]">
          <div className="relative w-[220px] h-[220px] min-[576px]:w-[300px] min-[576px]:h-[300px] min-[992px]:w-[400px] min-[992px]:h-[400px] min-[1200px]:w-[450px] min-[1200px]:h-[450px] min-[1400px]:w-[550px] min-[1400px]:h-[550px] bg-primary rounded-full">
            <div className="top-0 left-0 absolute w-[220px] h-[220px] min-[576px]:w-[300px] min-[576px]:h-[300px] min-[992px]:w-[400px] min-[992px]:h-[400px] min-[1200px]:w-[450px] min-[1200px]:h-[450px] min-[1400px]:w-[550px] min-[1400px]:h-[550px] bg-primary rounded-full animate-scale-pulse-1 "></div>
            <div className="top-0 left-0 absolute w-[220px] h-[220px] min-[576px]:w-[300px] min-[576px]:h-[300px] min-[992px]:w-[400px] min-[992px]:h-[400px] min-[1200px]:w-[450px] min-[1200px]:h-[450px] min-[1400px]:w-[550px] min-[1400px]:h-[550px] bg-primary rounded-full animate-scale-pulse-2 "></div>
          </div>
          <div className="absolute z-20 bg-[url('/assets/img/who-we-are.webp')] bg-no-repeat bg-center w-full h-full bottom-[0px] max-[767px]:bg-contain min-[768px]:bg-contain min-[992px]:bg-cover min-[1200px]:bg-cover min-[1400px]:bg-cover">
            <img
              src="/assets/style-elements/cutted-border.webp"
              alt=""
              className="absolute max-[575px]:bottom-[0px] max-[614px]:bottom-[10px] max-[678px]:h-[40px] max-[700px]:bottom-[5px] max-[767px]:bottom-[0px] max-[810px]:bottom-[38px] max-[877px]:bottom-[25px] max-[938px]:bottom-[10px] min-[939px]:bottom-[0px] z-20 w-full"
            />
          </div>
          <div className="absolute bottom-[-20px] w-full h-[60px] bg-white"></div>

          <img
            src="/assets/style-elements/star-2.svg"
            alt="star"
            className="absolute z-10 top-[-30px] right-[-65px] animate-rotate max-[767px]:w-[100px] min-[768px]:w-[130px] min-[992px]:w-[130px] min-[1200px]:w-[150px] min-[1400px]:w-[180px]"
          />
          <img
            src="/assets/style-elements/star-2.svg"
            alt="star"
            className="absolute z-10 left-[-65px] bottom-[90px] min-[768px]:bottom-[170px] animate-rotate max-[767px]:w-[100px] min-[768px]:w-[130px] min-[992px]:w-[130px] min-[1200px]:w-[150px] min-[1400px]:w-[180px]"
          />
        </div>
      </section>

      <div className="relative ">
        <section className="relative container bg-white pt-[7%]">
          <div className="relative z-10 flex items-center max-[767px]:flex-col-reverse min-[768px]:flex-row max-[767px]:gap-[30px] min-[768px]:gap-[60px]">
            <div className="flex-1 max-[575px]:px-5 relative min-[576px]:px-[90px] min-[768px]:px-[0px]">
              <img
                src="/assets/img/basic-transformation.webp"
                alt="basic"
                className=""
              />
              <div className="absolute top-0 z-10 text-secondary upright-text max-[991px]:text-[24px] max-[1199px]:text-[32px] min-[1200px]:text-[44px] min-[992px]:bottom-[-250px] max-[1199px]:bottom-[-250px] min-[1200px]:bottom-[-300px] min-[1400px]:bottom-[-400px] leading-[35px]">
                信念
              </div>
            </div>
            <div className="flex-1 min-[768px]:flex-[1.5] min-[992px]:flex-1">
              <h3 className="font-tsushima flex justify-center gap-3 min-[768px]:flex-col min-[768px]:gap-0 text-primary text-[20px] max-[991px]:text-[26px] max-[1199px]:text-[28px] max-[1399px]:text-[38px] min-[1400px]:text-[48px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] max-[991px]:mb-[8px] max-[1399px]:mb-[12px] min-[1400px]:mb-[20px] max-[767px]:text-center">
                FROM <div className="text-secondary">BASIC</div>
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
        </section>
        <img
          src="/assets/img/transformation-1.webp"
          alt="style-img"
          className="absolute max-w-[1600px] mx-auto w-full max-[575px]:top-[660px] max-[767px]:top-[470px] max-[991px]:top-[220px] max-[1199px]:top-[360px] max-[1399px]:top-[360px] min-[1400px]:top-[360px]"
        />
        <h2 className="absolute w-full top-[115%] font-drukwide text-center max-[575px]:text-[20px] max-[767px]:text-[34px] max-[991px]:text-[49px] max-[1199px]:text-[66px] max-[1399px]:text-[78px] min-[1400px]:text-[95px]">
          <span>TRANSF</span>
          <img
            src="/assets/style-elements/transformation.svg"
            alt="Transformation icon"
            className="inline-block animate-rotate"
          />
          <span>RMATION</span>
        </h2>
      </div>
      <div className="container overflow-hidden relative pb-[6%]">
        <div className="relative z-10 flex items-center max-[767px]:flex-col-reverse min-[768px]:flex-row max-[767px]:gap-[30px] min-[768px]:gap-[60px] max-[375px]:pt-[70%] max-[575px]:pt-[65%] max-[767px]:pt-[55%] max-[991px]:pt-[30%] max-[1199px]:pt-[25%] max-[1399px]:pt-[23%] min-[1400px]:pt-[28%]">
          <div className="flex-1 min-[768px]:flex-[1.5] min-[992px]:flex-1">
            <h3 className="font-tsushima flex justify-center gap-3 min-[768px]:flex-col min-[768px]:gap-0 text-primary text-[20px] max-[991px]:text-[26px] max-[1199px]:text-[28px] max-[1399px]:text-[38px] min-[1400px]:text-[48px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] max-[991px]:mb-[8px] max-[1399px]:mb-[12px] min-[1400px]:mb-[20px] max-[767px]:text-center">
              TO <div className="text-secondary">PROFESSIONAL</div>
            </h3>
            <div className="font-generalsans max-[575px]:px-[12px] max-[575px]:text-[14px] max-[767px]:text-[15px] min-[768px]:text-[16px] max-[767px]:text-center">
              <p className="max-[991px]:mb-[15px] min-[992px]:mb-[20px]">
                Tellus viverra donec scelerisque vivamus ipsum proin nisl in.
                Diam duis ullamcorper tempor eget. Duis donec id est facilisi
                nullam id praesent rhoncus est. Auctor sed ornare quis porta
                blandit egestas a. Massa tincidunt cursus nisi varius.
              </p>
              <p>
                Adipiscing id nunc consequat in. Bibendum sed aliquam est non id
                dignissim et aliquet. Tellus nam integer nunc mauris velit etiam
                enim.
              </p>
            </div>
          </div>
          <div className="flex-1 max-[575px]:px-5 relative min-[576px]:px-[90px] min-[768px]:px-[0px]">
            <img
              src="/assets/img/professional-transformation.webp"
              alt="basic"
              className=""
            />
            <div className="absolute top-0 right-0 z-10 text-primary upright-text max-[991px]:text-[24px] max-[1199px]:text-[32px] min-[1200px]:text-[44px] min-[992px]:bottom-[-250px] max-[1199px]:bottom-[-250px] min-[1200px]:bottom-[-300px] min-[1400px]:bottom-[-400px] leading-[52px]">
              信念
            </div>
          </div>
        </div>
        <img
          src="/assets/img/transformation-2.webp"
          alt="style-img"
          className="absolute w-full max-[575px]:top-[660px] max-[767px]:top-[500px] max-[991px]:top-[210px] max-[1199px]:top-[300px] max-[1399px]:top-[290px] min-[1400px]:top-[360px]"
        />
      </div>

      <section className="overflow-hidden">
        <div className="flex justify-center mb-4 pt-[40px]">
          <img
            src="/assets/style-elements/star.svg"
            alt="star"
            className="opacity-[20%] animate-rotate max-[1199px]:w-[30px] max-[1199px]:h-[30px] max-[1399px]:w-[40px] max-[1399px]:h-[40px] w-[52px] h-[52px]"
          />
        </div>
        <h2 className="font-tsushima text-secondary text-center text-[28px] min-[768px]:text-[28px] min-[992px]:text-[36px] min-[1200px]:text-[52px] min-[1400px]:text-[62px] max-[991px]:mb-[25px] min-[1200px]:mb-[12px] min-[1400px]:mb-[24px]">
          WHAT WE <span className="text-primary">OFFER</span>
        </h2>
        <div className="container">
          <div className="flex max-[767px]:flex-col max-[767px]:items-center max-[767px]:gap-[30px] w-full justify-center">
            <div className="flex w-full">
              <div className="relative flex flex-col max-[767px]:flex-1 min-[768px]:px-[35px] items-center max-[767px]:mt-0 max-[991px]:mt-[40px] min-[768px]:mt-[60px] max-[767px]:after:content-[''] max-[767px]:after:absolute max-[767px]:after:w-[1px] max-[767px]:after:h-full max-[767px]:after:bg-secondary max-[767px]:after:bottom-[0px] max-[767px]:after:right-0 max-[767px]:after:opacity-20 min-[768px]:after:content-[''] min-[768px]:after:absolute min-[768px]:after:w-[1px] min-[768px]:after:h-[70px] min-[768px]:after:bg-secondary min-[768px]:after:bottom-[25%] min-[768px]:after:right-0 min-[768px]:after:opacity-20">
                <img
                  src="/assets/img/tai-chi-classes.svg"
                  alt="offer"
                  className="max-[991px]:w-[75px] max-[1399px]:w-[90px] max-w-[none]"
                />
                <h2 className="font-generalsans  max-[767px]:max-w-[100px] text-center max-[1399px]:text-[16px] max-[1399px]:leading-[22px] min-[1400px]:text-[18px] min-[1400px]:leading-[27px]">
                  Tai Chi Classes
                </h2>
              </div>

              <div className="relative flex flex-col max-[767px]:flex-1 min-[768px]:px-[35px] items-center max-[767px]:mt-0 max-[991px]:mt-[10px] min-[768px]:mt-[20px] min-[768px]:after:content-[''] min-[768px]:after:absolute min-[768px]:after:w-[1px] min-[768px]:after:h-[70px] min-[768px]:after:bg-secondary min-[768px]:after:bottom-[35%] min-[768px]:after:right-0 min-[768px]:after:opacity-20">
                <img
                  src="/assets/img/workshops-and-retreats.svg"
                  alt="offer"
                  className="max-[991px]:w-[75px] max-[1399px]:w-[90px] max-w-[none]"
                />
                <h2 className="font-generalsans  max-[767px]:max-w-[120px] text-center max-[1399px]:text-[16px] max-[1399px]:leading-[22px] min-[1400px]:text-[18px] min-[1400px]:leading-[27px]">
                  Workshops and Retreats
                </h2>
              </div>
            </div>

            <div className="flex w-full">
              <div className="relative flex flex-col max-[767px]:flex-1 min-[768px]:px-[35px] items-center max-[767px]:after:content-[''] max-[767px]:after:absolute max-[767px]:after:w-[1px] max-[767px]:after:h-full max-[767px]:after:bg-secondary max-[767px]:after:bottom-[0px] max-[767px]:after:right-0 max-[767px]:after:opacity-20">
                <img
                  src="/assets/img/online-resources.svg"
                  alt="offer"
                  className="max-[991px]:w-[75px] max-[1399px]:w-[90px] max-w-[none]"
                />
                <h2 className="font-generalsans max-[767px]:max-w-[120px] text-center max-[1399px]:text-[16px] max-[1399px]:leading-[22px] min-[1400px]:text-[18px] min-[1400px]:leading-[27px]">
                  Online Resources
                </h2>
              </div>

              <div className="relative flex flex-col max-[767px]:flex-1 min-[768px]:px-[35px] items-center max-[767px]:mt-0 max-[991px]:mt-[10px] min-[768px]:mt-[20px] min-[768px]:before:content-[''] min-[768px]:before:absolute min-[768px]:before:w-[1px] min-[768px]:before:h-[70px] min-[768px]:before:bg-secondary min-[768px]:before:bottom-[35%] min-[768px]:before:left-0 min-[768px]:before:opacity-20">
                <img
                  src="/assets/img/personalized-coaching.svg"
                  alt="offer"
                  className="max-[991px]:w-[75px] max-[1399px]:w-[90px] max-w-[none]"
                />
                <h2 className="font-generalsans  max-[767px]:max-w-[120px] text-center max-[1399px]:text-[16px] max-[1399px]:leading-[22px] min-[1400px]:text-[18px] min-[1400px]:leading-[27px]">
                  Personalized Coaching
                </h2>
              </div>
            </div>

            <div className="relative flex flex-col min-[768px]:px-[35px] items-center max-[767px]:mt-0 max-[991px]:mt-[40px] min-[768px]:mt-[60px] min-[768px]:before:content-[''] min-[768px]:before:absolute min-[768px]:before:w-[1px] min-[768px]:before:h-[70px] min-[768px]:before:bg-secondary min-[768px]:before:bottom-[25%] min-[768px]:before:left-0 min-[768px]:before:opacity-20">
              <img
                src="/assets/img/community-events.svg"
                alt="offer"
                className="max-[991px]:w-[75px] max-[1399px]:w-[90px] max-w-[none]"
              />
              <h2 className="font-generalsans max-[767px]:max-w-[120px] text-center max-[1399px]:text-[16px] max-[1399px]:leading-[22px] min-[1400px]:text-[18px] min-[1400px]:leading-[27px]">
                Community Events
              </h2>
            </div>
          </div>
        </div>

        <div className="relative max-[767px]:pt-[70px] bg-[url('/assets/style-elements/who-we-are.webp')] bg-cover bg-no-repeat flex justify-center max-[767px]:items-end max-[991px]:items-center min-[992px]:items-end min-[768px]:h-[400px] h-300px] min-[992px]:h-[400px] min-[1200px]:h-[500px] min-[1400px]:h-[600px] min-[1700px]:h-[700px] min-[2000px]:h-[800px] min-[2300px]:h-[900px]">
          <div className="relative w-[220px] h-[220px] min-[576px]:w-[300px] min-[576px]:h-[300px] min-[992px]:w-[400px] min-[992px]:h-[400px] min-[1200px]:w-[450px] min-[1200px]:h-[450px] min-[1400px]:w-[550px] min-[1400px]:h-[550px] bg-primary rounded-full">
            <div className="top-0 left-0 absolute w-[220px] h-[220px] min-[576px]:w-[300px] min-[576px]:h-[300px] min-[992px]:w-[400px] min-[992px]:h-[400px] min-[1200px]:w-[450px] min-[1200px]:h-[450px] min-[1400px]:w-[550px] min-[1400px]:h-[550px] bg-primary rounded-full animate-scale-pulse-1 "></div>
            <div className="top-0 left-0 absolute w-[220px] h-[220px] min-[576px]:w-[300px] min-[576px]:h-[300px] min-[992px]:w-[400px] min-[992px]:h-[400px] min-[1200px]:w-[450px] min-[1200px]:h-[450px] min-[1400px]:w-[550px] min-[1400px]:h-[550px] bg-primary rounded-full animate-scale-pulse-2 "></div>
          </div>
          <div className="absolute z-20 bg-[url('/assets/img/what-we-offers.webp')] bg-no-repeat bg-center w-full h-full bottom-[0px] max-[767px]:bg-contain min-[768px]:bg-contain min-[992px]:bg-cover min-[1200px]:bg-cover min-[1400px]:bg-cover">
            <img
              src="/assets/style-elements/cutted-border.webp"
              alt=""
              className="absolute max-[488px]:bottom-[57px] min-[489px]:bottom-[12%] min-[576px]:bottom-[15.5%] min-[701px]:bottom-[15%] min-[720px]:bottom-[13%] min-[762px]:bottom-[12%] min-[768px]:bottom-[13%] max-[678px]:h-[40px] min-[818px]:bottom-[10%] min-[888px]:bottom-[7%] min-[951px]:bottom-[5%] min-[992px]:bottom-[0px] z-20 w-full "
            />
          </div>
          <div className="absolute bottom-[-1px] min-[765px]:bottom-[0px] w-full h-[60px] bg-white"></div>

          <img
            src="/assets/style-elements/star-2.svg"
            alt="star"
            className="absolute z-10 left-[-65px] bottom-[90px] min-[768px]:bottom-[170px] animate-rotate max-[767px]:w-[100px] min-[768px]:w-[130px] min-[992px]:w-[130px] min-[1200px]:w-[150px] min-[1400px]:w-[180px]"
          />
        </div>
      </section>

      <PricingSection />

      <ExplorePrograms />

      <Testimonials />

      <Articles />

      <InstagramCaroussel />

      <Footer />
    </>
  );
}

export default LandingPage;
