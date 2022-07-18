import '../styles/Shop.css';
import Card from './Card';
import img1 from '../img/relogio1/1.jpg';
import img2 from '../img/relogio2/1.jpg';
import img3 from '../img/relogio3/1.jpg';
import img4 from '../img/relogio4/1.jpg';
import img5 from '../img/relogio5/1.jpg';
import img6 from '../img/relogio6/1.jpg';
import img7 from '../img/relogio7/1.jpg';
import img8 from '../img/relogio8/1.jpg';


function Shop(props) {
  const getInfoFromCard = (val) => {
    props.sendInfo(val);
  }

  return(
    <div className='shop-container'>
      <Card 
        img={img1}
        title='Tissot Mens Gentleman Stainless Steel Dress Watch'
        price='699,00'
        count='1'
        sendInfo={getInfoFromCard}
      />

      <Card 
        img={img2}
        title='OUPINKE Skeleton Mens Watches Automatic Mechanical'
        price='359,00'
        count='1'
        sendInfo={getInfoFromCard}
      />

      <Card 
        img={img3}
        title="Fossil Men's Townsman Stainless Steel Mechanical Automatic Watch"
        price='224,00'
        count='1'
        sendInfo={getInfoFromCard}
      />

      <Card 
        img={img4}
        title='Bulova Classic Quartz Mens Watch, Stainless Steel'
        price='207,00'
        count='1'
        sendInfo={getInfoFromCard}
      />

      <Card 
        img={img5}
        title="Bulova Men's Watch"
        price='340,00'
        count='1'
        sendInfo={getInfoFromCard}
      />

      <Card 
        img={img6}
        title='SUUNTO Core, Outdoor Sports Watch'
        price='105,00'
        count='1'
        sendInfo={getInfoFromCard}
      />

      <Card 
        img={img7}
        title="Diesel Men's Mr. Daddy 2.0 Stainless Steel Chronograph Quartz Watch"
        price='217,00'
        count='1'
        sendInfo={getInfoFromCard}
      />

      <Card 
        img={img8}
        title="Bulova Precisionist Men's Watch"
        price='407,00'
        count='1'
        sendInfo={getInfoFromCard}
      />
    </div>
  )
}

export default Shop