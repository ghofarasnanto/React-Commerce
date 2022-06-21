import axios from "axios";
import BASE_URL from "../BASE_URL";

// export const loginAuth = (body) => {
//   const URL = `${BASE_URL}/auth/signin`;
//   const result = axios.post(URL, body);
//   return result;
// };

export const orderProductsByNewItem = (sort = "", page = 1) => {
    const URL = `${BASE_URL}products?order=created_at&page=${page}&sort=${sort}&limit=12`;
    return axios.get(URL);
};

export const getAllProducts = (
    search = "",
    category = "",
    order = "created_at",
    sort = "asc",
    page = 1
) => {
    const URL = `${BASE_URL}/products?product_name=${search}&category=${category}&order=${order}&sort=${sort}&page=${page}&limit=12`;
    return axios.get(URL);
};

export const getProductDetail = (id) => {
    const URL = `${BASE_URL}/products/${id}`;
    return axios.get(URL);
};

export const postPayment = (body, token) => {
    const URL = `${BASE_URL}/transactions/create`;
    const results = axios.post(URL, body, token);
    return results;
};

export const getProfile = (token) => {
    const URL = `${BASE_URL}/users/`;
    const results = axios.get(URL, {
        headers: { "x-access-token": token },
    });
    return results;
};


export const sortDeleteHistories = (token, id) => {
    const URL = `${BASE_URL}/transactions/${id}`;
    return axios.patch(URL, { headers: { "x-access-token": token } });
};