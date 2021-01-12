import { FETCH_GIGS } from "../Actions";
const initialState = {
  gigs: [],
};
const GigReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GIGS:
      return {
        ...state,
        gigs: [...action.payload],
      };
    default:
      return state;
  }
};
export default GigReducer;
