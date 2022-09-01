import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart';
import Product from '../Product/Product'
import RandomSelection from '../RandomSelection/RandomSelection';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([])
    const [randomSelections, setRandomSelections] = useState([])
    // console.log(randomSelections)
    // console.log(products)

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddRandom =(products) =>{
        console.log(products)
        const forRandom =products[Math.floor(Math.random()*products.length)];
        setRandomSelections(forRandom)
    }
    const handleAddToCart =(product) =>{
        
        const newCart =[...carts, product];
        setCarts(newCart)
    }

    let total = 0;
    let shipping = 0;
    let grandTotal = 0;
    if(carts){
        for(const product of carts){
            total = total + product.price;
            shipping = shipping + product.shipping;
            grandTotal = total + shipping
        }
    }
    else{
        for(const product of randomSelections){
            total = product.price;
            shipping = product.shipping;
            grandTotal = total + shipping;
        }
    }



  return (
    <div className='product-container'>
        <div className='all-products'>
            {
                products.map(product => <Product
                key = {product.id}
                product = {product}
                handleAddToCart={handleAddToCart}
                ></Product>)
            }

        </div>
        <div className='order-summary'>
            <h1>Order Summary</h1>
            <p>Selected Item: {carts.length}</p>
            <p>Total Price : {total}$</p>
            <p>Total Shiping :{shipping}$</p>
            <h3>Grand Total :{grandTotal}$</h3>

            <div>
                {
                    carts.map(cart => <Cart
                    key = {cart.id}
                    cart ={cart}
                    ></Cart>)
                }
            </div>
            <div>
                <RandomSelection
                randomSelections = {randomSelections}
                >
                </RandomSelection>
            </div>
            <button onClick={() =>handleAddRandom(products)} className='order-btn'>Select A Random Item</button>
        {/* </div>

        <div> */}

        </div>
    </div>
  )
}

export default Shop