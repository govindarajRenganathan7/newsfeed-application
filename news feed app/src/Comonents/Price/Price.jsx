import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card'

function Price({filterByPrice}) {
  return (
    <>
    <Card className='mt-3'>
    <Card.Header >
        Price
    </Card.Header>
    <Container className='mt-1'>
    <Form>
    <ListGroup>
    <Form.Check className='p-3 ms-4' 
        type="switch"
        id="custom-switch"
        label='Higher to lower'
        onChange={(e) => {let check = e.target.checked, val = e.target.value; filterByPrice(check,val); console.log(val);}}
        value={'Higher to lower'}
      />
      <Form.Check className='p-3 ms-4' 
        type="switch"
        id="custom-switch"
        label='Lower to higher'
        onChange={(e) => {filterByPrice(e.target.checked,e.target.value)}}
        value={'Lower to higher'}
      />

    </ListGroup>
    </Form>
    </Container>
    </Card>
    
    </>
  );
}

export default Price;