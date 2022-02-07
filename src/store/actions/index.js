export const Token = (token) => {
  const action = {
    type: "TOKEN",
    token,
  };
  return action;
};

export const LogIn = (user) => {
  const action = {
    type: "LOGGEDIN",
    user,
  };
  return action;
};

export const LogOut = () => {
  const action = {
    type: "LOGGEDOUT",
  };
  return action;
};

export const SetPersonal = (payload) => {
  const action = {
    type: "SETPERSONAL",
    payload,
  };
  return action;
};

export const GetAccount = (payload) => {
  const action = {
    type: "GETACCOUNT",
    payload,
  };
  return action;
};

export const SetMerchant = (payload) => {
  const action = {
    type: "SETMERCHANT",
    payload,
  };
  return action;
};
