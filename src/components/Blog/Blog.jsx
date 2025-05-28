import Container from "../Container/Container";
import Blogimg1 from "../../assets/blogimg1.png";
import Blogimg2 from "../../assets/blogimg2.png";
import Blogimg3 from "../../assets/blogimg3.png";
import { IoIosArrowForward } from "react-icons/io";
import mapsImg from "../../assets/maps.png"

export default function Blog() {
  const blogData = [
    {
      img: Blogimg1,
      title:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
      button: "Read more",
    },
    {
      img: Blogimg2,
      title:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
      button: "Read more",
    },
    {
      img: Blogimg3,
      title:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
      button: "Read more",
    },
  ];
  return (
    <>
      <div className="bg-[#F0F0F0] pt-[110px] pb-[162px]">
        <Container>
          <div className="flex justify-between">
            {blogData.map((items) => (
              <div
                className="relative bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${items.img})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative pt-[75px] pr-[44px] pb-[55px] pl-[46px]">
                  <p className="md:w-[249px] font-primary font-bold text-[24px] text-white">
                    {items.title}
                  </p>
                  <button className="font-primary font-semibold text-[12px] text-white py-[10px] px-[22px] bg-white/50 mt-[52px] hover:bg-red-500 hover:duration-500">
                    {items.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-[28px]">
            <p className="font-primary font-bold text-[16px] text-black flex items-center">
              MORE FROM THE BLLOG <IoIosArrowForward className="text-black inline" />
            </p>
          </div>
        </Container>
      </div>
      <img src={mapsImg} alt="" />
    </>
  );
}
