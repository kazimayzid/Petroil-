export default function Services() {
  return (
    <>
      <div className="flex items-center">
        <div className="w-[50%] pl-[406px]">
          <h1 className="md:w-[509px] font-primary font-bold text-[64px] text-black">
            Our Services
          </h1>
          <p className="md:w-[405px] font-primary font-medium text-[16px] text-primarytext">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="relative w-[50%] bg-[url(assets/services.png)] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] pl-[116px]">
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
      <div className="flex">
        <div className="relative w-[50%] bg-[url(assets/services2.png)] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] pl-[116px]">
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
        <div className="relative w-[50%] bg-[url(assets/services3.png)] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] pl-[116px]">
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
