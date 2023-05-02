import React from 'react';

const Header = () => {
    return (
        <nav>
            
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl">Food World</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li tabIndex={0}>
      
      </li>
      <li><a>Blog</a></li>
      <li><a>Login</a></li>
      <li><a>Registration</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Profile</a>
  </div>
</div>

        </nav>
    );
};

export default Header;