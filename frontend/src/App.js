import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
     <Navbar/>
     <BrowserRouter>
       <Routes>
        <Route path='/create' element={<Form/>} />
       </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;
