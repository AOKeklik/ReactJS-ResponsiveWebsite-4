import React from 'react'
import {Link} from 'react-router-dom'
import * as Pages from '../Pages'

function CartTotal(props) {
    const {history} = props
    const {cartSubTotal, cartTax, cartTotal, clearCart} = props.context
    //console.log(props)
    return <div className="container">
        <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                    <button 
                        onClick={clearCart}
                        type="button"
                        className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                        >clear cart
                    </button>
                </Link>
                <h5>
                    <span className="text-title">subtotal: </span>
                    <strong>${cartSubTotal}</strong>
                </h5>
                <h5>
                    <span className="text-title">tax: </span>
                    <strong>${cartTax}</strong>
                </h5>
                <h5>
                    <span className="text-title">total: </span>
                    <strong>${cartTotal}</strong>
                </h5>
                <Pages.PayPalButton 
                    total={cartTotal} 
                    clearCart={clearCart} 
                    history={history}
                />
            </div>
        </div>
    </div>
}



export default CartTotal