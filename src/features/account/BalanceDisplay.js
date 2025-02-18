import { combineReducers,createStore } from "redux";
import { thunk } from "redux-thunk";
// import accountReducer from "./accountSlice";
// import customerSlice from "./features/customer/customerSlice";




function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  return <div className="balance">{formatCurrency(123456)}</div>;
}

export default BalanceDisplay;
