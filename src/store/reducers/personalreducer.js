const initialState = {
  personal: {},
  accounts: [],
};

const PersonalReducer = (state = initialState, action) => {

  switch (action.type) {
    case "SETPERSONAL":
      return { ...state, personal: action.payload };
    case "GETACCOUNTS":
      return {
        ...state,
        accounts: action.payload,
      };
    case "LOGOUTUSER":
      return {
        ...state,
        personal: "",
        accounts: "",
      };
    default:
      return state;
  }
};

export default PersonalReducer;
