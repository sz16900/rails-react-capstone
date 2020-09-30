import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Coaches from '../../app/javascript/components/Coaches/Coaches';

configure({ adapter: new Adapter() });

test('rendered component', () => {
  const wrapper = shallow(<Coaches />);
  return wrapper;
});
