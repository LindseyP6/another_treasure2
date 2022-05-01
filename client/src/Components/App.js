import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Header from "./Header"
import '../style.css';
import MapContainer from './MapContainer'
import OrganizationContainer from "./OrganizationContainer";
import ItemForm from './ItemForm'
import ItemContainer from './ItemContainer'
import OrganizationPage from "./OrganizationPage";
import OrgCard from "./OrgCard";
import ItemEditForm from "./ItemEditForm";

function App() {
  const [itemsArray, setItemsArray] = useState([]);
  const [orgArray, setOrgArray] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  // const [currentUser, setCurrentUser] = useState({});
  const mapboxAccessToken="pk.eyJ1IjoibGluZHNpc3JhZGQiLCJhIjoiY2wxcWtxMzFzMHFpcDNjb2hkN2l6ajM5ZiJ9.-v98V2229SPrGSzrzMoQUQ";

  useEffect(() => {
    fetch('/items')
      .then(res => res.json())
      .then(setItemsArray)
  }, [])

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((user) => setUser(user))
  }, [])

  useEffect(() => {
    fetch('/organizations')
      .then(res => res.json())
      .then(setOrgArray)
  }, [])

  // function handleItemUpdate(changedItem) {
  //   const changedItems = itemsArray.map(originalItem => {
  //     if (originalItem === changedItem ){
  //       return changedItem;
  //     } else {
  //       return originalItem;
  //     }
  //   })
  //   setItemsArray(changedItems);
  // }

  function handleItemUpdate(updatedItem) {
    const updatedItems = itemsArray.map(originalItem => 
      originalItem.id === updatedItem.id ? updatedItem : originalItem
      );
      setItemsArray(updatedItems);
  }

  function handleDelete(id) {
    fetch(`/items/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setItemsArray((items) =>
          items.filter((item) => item.id !== id)
        );
      }
    });
  }

  function addNewItem(newItem) {
    setItemsArray(itemsArray => {
      return[newItem, ...itemsArray]
    })
  }

  // if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

  return (
    <div >
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>

      <Switch>
        <Route path="/items">
          {/* <ItemContainer handleDelete={handleDelete}  itemsArray={itemsArray} orgArray={orgArray} /> */}<h1 style={{"textAlign": "center"}}>Items Donated So Far!</h1>
          <ItemContainer handleDelete={handleDelete} handleItemUpdate={handleItemUpdate} itemsArray={itemsArray} orgArray={orgArray} />
        </Route>

        <Route path="/items/:id/edit">
          <ItemEditForm handleItemUpdate={handleItemUpdate}/>
        </Route>

        <Route path="/signup">
          <Signup setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
        </Route>

        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>

        <Route exact path="/organizations/:id">
          <OrgCard itemsArray={itemsArray} addNewItem={addNewItem}/>
          {/* <ItemForm items={itemsArray} orgArray={orgArray} addNewItem={addNewItem} /> */}
        </Route>

        {/* <Route path='/organizations'>
          <OrganizationPage orgArray={orgArray} />
        </Route> */}

        <div id="MapAndMenu">
        <Route exact path="/">
          <MapContainer orgArray={orgArray} mapboxAccessToken={mapboxAccessToken} />
          <OrganizationContainer orgArray={orgArray} />
        </Route>
        </div>

      </Switch>
    </div>

  );
}
export default App;
