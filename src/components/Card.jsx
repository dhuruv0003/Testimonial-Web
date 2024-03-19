import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

export default function Card(props){
    let review=props.review
    return (
        
        <div className="">
            <div className="">
                <img src="review.image" alt="" />
            </div>
            <div className="">
                <p>{review.name}</p>
            </div>
            <div className=""><p>{review.job}</p></div>
            <div className="">
                <FaQuoteLeft></FaQuoteLeft>
            </div>
            <div className="">
                {review.text}
            </div>
            <div className="">
                <FaQuoteRight></FaQuoteRight>
            </div>
            <div className="">
                <button> <FaAngleLeft/> </button>
                <button>
                <FaAngleRight/>
                </button>
            </div>
        </div>


    )
}