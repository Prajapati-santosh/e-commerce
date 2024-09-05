import React from 'react'

function SearchResults({productName}) {
    console.log(productName);

  return (
    <div className='result'>
        {productName}
    </div>
  )
}

export default SearchResults;