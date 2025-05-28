import Contact from "../Contact/Contact";
import Container from "../Container/Container";
import logo from "../../assets/logo.png";
import { TbMailCheck } from "react-icons/tb";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GrMap } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import cert1 from "../../assets/cert1.png";
import cert2 from "../../assets/cert2.png";
export default function Footer() {
  const navData = [
    {
      title: "Company",
      list: ["Home", "About", "Services", "Gallery"],
    },
    {
      title: "Others",
      list: ["Blog", "Contact", "Terms & Conditions", "Privacy Policy"],
    },
  ];
  return (
    <>
      <div className="bg-[#1F1F1F]">
        <Container>
          <div className="pt-[149px] pb-[170px] grid items-center md:grid-cols-[334px_1fr]">
            <div>
              <a href="#">
                <img src={logo} alt="" />
              </a>
              <div className="mt-[33px]">
                <p className="font-primary font-normal text-[14px] text-white flex items-center">
                  <TbMailCheck className="inline mr-[5px]" />
                  mail@yourcompany.com
                </p>
                <p className="font-primary font-normal text-[14px] text-white flex items-center my-[15px]">
                  <MdOutlinePhoneInTalk className="inline mr-[5px]" />
                  +896 120 5889 (Toll free)
                </p>
                <p className="font-primary font-normal text-[14px] text-white flex items-center">
                  <GrMap className="inline mr-[5px]" />
                  101 Baker Street, New York, USA, 12345
                </p>
              </div>
              <div className="mt-[34px] flex gap-x-[12px]">
                <div className="w-[29px] h-[29px] rounded-full bg-secondary flex justify-center items-center hover:bg-white text-white hover:text-black duration-500">
                  <FaFacebookF />
                </div>
                <div className="w-[29px] h-[29px] rounded-full bg-secondary flex justify-center items-center hover:bg-white text-white hover:text-black duration-500">
                  <FaTwitter />
                </div>
                <div className="w-[29px] h-[29px] rounded-full bg-secondary flex justify-center items-center hover:bg-white text-white hover:text-black duration-500">
                  <FaLinkedinIn />
                </div>
                <div className="w-[29px] h-[29px] rounded-full bg-secondary flex justify-center items-center hover:bg-white text-white hover:text-black duration-500">
                  <FaInstagram />
                </div>
              </div>
            </div>
            <div className="flex justify-between ml-[145px]">
              <div className="flex gap-x-[100px]">
                {navData.map((items) => (
                  <div>
                    <p className="font-primary font-bold text-[16px] text-white mb-[21px]">
                      {items.title}
                    </p>
                    <div className="flex flex-col gap-y-[15px]">
                      {items.list.map((navlist) => (
                        <a
                          className="font-primary font-normal text-[14px] text-white hover:text-secondary duration-300"
                          href="#"
                        >
                          {navlist}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-primary font-bold text-[16px] text-white mb-[21px]">
                  Certificate
                </p>
                <div className="flex gap-x-[5px]">
                  <img src={cert1} alt="" />
                  <img src={cert2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
