
export const ADD_TO_CART = (state, {product ,quantity})=>{
    let ProductInCart = state.cart.find(item =>{
        return item.product.id === product.id
    })
    if(ProductInCart){
        ProductInCart.quantity +=quantity;
        return ;
    }
    state.cart.push({
        product,
        quantity
    })
}

export const SET_CART =(state, CartItems)=>{
    return state.cart = CartItems;
}

export const REMOVE_PRODUCT_TO_CART =(state, product)=>{
    return state.cart = state.cart.filter(item =>{
        return item.product.id !== product.id ;
    })
}

export const REMOVE_ALL_PRODUCT_TO_CART =(state)=>{
    return state.cart =[];
}