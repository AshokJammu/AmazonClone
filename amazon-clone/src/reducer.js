export const initialState = {
    cart:[],
    user:null
}

export const getBasketTotal = (cart) =>
cart?.reduce((amount,item) => item.price + amount,0)

function reducer(state,action){
    switch(action.type){

        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case "ADD_TO_BASKET":
            return {
                ...state,
                cart:[...state.cart,action.item]
            };
        case "REMOVE_FROM_BASKET":
            let newCart = [...state.cart]

            const index = state.cart.findIndex((cartItem)=>
            cartItem.id === action.id
            )

            if(index >=0){
                newCart.splice(index,1)
            }
            else{
                console.warn(`Cant'remove(id: ${action.id}) as`)
            }
            return {
                ...state,
                cart:newCart
            };
        default:
            return state
    }

}

export default reducer