
export default function Products(){
    const products=['Mobile','laptop','Earphones']
    return(
        <>
        <h1>Products</h1>
        {products.map((item)=>
        <h4>{item}</h4>
        )}
        </>
    )
}