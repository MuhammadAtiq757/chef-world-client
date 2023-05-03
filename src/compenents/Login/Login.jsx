import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Login = () => {
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () =>{
    
signInWithPopup(auth, googleProvider)
.then(result => {
  const user = result.user;
  console.log(user);
})

.catch(error =>{
  console.log('error', error.message);
})

  }

const githubSignIn =() =>{
signInWithPopup(auth, githubProvider)
.then(result =>{
  const loggedUser = result.user;
  console.log(loggedUser);
  
})
.catch(error =>{
  console.log(error);
})

}






const {signIn} = useContext(AuthContext);

const handleLogin = event =>{
event.preventDefault();

const form = event.target;
const email = form.email.value;
const password = form.password.value;
console.log(email, password);

signIn(email, password)
.then(result =>{
  const loggedUser = result.user;
  console.log(loggedUser);
  form.rest();
})
.catch(error =>{
  console.log(error);
})


}

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button> <br />
          <button onClick={handleGoogleSignIn} className='btn btn-primary'>login with google</button>
          <button onClick={githubSignIn} className='btn btn-primary mt-4'>login with git hub</button>
        </div>
      </form>
      <p className='ml-5 p-5 text-primary'><small>New to Food World? <Link to="/signup">Creat an account</Link></small></p>

    </div>
  </div>
</div>
        </div>
    );
};

export default Login;