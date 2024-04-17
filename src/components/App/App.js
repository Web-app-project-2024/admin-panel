
import './App.css';
import Laptop from '../Laptop/Laptop';
import { useEffect, useState } from 'react';
import CreateLaptopForm from '../CreateLaptopForm/CreateLaptopForm';

function App() {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/laptops')
      .then(res => res.json())
      .then(data => {
        console.log(data[0] );
        setLaptops(data)
    });
  }, [])
  return (
    <div className="App">
      <CreateLaptopForm/>
      <div className='laptops_wrapper'>
        {
          laptops.map(item => (
            <Laptop 
              key={item._id}
              id={item._id} 
              name={item.name} 
              price={item.price} 
              imgUrl={item.imgUrl} 
              processorType={item.processorType} 
              processorCount={item.processorCount}
              ram={item.ram} 
              SSDrom={item.SSDrom} 
              HDDrom={item.HDDrom}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
