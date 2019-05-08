import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balance = (state = 0, action) => {
  let balance;

  switch (action.type) {
    case constants.SET_BALANCE:
      balance = action.balance;
      break;
    case constants.DEPOSIT:
      balance = state + action.deposit;
      break;
    case constants.WITHDRAW:
      balance = state - action.withdrawal;
      break;
    default:
      //returns the value of your of your baked cookie.
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }
  //Bake Cookie allows you to pass a name and a string value to store a cookie on the user's browser. It maps the name to the string
  // delete_cookie(name) - removes the cookie from the browser history.
  bake_cookie(BALANCE_COOKIE, balance);

  return balance;
};

export default balance;
