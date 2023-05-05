import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Signup = () => {
  const [error, setError] = useState('');
  const {createUser} = useContext(AuthContext);

  const handleSignUp = event =>{
    event.preventDefault();

const form = event.target;
const name = form.name.value;
const email = form.email.value;
const password = form.password.value;
const photo = form.photo.value;

console.log(name, email, password);

setError('')
if(password.length < 6){
  setError('password must be 6 characters or longer')
return;
}
createUser(email, password)
.then(result =>{
  const loggedUser = result.user;
  console.log(loggedUser);
  updateUserProfile(result.user, name, photo)
})
.catch(error =>{
  console.log(error);
  setError(error.message);
})


const updateUserProfile =(user , name , photo)=>{
  updateProfile( user ,{
      displayName: name,
       photoURL: photo 
  })
  .then(result => {
      const updateUser = result.user;
      console.log(updateUser);
      setError('');
  })
  .catch(error => {
      setError('');
  })
};


  }
    return (
        <div>
                    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="eamil" placeholder="enter your email" name='email' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">your Password</span>
          </label>
          <input type="passwrod" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="eamil" placeholder="enter your Photo url" name='photo' className="input input-bordered" required/>
        </div>

        <div className="form-control mt-6">
         <input className='btn btn-primary' type="submit" name="" id=""  value="Sign up" required/>
        </div>
      </form>
      <p className='ml-5 p-5 text-primary'><small>Already Have an account ? <Link to="/login">Login</Link></small></p>
    <p className='text-pink-600 ml-5 p-4'>{error}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Signup;