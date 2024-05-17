import { useState } from "react";

function PricingSection() {
  const [selectedPrice, setSelectedPrice] = useState(2);

  return (
    <div className="relative overflow-hidden pt-[3%] pb-[5%]">
      <section
        id="pricingSection"
        className="relative container max-[575px]:px-[12px]"
      >
        <div className="absolute top-0 z-10 max-[767px]:hidden text-primary upright-text max-[991px]:text-[24px] max-[1199px]:text-[32px] min-[1200px]:text-[44px] max-[992px]:top-[0px] max-[1199px]:top-[6%] min-[1200px]:top-[6%] min-[1400px]:top-[7%] leading-[35px]">
          月次
        </div>
        <div className="flex justify-center mb-4 pt-[10px] min-[992px]:pt-[80px]">
          <img
            src="/assets/style-elements/star.svg"
            alt="star"
            className="opacity-[20%] animate-rotate max-[1199px]:w-[30px] max-[1199px]:h-[30px] max-[1399px]:w-[40px] max-[1399px]:h-[40px] w-[52px] h-[52px]"
          />
        </div>
        <h3 className="font-tsushima text-secondary text-center max-[991px]:text-[26px] max-[1199px]:text-[28px] max-[1399px]:text-[38px] min-[1400px]:text-[48px] max-[1199px]:leading-[35px] max-[1399px]:leading-[45px] min-[1400px]:leading-[55px] max-[991px]:mb-[8px] max-[1399px]:mb-[12px] min-[1400px]:mb-[20px] max-[767px]:text-center">
          FLEXIBLE <span className="text-primary">PRICING</span>
        </h3>
        <div className="flex justify-center">
          <p className="max-w-[650px] font-generalsans max-[575px]:px-[12px] max-[575px]:text-[14px] max-[767px]:text-[15px] min-[768px]:text-[16px] text-center">
            Adipiscing id nunc consequat in. Bibendum sed aliquam est non id
            dignissim et aliquet. Tellus nam integer nunc mauris velit etiam
            enim.
          </p>
        </div>

        <div className="flex gap-[25px] py-[5%] flex-col min-[992px]:flex-row">
          <div className="flex-1 flex max-[767px]:flex-col min-[768px]:flex-row min-[992px]:flex-col gap-[25px]">
            <div
              className={`${
                selectedPrice === 1
                  ? "bg-[#ffffff] shadow-2xl border-primary"
                  : "bg-grey border-transparent"
              } cursor-pointer p-[15px] min-[992px]:px-[30px] min-[992px]:py-[20px] flex-1 border-2`}
              onClick={() => setSelectedPrice(1)}
            >
              <div className="flex justify-between font-drukwide text-primary text-[28px] leading-[37px] max-[575px]:text-[15px] max-[575px]:leading-[18px]  max-[991px]:text-[17px] max-[991px]:leading-[24px] max-[1399px]:text-[22px] max-[1399px]:leading-[26px] max-[991px]:mb-[13px] mb-[20px]">
                <div>BEGINNER</div>
                <div>
                  $29.99{" "}
                  <span className="font-generalsans text-secondary text-[19px] leading-[26px] max-[575px]:text-[12px] max-[575px]:leading-[14px] max-[991px]:text-[14px] max-[991px]:leading-[16px]">
                    /Month
                  </span>
                </div>
              </div>

              <div className="font-generalsans flex max-[991px]:flex-col max-[575px]:gap-[11px] max-[991px]:gap-[18px] justify-between text-[16px] leading-[24px] max-[575px]:text-[14px] max-[575px]:leading-[22px]">
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Any 10 Programs</div>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Limited access to online resources</div>
                </div>
              </div>

              <div className="font-generalsans flex max-[991px]:flex-col max-[575px]:gap-[11px] max-[991px]:gap-[18px] min-[991px]:mt-[18px] max-[575px]:mt-[11px] min-[576px]:mt-[15px] justify-between text-[16px] leading-[24px] max-[575px]:text-[14px] max-[575px]:leading-[22px]">
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Direct event sign up</div>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Limited access offline resources</div>
                </div>
              </div>
            </div>

            <div
              className={`${
                selectedPrice === 2
                  ? "bg-[#ffffff] shadow-2xl border-primary"
                  : "bg-grey border-transparent"
              } cursor-pointer p-[15px] min-[992px]:px-[30px] min-[992px]:py-[20px] flex-1 border-2 relative z-20`}
              onClick={() => setSelectedPrice(2)}
            >
              <div className="flex justify-between font-drukwide text-primary text-[28px] leading-[37px] max-[575px]:text-[15px] max-[575px]:leading-[18px]  max-[991px]:text-[17px] max-[991px]:leading-[24px] max-[1399px]:text-[22px] max-[1399px]:leading-[26px] max-[991px]:mb-[13px] mb-[20px]">
                <div>AMATEUR</div>
                <div>
                  $49.99{" "}
                  <span className="font-generalsans text-secondary text-[19px] leading-[26px] max-[575px]:text-[12px] max-[575px]:leading-[14px] max-[991px]:text-[14px] max-[991px]:leading-[16px]">
                    /Month
                  </span>
                </div>
              </div>

              <div className="font-generalsans flex max-[991px]:flex-col max-[575px]:gap-[11px] max-[991px]:gap-[18px] justify-between text-[16px] leading-[24px] max-[575px]:text-[14px] max-[575px]:leading-[22px]">
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Any 10 Programs</div>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Full access to online resources</div>
                </div>
              </div>

              <div className="font-generalsans flex max-[991px]:flex-col max-[575px]:gap-[11px] max-[991px]:gap-[18px] min-[991px]:mt-[18px] max-[575px]:mt-[11px] min-[576px]:mt-[15px] justify-between text-[16px] leading-[24px] max-[575px]:text-[14px] max-[575px]:leading-[22px]">
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Domestic event sign up</div>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Group training sessions</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              selectedPrice === 3
                ? "bg-[#ffffff] shadow-2xl border-primary"
                : "bg-grey border-transparent"
            } cursor-pointer flex-1 overflow-x-hidden border-2 relative z-20`}
            onClick={() => setSelectedPrice(3)}
          >
            <div className="p-[10px] min-[992px]:px-[30px] min-[992px]:pt-[20px]">
              <div className="flex justify-between font-drukwide text-primary text-[28px] leading-[37px] max-[575px]:text-[15px] max-[575px]:leading-[18px]  max-[991px]:text-[17px] max-[991px]:leading-[24px] max-[1399px]:text-[22px] max-[1399px]:leading-[26px] max-[991px]:mb-[13px] mb-[20px]">
                <div>PRO</div>
                <div>
                  $79.99{" "}
                  <span className="font-generalsans text-secondary text-[19px] leading-[26px] max-[575px]:text-[12px] max-[575px]:leading-[14px] max-[991px]:text-[14px] max-[991px]:leading-[16px]">
                    /Month
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[url('/assets/style-elements/pricing-border.webp')] bg-primary w-full p-[15px] bg-mode-multiply mb-3 glow-shadow">
              <h2 className="text-white font-generalbold font-bold text-center">
                EVERYTHING FROM BEGINNER AND AMATEUR
              </h2>
            </div>

            <div className="p-[10px] min-[992px]:px-[30px] min-[992px]:py-[20px]">
              <div className="font-generalsans flex max-[767px]:flex-col max-[575px]:gap-[11px] max-[767px]:gap-[18px] justi767between text-[16px] leading-[24px] max-[575px]:text-[14px] max-[575px]:leading-[22px]">
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Unlimited Programs</div>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Individual training sessions</div>
                </div>
              </div>

              <div className="font-generalsans flex max-[767px]:flex-col max-[575px]:gap-[11px] max-[767px]:gap-[18px] min-[767px]:mt-[18px] max-[575px]:mt-[11px] min-[576px]:mt-[15px] justify-between text-[16px] leading-[24px] max-[575px]:text-[14px] max-[575px]:leading-[22px]">
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>All event free sign up</div>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Full access Offline resources</div>
                </div>
              </div>

              <div className="font-generalsans flex max-[767px]:flex-col max-[575px]:gap-[11px] max-[767px]:gap-[18px] min-[767px]:mt-[18px] max-[575px]:mt-[11px] min-[576px]:mt-[15px] justify-between text-[16px] leading-[24px] max-[575px]:text-[14px] max-[575px]:leading-[22px]">
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Full access to online resources</div>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Personal coach</div>
                </div>
              </div>

              <div className="font-generalsans flex max-[767px]:flex-col max-[575px]:gap-[11px] max-[767px]:gap-[18px] min-[767px]:mt-[18px] max-[575px]:mt-[11px] min-[576px]:mt-[15px] justify-between text-[16px] leading-[24px] max-[575px]:text-[14px] max-[575px]:leading-[22px]">
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Group training sessions</div>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[16px] h-[16px] bg-[url('/assets/style-elements/star.svg')] bg-contain bg-no-repeat"></div>
                  <div>Limited access Offline resources</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-primary text-white font-generalbold text-[15px] max-[575px]:px-[15px]  max-[575px]:py-[12px] max-[575px]:max-w-[200px] w-full max-w-[312px] px-[20px] py-[14px] clip-button hover:bg-secondary transition-all">
            SIGN UP
          </button>
        </div>

        <div className="absolute bottom-[-4%] right-0 z-10 max-[767px]:hidden text-secondary upright-text max-[991px]:text-[24px] max-[1199px]:text-[32px] min-[1200px]:text-[44px] leading-[35px]">
          年間
        </div>
      </section>

      <img
        src="/assets/style-elements/star-2.svg"
        alt="star"
        className="absolute z-10 top-[50px] right-[-65px] animate-rotate max-[575px]:hidden max-[767px]:w-[100px] min-[768px]:w-[130px] min-[992px]:w-[130px] min-[1200px]:w-[150px] min-[1400px]:w-[180px]"
      />

      <img
        src="/assets/style-elements/star-2.svg"
        alt="star"
        className="absolute z-0 bottom-[50px] left-[-65px] animate-rotate max-[575px]:hidden max-[767px]:w-[100px] min-[768px]:w-[130px] min-[992px]:w-[130px] min-[1200px]:w-[150px] min-[1400px]:w-[180px]"
      />
    </div>
  );
}

export default PricingSection;
