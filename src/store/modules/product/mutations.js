export const SET_PRODUCTS = (state, products) => {
    state.products = products;
}

export const SET_PRODUCT = (state, product) => {
    state.product = product;
}

export const ADD_PRODUCT = (state, products) => {
    state.products.push(products)

}

export const DELETE_PRODUCT = (state, product) => {
    state.product = product;
}

export const EDIT_PRODUCT = (state, product) => {
    state.product = product;
}

export const UPDATE_PRODUCT = (state, products) => {

    state.products.push(products);
}
