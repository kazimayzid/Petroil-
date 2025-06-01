import Container from "../Container/Container";
export default function Banner() {
    return <>
      <div id="home" className="bg-[url(assets/bannerBG.png)] bg-cover bg-center bg-no-repeat">
        <Container>
            <div className="py-[40px] md:py-[257px] text-center md:text-start">
                <h1 className="md:w-[842px] font-primary font-bold text-[34px] md:text-[64px] text-white">We exist since 1975 on the oil and gas industry.</h1>
                <button className="font-primary font-semibold text-[16px] text-white bg-secondary px-[40px] py-[13px] mt-[31px]">LEARN MORE</button>
            </div>
        </Container>
      </div>
    </>
}