import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Uitily/Navbar'
import Home from './pages/Home/Home';
function App() {
  return (
    <div className="App ">
      <div >
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
