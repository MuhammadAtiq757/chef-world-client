import React, { useEffect, useState } from 'react';
import './Chef.css'
import ClipLoader from "react-spinners/ClipLoader";


const Chefs = () => {
const [chef, setChef] = useState([]);

const [Loading, setLoading] = useState(false)

useEffect(()=>{
setLoading(true)
setTimeout(()=>{
setLoading(false)
},5000)
},[])





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
{/* 
{loading?
  <ClipLoader
color={color}
loading={loading}

size={100}
aria-label="Loading Spinner"
data-testid="loader"
/>
: */}

          <div>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-64' src={che.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {che.name}
    </h2>
    <p>Experience: {che.years_of_experience}</p>
   <p>{che.ratings}</p>
   <p>Likes: {che.likes}</p>
   <button className='btn btn-primary'>Details</button>
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