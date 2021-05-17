export const CartItemCount = (state)=>{
    return state.cart.length;
}

export const TotalPrice = (state)=>{
    let Total = 0;
    state.cart.forEach(item =>{
        Total += item.product.price * item.quantity;
    });

    return Total;
}

export const TotalPriceItem = (state) => {
    let TotalItem = 0;
    state.cart.find(item=>{
        TotalItem = item.product.price * item.quantity ;
    })
    return TotalItem;
}