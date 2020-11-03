import React from 'react'
import { useStateValue } from './StateProvider'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from "./reducer"
export default function Subtotal() {
    const [{cart},dispatch] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value)=>(
                    <>  
                        <p>Subtotal ({cart.length} items):<strong>{`${value}`}</strong></p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}
