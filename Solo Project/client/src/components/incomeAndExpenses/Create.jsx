import React, {useState} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const Create = () => {

  //set state, errors and navigate 
  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0.00)
  const [type, setType] = useState("income")
  const [frequency, setFrequency] = useState("monthly")
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  //Post Request 
  const onSubmitHandler = (e) => {

    e.preventDefault();
    
    axios.post('http://localhost:8000/api/budgetItem', {
      name,
      amount,
      type,
      frequency
    }) 
      .then(res =>{
            console.log(res.data);
            //navigate(`/`);
    }) 
      .catch(err => {
          console.log(err);
          setErrors(err.response.data.err.errors);
      })
    }

  return (
    <div class="container">
      <div class="d-flex justify-content-between mt-3">
        <h1>Add an Item</h1>
        <p><Link to={`/`}>Go Back to Home</Link></p>
      </div>
        <div>
        <form onSubmit={onSubmitHandler} class="form-control">
          <div>
            <div>
            <h4>Add a new item</h4>
            </div>
            <div class="mb-3">
              {errors.name ?
                <p class="text-danger">{errors.name.message}</p> :
                null
              } 
                <label class="form-label">Item Name : </label>
                <input type="text" onChange={e => setName(e.target.value)} class="form-control"/>
            </div>
            <div class="mb-3">
              {errors.amount ?
                <p class="text-danger">{errors.amount.message}</p> :
                null
              }
              <label class="form-label">Amount </label>
              <input type="number" step=".01" onChange={e => setAmount(e.target.value)} class="form-control"/>
            </div>
            <div class="mb-3">
            <label class="form-label">Income or Expense </label>
              <div>
                {errors.type ?
                  <p class="text-danger">{errors.type.message}</p> :
                  null
                } 
                  <select  onChange={(e) => setType(e.target.value) }>
                      <option value="income">Income</option>
                      <option value="expense">Expense</option>
                  </select>
              </div>
            <label class="form-label">Frequency </label>
              <div>
                {errors.frequency ?
                  <p class="text-danger">{errors.frequency.message}</p> :
                  null
                } 
                  <select  onChange={(e) => setFrequency(e.target.value) }>
                      <option value="monthly">Monthly</option>
                      <option value="other">Other</option>
                  </select>
              </div>
            </div>
            <div>
              <input type="submit" value="Create"/> 
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create