import React, {useState} from 'react'
import ItemCard from './ItemCard'
import Filter from './Filter'

function ItemContainer( { handleItemUpdate, handleDelete, itemsArray, orgArray} ) {
 
  const [selected, setSelected] = useState("All");


  const filtered = itemsArray.filter((item) => {
    if (selected === "All") {
      return true;
    } else if (item.org_name === selected) {
       return filtered.map((item) => (    
       <ItemCard
           key={item.id}
           itemId={item.id}
           name={item.name}
           description={item.description}
           image={item.image}
           category={item.category}
           organization={item.org_name} 
           user= {item.user_name}
           handleItemUpdate={handleItemUpdate}
           handleDelete = {handleDelete} 
           />
       )) 
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='itemContainer'>
      {/* <Filter orgArray={orgArray} selected={selected} setSelected={setSelected} /> */}

    {filtered.map((item) => (    
    <ItemCard
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        image={item.image}
        category={item.category}
        organization={item.org_name}
        user={item.user_name}
        handleItemUpdate={handleItemUpdate}
        handleDelete = {handleDelete} 
        itemsArray={itemsArray}
        />
    )) }
</div>
  )
}

export default ItemContainer