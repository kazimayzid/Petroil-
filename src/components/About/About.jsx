import Container from "../Container/Container";

export default function About() {
    return<>
    <div id="about" className="bg-[#F0F0F0] py-5 md:py-[136px]">
        <Container>
           <div className="md:flex">
            <div className="bg-secondary text-center md:text-start py-14 md:py-[100px] md:px-[74px]">
                <h1 className="md:w-[262px] font-primary font-bold text-[36px] text-white">Learn more about our company</h1>
            </div>
            <div className="bg-[url(assets/aboutimg.png)] bg-cover bg-center bg-no-repeat w-full flex justify-center items-center py-20 md:py-0">
             <button className="font-primary font-semibold text-[16px] text-secondary py-[14px] px-[30px] bg-white">Learn More</button>
            </div>
           </div>
        </Container>
    </div>
    </>
}