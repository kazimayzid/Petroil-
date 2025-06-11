import Container from "../Container/Container";
import Logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [show, setshow] = useState(false);

  const navList = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    {
      title: "Services",
      link: "#services",
    },
    {
      title: "Gallery",
      link: "#gallery",
    },
    {
      title: "Blog",
      link: "#blog",
    },
  ];
  return (
    <>
      <div className="hidden md:block bg-secondary py-[27px] sticky z-40 top-0">
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <a href="#">
                <img src={Logo} alt="" />
              </a>
            </div>
            <div className="flex gap-x-[72px] items-center">
              <div className="flex gap-x-[47px]">
                {navList.map((items) => (
                  <a
                    className="font-primary font-semibold text-[16px] text-white active:underline focus:underline"
                    href={items.link}
                  >
                    {items.title}
                  </a>
                ))}
              </div>
              <button
                href="#contact"
                className="font-primary font-semibold text-[16px] text-white px-[32px] py-[13px] border-white border-2"
              >
                CONTACT
              </button>
            </div>
          </div>
        </Container>
      </div>
      <div className="md:hidden bg-secondary py-[10px] sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div className="ml-1">
            <a href="#">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="mr-1">
            {show ? (
              <RxCross2
                onClick={() => setshow(!show)}
                className="text-white text-[28px]"
              />
            ) : (
              <FaBars
                onClick={() => setshow(!show)}
                className="text-white text-[28px]"
              />
            )}
          </div>
        </div>
        {show && (
          <div className="flex flex-col gap-y-[17px] items-center bg-secondary py-5 w-full">
            <div className="flex flex-col items-center gap-y-[17px]">
              {navList.map((items) => (
                <a
                  className="font-primary font-semibold text-[16px] text-white border-b-1"
                  href={items.link}
                >
                  {items.title}
                </a>
              ))}
            </div>
            <button
              href="#contact"
              className="font-primary font-semibold text-[16px] text-white px-[32px] py-[13px] border-white border-2"
            >
              CONTACT
            </button>
          </div>
        )}
      </div>
    </>
  );
}
