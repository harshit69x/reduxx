import { applyMiddleware,createStore, combineReducers } from "redux";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";
import { thunk } from "redux-thunk";
// Combine reducers
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
  });
  
  // Create store with rootReducer
  const store = createStore(rootReducer,applyMiddleware(thunk));
  export default store;



