import React from 'react';

const Favourite = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://st4.depositphotos.com/4590583/28898/i/450/depositphotos_288989496-stock-photo-banner-food-top-view-free.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>This dish is a delicious and savory combination of tender, <br /> 
    juicy chicken breast, cooked to perfection and smothered in a rich,
    <br /> creamy mushroom sauce. The sauce is made with a blend of savory spices, cream, <br /> and freshly sautéed mushrooms, giving it a robust and earthy flavor that perfectly <br /> complements the tender chicken. Served alongside a medley of fresh, colorful vegetables and fluffy, <br /> buttery rice pilaf, this meal is both filling and satisfying. Each bite is bursting with flavor and texture, making it the perfect choice
     <br /> for a cozy night in or a special dinner with friends and family.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Favourite;