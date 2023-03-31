import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';
import WasteTable from './Components/WasteTable';
import AddWaste from './Components/Addwaste';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WasteTable />}></Route>
        <Route path="/display" element={<WasteTable />}></Route>
        <Route path="/addwaste" element={<AddWaste/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


