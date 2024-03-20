import { useState } from "react";
import Card from "./Card"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonial(props) {
    let reviews = props.reviews

    const [index, setindex] = useState(0);

    function leftshifthandler() {
        if (index - 1 < 0) {
            setindex(reviews.length - 1);
        }
        else
            setindex(index - 1)
    }
    function rightshifthandler() {
        if (index + 1 >= reviews.length ) {
            setindex(0)
        }
        else {
            setindex(index + 1)
        }
    }
    function surprisehandler() {
        setindex(Math.floor(Math.random()*reviews.length))
    }

    return (
        <div className="w-[85vw] md:w-[700px] bg-[#f9f7f3] flex flex-col justify-center items-center mt-10 p-10  transition-all duration-700 rounded-[10rem] ">
            <Card review={reviews[index]}></Card>
            <div className=" flex text-3xl justify-center mt-5 gap-3 text-[#ffa20e] items-center font-bold">
                <button
                    onClick={leftshifthandler} className=" hover:text-[#f6831f]"> <FaChevronLeft /> </button>
                <button onClick={rightshifthandler} className="hover:text-[#f6831f]">
                    <FaChevronRight />
                </button>
            </div>
            <div className="">
                <button
                    onClick={surprisehandler} className="bg-[#ffa20e] hover:bg-[#f6831f] transition-all duration-200 text-white font-bold px-10 py-2 rounded-md mt-5">Surprise Me</button>
            </div>
        </div>
    )
}