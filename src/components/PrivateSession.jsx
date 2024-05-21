function PrivateSession() {
  return (
    <>
      <div className="relative overflow-hidden  max-[575px]:mt-[40px] mb-[50px]">
        <div className="relative max-[575px]:px-[12px] max-[575px]:py-[70px] max-[767px]:py-[70px] max-[991px]:py-[90px] max-[1199px]:py-[120px] py-[170px] container">
          <div className="absolute top-0 z-10 text-primary upright-text max-[991px]:text-[24px] max-[1199px]:text-[32px] min-[1200px]:text-[44px] max-[992px]:top-[0px] max-[1199px]:top-[6%] min-[1200px]:top-[6%] min-[1400px]:top-[7%] leading-[35px]">
            月次
          </div>
          <section className="relative bg-primary text-whit py-[72px] px-[32px] text-white flex flex-col items-center">
            <h1 className="text-center font-drukwide max-[575px]:text-[20px] max-[991px]:text-[26px] max-[1119px]:text-[28px] max-[1399px]:text-[32px] text-[36px] max-[1399px]:mb-[12px] mb-[20px]">
              NEED PRIVATE GROUP SESSION?
            </h1>
            <button className="bg-white hover:text-white text-primary font-generalbold text-[15px] max-[575px]:px-[15px]  max-[575px]:py-[12px] max-[575px]:max-w-[200px] w-full max-w-[312px] px-[20px] py-[14px] clip-button hover:bg-secondary transition-all">
              ENROLL NOW
            </button>
            <div className="absolute h-[33px] w-full bg-[url('/assets/style-elements/cutted-border-large.webp')] bg-contain max-[px]:bottom-[-25px] max-[443px]:bottom-[-25px] max-[767px]:bottom-[-22px] max-[991px]:bottom-[-19px] max-[1199px]:bottom-[-12px] max-[1399px]:bottom-[-6px] bottom-[-2px]"></div>
            <div className="absolute h-[33px] w-full bg-[url('/assets/style-elements/cutted-border-large.webp')] bg-contain max-[443px]:top-[-25px] max-[767px]:top-[-22px] max-[991px]:top-[-19px] max-[1199px]:top-[-12px] max-[1399px]:top-[-6px] top-[-2px] rotate-180"></div>

            <div className="absolute h-full w-[33px] bg-[url('/assets/style-elements/cutted-border-small.webp')] bg-contain right-[-15px] top-0"></div>
            <div className="absolute h-full w-[33px] bg-[url('/assets/style-elements/cutted-border-small.webp')] bg-contain top-0 left-[-15px] rotate-180"></div>
          </section>

          <div className="absolute bottom-[0] right-0 z-10 text-secondary upright-text max-[991px]:text-[24px] max-[1199px]:text-[32px] min-[1200px]:text-[44px] leading-[35px]">
            年間
          </div>
        </div>

        <img
          src="/assets/style-elements/star-2.svg"
          alt="star"
          className="absolute z-10 right-[-65px] max-[991px]:top-[0px] max-[1199px]:top-[0px] max-[1399px]:top-[0px] top-[0px] animate-rotate max-[767px]:w-[100px] min-[768px]:w-[130px] min-[992px]:w-[130px] min-[1200px]:w-[150px] min-[1400px]:w-[180px]"
        />
        <img
          src="/assets/style-elements/star-2.svg"
          alt="star"
          className="absolute z-10 left-[-65px] max-[991px]:bottom-[0px] max-[1199px]:bottom-[0px] max-[1399px]:bottom-[0px] bottom-[0px] animate-rotate max-[767px]:w-[100px] min-[768px]:w-[130px] min-[992px]:w-[130px] min-[1200px]:w-[150px] min-[1400px]:w-[180px]"
        />
      </div>
    </>
  );
}

export default PrivateSession;
