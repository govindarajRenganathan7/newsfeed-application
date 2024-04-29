import { useState, useEffect } from 'react'
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {data} from '../../assets/data';


const Main = () => {
    const [products, setProducts] = useState(data[0].products || []);
    const [isLoading, setIsloading] = useState(true);
    const [brands, setBrands] = useState([]);
   
    const brandFitler = () => {
        let brandCount = {}, items = [];
        data[0].products.map(item => {
                let b = item.brand
                    if (brandCount[b]) {
                        brandCount[b] += 1
                    } else {
                        brandCount[b] = 1
                    }
        })
        for (const d in brandCount) {
            let i = { label: d, count: brandCount[d] }
            items.push(i)
        }
        setBrands(items);       
    }

    const filterByBrand = (value,check) => {

        if(check){
            
        const filteredProducts = data[0].products.filter((product) => product.brand == value);console.log(filteredProducts);
        setProducts([...filteredProducts]);
        
    }
    }
    const filterByPrice = (check, val) => {
            if(check === true && val == 'Higher to lower'){
                const sortedArray =data[0].products.sort((a,b) => b.price - a.price);
                setProducts([...products,sortedArray]);
              }
            if( check === true && val == 'Lower to higher'){
                  const sortedArray = data[0].products.sort((a,b) => a.price - b.price);
                  setProducts([...products,sortedArray]);
              }
            
            if(check == false && val == 'Higher to lower '){
                    const sortedArray =data[0].products.sort((a,b) => a.price - b.price);
                    setProducts([...products,sortedArray]);
                  }
            if (check == false && val == 'Lower to higher'){
                    const sortedArray = data[0].products.sort((a,b) => b.price - a.price);
                    setProducts([...products,sortedArray]);
                }
            if(check == false && val == ''){
                setProducts(data[0].products)
            }
                  
            
    }
    useEffect(
        () =>{
        setIsloading(false);
        brandFitler();
        localStorage.clear();
    },[]);
    
  return (
    <>
    <Container fluid>
        <Row>
            <Col xs={2}>
            <Sidebar setProducts={setProducts} filterByPrice={filterByPrice} brands = {brands} filterByBrand = {filterByBrand} />
            </Col>
            <Col xs={9}>
            <Feed products={products} isLoading={isLoading} />
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default Main
