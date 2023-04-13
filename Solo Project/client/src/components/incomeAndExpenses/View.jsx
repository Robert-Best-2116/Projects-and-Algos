import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom'


//edit button, I would use an onclick, for a button that would then change the state of the text field to a form, that is prepopulated with the information already present from the get request, You can start with a form, they have an attribute called read only true, when declaring your input field in html, when the read only attribute, do {} and it would be the boolean value from useState, either true or false. delete button 


const View = () => {

  //Pass in Budget Item ID and set up useState, set up Navigate 
  const {id} = useParams();
  const [budgetItem, setBudgetItem] = useState({});
  const navigate = useNavigate();

  useEffect (() => {
    axios.get(`http://localhost:8000/api/budgetItem/${id}`)
        .then( res => {
            console.log(res.data);
            setProduct(res.data.product);
        }) 
        .catch((err) => {
            console.log(err);
        });
  }, []);



  return (
    <div class="container">
      <div class="d-flex justify-content-between mt-3">
        <h1>Add an Item</h1>
        <p><Link to={`/`}>Go Back to Home</Link></p>
      </div>
      <div>
        <p>Name: {budgetItem.name}</p>
        <p>Amount: {budgetItem.amount}</p>
        <p>Type: {budgetItem.type}</p>
        <p>Frequency: {budgetItem.frequency}</p>
      </div>
    </div>
  )
}

export default View