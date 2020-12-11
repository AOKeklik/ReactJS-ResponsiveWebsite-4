import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import * as Pages from './Pages'

class Modal extends Component {
    render() {
        const {modalOpen, closeModal} = this.props.context
        const {img, title, price} = this.props.context.modalProduct

        //console.log(this.props.context)

        if(!modalOpen){
            return null
        }else{
            return <ModalContainer>
                <div className="container">
                    <div className="row">
                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize">
                            <h5>item added to the cart</h5>
                            <img src={img} className="img-fluid" />
                            <h5>{title}</h5>
                            <h5 className="text-muted">price: $ {price}</h5>
                            <Link to="/">
                                <Pages.Button onClick={closeModal}>store</Pages.Button>
                            </Link>
                            <Link to="/cart">
                                <Pages.Button cart onClick={closeModal}>go to cart</Pages.Button>
                            </Link> 
                        </div>
                    </div>
                </div>
            </ModalContainer>
        }
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.3);

    #modal{
        background: var(--mainWhite)
    }
`

export default Pages.WithProductConsumer(Modal)