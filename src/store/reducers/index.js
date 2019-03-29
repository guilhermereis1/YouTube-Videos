import { combineReducers } from "redux";
import busca from "./busca";
import reproduzVideo from "./reproduz-video";

const rootReducer = combineReducers({
  busca,
  reproduzVideo
});

export default rootReducer;
