import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/incomeAndExpenses/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Dashboard/>}path="/" /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
