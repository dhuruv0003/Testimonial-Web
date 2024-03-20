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
        if (index + 1 > reviews.length - 1) {
            setindex(0)
        }
        else {
            setindex(index + 1)
        }
    }
    function surprisehandler() {
        
    }

    return (
        <div className="">
            <Card review={reviews[index]}></Card>
            <div className=" flex text-3xl justify-center mt-5 gap-3 text-violet-400 items-center font-bold">
                <button
                    onClick={leftshifthandler} className=" hover:text-violet-600"> <FaChevronLeft /> </button>
                <button onClick={rightshifthandler} className="hover:text-violet-600">
                    <FaChevronRight />
                </button>
            </div>
            <div className="">
                <button
                    onClick={surprisehandler} className="bg-violet-400 hover:bg-violet-600 transition-all duration-200 text-white font-bold px-10 py-2 rounded-md mt-5">Surprise Me</button>
            </div>
        </div>
    )
}