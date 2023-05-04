import React from 'react';

const Popular = () => {
    return (
        
      <div>
        <h1 className='text-center text-2xl fs-bold mt-6'>Popuar foods</h1>
          <div className='md:flex '>
            
    
            <div className="card card-compact w-96 bg-base-100 shadow-xl m-6 p-5">
  <figure><img className='w-96' src="https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Borsch-Cabbage-Soup.png" /></figure>
  <div className="card-body ">
    <h2 className="card-title">Testy Food</h2>
    <p className='text-xl'>This food is vey testy and awsome to eat! <br />
    you want to eat please order now. </p>
    
  </div>
</div>

<div className="card card-compact w-96 bg-base-100 shadow-xl m-6 p-5">
  <figure><img className='w-96' src="https://www.tripsavvy.com/thmb/2B5_4ks3SK2l_ehZj9ZY6pXJx9w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5033415296_4d025683af_o-5b953ba946e0fb00251ecdb5.jpg" /></figure>
  <div className="card-body">
    <h2 className="card-title">Seet Food</h2>
    <p className='text-xl'>lookin this food. this food is very <br /> sweet and testy. you can eat now</p>
   
  </div>
</div>

<div className="card card-compact w-96 bg-base-100 shadow-xl m-6 p-5">
  <figure><img className='w-96' src="data:image/jpeg;base64,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" /></figure>
  <div className="card-body">
    <h2 className="card-title">declicuse</h2>
    <p className='text-xl'>this food is very nice and eating joos <br />
    you can eat it please order now</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </div>
      </div>
    );
};

export default Popular;