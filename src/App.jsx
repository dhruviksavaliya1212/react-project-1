import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Category from './Component/Category/Category'
import Category2 from './Component/Category/Category2'
import Services from './Component/Services/Services'
import Banner from './Component/Banner/Banner'
import Product from './Component/Product/Product'
import Cart from './Component/Cart/Cart'

const App = () => {

  const[show,setShow]=useState(true);
  const[cart,setCart]=useState([]);
  const[warning,setWarning]=useState(false)

  const handleClick =(item)=>{
    let present = false;
    cart.forEach((product) => {
      if(item.id === product.id){
        present = true
      }
    });
    if(present){
      setWarning(true);
      setTimeout(() => {
        
        setWarning(false)
      }, 2000);

      return;
    }
    setCart([...cart,item])
  }

  const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].count += d;
		
		if (tempArr[ind].count === 0)
			tempArr[ind].count = 1;
		setCart([...tempArr])
	}

  return (
    <div className='bg-zinc-100 dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar size={cart.length} setShow={setShow}/>
      {
        show ?<div> <Hero/> <Category/> <Category2/> <Services/> <Banner/> <Product handleClick={handleClick} warning={warning} /> </div>:  <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      }
    </div>
  )
}

export default App