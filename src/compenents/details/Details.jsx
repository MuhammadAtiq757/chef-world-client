import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Detailsdata from '../detailsdata/Detailsdata';

const Details = () => {
    const details = useLoaderData()
    const {recipes} = details
console.log(details);


    return (
        <div>
          {
           recipes.map(detaal => <Detailsdata 
           detaal={detaal}
           >


           </Detailsdata>)
          }
           
        </div>
    );
};

export default Details;