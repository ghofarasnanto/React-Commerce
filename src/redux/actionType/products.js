import {
    getAllProductsWithPagination,
    orderByNewItem,
    nextPagination,
} from "./action";
import {
    getAllProducts,
    orderProductsByNewItem,
} from "../../utils/axios";

export const getAllProductsRedux = (product_name, category, order, sort, page) => {
    return {
        type: getAllProductsWithPagination,
        payload: getAllProducts(product_name, category, order, sort, page),
    };
};

export const orderByNewItemRedux = (order) => {
    return {
        type: orderByNewItem,
        payload: orderProductsByNewItem(order),
    };
};

export const nextPaginationRedux = (product_name, category, order, sort, page) => {
    return {
        type: nextPagination,
        payload: getAllProducts(product_name, category, order, sort, page),
    };
};