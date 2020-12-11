import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

function CartItem({item, increment, decrement, removeItem}){
    const {id, img, title, price, count, total} = item 

    //console.log(item)

    return <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
            <img src={img} style={{width: '5rem', height: '5rem'}} className="img-fluid" />
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">product: </span> {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">price: </span> {price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-2">
            <div className="d-flex justify-content-center">
                <div>
                    <span onClick={() => decrement(id)} className="btn btn-black mx-1">-</span>
                    <span className="btn btn-black mx-1">{count}</span>
                    <span onClick={() => increment(id)} className="btn btn-black mx-1">+</span>
                </div>
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <div onClick={() => removeItem(id)} className="cart-icon">
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <strong>item total: </strong> ${total}
        </div>
    </div>
}



export default CartItem