import Card from "./Card"

export default function Testimonial(props){ 
    let reviews=props.reviews
    return (
        <div className="">
            <Card review={reviews[0]}></Card>
        </div>
    )
}