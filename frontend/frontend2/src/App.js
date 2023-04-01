import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';
import WasteTable from './Components/WasteTable';
import AddWaste from './Components/Addwaste';
import AddWaste2 from './Components/Addwaste2';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/display" element={<WasteTable />}></Route>
        <Route path="/addwaste" element={<AddWaste />}></Route>
        <Route path="/addwaste2" element={<AddWaste2/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


