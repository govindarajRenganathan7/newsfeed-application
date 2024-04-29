import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';


function FeedItem({product, AddToCart}) {
  const[productCount, setProductCount] = useState(0)

  
  const decrement = () => {
    if(productCount >= 1) {
      setProductCount(productCount - 1)
    }else{
      setProductCount(productCount)
    }
      };
  const increment = () => {
    if(productCount >= 0) {
      setProductCount(productCount + 1)
    }else{
      setProductCount(productCount)
    }
  };

  return ( 
  <>
    <Card style={{ width: '18rem', display:"inline-block"}} className='m-3'>
    <Card.Img variant="top" src={product.image} alt='image not founds'/>
    <Card.Body>
      <Card.Title className='text-primary'> {(product.description && product.name.length > 25 )  ? `${product.name.slice(0,30)}...` : product.name }</Card.Title>
      <Card.Title>${product.price}</Card.Title>     
      <Card.Text>
        { (product.description && product.description.length > 100 )  ? `${product.description.slice(0,100)}...` : product.description}
      </Card.Text>
      <Button variant="primary" onClick={() => {AddToCart(product,productCount);}}>Add to cart</Button><Button className='ms-2' variant='light' onClick={decrement}>-</Button>{productCount}<Button variant='light' onClick={increment}>+</Button>
    </Card.Body>
  </Card> 
  </>);
}

export default FeedItem;