import React from 'react';
import './detailbody.css'

const Detailsdata = ({detaal}) => {
   const {ingredients, recipe_name,cooking_method,experience, likes,number_of_recipe,recipe_picture
   } = detaal
    return (
        <div className='detailbody'>
           {
            ingredients.map(ing => <p>{}</p> )
           } 


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


        </div>
    );
};

export default Detailsdata;