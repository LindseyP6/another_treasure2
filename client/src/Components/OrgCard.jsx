import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemForm from './ItemForm'


function OrgCard({addItemForm, itemsArray}) {
const [org, setOrg] = useState([])
const [items, setItems] = useState([])
    
const {id} = useParams()
  useEffect(() => {
    fetch(`/organizations/${id}`)
        .then(r => r.json())
        .then(org =>setOrg(org));
      }, [id])

  // useEffect(() => {
  //   fetch(`/items`)
  //       .then(r => r.json())
  //       .then(items =>setItems(items));
  //     }, [])

  // console.log({id})

  // const displayedItem = <ItemCard1 key={items.id} items={items}/>
  //   if ({id} === items.org_id) {
  //     return displayedItem
  //   }
  
  // const orgItems = items.filter((item) => {
  //     if ({id} === item.organization_id) {
  //       return item
  //     }
  //       });


  return (
    <> 
      <div className='orgPageSingle'>
        <h3>{org.name}</h3>
        <p>{org.address}</p>
        <p>{org.telephone}</p>
        <p>{org.hours}</p>
        <p><strong>In need of:</strong> {org.needs} </p>
        <ItemForm addItemForm={addItemForm} itemsArray={itemsArray}/>
      {/* {console.log("orgCard", org)} */}
      {/* <p>{org.items}</p> */}
      {/* <ItemCard1 key={items.id} items={orgItems}/> */}
      </div>
    </>
  )
}

export default OrgCard

//map through orgs and then render an item card for each nested item

  // const orgItems = org.items
  // console.log("items", orgItems)
  // const itemCards = orgItems.map(item => 
  //   <itemCard1
  //   key = {item.id}
  //   name = {item.name} />)

