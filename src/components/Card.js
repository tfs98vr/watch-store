import '../styles/Card.css';
import { useState } from 'react';

function Card(props) {
  const [watch, setWatch] = useState({img: props.img, price: parseFloat(props.price), title: props.title, count: parseInt(props.count), finalPrice: parseFloat(props.price)});

  return(
    <div className='card-container'>
      <div className='img-container'>
        <div>
          <img src={props.img} />
        </div>
      </div>
      <div className='description'>
        <h3>{props.title}</h3>
        <p>${props.price}</p>
        <button onClick={() => props.sendInfo(watch)}>Add to card</button>
      </div>
    </div>
  )
}

export default Card