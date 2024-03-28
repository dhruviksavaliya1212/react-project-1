import React, { useEffect, useState } from 'react'

const Cart = ({cart, setCart, handleChange}) => {
  const[price,setPrice] = useState(0);

  const handlePrice = ()=>{
    let total = 0;
    cart.map((item)=>{
      total += item.count * item.price;

    })
    setPrice(total);
  }

  const handleRemove = (id)=>{ 
    console.log("id" + id)
    const arr = cart.filter((item)=> item.id !== id)
    setCart(arr)
  }

  useEffect(()=>{
    handlePrice();
})
  return (
    <div className='w-[100%] h-screen '>
      <div className='container mt-10 sm:mt-5 relative z-30'>
      {
        cart.map((item)=>(
          <div className=' border-b-2  flex flex-col gap-5 sm:gap-0 sm:flex-row p-2 justify-between items-center' key={item.id}>
            <div className=' flex gap-3  items-center'>
              <img src={item.img} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]
               object-cover rounded-lg' />
              <p className=' text-center font-semibold'>{item.title}</p>
            </div>
            <div className=' flex gap-3 sm:gap-1 md:gap-3 justify-center items-center'>
              <button className='border rounded-xl px-2 text-2xl' onClick={()=>handleChange(item, +1)}>+</button>
              <h1 className=' text-lg font-semibold'>{item.count}</h1>
              <button className='border rounded-xl px-2 text-2xl'onClick={()=>handleChange(item, -1)}>−</button>
            </div>
            <div className=''>
              <span className=' px-3 font-bold'>₹ {item.price}</span>
              <button className=' hover:scale-[1.1] duration-200 px-5 py-1 rounded-full bg-red-500 font-semibold' onClick={()=> handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      }
      <div className='mt-2 flex justify-between mr-4 items-center'>
        <span className=' text-xl font-bold'>Total price of your cart </span>
        <span className='text-xl font-bold'>₹ {price} </span>
      </div>
      </div>
    </div>
  )
}

export default Cart