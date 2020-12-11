import React, { Component } from 'react'
import * as Pages from '../Pages'

class CartList extends Component {
    render() {
        const {cart, increment, decrement, removeItem} = this.props.context
        //console.log(this.props.context)
        return <div className="container-fluid">
            {cart.map(item => {
                return <Pages.CartItem 
                            key={item.id} 
                            item={item} 
                            increment={increment} 
                            decrement={decrement}
                            removeItem={removeItem} 
                        />
            })}
        </div>
    }
}



export default CartList