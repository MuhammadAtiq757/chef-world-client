import React from 'react';
import Chefs from '../chefs/Chefs';

const Home = () => {
    return (
        
        <div className='container m-8'>
           
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chef-cooking-channel-youtube-banner-design-template-34ca10abd27afc282c16b6d2864cff25_screen.jpg?ts=1665921135" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Welcome to Chef World</h2>
    <p>Chefs must have a deep understanding of food and cooking <br /> techniques, as well as knowledge of food safety, <br /> nutrition, and dietary restrictions. 
    There are many different types of chefs, including executive chefs, sous chefs, pastry chefs, and line cooks. <br /> Each has their own specific responsibilities and skill sets, but all are essential <br /> to the smooth operation of a kitchen.
    </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div> 
<Chefs></Chefs>
        </div>
    );
};

export default Home;