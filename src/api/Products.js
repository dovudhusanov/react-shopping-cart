import {axiosInstance} from "./api";

export const getProductsAction = () =>  axiosInstance.get('/products')