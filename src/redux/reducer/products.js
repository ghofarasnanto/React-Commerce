import { orderByNewItem, getAllProductsWithPagination, PENDING, FULLFILLED, REJECTED, nextPagination } from "../actionType/action";

const initialState = {
    products: [],
    newItems: [],
    err: null,
    isLoading: false,
    prevLink: "",
    nextLink: "",
    currentPage: 0,
    totalPage: 0
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case getAllProductsWithPagination + PENDING:
            return {...state, isLoading: true }
        case getAllProductsWithPagination + FULLFILLED:
            return {...state, products: action.payload.data.data, isLoading: false, prevLink: action.payload.data.prevLink, nextLink: action.payload.data.nextLink, currentPage: action.payload.data.page, totalPage: action.payload.data.total_page, err: null }
        case getAllProductsWithPagination + REJECTED:
            return {...state, isLoading: false, err: action.payload }

        case orderByNewItem + PENDING:
            return {...state, isLoading: true }
        case orderByNewItem + FULLFILLED:
            return {...state, newItems: action.payload.data.data, isLoading: false, prevLink: action.payload.data.prevLink, nextLink: action.payload.data.nextLink, currentPage: action.payload.data.page, totalPage: action.payload.data.total_page }
        case orderByNewItem + REJECTED:
            return {...state, isLoading: false, err: action.payload }

        case nextPagination + PENDING:
            return {...state, isLoading: true }
        case nextPagination + FULLFILLED:
            return {...state, products: action.payload.data.data, isLoading: false, prevLink: action.payload.data.prevLink, nextLink: action.payload.data.nextLink, currentPage: action.payload.data.page, totalPage: action.payload.data.total_page }
        case nextPagination + REJECTED:
            return {...state, isLoading: false, err: action.payload }
        default:
            return state
    }
}

export default productReducer