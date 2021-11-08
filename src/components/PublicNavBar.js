import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom"
import {Navbar, Nav, Form, Container, NavDropdown, FormControl, Button} from "react-bootstrap"
import SearchBox from "./SearchBox"
import "./PublicNavBar.css"
import {getProductList} from "../redux/actions/product.action"
import Login from "../pages/Login"
import Register from "../pages/Register"

const PublicNavBar = () => {
// search:
    const [searchInput, setSearchInput] = useState("");
    const [query, setQuery] = useState("")

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(searchInput);
      };
    const loading = useSelector((state) => state.productList.loading)
      console.log("hihhi", loading)

    return (
        <div className="nav-bar">
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="brand-bar" href="../">TP Ecom</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >   <div className = "info-bar">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/product/macbook">Macbook</Nav.Link>
                        <Nav.Link href="/product/Imac">Imac</Nav.Link>
                        <Nav.Link href="/product/Ipad">Ipad</Nav.Link>
                        </div>                   
                    </Nav>
                    <Form className="d-flex">
                        <div className="search-bar">
                        <SearchBox
                            loading={loading} 
                            searchInput={searchInput}
                            handleSearchChange={handleSearchInputChange}
                            handleSubmit={handleSubmit}
                            />
                        </div>
                        <div className="button-bar">
                            <div className = "login-bar">
                            <Link to={"/login"}>
                            <Button className="login" variant="outline-success">Login</Button>
                            </Link >
                            </div>
                            <div className = "register-bar">
                            <Link to={"/register"}>
                            <Button className="register" variant="outline-success">Register</Button>
                            </Link>
                            </div>
                            <div className = "cart-bar">
                            <Link to={"/cart"}>
                                <i class="fas fa-shopping-cart"></i>                            
                            </Link>
                            </div>
                        </div>
                    </Form>
                </Navbar.Collapse>
        </Container>
    </Navbar>
</div>
    )
}
export default PublicNavBar;

