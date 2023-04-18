import React, {useState} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export const CreateSavings = () => {

  //Setting state, errors, and navigate 
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {

    e.preventDefault();
    
    axios.post('http://localhost:8000/api/savingsAccount', {
      amount
    }) 
      .then(res =>{
            console.log(res.data);
            navigate(`/`);
    }) 
      .catch(err => {
          console.log(err);
          setErrors(err.response.data.err.errors);
      })
    }

  return (
    <div class="container">
      <div class="d-flex justify-content-between mt-3">
        <h1>Deposit Savings</h1>
        <Link to="/">Home</Link>

      </div>
      <form onSubmit={onSubmitHandler} class = "form-group" >
        <div>
          {
            errors.amount ? 
            <p class="text-danger">{errors.amount.message}</p> :
            ""
          }
          <label class="form-label">Amount: $</label>
          <input type="number" class="form-control" onChange={(e) => setAmount(e.target.value)}/>
        </div>
          <input type='submit' value='Deposit' />
      </form>
    </div>
  )
}


export default CreateSavings