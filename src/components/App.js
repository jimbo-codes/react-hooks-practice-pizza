import React,{useState,useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
const [pizzas, setPizza] = useState([]);
const [editing, setEdit] = useState({});
const [name, setName] = useState('')
const [size, setSize] = useState('')
const [veg, setVeg] = useState('')
function handleName(name){
  setName(name)
}
function handleSize(name){
  setSize(name)
}
function handleVeg(name){
  setVeg(name)
}
// Nice. This is the whole trick here.
useEffect(()=> {
  fetch('http://localhost:3001/pizzas')
  .then(r=>r.json())
  .then(data=>{
    console.log(data)
    setPizza(data)})
},[])
function handleEdit(item){
  setEdit({
    id: item.id,
    topping: item.topping,
    size: item.size,
    vegetarian: item.vegetarian
  })
}
  return (
    <>
      <Header />
      {/* ignore header */}

      <PizzaForm 
      pizzas={pizzas}
      editing={editing}
      setEdit={setEdit}
      name={name}
      setName={setName}
      size={size}
      veg={veg}
      setSize={setSize}
      setVeg={setVeg}
      />
      <PizzaList 
      // name={name}
      setName={handleName}
      setSize={handleSize}
      setVeg={handleVeg}
      pizzas={pizzas}
      editing={editing}
      setEdit={handleEdit}
      
      />
    </>
  );
}

export default App;
