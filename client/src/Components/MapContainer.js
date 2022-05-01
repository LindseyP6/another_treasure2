import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import Map, { Marker, Popup, NavigationControl, FullscreenControl} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { MdOutlineHouse } from 'react-icons/md';


function MapContainer({ orgArray, mapboxAccessToken}) {
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 40.6114,
    longitude: -74.00563,
    zoom: 12,
    height: "80vh",
    width: "100vw",
    padding: "50px"
  });

  const fullscreenControlStyle = {
    top: 10,
    right: 10,
  };

  const navStyle = {
    top: 10,
    left: 10,
  };
  useEffect(() => {
    const listener = (e)=> {
      if (e.key === "Escape") {
        setSelectedOrg(null)
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    }
  }, []);

  return (
    <div id="map">
      <p style={{"text-align": "center", "color": "#00AFB9"}}>Click on an point to see an organization's details.</p>
    <Map
      className="mapBox"
      {...viewport}
      mapboxApiAccessToken={mapboxAccessToken}
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
      mapStyle="mapbox://styles/lindsisradd/cl1b76tjw000w14ncnb36ebuv"
    >
      {orgArray?.map((org) => (
        <Marker
          key={org.id}
          latitude={org.latitude}
          longitude={org.longitude}
        >

          <button className="mapButton"
            onClick={(e) => {
              e.preventDefault();
              setSelectedOrg(org);
            }}
          >
          <MdOutlineHouse />
          </button>
        </Marker>
      ))}
      <div>   
        {selectedOrg ? (
          <Popup
            latitude={selectedOrg.latitude}
            longitude={selectedOrg.longitude}
            onClose={()=>setSelectedOrg(null)}
            className="popUp"
          >
            <div className="popUpContent">
              <h2>{selectedOrg.name}</h2>
              {/* <p><img src={selectedOrg.image} alt={selectedOrg.name} width="180px"/></p> */}
              <li><strong>Address: </strong> {selectedOrg.address}</li>
              <li><strong>Phone Number: </strong>{selectedOrg.telephone}</li>
              <li><strong>Hours for Donations: </strong>{selectedOrg.hours}</li>
              <Link to={`/organizations/${selectedOrg.id}`}>See Details</Link>
            </div>
          </Popup>
        ) : null}
      </div>
      <div className="mapControllers">
        <NavigationControl style={navStyle}/>
        <FullscreenControl style={fullscreenControlStyle}/>
      </div>
    </Map>
    </div>
  );
}

export default MapContainer;
