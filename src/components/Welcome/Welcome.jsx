import Container from "../Container/Container";
export default function Welcome() {
  return (
    <>
      <Container>
        <div className="flex justify-between items-center pt-[75px] pb-[100px]"> 
          <h1 className="md:w-[289px] font-primary font-bold text-[48px] leading-[72px] text-black">The biggest supplier on the country</h1>
          <p className="md:w-[651px] font-primary font-medium text-[16px] text-primarytext">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
        </div>
      </Container>
    </>
  );
}
