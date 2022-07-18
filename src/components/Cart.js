import '../styles/Cart.css';
import ken from '../img/relogio1/1.jpg';
import { useEffect, useState } from 'react';

function Cart(props) {
  const [cartWatch, setCartWatch] = useState(props.watches);
  const [total, setTotal] = useState([]);

  const increase = (idx) => {
    let tempArr = [...cartWatch];
    tempArr[idx] = {...tempArr[idx], count: tempArr[idx].count + 1};
    tempArr[idx] = {...tempArr[idx], finalPrice: tempArr[idx].price * tempArr[idx].count};
    setCartWatch(tempArr);
    props.update(cartWatch);
  }

  const decrease = (idx) => {
    let tempArr = [...cartWatch];
    if(tempArr[idx].count > 1) {
      tempArr[idx] = {...tempArr[idx], count: tempArr[idx].count - 1};
      tempArr[idx] = {...tempArr[idx], finalPrice: tempArr[idx].price * tempArr[idx].count};
      setCartWatch(tempArr);
      props.update(cartWatch);
    }
  }

  const remove = () => {
    let tempArr = [...cartWatch];
    tempArr.splice(tempArr.length - 1, 1);
    setCartWatch(tempArr);
    props.update(tempArr);
  }

  useEffect(() => {
    props.update(cartWatch);
    let tempArr = [];
    cartWatch.map((val) => tempArr.push(val.finalPrice));
    setTotal(tempArr);
  }, [cartWatch])
  
  return(
    <div className="cart-background">
     {cartWatch.map((val, idx) => {
        return(
          <div className='cart-watch'>
            <div className='cart-img'>
              <img src={val.img}/>
            </div>
            <div className='cart-info'>
              <h3>Titulo do reglogio</h3>
              <p>${val.finalPrice}</p>
              <div>
                <button onClick={() => decrease(idx)} className='decrease'>-</button>
                <p>{val.count}</p>
                <button onClick={() => increase(idx)} className='increase'>+</button>
              </div>
            </div>
          </div>
        )
     })}
     <button onClick={remove}>X</button>
     <p>Total: {total.reduce((a, b) => a + b, 0)}</p>
    </div>
  )
}

export default Cart