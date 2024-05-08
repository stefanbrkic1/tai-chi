import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />

      <img
        src="/assets/style-elements/header-bg-1.webp"
        alt="style-image"
        className="img-darken relative z-10"
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
    </>
  );
}

export default LandingPage;
