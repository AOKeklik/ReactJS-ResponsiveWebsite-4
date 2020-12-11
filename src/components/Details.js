import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import * as Pages from './Pages'

class Details extends Component {
    static contextType = Pages.ProductContext

    render() {
        const {id, title, img, company, price, info, inCart} = this.context.details
        const {addToCart, openModal} = this.context

        //console.log(this.context)

        return <div className="container py-5">
            {/* title */}
            <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                </div>
            </div>
            {/* end title */}
            {/* info */}
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img src={img} className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>model: {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        made by: <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue"><strong>price: <span>$</span>{price}</strong></h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about products:</p>
                    <p className="text-muted lead">{info}</p>
                    <div>
                        <Link to="/"><Pages.Button>back to products</Pages.Button></Link>
                        <Pages.Button 
                            cart
                            onClick={() => {
                                addToCart(id)
                                openModal(id)
                            }}
                            disabled={inCart || false}
                            >{inCart ? 'in cart' : 'add to cart'}
                        </Pages.Button>
                    </div>
                </div>
            </div>
            {/* end info */}

        </div>
    }
}

export default Details