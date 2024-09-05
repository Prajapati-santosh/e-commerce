import react, { useState } from "react";
import "./SearchBar.css";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";

function SearchBar(){
    const [input,setInput]=useState("");
    const [results,setResult]=useState([]);
    const handleChnage=(e)=>{
        setInput(e.target.value);
        console.log(input);
        fetchData(input);
    }
    const fetchData=async(input)=>{
        // try {
        // const data=await axios.get('https://nodejs-serverless-function-express-psi-hazel.vercel.app/data/868883604s6dih?name=${input}');
        // setResult(data);
        // console.log(data);
        // } catch (error) {
        //     console.log(error);
        // } 
        fetch(`https://nodejs-serverless-function-express-psi-hazel.vercel.app/data/868883604s6dih?name=${input}`).then((value)=>{
            setResult(value.json);
        })
     console.log(results);
    }
    return <div>
        <input placeholder="Type to search " onChange={handleChnage} value={input}></input>
        <IoSearchOutline />
    </div>;
}

export default SearchBar;