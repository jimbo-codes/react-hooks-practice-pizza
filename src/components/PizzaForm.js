import React,{useState} from "react";

function PizzaForm({editing,setEdit, name, setName,size,setSize,veg,setVeg}) {

  // console.log(name)
  function setVal(e){
    setName(e.target.value)
    console.log(name)
  }
  function setVal1(e){
    setSize(e.target.value)
    console.log(name)
  }
  function setVal2(e){
    setVeg(e.target.value)
    console.log(name)
  }
  
  function submit(e){
    e.preventDefault()
    // you need to make it so that you take the onchange values
    // make your form controlled inputs.
    console.log(e.target[0].value)
    const postObj= {
      topping: name,
      size: size,
      vegetarian: veg,
    }
    console.log(postObj)
    fetch(`http://localhost:3001/pizzas/${editing.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(postObj)
    })
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      })
    setEdit('');
  }
  return (
    <form onSubmit={submit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={editing?name:null}
            onChange={setVal}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={setVal1}value={editing?size:null}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={setVal2}
              checked={veg?true:false}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={setVal2}
              checked={veg?false:true}
              
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
