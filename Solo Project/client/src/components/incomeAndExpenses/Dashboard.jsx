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

  //Delete Budget Item
  const deleteBudgetItem = (Id) => {
    axios.delete(`http://localhost:8000/api/budgetItem/${Id}`)
        .then(res => {
            console.log(res.data)
            const filteredBudgetItems = budgetItems.filter(budgetItems => budgetItems._id !== Id)
            setBudgetItems(filteredBudgetItems);

        })
        .catch((err) => {
            console.log(err);
        });
  }

//run functions instead of terninary operators????? pretty much run a function in each section, that only displays if its an expense thats monthly. 

// { budgetItems.type = "expense" ?
  
//   <Link to={`/budgetItem/${item._id}`}>{item.name}</Link>
//   :
//   null
// }
  return (
    <div>
      {
        budgetItems.map((item, idx) => {
          return ( 
            <div>
              


              <tr key={idx} >
                <td>
                  <Link to={`/budgetItem/${item._id}`}>{item.name}</Link>
                </td>
                <td>
                  <p>{item.amount}</p>
                </td>
                <td>
                  <p>{item.type}</p>
                </td>
                <td>
                  <p>{item.frequency}</p>
                </td>
              </tr>



            </div>
          )
        })
      }
    </div>
  )
}

export default Dashboard