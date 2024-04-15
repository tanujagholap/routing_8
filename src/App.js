//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Update from './compo/pages/Update'
import Show from './compo/pages/Show'
import Add from './compo/pages/Add'
import Delete from './compo/pages/Delete'
import Navbar from './compo/layout/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/show' element={<Show/>}></Route>
        <Route path='/update/:userId' element={<Update/>}></Route>
        <Route path='/delete/:userId' element={<Delete/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
