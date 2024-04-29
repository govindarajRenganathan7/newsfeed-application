
import Container from 'react-bootstrap/esm/Container'
import Loader from '../Spinner/SpinnerComponents'
import FeedItem from './FeedItem';
import Cart from '../Cart/Cart'
import { useState } from 'react';

const Feed = ({isLoading,products}) => {
  const[cartItem , setCartItem] = useState(localStorage.getItem('productlist') ||[]);

const AddToCart = (product,productCount) => {
  if(productCount >= 1){
  product.count = productCount;
  setCartItem([...cartItem,product]);
  localStorage.setItem(`productlist`, cartItem);
  }
}
const EditItem = (id,count) => {
  if(count == 0){
    let toEditItem = cartItem.filter(item => item.id != id);
    setCartItem([...toEditItem]);
    localStorage.setItem('productlist', cartItem);
  }
  if(count > 0){
    let toEditItem = cartItem.filter(item => item.id == id);
    toEditItem.count = count;
    setCartItem([...cartItem,toEditItem]);
    localStorage.setItem('productlist', cartItem);
  }
}
  return (
    <main>
    <Container className='mt-5 container-fluid'>{(!isLoading) ? 
       <>
        {
            products.map((product, index) => <FeedItem key={index} product = {product}  AddToCart={AddToCart} /> )
        }
        </> :  <Loader/>}
    </Container>
    <Container className='mt-5 container-fluid'>{(!isLoading) ? 
       <>
        <Cart cartItem={cartItem}  EditItem={EditItem}/>
        </> :<Loader/>}
        
    </Container>
    </main>
  )
}

export default Feed
