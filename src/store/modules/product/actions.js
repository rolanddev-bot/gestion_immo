import Product from '../../../Apis/Product'

export const getProducts = ({ commit }) => {
    Product.all()
        .then(response => {
            commit('SET_PRODUCTS', response.data)
        })

}

export const getProduct = ({ commit }, productId) => {
    Product.show(productId)
        .then(response => {
            commit('SET_PRODUCT', response.data);
        })
}

export const AddProduct = ({ commit }, datanew) => {
    commit('ADD_PRODUCT', datanew)
    Product.store(datanew);

}

export const DeleteProduct = ({ commit }, productId) => {
    commit('DELETE_PRODUCT', productId)
    Product.delete(productId)
        .then(response => {
            commit('SET_PRODUCTS', response.data)
        })

}

export const EditProduct = ({ commit }, productId) => {
    Product.edit(productId)
        .then(response => {
            commit('EDIT_PRODUCT', response.data)
        })

}


export const UpdateProduct = ({ commit }, { data }) => {
    commit('UPDATE_PRODUCT', data)
    Product.update(data);

}