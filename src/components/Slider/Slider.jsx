import Sliderimg1 from "../../assets/sliderimg1.png";
import Sliderimg2 from "../../assets/sliderimg2.png";
import Sliderimg3 from "../../assets/sliderimg3.png";
import Sliderimg4 from "../../assets/sliderimg4.png";
export default function Slider() {
    return <>
     <div className="flex justify-between mb-[28px]">
        <img src={Sliderimg1} alt="#img" />
        <img src={Sliderimg2} alt="#img" />
        <img src={Sliderimg3} alt="#img" />
        <img src={Sliderimg4} alt="#img" />
     </div>
    </>
}