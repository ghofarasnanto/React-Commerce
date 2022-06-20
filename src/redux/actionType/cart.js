import { sizeProduct, idProduct, timeProduct, deliveryProduct, countDec, countInc, imgProduct, nameProduct, priceProduct, checkOutProduct } from "./action"

export const setSize = (size) => {
    return {
        type: sizeProduct,
        payload: {
            size
        }
    }
}

export const setIdProduct = (id) => {
    return {
        type: idProduct,
        payload: {
            id
        }
    }
}

export const setTime = (time) => {
    return {
        type: timeProduct,
        payload: {
            time
        }
    }
}

export const setDelivery = (delivery) => {
    return {
        type: deliveryProduct,
        payload: {
            delivery
        }
    }
}

export const increment = () => {
    return {
        type: countInc
    }
}

export const decrement = () => {
    return {
        type: countDec
    }
}

export const setImage = (image) => {
    return {
        type: imgProduct,
        payload: {
            image
        }
    }
}

export const setName = (product_name) => {
    return {
        type: nameProduct,
        payload: {
            product_name
        }
    }
}

export const setPrice = (price) => {
    return {
        type: priceProduct,
        payload: {
            price
        }
    }
}

export const setCheckOut = (checkOut) => {
    return {
        type: checkOutProduct,
        payload: {
            checkOut
        }
    }
}