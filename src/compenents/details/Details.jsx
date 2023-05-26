import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Detailsdata from '../detailsdata/Detailsdata';

const Details = () => {
    const details = useLoaderData()
    const {recipes} = details

console.log(details);

const {image
, description
} = details

    return (
        <div>
<div className="card lg:card-side bg-base-100 shadow-xl p-10 w-full">
  <figure><img className='w-full h-96' src={image}/></figure>
  <div className="card-body">
    <p className='xl w-96 h-96 mt-10 '>{description}</p>
  </div>
</div>

        
    );
};

export default Details;