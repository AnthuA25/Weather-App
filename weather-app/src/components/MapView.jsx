import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { Button, Modal, closeButton } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import style from "./MapView.module.css";
import place from "../images/place1.png";
import { BsFillGeoAltFill } from "react-icons/bs";
import L from "leaflet";

export function MapView({ city }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(city);
  return (
    <div>
      <Button className={style.button} variant="primary" onClick={handleShow}>
        <BsFillGeoAltFill /> Map
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body className={style.modal}>
          <MapContainer
            className={style.map}
            center={[city.latitud, city.longitud]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={{ lat: city.latitud, lon: city.longitud }}
              icon={L.icon({
                iconUrl: place,
                iconRetinaUrl: place,
                iconSize: [40, 30],
              })}
            >
              <Popup>
                {city.name}
              </Popup>
            </Marker>
          </MapContainer>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
