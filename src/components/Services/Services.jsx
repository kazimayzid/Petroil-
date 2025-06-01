export default function Services() {
  return (
    <>
      <div id="services" className="md:flex items-center">
        <div className="md:w-[50%] md:pl-[406px] text-center md:text-start">
          <h1 className="md:w-[509px] font-primary font-bold text-4xl md:text-[64px] text-black">
            Our Services
          </h1>
          <p className="md:w-[405px] font-primary font-medium text-[16px] text-primarytext mb-6 md:mb-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="relative md:w-[50%] bg-[url(assets/services.png)] bg-cover bg-center bg-no-repeat pt-12 md:pt-[147px] pb-12 md:pb-[139px] md:pl-[116px] text-center md:text-start">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative">
            <h1 className="md:w-[691px] font-primary font-bold text-[36px] text-white ">
              Modern natural oil and gas refineries.
            </h1>
            <button className="font-primary font-semibold text-[16px] text-white px-[30px] py-[14px] bg-secondary mt-[19px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="relative md:w-[50%] bg-[url(assets/services2.png)] bg-cover bg-center bg-no-repeat md:pt-[147px] md:pb-[139px] md:pl-[116px] pt-12  pb-12 text-center md:text-start">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative">
            <h1 className="md:w-[691px] font-primary font-bold text-[36px] text-white ">
              Supply of national industries.
            </h1>
            <button className="font-primary font-semibold text-[16px] text-white px-[30px] py-[14px] bg-secondary mt-[19px]">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative md:w-[50%] bg-[url(assets/services3.png)] bg-cover bg-center bg-no-repeat md:pt-[147px] md:pb-[139px] md:pl-[116px] pt-12 pb-12 text-center md:text-start">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative">
            <h1 className="md:w-[691px] font-primary font-bold text-[36px] text-white ">
              Supply of national industries.
            </h1>
            <button className="font-primary font-semibold text-[16px] text-white px-[30px] py-[14px] bg-secondary mt-[19px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
