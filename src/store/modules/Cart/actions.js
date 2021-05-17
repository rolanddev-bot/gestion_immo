
import Cart from '../../../Apis/Cart'

export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit('ADD_TO_CART', { product, quantity });
    Cart.store({
        product_id: product.id,
        quantity
    });
}

export const getCartItems = ({ commit }) => {
    Cart.show()
        .then(response => {
            commit('SET_CART', response.data)
        })
}



export const RemoveCartItem = ({ commit }, product) => {
    commit('REMOVE_PRODUCT_TO_CART', product)
    Cart.delete(product.id)
}

export const RemoveAllCartItem = ({ commit }) => {
    commit('REMOVE_ALL_PRODUCT_TO_CART')
    Cart.deleteall()
}