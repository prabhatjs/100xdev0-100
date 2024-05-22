export default function ProductDetails({ params }:{
    params:{productId:string,reviewId:string}
}){
    return <h1>Review {params.reviewId} Details About Products {params.productId}</h1>
}
