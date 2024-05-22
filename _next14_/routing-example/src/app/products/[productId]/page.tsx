export default function ProductDetails({ params }:{
    params:{productId:string}
}){
    return <h1>Details About Products {params.productId}</h1>
}

//http://localhost:3000/products/8