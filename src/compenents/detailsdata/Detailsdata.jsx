import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import './detailbody.css'

const Detailsdata = ({ detaal }) => {
  const { ingredients, recipe_name, cooking_method, experience, rating, likes, number_of_recipe, recipe_picture
  } = detaal

  const [loading, setLoading] = useState(false)
  useEffect(() => {

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)

  }, [])

  return (
    <div>
      <div className='detailbody'>


        {
          loading ?

            <ClipLoader
              color={"#D00218"}
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> :




          <div>
              <div className='detailbody mx-[25%] mb-10 mt-10 flex'>

<div className="card w-full bg-base-100 shadow-xl">

  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>

    {/* <p><span className='text-xl'>Ingredients:</span>{ingredients}</p> */}
    <h3 className='text-3xl'>Ingredients:</h3>
    {
      ingredients.map((ing, index) => <p> {index + 1}.{ing}</p>)
    }

    <p><span className='text-xl'>Cooking Method:</span> {cooking_method}</p>
    <div className='flex center'>
      <p className='text-xl'>Likes:{likes}</p>
      <p><span className='text-xl'>Experience: </span>{experience} years</p>
    </div>
    <div className='flex'>
      <p><span className='text-xl'>number of recipe: </span>{number_of_recipe}</p>
      <p><span className='text-xl'>Ratings: </span>{rating}</p>
    </div>
  </div>
</div>
</div>
          </div>


        }




      </div>
    </div>
  );
};

export default Detailsdata;