import React, { useEffect, useState } from 'react';
import Chefs from '../chefs/Chefs';
import Popular from '../popular/Popular';
import Favourite from '../favourite/Favourite';
import ClipLoader from "react-spinners/ClipLoader";



const Home = () => {

  const [loading, setLoading] = useState(false)
  useEffect(()=>{
  
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },2000)
  
  },[])




   return (
        
        <div className='container m-8'>
          
          
{
  loading?
  
  <ClipLoader
  color={"#D00218"}
  loading={loading}
  size={20}
  aria-label="Loading Spinner"
  data-testid="loader"
/>  : 
           
           <div className="card lg:card-side bg-base-100 shadow-xl w-full h-full">
  <figure><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chef-cooking-channel-youtube-banner-design-template-34ca10abd27afc282c16b6d2864cff25_screen.jpg?ts=1665921135" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Welcome to Chef World</h2>
    <p>Chefs must have a deep understanding of food and cooking <br /> techniques, as well as knowledge of food safety, <br /> nutrition, and dietary restrictions. 
    There are many different types of chefs, including executive chefs, sous chefs, pastry chefs, and line cooks. <br /> Each has their own specific responsibilities and skill sets, but all are essential <br /> to the smooth operation of a kitchen.
    </p>
   
  </div>
</div> }
<Chefs></Chefs>
<Popular></Popular>
<Favourite></Favourite>

        </div>
    );
};

export default Home;