import React, {useState} from 'react'
import ItemEditForm from './ItemEditForm'

function ItemCard({handleDelete, itemsArray, handleItemUpdate, item, id, name, user, description, image, category, organization }) {

  const [formIsShowing, setFormIsShowing] = useState(false)

  function toggleSignup() {
    setFormIsShowing((formIsShowing) => !formIsShowing);
  }
 
  return (
    <div className="itemCards">
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={image} alt={name} className="cardImages" />
      <p>{category}</p>
      <p>{organization}</p>
      <p> Donated by: {user} </p>
      <button onClick={() => handleDelete(id)}>Delete</button> 
      {/* <button onClick={toggleSignup}>Update</button> 
      {formIsShowing ? <ItemEditForm
           itemsArray={itemsArray} 
           id={id}
           name={name}
           description={description}
           image={image}
           category={category}
           organization={organization} 
           handleItemUpdate={handleItemUpdate}
           /> : null} */}
    {/* </div> */}
    </div>
  )
}

export default ItemCard