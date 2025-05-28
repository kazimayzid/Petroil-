import Container from "../Container/Container";
import Logo from "../../assets/logo.png"
export default function Navbar() {
    const navList= ["Home","About","Services","Gallery","Gallery","Blog"]
    return <>
     <div className="bg-secondary py-[27px] sticky z-40 top-0">
        <Container>
            <div className="flex justify-between items-center">
                <div><a href="#"><img src={Logo} alt="" /></a></div>
                <div className="flex gap-x-[72px] items-center">
                    <div className="flex gap-x-[47px]">
                        {
                            navList.map((items)=>(
                                <a className="font-primary font-semibold text-[16px] text-white" href="#">{items}</a>
                            ))
                        }
                    </div>
                    <button className="font-primary font-semibold text-[16px] text-white px-[32px] py-[13px] border-white border-2">CONTACT</button>
                </div>
            </div>
        </Container>
     </div>
    </>
}