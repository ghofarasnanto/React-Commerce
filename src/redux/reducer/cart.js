import { sizeProduct, idProduct, timeProduct, deliveryProduct, countDec, countInc, imgProduct, nameProduct, priceProduct } from "../actionType/action"
const initialState = {
    id: "",
    price: 0,
    size: "",
    delivery: "",
    time: "",
    qty: 0,
    product_name: "",
    image: "",
    product_id: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case countInc:
            return {...state, qty: state.qty + 1 }
        case countDec:
            return {...state, qty: state.qty - 1 }
        case idProduct:
            const { id } = action.payload
            return {...state, id }
        case sizeProduct:
            const { size } = action.payload
            return {...state, size }
        case timeProduct:
            const { time } = action.payload
            return {...state, time }
        case deliveryProduct:
            const { delivery } = action.payload
            return {...state, delivery }
        case imgProduct:
            const { image } = action.payload
            return {...state, image }
        case nameProduct:
            const { product_name } = action.payload
            return {...state, product_name }
        case priceProduct:
            const { price } = action.payload
            return {...state, price }
        default:
            return state
    }
}

export default cartReducer