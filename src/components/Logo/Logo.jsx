import Container from "../Container/Container";
import Logo1 from "../../assets/logo1.png"
import Logo2 from "../../assets/logo2.png"
import Logo3 from "../../assets/logo3.png"
import Logo4 from "../../assets/logo4.png"
export default function Logo() {
    return <>
     <Container>
        <div className="py-[117px] flex justify-between">
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo3} alt="" />
            <img src={Logo4} alt="" />
        </div>
     </Container>
    </>
}