import axios from "axios";
import { Route } from "../constants";

export const CREATEACCOUNT = async (body) => {
  const response = await axios
    .post(`${Route}/users/addnewaccount`, body)
    .catch((err) => {
      if (err.toJSON().message === "Network Error") {
        return { err: "Network error" };
      } else {
        return { err: "401" };
      }
    });

  return response;
};

export const SIGNIN = async (body) => {
  const response = await axios.post(`${Route}/login`, body).catch((err) => {
    if (err.toJSON().message == "Network error") {
      return { err: "Unable to connect" };
    } else {
      return { err: err.toJSON().message };
    }
  });
  return response;
};

export const GETTOTP = async (details) => {
  const response = await axios
    .post(`${Route}/users/sendtokenemail`, details)
    .catch((err) => {
      if (err.toJSON().message === "Network Error") {
        return { err: "Network error" };
      } else {
        return { err: "401" };
      }
    });
  return response;
};
