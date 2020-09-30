import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  name: '',
};

const rootReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'GET_THINGS_SUCCESS':
      return { name: action.payload };
    default:
      return state;
  }
};

const configureStore = () => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
};

export default configureStore;
