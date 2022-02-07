const initialState = {
  merchant: {},
};

const MerchantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETMERCHANT":
      return {
        ...state,
        merchant: action.payload,
      };
    case "LOGOUTUSER":
      return {
        ...state,
        merchant: "",
      };
    default:
      return state;
  }
};

export default MerchantReducer;
