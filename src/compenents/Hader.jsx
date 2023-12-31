import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';


const Hader = () => {
const {user, logOut} = useContext(AuthContext)

const handleLogout =() =>{

  logOut()
  .then(result =>{})
  .catch(error => console.log(error))

}

    return (
        <div>
            <div className="navbar bg-neutral-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl">Chef<span className='text-lime-800'> world</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
      <div className="w-10 rounded " >
                        <img src={user?.photoURL} />
                    </div>



      {user && <span>  <button onClick={handleLogout}>Sign out</button></span>}
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Hader;
