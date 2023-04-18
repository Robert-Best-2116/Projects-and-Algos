import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";




const EditSavings = () => {

    //Setting state, errors, and navigate, use params
    const {id} = useParams();
    const [amount, setAmount] = useState(0);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

  //Retrieve Savings Account Information 
  useEffect(() => {
    axios.get(`http://localhost:8000/api/savingsAccount/${id}`)
        .then(res => {
          console.log(res.data)
          setAmount(res.data.savingsAccount.amount);
        })
        .catch(err => {
          console.log(err);
        });
  }, []);

  //Update Savings Account Information
  const updateSavings = e => {

    axios.patch(`http://localhost:8000/api/savingsAccount/${id}`, {
      amount
    })
    .then(res => {
      console.log(res.data)
      navigate(`/`)
    })
    .catch(err => {
      console.log(err);
      setErrors(err.response.data.err.errors);
  })
  }


  return (
    <div class="container">
      <div class="d-flex justify-content-between mt-3">
        <h1>Withdraw Or Deposit From Savings</h1>
        <Link to="/">Home</Link>
      </div>
      <form onSubmit={updateSavings} class = "form-group" >
        <div>
          {
            errors.amount ? 
            <p class="text-danger">{errors.amount.message}</p> :
            ""
          }
          <label class="form-label">Amount:</label>
          <input type="number" value={amount} class="form-control" onChange={(e) => setAmount(e.target.value)}/>
        </div>
      </form>
      <div>
        <button onClick={(e) => updateSavings(id)}>Withdraw/Deposit</button>
      </div>
    </div>
  )
}

export default EditSavings