import React, { Component } from 'react'
import * as Pages from './Pages'

class ProductList extends Component {

    render() {
        const {products} = this.props.context

        //console.log(this.props.context)
        //console.log(products)
    
        return <div className="py-5">
            <div className="container">
                <Pages.Title name="our" title="products" />
                <div className="row">
                {
                    products.map(product => <Pages.Product key={product.id} product={product} />)
                }
                </div>
            </div>
        </div>
    }
}


export default Pages.WithProductConsumer(ProductList)
