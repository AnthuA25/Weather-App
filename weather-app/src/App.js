import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Home from './components/Home';
import About from './components/About';
import { Route, Switch } from 'react-router-dom';
import Swal from 'sweetalert2';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudadotra = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            humidity: recurso.main.humidity,
            pressure:  recurso.main.pressure,
            img: recurso.weather[0].icon,
            description:recurso.weather[0].description,
            timezone: recurso.timezone,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          if (!cities.find((city) => city.id === ciudadotra.id)) {
            // setCities(oldCities => [...oldCities, ciudadotra]);
            setCities(oldCities => [ciudadotra])
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'City not found',
            background: '#4A5767',
            color:'white',
            text: 'Check if you have entered the city name correctly'
          })
        }
      });
  }
  return (
    <div className="app">
      <Home/>
      <Switch>
        <Route path='/about' component={About}/>
        <Route exact path='/ciudad/:ciudadId'>
        </Route>
        <Route path='/'>
          <Cards cities={cities} onClose={onClose} onSearch={onSearch}/>
        </Route>
      </Switch>
    </div>
  );
}


export default App;
