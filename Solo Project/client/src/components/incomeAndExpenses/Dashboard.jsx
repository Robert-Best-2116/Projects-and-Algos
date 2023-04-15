import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';

//Consider using a modal for the view component, brings it alot closer to the single page functionality, the modal can have its own functionality, that when it renders to grab additional information. 


const Dashboard = () => {

  //Setting state for Budget Items
  const [budgetItems, setBudgetItems] = useState([]);

  //Listing all Stores with API call
  useEffect(()=> {
    axios.get("http://localhost:8000/api/budgetItems")
    .then((res) => {
        console.log(res.data);
        setBudgetItems(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
    }, [])

  //Creating functions to sort the items by type and frequency. 
  const monthlyExpenses = (item) => {
    if (item.type === "expense" && item.frequency === "monthly"
    ) {
      return <p> <Link to={`/budgetItem/${item._id}`}>{item.name}</Link> {item.amount} </p>
    }
    else {return null;}
  }

  const otherExpenses = (item) => {
    if (item.type === "expense" && item.frequency === "other"
    ) {
      return <p> <Link to={`/budgetItem/${item._id}`}>{item.name}</Link> {item.amount} </p>
    }
    else {return null;}
  }

  const monthlyIncome = (item) => {
    if (item.type === "income" && item.frequency === "monthly"
    ) {
      return <p> <Link to={`/budgetItem/${item._id}`}>{item.name}</Link> {item.amount} </p>
    }
    else {return null;}
  }
  const otherIncome = (item) => {
    if (item.type === "income" && item.frequency === "other"
    ) {
      return <p> <Link to={`/budgetItem/${item._id}`}>{item.name}</Link> {item.amount} </p>
    }
    else {return null;}
  }


  return (
    <div className='container'>
      <div className="d-flex justify-content-between mt-3 mb-3">
        <h1>Budget App</h1>
        <Link to={`/budgetItem`}>Add to your budget!</Link>
      </div>
      <div className="d-flex justify-content-between mt-3 mb-3">
        <div id='Expense Column'>
          <h2>Expenses Column </h2>
          <h4>Monthly Expenses</h4>
          <div id='Monthly Expenses'>
            {
              budgetItems.map((item, idx) => {
                return ( 
                  <p>{monthlyExpenses(item)}</p>
                )
              })
            }
          </div>
          <div id='Other Expenses'>
          <h4>Other Expenses</h4>
          {
              budgetItems.map((item, idx) => {
                return ( 
                  <p>{otherExpenses(item)}</p>
                )
              })
            }
          </div>
        </div>
        <div id='Income Column'>
          <h2>Income Column </h2>
          <h4>Monthly Income</h4>
          <div id='Monthly Income'>
            {
              budgetItems.map((item, idx) => {
                return ( 
                  <p>{monthlyIncome(item)}</p>
                )
              })
            }
          </div>
          <div id='Other Income'>
          <h4>Other Income</h4>
          {
              budgetItems.map((item, idx) => {
                return ( 
                  <p>{otherIncome(item)}</p>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard