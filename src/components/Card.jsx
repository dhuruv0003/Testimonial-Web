import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


export default function Card(props) {
    let review = props.review
    return (

        <div className="flex flex-col md:relative">
            <div className=" image absolute top-[-7rem]  z-10 mx-auto ">

                <img className="  aspect-square rounded-full w-[140px] h-[140px] z-25 " src={review.image} alt="" />
                <div className="absolute w-[140px] h-[140px] z-[-15] bg-[#f6831f] rounded-full right-[-0.7rem] top-[-0.5rem] "></div>
            </div>
            <div className=" text-center card mt-4">
                <p className="font-bold text-2xl capitalize" >{review.name}</p>
            </div>
            <div className=" text-center mt-7"><p className=" uppercase text-[#ffa20e]  font-semibold">{review.job}</p></div>
            <div className=" mt-5  mx-auto">
                <FaQuoteLeft></FaQuoteLeft>
            </div>
            <div className="text-center mt-4 text-slate-500">
                {review.text}
            </div>
            <div className="  mx-auto mt-5">
                <FaQuoteRight></FaQuoteRight>
            </div>

        </div>


    )
}