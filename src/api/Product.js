import {axiosInstance} from "./api";

export const getProductAction = (id) => axiosInstance.get(`products/${id}`)