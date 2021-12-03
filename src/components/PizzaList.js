import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas, setEdit, editing,setName,setSize,setVeg}) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzas.map((pizza)=>{
          return <Pizza setSize={setSize}setVeg={setVeg}setName={setName} setEdit={setEdit} editing={editing}key={pizza.id} id={pizza.id} topping={pizza.topping} size={pizza.size} vegetarian={pizza.vegetarian}/>
        })}
      </tbody>
    </table>
  );
}

export default PizzaList;
