import React, { useEffect, useState } from 'react';
import './Chef.css'
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';


const Chefs = () => {
const [chef, setChef] = useState([]);


useEffect(()=>{
fetch('http://localhost:5000/chef')
.then(res => res.json())
.then(data => setChef(data))
.catch(error =>console.error(error))

}, [])

    return (
        <div className='cards mt-8 mx-8 p-4 mb-4'>

           {
            chef.map(che => <div 
            key={che.id}
            >

          <div className=''>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-64' src={che.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {che.name}
    </h2>
    <p>Experience: {che.years_of_experience}</p>
   <p>{che.ratings}</p>
   <p>Likes: {che.likes}</p>

<Link to={`/chefs/${che.id}`}> 
<button className='btn btn-primary'>View Recipes</button>
</Link>
  </div>
</div>
          </div>


          </div>
                )
                
           } 


        </div>
    );
};

export default Chefs;