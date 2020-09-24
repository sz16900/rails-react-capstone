import React from 'react';

const Header = () => {
  return (
    <div
      id="sidebar"
      className={'flex flex-col justify-between w-1/5 h-full bg-red-400 fixed'}
    >
      <h1 id="logo" className="bg-black ">
        Logo Here
      </h1>
      <ul id="nav" className="h-33">
        <li>Coaches</li>
        <li>Categories</li>
        <li>About</li>
      </ul>
      <div id="footer" className="bg-black">
        Logo Here
      </div>
    </div>
  );
};

export default Header;
