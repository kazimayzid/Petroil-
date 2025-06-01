import Container from "../Container/Container";

export default function Contact() {
  return (
    <>
      <div id="contact" className="bg-secondary py-[46px] border-b-4 border-b-[#FFB800]">
        <Container>
          <div className="md:flex text-center md:text-start justify-between items-center">
            <p className="md:w-[959px] font-primary font-bold text-[36px] text-white">
              Want to join as member branch in your area?
            </p>
            <button className="font-primary font-semibold text-[16px] text-white py-[13px] px-[32px] border-2 border-white hover:bg-white hover:text-secondary duration-500 mt-5 md:mt-0">
              CONTACT
            </button>
          </div>
        </Container>
      </div>
    </>
  );
}
