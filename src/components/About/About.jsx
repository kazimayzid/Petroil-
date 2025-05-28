import Container from "../Container/Container";

export default function About() {
    return<>
    <div className="bg-[#F0F0F0] py-[136px]">
        <Container>
           <div className="flex">
            <div className="bg-secondary py-[100px] px-[74px]">
                <h1 className="md:w-[262px] font-primary font-bold text-[36px] text-white">Learn more about our company</h1>
            </div>
            <div className="bg-[url(assets/aboutimg.png)] bg-cover bg-center bg-no-repeat w-full flex justify-center items-center">
             <button className="font-primary font-semibold text-[16px] text-secondary py-[14px] px-[30px] bg-white">Learn More</button>
            </div>
           </div>
        </Container>
    </div>
    </>
}