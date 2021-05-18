import React from 'react';


const SearchBox = (props) => {
    const {searchChange} = props;
    return(
       <input 
       className='pa3 ba b--green bg-lightest-blue' 
       type='search' 
       placeholder="search robots... " 
       onChange = {searchChange}    
       /> 
       
    )
}

export default SearchBox;