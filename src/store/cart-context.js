import React from "react";


const CartContext = React.createContext({
    items:[],
    totalAmount: 0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})
//here we are creating a context so that it can be used , we are setting an object so that our ide suggests us better in further uses
export default CartContext;