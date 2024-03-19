import {FaQuoteLeft,FaQuoteright} from 'react-icons'


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
                re
            </div>
        </div>


    )
}