import './App.css';
import Nevbar from './components/Nevbar';
import Allusers from './components/Allusers';
import Addusers from './components/Addusers';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MernByRavi from './components/MernByRavi';
import Edituser from './components/Edituser';


function App() {


  
  return (
    <BrowserRouter>
      <Nevbar />
      <Routes>
        <Route path ="/" element={<MernByRavi />} />
        <Route path ="/all" element={<Allusers />} />
        <Route path ="/add" element = {<Addusers />} />
        <Route path ="/edit/:id" element={<Edituser />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
