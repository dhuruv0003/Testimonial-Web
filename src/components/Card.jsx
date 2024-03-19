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
            <div className="">{}review.job</div>
        </div>

    )
}