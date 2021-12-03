import React from "react";

function Pizza({id,topping,size,vegetarian, editing, setEdit,setName,setSize,setVeg}) {
  function edit(){
    const pizzaObj = {
      id: id,
      topping: topping,
      size: size,
      vegetarian: vegetarian
    }
    setName(topping)
    setSize(size)
    setVeg(vegetarian)
    // console.log(pizzaObj)
    setEdit(pizzaObj)
  }
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian?"Yep!":"Nope!"}</td>
      <td>
        <button type="button" onClick={edit} className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
