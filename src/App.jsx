import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Card from "./pages/Cart";
import Header from "./components/Header";

function App() {

  return (
    <>
    <Header></Header>
  <Routes>
  <Route path = '/' element = {<Home></Home>}></Route>
  <Route path = '/Card' element = {<Card></Card>}></Route>
  </Routes>
    </>
  )
}

export default App
