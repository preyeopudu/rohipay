const TokenReducer = (state = "", action) => {
  switch (action.type) {
    case "TOKEN":
      let State = action.token;
      return State;
    default:
      return state;
  }
};

export default TokenReducer;
