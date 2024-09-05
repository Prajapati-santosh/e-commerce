import React, { useEffect, useState, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchResults from "./SearchResults";
import './search.scss';

function SearchBar() {
    const [input, setInput] = useState("");
    const [results, setResult] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const searchContainerRef = useRef(null);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    useEffect(() => {
        if (input.trim()) {
            fetchData(input);
        } else {
            setResult([]);
        }
    }, [input]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const fetchData = async (input) => {
        fetch(`https://nodejs-serverless-function-express-psi-hazel.vercel.app/data/868883604s6dih?name=${input}`)
            .then((res) => res.json())
            .then((value) => {
                setResult(value);
                setShowResults(true);
            });
    }

    return (
        <div className="search-container" ref={searchContainerRef}>
            <div className='searchbar'>
                <input
                    placeholder="Type to search"
                    onChange={handleChange}
                    value={input}
                    onFocus={() => input && setShowResults(true)}
                />
                <IoSearchOutline />
            </div>
            {showResults && results.length > 0 && (
                <div className="searchresults">
                    {results.map((item) => (
                        <SearchResults key={item.id} productName={item.productName} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
