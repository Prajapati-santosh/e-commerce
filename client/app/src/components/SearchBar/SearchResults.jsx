import React from 'react'
import './SearchResults.css';

function SearchResults({productName}) {
    console.log(productName);
    
  return (
    <div className='search-result'>{productName}</div>
  )
}

export default SearchResults;