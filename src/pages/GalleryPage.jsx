import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import fetchImages from "../services/imagesApi";

function GalleryPage() {
  const [pageToFetch, setPageToFetch] = useState(1);
  const [scrollYPosition, setScrollYPosition] = useState(window.scrollY);

  function loadMoreImages() {
    fetchImages(pageToFetch)
      .then((data) => {
        setImageGroups((prevVal) => [...prevVal, data]);
      })
      .catch((error) => {
        console.error("Error or no more pages in gallery:", error);
        setPageToFetch(null);
      })
      .finally(() => {
        setTimeout(() => {
          window.scrollTo(0, scrollYPosition);
        }, 0);
      });

    setPageToFetch((prevVal) => prevVal + 1);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollYPosition(window.scrollY);
    });

    return () =>
      window.removeEventListener("scroll", () => {
        setScrollYPosition(window.scrollY);
      });
  }, []);

  const [imageGroups, setImageGroups] = useState([
    {
      img1: "/assets/img/image-one.webp",
      img2: "/assets/img/image-two.webp",
      img3: "/assets/img/image-three.webp",
      img4: "/assets/img/image-four.webp",
      img5: "/assets/img/image-five.webp",
      img6: "/assets/img/image-six.webp",
      img7: "/assets/img/image-seven.webp",
      img8: "/assets/img/image-eight.webp",
      img9: "/assets/img/image-nine.webp",
      img10: "/assets/img/image-ten.webp",
    },
  ]);

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

      <section className="relative max-[575px]:pt-[4%] max-[991px]:pt-[2%] pt-[5%] max-[575px]:pb-[13%] max-[991px]:pb-[10%] pb-[8%]">
        <div className="flex justify-center mb-4 pt-[40px]">
          <img
            src="/assets/style-elements/star.svg"
            alt="star"
            className="opacity-[20%] animate-rotate max-[1199px]:w-[30px] max-[1199px]:h-[30px] max-[1399px]:w-[40px] max-[1399px]:h-[40px] w-[52px] h-[52px]"
          />
        </div>
        <h2 className="font-tsushima text-primary text-center text-[28px] min-[768px]:text-[28px] min-[992px]:text-[36px] min-[1200px]:text-[52px] min-[1400px]:text-[62px]">
          GALLERY
        </h2>
        <div className="flex justify-center font-generalsans max-[991px]:text-[16px] text-[18px]">
          <div className="flex max-[991px]:gap-2 gap-3">
            <Link to={"/"} className="text-black opacity-70 hover:opacity-100">
              Home
            </Link>
            <span className="text-primary">|</span>
            <span className="text-primary">Gallery</span>
          </div>
        </div>
      </section>

      <div className="max-[575px]:px-[12px]">
        <section className="relative container pb-[100px]">
          {imageGroups.length > 0 &&
            imageGroups.map((group) => {
              return (
                <div
                  key={uuidv4()}
                  className="grid max-[991px]:grid-rows-8 max-[991px]:grid-cols-2 grid-rows-5 grid-cols-4 max-[575px]:gap-2 max-[1199px]:gap-4 gap-5 max-[575px]:h-[1400px] max-[767px]:h-[1800px] max-[991px]:h-[2200px] max-[1199px]:h-[1200px] h-[1550px] max-[1199px]:pb-4 max-[575px]:pb-2 pb-5"
                >
                  <div
                    style={{ backgroundImage: `url('${group.img1}')` }}
                    className={`relative bg-cover bg-center max-[991px]:col-span-2 col-span-4 row-span-2`}
                  >
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
                  </div>
                  <div
                    style={{ backgroundImage: `url('${group.img2}')` }}
                    className={`relative bg-cover bg-center`}
                  >
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
                  </div>
                  <div
                    style={{ backgroundImage: `url('${group.img3}')` }}
                    className={`relative bg-cover bg-center`}
                  >
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
                  </div>
                  <div
                    style={{ backgroundImage: `url('${group.img4}')` }}
                    className={`relative bg-cover bg-center`}
                  >
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
                  </div>
                  <div
                    style={{ backgroundImage: `url('${group.img5}')` }}
                    className={`relative bg-cover bg-center`}
                  >
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
                  </div>
                  <div
                    style={{ backgroundImage: `url('${group.img6}')` }}
                    className={`relative bg-cover bg-center`}
                  >
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
                  </div>
                  <div
                    style={{ backgroundImage: `url('${group.img7}')` }}
                    className={`relative bg-cover bg-center`}
                  >
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
                  </div>
                  <div
                    style={{ backgroundImage: `url('${group.img8}')` }}
                    className={`relative bg-cover bg-center row-start-5`}
                  >
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
                  </div>
                  <div
                    style={{ backgroundImage: `url('${group.img9}')` }}
                    className={`relative bg-cover bg-center row-start-5`}
                  >
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
                  </div>
                  <div
                    style={{ backgroundImage: `url('${group.img10}')` }}
                    className={`relative bg-cover bg-center max-[991px]:col-start-1 col-start-3 row-span-2 col-span-2`}
                  >
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%]"></div>
                    <div className="absolute bg-[url('/assets/style-elements/mask-3-1.webp')] bg-cover mask-calc top-[-1px] left-[-1px] w-[101%] h-[101%] rotate-180"></div>
                  </div>
                </div>
              );
            })}

          <div className={`${pageToFetch === null && "hidden"}`}>
            <div
              onClick={loadMoreImages}
              className="absolute z-10 bottom-[90px] left-[50%] translate-x-[-50%] cursor-pointer"
            >
              <div className="relative">
                <img
                  src="/assets/style-elements/btn.svg"
                  alt="button"
                  className="z-10 animate-rotate max-[767px]:w-[100px]"
                />
                <div className="flex absolute top-0 left-0 justify-center items-center max-[767px]:w-[100px] max-[767px]:h-[100px] max-[767px]:text-[13px] w-[148px] h-[148px] z-10 text-white font-satoshi">
                  LOAD MORE
                </div>
              </div>
            </div>

            <div className="absolute max-[575px]:bottom-[90px] bottom-[110px] h-[310px] bg-primary w-[101%] fade-opacity"></div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default GalleryPage;
