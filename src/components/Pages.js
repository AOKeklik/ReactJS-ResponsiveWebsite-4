// logo
import logo from '../logo.svg'

// data 
import {storeProducts, detailProduct} from '../data'

// Context
import {ProductContext, ProductProvider, ProductConsumer, WithProductConsumer} from '../context'

// carts
import Cart from './Cart'
import CartColumns from './Cart/CartColumns'
import CartItem from './Cart/CartItem'
import CartList from './Cart/CartList'
import CartTotals from './Cart/CartTotals'
import EmptyCart from './Cart/EmptyCart'
import PayPalButton from './Cart/PayPalButton'


// components
import Default from './Default'
import Details from './Details'
import Modal from './Modal'
import Navbar from './Navbar'
import Product from './Product'
import ProductList from './ProductList'
import Title from './Title'
import {Button} from './Button'

export {
    // logo
    logo,

    // data
    storeProducts, detailProduct,

    // context
    ProductContext, ProductProvider, ProductConsumer, WithProductConsumer,
    
    // carts
    Cart,
    CartColumns,
    CartItem,
    CartList,
    CartTotals,
    EmptyCart,
    PayPalButton,
    
    // components
    Default,
    Details,
    Modal,
    Navbar,
    Product,
    ProductList,
    Title,
    Button
}