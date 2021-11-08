import React from 'react'
import RingLoader from "react-spinners/RingLoader";
import "./LoadingBox.css"
const LoadingBox = (props) => {
    const {loading} = props;
    return (
        <div className = "loading-box">
                <RingLoader 
                size = {250}
                color = {'#ADD2EB'}
                loading = {true}
                />     
        </div>
    )
}

export default LoadingBox
