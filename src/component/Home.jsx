import { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux'
import { elementSlice } from '../features/counter/counterSlice';

const Home = () => {
    const[items,setItems]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setItems(data))

    },[])
   

    const dispatch= useDispatch()
    dispatch(elementSlice(items))
    localStorage.setItem('data',JSON.stringify(items))

    return (
        <div className="bg-lime-500 h-screen">
            <h2>Home Page</h2>
        </div>
    );
};

export default Home;