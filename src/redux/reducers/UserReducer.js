import {
  USER_LOADED,
  USER_LOADING,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_ABOUT,
  SET_COMPLETED_TASKS,
  LOAD_COMPLETED,
  SET_INDEX,
  SET_DATA,
} from "../Actions";
const initialState = {
  // isLoading: false,
  // isAuthenticated: null,
  // user: null,
  completedTasks: [],
  index: 0,
  data: {
    title: "about",
    Heading: "Heading",
    Subtitle: "Subtitle",
    Content:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used inlaying out print, graphic or web designs. The passage is attributed toan unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a  type specimen book.",
  },
};
const UserReducer = (state = initialState, action) => {
  console.log("hello", action.payload);

  switch (action.type) {
    case SET_ABOUT:
      return {
        ...state,
        data: action.payload,
      };
    case SET_COMPLETED_TASKS:
      return {
        ...state,
        completedTasks: action.payload,
      };
    case LOAD_COMPLETED:
      return {
        ...state,
      };
    case SET_INDEX:
      return {
        ...state,
        index: action.payload,
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    // case LOGIN_SUCCESS:
    //   localStorage.setItem("token", action.payload.token);
    //   return {
    //     data: action.payload,
    //   };
    // case LOGOUT_SUCCESS:
    // case LOGIN_FAIL:
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("user");
    //   return {
    //     isAuthenticated: null,
    //     isLoading: false,
    //     user: null,
    //   };
    default:
      return state;
  }
};
export default UserReducer;
