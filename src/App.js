import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage';
import PublicNavBar from './components/PublicNavBar';
import CategoryPage from './pages/CategoryPage'
function App() {
  return (
    <Router>
      <PublicNavBar />
      {/* <Login /> */}
      <Routes>
        <Route exact path = "/" element = {<HomePage/>} />
        <Route exact path = "/product/:id" element = {<DetailPage/>} />
        <Route exact path ="/cart" element = {<CartPage/>} />
        <Route exact path = "/login" element = {<Login />}/>
        <Route exact path ="/register" element = {<Register />}/>
        <Route exact path = "/product/:category" element = {<CategoryPage />} />
        <Route path =  "*" element = {NotFoundPage} />
      </Routes>
    </Router>
  );
}

export default App;
