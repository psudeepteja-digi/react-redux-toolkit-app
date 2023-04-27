import './productlist.css'
import ProductData from './ProductData.json'
import { useDispatch } from 'react-redux'
import { cartIncrement , cartDecrement} from '../Redux/cartReducer'

 const ProductList = ()=>{
    const dispatch = useDispatch();
    return(
        <div className="ProductList">
        {
            ProductData.products.map((item)=>{
                return(
                <div key={item.id}className='model'>
                <div className='item-model'>Mobile: {item.model}</div>
                <div className='item-price'>Price: {item.price}</div>
                <div className='add-btn'>
                <button className='add' onClick={()=>dispatch(cartIncrement({
                        productId:item.id,
                        mobile:item.model,
                        price:item.price
                     }))}>Add</button> {' '}
                <button className='remove' onClick={()=>dispatch(cartDecrement({
                        productId:item.id,
                        mobile:item.model,
                        price:item.price
                     }))}>Remove</button>
                </div>
                </div>
                )
            })
        }
        </div>
    )
}
export default ProductList;