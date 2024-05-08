import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />

      <img
        src="/assets/style-elements/header-bg-1.webp"
        alt="style-image"
        className="img-darken"
      />

      <div className="overflow-hidden absolute top-[1px] whitespace-nowrap">
        <span className="animate-slide">
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

        <span className="animate-slide">
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
