import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import * as Pages from './Pages'

class Product extends Component {
    static contextType = Pages.ProductContext
    
    render() {
        const {id, img, inCart, title, price} = this.props.product
        const {handleDetail, addToCart, openModal} = this.context

        //console.log(this.context)
        //console.log(this.props.product)

        return <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">

                <div 
                    onClick={() => handleDetail(id)}
                    className="img-container p-5">
                    <Link to="/details"><img src={img} className="card-img-top" /></Link>
                    <button 
                        onClick={() => {
                            addToCart(id)
                            openModal(id)
                        }}
                        disabled={inCart || false}
                        className="cart-btn">
                        {
                            inCart
                                ? <p className="text-capitalize mb-0" disabled>{" "}in cart</p>
                                : <FontAwesomeIcon icon={faCartPlus} />
                        }
                    </button>
                </div>
                {/* card footer */}
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">{title}</p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>{price}
                    </h5>
                </div>
            </div>
        </ProductWrapper>
    }
}

const ProductWrapper = styled.div`
    .card{
        border-color: transparent;

        transition: all 1s linear;
    }

    .card-footer{
        background: transparent;
        border-top: transparent;

        transition: all 1s linear;
    }
    &:hover{
        .card{
            border: .04rem solid rgba(0,0,0,.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,.2);
        }
        .card-footer{
            background: rgba(247,247,247);
        }
    }
    .img-container{
        overflow: hidden;
        position: relative;
    }
    .card-img-top{
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.2)
    }
    .cart-btn{
        position: absolute;
        right: 0;
        bottom: 0;
        padding: .2rem .4rem;
        border: none;
        border-radius: .5rem 0 0 0;
        background: var(--lightBlue);
        color: var(--mainWhite);
        font-size: 1.4rem;

        transform: translate(100%, 100%);
        transition: all 1s ease-in-out;
    }
    .img-container:hover .cart-btn{
        transform: translate(0, 0);
    }
    .cart-btn:hover{
        cursor: pointer;
        color: var(--mainBlue);
    }
`

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    })
    .isRequired
}

export default Product
