
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const Edit = () => {

  //set state, errors and navigate 
  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0.00)
  const [type, setType] = useState("income")
  const [frequency, setFrequency] = useState("monthly")
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  //Get Item Information. 
  useEffect (() => {
    axios.get(`http://localhost:8000/api/budgetItem/${id}`)
        .then( res => {
            console.log(res.data);
            setName(res.data.budgetItem.name);
            setAmount(res.data.budgetItem.amount);
            setType(res.data.budgetItem.type);
            setFrequency(res.data.budgetItem.frequency);
        }) 
        .catch((err) => {
            console.log(err);
        });
  }, []);

  //Edit Submission W/ Navigation to Dashboard
  const editBudgetItem = (e) => {

    e.preventDefault();
    
    axios.patch(`http://localhost:8000/api/budgetItem/${id}`, {
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
        <h1>Edit an Item</h1>
        <p><Link to={`/`}>Go Back to Home</Link></p>
      </div>
        <div>
        <form onSubmit={editBudgetItem} class="form-control">
          <div>
            <div>
            <h4>Edit an item</h4>
            </div>
            <div class="mb-3">
              {errors.name ?
                <p class="text-danger">{errors.name.message}</p> :
                null
              } 
                <label class="form-label">Item Name : </label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} class="form-control"/>
            </div>
            <div class="mb-3">
              {errors.amount ?
                <p class="text-danger">{errors.amount.message}</p> :
                null
              }
              <label class="form-label">Amount </label>
              <input type="number" value={amount} step=".01" onChange={e => setAmount(e.target.value)} class="form-control"/>
            </div>
            <div class="mb-3">
            <label class="form-label">Income or Expense </label>
              <div>
                {errors.type ?
                  <p class="text-danger">{errors.type.message}</p> :
                  null
                } 
                  <select value={type} onChange={(e) => setType(e.target.value) }>
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
                  <select value={frequency} onChange={(e) => setFrequency(e.target.value) }>
                      <option value="monthly">Monthly</option>
                      <option value="other">Other</option>
                  </select>
              </div>
            </div>
            <div>
              <input type="submit" value="Edit"/> 
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit