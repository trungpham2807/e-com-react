import React, {useState, useEffect} from 'react'
import {Alert, Card, Col, Container, Row} from "react-bootstrap"
// import {ClipLoader} from "react-spinners"
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {productAction} from "../redux/actions/product.action"
import DetailPage from './DetailPage';
import ProductCard from "../components/ProductCard"
import PaginationBar from '../components/PaginationBar';
import CarouselComponent from "../components/CarouselComponent";
import SearchBox from '../components/SearchBox';
import LoadingBox from '../components/LoadingBox';
// import PaginationBar from "../components/PaginationBar";
import "./HomePage.css"

const HomePage = () => {
    const totalPage = 3;
    // limit: max item per page
    const limit = 10;

    const [pageNum, setPageNum] = useState(1);
    const [query, setQuery] = useState("")
    // const [searchInput, setSearchInput] = useState("");

    // const handleSearchInputChange = (e) => {
    //     setSearchInput(e.target.value);
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setQuery(searchInput);
    //   };


    // update react router v6
    const navigate = useNavigate()
    //use Dispatch as func -> can dispatch any redux action
    const dispatch = useDispatch();

    //get productList from productList Reducer (check: index.js -> store)
    const productList = useSelector((state) => state.productList)
    //get value from product list
    const {products, loading} = productList;
  
    //dispatch an action using effect instead feed data
    useEffect(() =>{
        dispatch(productAction.getProductList(pageNum, limit))
    }, [dispatch, pageNum, limit, query])


    return (
            <div className="home-page">
                {loading ? (
                    <LoadingBox loading = {loading} />
                ): (
                    <div>
                    <CarouselComponent />

                    <div className="product-list">
                    {products.map((product) => (
                        // pass prop every single product -> Product component
                        <div>
                        <ProductCard key={product._id} product = {product} />
                        </div>
                    ))
                    }
                    </div>
                    <PaginationBar
                    pageNum = {pageNum}
                    setPageNum={setPageNum}
                    totalPageNum = {totalPage}
                    />
                    </div>
                )
                }
                
             
            </div>


    )
}

export default HomePage;            


   