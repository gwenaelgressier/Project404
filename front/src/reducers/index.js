import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";
import errorReducer from "./error.reducer";
import postReducer from "./post.reducer";
import allPostsReducer from "./allPosts.reducer";

// import neocronWeaponsReducer from "./neocronWeapons.reducer";
// import neocronWeaponReducer from "./neocronWeapon.reducer";

export default combineReducers({
  userReducer,
  usersReducer,
  errorReducer,
  postReducer,
  allPostsReducer,
  // neocronWeaponsReducer,
  // neocronWeaponReducer,
});
