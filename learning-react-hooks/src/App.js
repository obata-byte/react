import React from 'react'
import Navbar from './Navbar'
import Greeter from './Greeter'
import Counter from './Counter'
import MoodToggler from './MoodToggler'
import Cart from './Cart'

const items = [
  {id: 1, name: 'Taco Shells', price: 2.25, qty: 2},
  {id: 2, name: 'Pinto Beans', price: 1.99, qty: 3},
  {id: 3, name: 'Sour Cream', price: 3.50, qty: 1}
]

function App() {
  return (
    <div className="App">
      <Cart initialItems={items} />
      <Counter step={2}/>
      <Counter />
      <MoodToggler />
      <Navbar />
      <Greeter name="Karen" age="27" excitement={4} />
      <Greeter name="Tammy" excitement={3} />
      <h1>Hello From App!</h1>
    </div>
  );
}

export default App;
