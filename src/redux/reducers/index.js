import { combineReducers } from "redux";
import productReducer from "./productReducer";
import tokoReducer from "./tokoReducer";
import venueVerifiedReducer from "./venueVerifiedReducer";

const rootReducer = combineReducers({
  listProduk: productReducer,
  listToko:tokoReducer,
  venueVerified:venueVerifiedReducer
});

export default rootReducer;
