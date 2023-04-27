import './navbar.css'
import { useSelector } from 'react-redux';
 const NavBar = ()=>{
const cartInc =useSelector((state)=> state.CartReducer.cartValue.length)
const totalPrice =useSelector((state)=> state.CartReducer.totalPrice)
const cart = useSelector((state)=> state.CartReducer.cartValue)
console.log("fdsgdcbxcvhfg",cart)
// console.log("+++++++++++",cartDec)
    return(
        <div className="Navbar">
        <div className="Navbar-CartItems">Cart Items: {cartInc}</div>
        {/* <div>{" "}</div> */}
        <div className="Navbar-CartItems">Price: {totalPrice}</div>
        </div>
    )
}
export default NavBar;