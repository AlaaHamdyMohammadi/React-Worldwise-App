/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from './Map.module.css'
import { useState } from 'react';
import { useCities } from '../contexts/CitiesContext';


function Map() {
    const navigate = useNavigate(); //this hook return function
    const {cities} = useCities();
    const [searchParams, setSearchParams] = useSearchParams();
    const [mapPosition, setMapPosition] = useState([40, 0]);
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    return (
      <div className={styles.mapContainer}>
        <MapContainer
          center={mapPosition}
          zoom={13}
          scrollWheelZoom={true}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {cities.map((city) => (
            <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
              <Popup>
                <span>{city.emoji}</span>
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    );
}

export default Map
