import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import Gift from './Gift';

Enzyme.configure({ adapter: new Adapter() });

/* 
describe(): An optional method to wrap a group of tests with. describe() allows us to write some text that explains the nature of the group of tests conducted within it. As you can see in the Terminal, the describe() text acts as a header before the test results are shown.
it(): Similar in nature to describe(), it() allows us to write some text describing what a test should successfully achieve. You may see that the test() method is used instead of it() throughout the Jest documentation, and vice-versa in the Create React App documentation. Both are valid methods.
expect() and .toEqual(): Here we carry out the test itself. The expect() method carries a result of a function, and toEqual(), in this case, carries a value that expect() should match.
expect() makes assertions: what is an assertion?

expect() is a global Jest function for making assertions. An assertion takes a boolean valued function and always expects that return value to be true — hence the name expect. In the event that false is returned, the test fails and execution stops within the corresponding it() or test() block.

toEqual() is a matcher: what is a matcher?

toEqual() is called a matcher. A matcher is a function whose resulting value must be true relative to what it is testing from expect(). Jest have documented the full list of matchers here, ranging from toContain, toBeFalsy, toMatch(regexpOrString) and toThrow(error). It’s worthwhile familiarising yourself with what is available to optimise your test syntax.

Shallow:-Here we have used the shallow() assertion method. shallow() will test the component we are providing, and ignores any child components that may be present in the component tree thereafter; if we had a <Header /> and <Footer /> component within <App /> for example, they would be ignored in this test.

shallow() is a type of unit test for React. A unit test is a test specifically designed to only test one function. When we are testing functions that rely on other functions, we refer to such tests as integration tests. Likewise, if we are testing an entire React component tree instead, this would be an integration test.

In Enzyme we can do such a test with mount(); a full rendering test that takes the entire component tree and lifecycle methods into consideration.



Unit test: Testing one isolated function, or one React component. Enzyme’s shallow() is a unit test.
Integration test: Testing a multitude of functions working together, or an entire React component including children components. Enzyme’s mount() is an integration test.
Mock function: Redefining a function specifically for a test to generate a result. E.g. returning hard-coded data instead of relying on fetch requests or database calls. This strategy could prevent the hard-coded sum issue we were discussing earlier!
Mock functions can be defined in jest with jest.fn(() => { //function here });.

*/

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('Intilases the state with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('When clicking the add gift button', () => {
    const id = 1;
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({
        gifts: [],
      });
    });

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('adds a new gift to the render list ', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('Creates a gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });
    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });
      it('removes the gift from the state', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
