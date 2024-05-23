//catch all segment,[...slug]=catch all url segments 
export default function Docs({params}:{
    params:{
            slug:string[];
    }
}){
if(params.slug.length===3){
    return <h1>View docs for feature {params.slug[0]} and consept {params.slug[1]} and by name {params.slug[2]}</h1>
}else if(params.slug.length===1){
    return <h1>Viewing docs for feature {params.slug[0]}</h1>
}

    return <h1>Docs Home Page</h1>
}


//localhost:3000/docs/features1/concept1
//localhost:3000/docs/features1/concept2
//localhost:3000/docs/features2/concept1
//localhost:3000/docs/features2/concept2

// let consider we may have 20 features and each feature may have 20 conscepts we end up with massive 400 routes for our application
// 20*20=400,20 feature * 1[conseptid]=20