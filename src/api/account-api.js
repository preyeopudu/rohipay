import axios from "axios";
import { Route } from "../constants";

export const CREATEMERCHANT = async (body, token) => {
  const response = await axios
    .post(`${Route}/merchant/createMerchantDTO2`, body, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((err) => {
      if (err.toJSON().message === "Network Error") {
        return { err: "Network error" };
      } else {
        return { err: "401" };
      }
    });

  return response;
};

export const CREATEPERSONAL = async (body, token) => {
  const response = await axios
    .post(`${Route}/customers/createCustomersDTO`, body, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((err) => {
      if (err.toJSON().message === "Network Error") {
        return { err: "Network error" };
      } else {
        return { err: err.toJSON().message };
      }
    });

  return response;
};

export const GET_CUSTOMERS_BY_DTO_EMAIL = async (body, token) => {
  console.log(token);
  const response = await axios
    .post(`${Route}/customers/getAllCustomersDTOByEmail`, body, {
      headers: { Authorization: `${token}` },
    })
    .catch((err) => {
      if (err.toJSON().message === "Network Error") {
        return { err: "Network error" };
      } else {
        return { err: err.toJSON().message };
      }
    });

  return response;
};

export const GET_CUSTOMERS_BY_DTO_ID = async (body, token) => {
  const response = await axios
    .post(`${Route}/accounts/getAllAccountDetailssDTOByCustomerID`, body, {
      headers: { Authorization: `${token}` },
    })
    .catch((err) => {
      if (err.toJSON().message === "Network Error") {
        return { err: "Network error" };
      } else {
        return { err: err.toJSON().message };
      }
    });

  return response;
};

export const GET_DETAILS_DTO_BY_MERCHANT_EMAIL = async (body, token) => {
  const response = await axios
    .post(`${Route}/merchant/getMerchantDTOByMerchantEmail`, body, {
      headers: { Authorization: `${token}` },
    })
    .catch((err) => {
      if (err.toJSON().message === "Network Error") {
        return { err: "Network error" };
      } else {
        return { err: err.toJSON().message };
      }
    });

  return response;
};

export const GET_ALL_ACCOUNTS_BY_MERCHANT_ID = async (body, token) => {
  const response = await axios
    .post(`${Route}/merchant/getMerchantDTOByMerchantEmail`, body)
    .catch((err) => {
      if (err.toJSON().message === "Network Error") {
        return { err: "Network error" };
      } else {
        return { err: err.toJSON().message };
      }
    });

  return response;
};
