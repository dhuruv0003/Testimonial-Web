import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


export default function Card(props){
    let review=props.review
    return (
        
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-10 mx-auto">
                
                <img className="  aspect-square rounded-full w-[140px] h-[140px] z-25 " src={review.image} alt="" />
                <div className="absolute w-[140px] h-[140px] z-[-15] bg-violet-700 rounded-full right-[-1rem] top-[-1rem]"></div>
            </div>
            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize" >{review.name}</p>
            </div>
            <div className=" text-center mt-7"><p className=" uppercase text-violet-300  font-semibold">{review.job}</p></div>
            <div className="text-violet-400 mt-5  mx-auto">
                <FaQuoteLeft></FaQuoteLeft>
            </div>
            <div className="text-center mt-4 text-slate-500">
                {review.text}
            </div>
            <div className="text-violet-400  mx-auto mt-5">
                <FaQuoteRight></FaQuoteRight>
            </div>
            
        </div>


    )
}