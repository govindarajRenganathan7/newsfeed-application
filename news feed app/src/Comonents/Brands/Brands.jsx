import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card'

function Brands({ brands, filterByBrand }) {

  return (
    <>
    <Card className='mt-3'>
    <Card.Header >Brands</Card.Header>
    <Container>
    <Form >
    <ListGroup>
    {brands.map((brand,i) => <Form.Check key={i} className='p-3 ms-4' 
        type="switch"
        id="custom-switch"
        label={`${brand.label} ${brand.count}`}
        value={brand.label}
        onChange={(e) => filterByBrand(e.target.value, e.target.checked)}
      />)}
    </ListGroup>
    </Form>
    </Container>
    </Card>
    </>
  );
}

export default Brands;