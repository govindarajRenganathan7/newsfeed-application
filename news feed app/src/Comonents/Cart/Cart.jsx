import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';

function Cart({cartItem,EditItem}) {
  const [count, setCount] = useState(0)
  const decrement = (va) => {
    setCount(va)
    if(va >= 0){
      setCount(count -1)
    }
  }
  const increment = (va) => {
    setCount(va)
    if(va >= 0){
      setCount(count + 1)
    }
  }
  return (<>{ cartItem && cartItem.length && cartItem.map((item,i) => <Card className=""key={item.id} >
  <Card.Header>
  {item.brand}
  </Card.Header>
  <Card.Body>
  <Card.Title>{item.name}</Card.Title>
  <Card.Text>
    {item.description}
  </Card.Text>
  <Card.Subtitle>
    Price ${item.price}
  </Card.Subtitle>
  
  <Card.Subtitle>
    Total ${item.price*item.count}
  </Card.Subtitle>
  <Button variant="primary" onClick={() => {EditItem(item.id,item.count);}}>Edit</Button><Button className='ms-2' variant='light'onClick={() => decrement(item.count)}>-</Button>{item.count}<Button variant='light' onClick={() => increment(item.count)}>+</Button>
  </Card.Body>
  </Card>
)}
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Count</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
          { (cartItem&&cartItem.length) ? cartItem.map((item,i) => <tr key={item.id}><td>{i+1}</td><td>{item.name}</td><td>{item.brand}</td><td>${item.price}</td><td>{item.count}</td><td>${item.count*item.price}</td></tr>
          ):<tr><td></td><td></td><td></td><td></td></tr>}
      </tbody>
    </Table>
    </>

  );
}

export default Cart;