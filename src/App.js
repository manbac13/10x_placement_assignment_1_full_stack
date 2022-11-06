import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/register';
import Login from './components/login';
import Task from "./components/tasks"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/tasks" element={<Task/>}/>
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
