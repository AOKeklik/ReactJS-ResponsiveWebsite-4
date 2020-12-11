import React, { Component } from 'react'
import * as Pages from '../Pages'

class Cart extends Component {
    static contextType = Pages.ProductContext

    render() {
        const {cart} = this.context 
        //console.log(this.props)
        if(cart.length > 0){
            return <section>
                <Pages.Title name="your" title="cart" />
                <Pages.CartColumns />
                <Pages.CartList context={this.context} />
                <Pages.CartTotals context={this.context} history={this.props.history} />
            </section>
        }else{
            return <Pages.EmptyCart />
        }
        
    }
}



export default Cart