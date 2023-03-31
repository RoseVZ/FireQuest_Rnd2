import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';
import WasteTable from './Components/WasteTable';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/display" element={<WasteTable/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

