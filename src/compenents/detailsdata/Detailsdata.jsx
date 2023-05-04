import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import './detailbody.css'

const Detailsdata = ({detaal}) => {
   const {ingredients, recipe_name,cooking_method,experience, likes,number_of_recipe,recipe_picture
   } = detaal
   
const [loading, setLoading] = useState(false)
useEffect(()=>{

setLoading(true)
setTimeout(()=>{
  setLoading(false)
},2000)

},[])

    return (
        <div className='detailbody'>


           {
            ingredients.map(ing => <p>{}</p> )
           } 


{
  loading?
  
  <ClipLoader
  color={"#D00218"}
  loading={loading}
  size={20}
  aria-label="Loading Spinner"
  data-testid="loader"
/>  : 

<div className='detailbody mx-[25%] mb-10 mt-10'>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={recipe_picture} /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{cooking_method}</p>
   <div className='flex'>
   <p>Likes:{likes}</p>
    <p>Experience:{experience}</p>
   </div>
    <p>numberofrecipe:{number_of_recipe}</p>
  </div>
</div>
</div>


}




        </div>
    );
};

export default Detailsdata;