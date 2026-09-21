import React from 'react'

const Card = (props) => {
  return (

  <>
  <div className='food'>

      <h1>Food Ordering App</h1>
      <h3>Name:{props.name}</h3>
      <h3>Category:{props.category}</h3>
      <h3>Price:{props.price}</h3>
      <h3>Emoji:{props.emoji}</h3>
      <h3>Available:{props.available}</h3>


  <div className='btm'>

    <button>Add to cart</button>

  </div>

  </div>

  

  
  
  
  </>

    
  )
}

export default Card
