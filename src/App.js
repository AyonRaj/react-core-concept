import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const nayoks = ['Salman','topu','munna','bappa']
  const products = [
  {name:'react', price:'$50.99'},
  {name:'angular',price:'$40.00'},
  {name:'vue',price:'$20.00'}
]

  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <User></User>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        
        
        
        
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(20);
  
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function User(){
  const [user, setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUser(data))
  },[])
  return (
    <div>
      <h3>Dynamic users : {user.length}</h3>
      <ul>
        {
          user.map(user=> <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const ProductStyle={
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
    
  }
  const {name,price} = props.product;
  return (
    <div style={ProductStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}


export default App;
