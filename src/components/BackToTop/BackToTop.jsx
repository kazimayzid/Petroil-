import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const topButton = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", topButton);
  }, []);

  const scrollToTop = ()=>{
    window.scrollTo({
        top: 0,
        scroll: "smooth"
    })
  }
  return (
    isVisible && (
      <div className="fixed bottom-[20px] right-[50px] z-[999] w-[50px] h-[50px] rounded-full bg-red-600 flex justify-center items-center "
      onClick={scrollToTop}>
        <IoIosArrowUp className="text-white text-4xl" />
      </div>
    )
  );
}
