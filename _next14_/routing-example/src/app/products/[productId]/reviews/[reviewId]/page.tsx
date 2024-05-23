import { notFound } from "next/navigation"

export default function ProductDetails({ params }:{
    params:{
        productId:string,
        reviewId:string
    }
})
{
        if(parseInt(params.reviewId)>1000){
            notFound();
        }
    return <h1>Review {params.reviewId} Details About Products {params.productId}</h1>
}
//http://localhost:3000/products/100/reviews/10001