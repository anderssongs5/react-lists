import React, {Component} from 'react';
import cars from './data/cars.json'

class CartItem extends Component {
  render() {
    const {car} = this.props
    return(
      <li>
        <p><strong>Id: </strong>{car.id}</p>
        <p><strong>Name: </strong>{car.name}</p>
        <p><strong>Company: </strong>{car.company}</p>
      </li>
    )
  }
}

function App() {
  const numbers = [1, 1, 3, 4, 5]

  return (
    <div>
      <h4>Working with lists</h4>
      {numbers.map((number, index) => {
        console.log("Index: " + index + " | Number: " + number);
        return <p key={index}>I'm the number {number}</p>
      })}
      <br /><br />
      <ul>
        {
          cars.map( car => {
            console.log("Car: Id " + car.id);
            return(
              <CartItem key={car.id} car={car} />
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
