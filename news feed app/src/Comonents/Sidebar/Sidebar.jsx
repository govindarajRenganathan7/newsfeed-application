import {useState,useEffect} from 'react'
import Brands from '../Brands/Brands'
import Price from '../Price/Price'
import {data} from '../../assets/data';
import Container from 'react-bootstrap/esm/Container';

const Sidebar = ({filterByPrice,filterByBrand ,brands}) => {
    const [itemData, setItemData] =useState([]);
   
    useEffect(() =>{
        setItemData(data[0].products)
    }, [])
  return (
    <>
    <Container fluid className='mt-1' >
    <Brands itemData={itemData} filterByBrand={filterByBrand} brands ={brands}/>
    <Price filterByPrice={filterByPrice}/>
    </Container>
    </>
  )
}

export default Sidebar
