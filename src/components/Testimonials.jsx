import Card from "./Card"
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

export default function Testimonial(props){ 
    let reviews=props.reviews
    return (
        <div className="">
            <Card review={reviews[0]}></Card>
            <div className=" flex text-3xl justify-center mt-5 gap-3 text-violet-400 items-center font-bold">
                <button className=" hover:text-violet-600"> <FaChevronLeft/> </button>
                <button className="hover:text-violet-600">
                <FaChevronRight/>
                </button>
            </div>
            <div className="">
                <button className="bg-violet-400 hover:bg-violet-600 transition-all duration-200 text-white font-bold px-10 py-2 rounded-md mt-5">Surprise Me</button>
            </div>
        </div>
    )
}