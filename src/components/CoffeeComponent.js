import { useEffect, useState } from 'react';
/* import axios from 'axios'; */


/* import '../App.css'; */

import '../scss/main.scss'


function CoffeeComponent() {

const [coffee, setCoffe] = useState([]);

useEffect(() => {
async function getCoffee() {
const response = await fetch('http://localhost:5000/api/coffee');
const data = await response.json();

setCoffe(data.menu);
console.log(data.menu)
}

getCoffee();
}, []);




return (

<div >



  <article>
    <h2>Coffee</h2>
  </article>

  <div class="container">
    <div class="info">
      <div class="first">
          <h1>{
            coffee.map((menu,index) => {
              return <div key={index}> {menu.title === "Bryggkaffe" && menu.title}</div>
            })
          }</h1>
           <p>Shots of espresso diluted with water</p>
      </div>
      <div class="second">
        <h1>americano</h1>
        <p>Shots of espresso diluted with water</p>
      </div>
      <div class="third">
        <h1>Macchiato</h1>
        <p>Espresso with a dash of frothy foamed milk.</p>
      </div>
      <div class="fourth">
        <h1>Flat White</h1>
        <p>Double shot of espresso with steamed milk.</p>
      </div>
      <div class="fifth">
        <h1>Cappuccino</h1>
        <p>Double shot of espresso topped with an airy thick layer of foamed milk.</p>
      </div>
      <div class="sixth">
        <h1>Caffe Latte</h1>
        <p>A shot of espresso in steamed milk lightly topped with foam.</p>
      </div>

    </div>
  </div>




</div>


)


}


export default CoffeeComponent;