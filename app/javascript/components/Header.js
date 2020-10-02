import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/images/Book-A-Coach.png';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS';
export const getThingsSuccess = payload => ({
  type: GET_THINGS_SUCCESS,
  payload,
});

const getThings = () => dispatch => {
  dispatch({ type: GET_THINGS_REQUEST });
  return axios
    .get('/api/v1/users.json')
    .then(resp => {
      dispatch(getThingsSuccess(resp.data));
    })
    .catch(err => err);
};

class Header extends React.Component {
  handleLogout = () => {
    const link = document.createElement('a');
    link.setAttribute('href', '/users/sign_out');
    link.setAttribute('rel', 'nofollow');
    link.setAttribute('data-method', 'delete');
    document.body.appendChild(link);
    link.click();
  };

  render() {
    const { getThings, name } = this.props;

    getThings();

    return (
      <div
        id="sidebar"
        className="flex flex-col justify-between w-1/5 h-full bg-red-400 fixed border-r pr-4 border-borderGray"
      >
        <img src={logo} alt="logo" />

        <ul className="text-xl font-bold text-gray">
          <li className="mr-3">
            <Link
              className="inline-block py-3 px-4 text-black hover:bg-green hover:text-white py-1 px-3"
              to="/"
            >
              Coaches
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className="inline-block py-3 px-4 text-black hover:bg-green py-1 px-3"
              to="/appointments"
            >
              Appointments
            </Link>
          </li>
          <li className="mr-3">
            <button
              className="inline-block py-3 px-4 text-black font-bold hover:bg-red py-1 px-3"
              onClick={this.handleLogout}
              type="button"
            >
              Sign Out
              {' '}
              <h5 className="text-xs text-gray">
                of
                {` ${name}`}
              </h5>
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
  }
}

Header.propTypes = {
  getThings: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const structuredSelector = createStructuredSelector({
  name: state => state.name,
});

const mapDispatchtoProps = { getThings };

export default connect(structuredSelector, mapDispatchtoProps)(Header);
