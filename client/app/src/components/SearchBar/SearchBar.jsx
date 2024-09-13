import react, { useEffect, useState } from "react";
import "./SearchBar.css";
import { IoSearchOutline } from "react-icons/io5";
import SearchResults from "./SearchResults";

function SearchBar(){
    const [input,setInput]=useState("");
    const [results,setResult]=useState([]);

    const handleChnage=(e)=>{
        setInput(e.target.value);
        console.log(input);
    }
    useEffect(() =>{
        fetchData(input);
    }, [input])

    const fetchData=async(input)=>{
            fetch(`https://nodejs-serverless-function-express-psi-hazel.vercel.app/data/868883604s6dih?name=${input}`).then((res)=>{
                return res.json();
            }).then((value)=>{
                setResult(value);
            })
         console.log(results);
        }
    return <div className="search-container">
        <div className="search-bar">
            <input placeholder="Type to search " onChange={handleChnage} value={input}></input>
            <IoSearchOutline />
        </div>
        <div className="search-result-container">
            {results && results.length>=1 ? (results.map((item)=>{
            return ( <SearchResults key={item.id} productName={item.productName}/>)
            })):""}
        </div>
    </div>;
}


export default SearchBar;