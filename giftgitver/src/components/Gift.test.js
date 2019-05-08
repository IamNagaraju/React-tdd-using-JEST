import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Gift from './Gift';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Gift', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);
  it('renders properly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('Intialises a person and present a state', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('When typing into the person input', () => {
    const person = 'Uncle';
    beforeEach(() => {
      gift
        .find('.input-person')
        .simulate('change', { target: { value: person } });
    });

    it('Updates the state', () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe('When typing into the present input', () => {
    const present = 'Golf Culbs';
    beforeEach(() => {
      gift
        .find('.input-present')
        .simulate('change', { target: { value: present } });
    });

    it('Updates the state', () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe('When Clicking the remove gift button ', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });
    it('calls the remove gift  callback ', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
