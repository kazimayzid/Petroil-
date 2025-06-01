import Container from "../Container/Container";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function NavbarTop() {
  return (
    <>
      <div className="bg-[#282828] py-[17px] border-b-[#FFB800] border-b-4">
        <Container>
          <div className=" md:flex justify-between items-center">
            <div className="flex justify-between">
              <p className="font-primary font-normal text-[10px] md:text-[12px] text-white pr-[50px] md:pr-[22px] border-r-[1px] border-r-[#5C6A92] ">
                <MdOutlineMarkEmailRead className="text-white inline mr-[5px]" />
                mail@yourcompany.com
              </p>
              <p className="font-primary font-normal text-[10px] md:text-[12px] text-white ml-[27px]">
                <LiaPhoneVolumeSolid className="text-white mr-[5px] inline"/>
                +896 120 5889 (Toll free)
              </p>
            </div>
            <div className="flex gap-x-[19px] text-white justify-center mt-3 md:mt-0">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <RiInstagramFill />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
