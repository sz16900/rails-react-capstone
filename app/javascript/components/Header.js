import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Book-A-Coach.png';

const Header = () => {
  const handleLogout = () => {
    const link = document.createElement('a');
    link.setAttribute('href', '/users/sign_out');
    link.setAttribute('rel', 'nofollow');
    link.setAttribute('data-method', 'delete');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div
      id="sidebar"
      className={
        'flex flex-col justify-between w-1/5 h-full bg-red-400 fixed border-r pr-4 border-borderGray'
      }
    >
      <img src={logo} alt="logo" />

      <ul className="text-xl font-bold text-gray">
        <li className="mr-3">
          <Link
            className="inline-block py-3 px-4 text-black hover:bg-green hover:text-white py-1 px-3"
            to={'/'}
          >
            Coaches
          </Link>
        </li>
        <li className="mr-3">
          <Link
            className="inline-block py-3 px-4 text-black hover:bg-green py-1 px-3"
            to={'/appointments'}
          >
            Appointments
          </Link>
        </li>
        <li className="mr-3">
          <Link
            className="inline-block py-3 px-4 text-black hover:bg-green py-1 px-3"
            to={'/'}
          >
            About
          </Link>
        </li>
        <li className="mr-3">
          <button
            className="inline-block py-3 px-4 text-black font-bold hover:bg-green py-1 px-3"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </li>
      </ul>
      <div id="footer" className="bg-red-900 p-4 text-sm text-center">
        <FontAwesomeIcon className="mr-2" icon={['fab', 'facebook']} />
        <FontAwesomeIcon className="mr-2" icon={['fab', 'twitter']} />
        <FontAwesomeIcon className="mr-2" icon={['fab', 'google-plus-g']} />
        <FontAwesomeIcon className="mr-2" icon={['fab', 'paypal']} />
        <FontAwesomeIcon className="mr-2" icon={['fab', 'pinterest']} />
        <p>&copy; Seth Zea</p>
        <p>Product of Hawaii</p>
      </div>
    </div>
  );
};

export default Header;
