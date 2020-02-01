/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import RatingSelector from '../client/components/RatingSelector';

describe('Rating Selector Component', () => {
  it('it should call a callback when clicked', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<RatingSelector onClick={onClickMock} />);

    wrapper.simulate('click');

    expect(onClickMock).toHaveBeenCalled();
  });
});
