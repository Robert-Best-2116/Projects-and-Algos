
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/incomeAndExpenses/Dashboard';
import Create from './components/incomeAndExpenses/Create'
import Edit from './components/incomeAndExpenses/Edit'
import View from './components/incomeAndExpenses/View'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Dashboard/>}path="/" /> 
          <Route element={<Create/>}path="/budgetItem" /> 
          <Route element={<View/>}path="/budgetItem/:id" /> 
          <Route element={<Edit/>}path="/budgetItem/edit/:id" /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
