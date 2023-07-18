import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/Nabar";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >
      <Header />    
      <NavBar />
      <Home/>
    </BrowserRouter>
  );
}

export default App;
