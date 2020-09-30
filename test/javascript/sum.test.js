import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Coaches from '../../app/javascript/components/Coaches/Coaches';

test('rendered component', () => {
  const wrapper = shallow(<Coaches></Coaches>);
  console.log(wrapper.find('div.half.first'));
});
