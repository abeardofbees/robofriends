import React from 'react';

const SearchBox = ({ searhfield, searchChange}) => {
	return (
		<div className='pa2'>
		<input 
			className='pa3 ba b--green bg-lightest-blue shadow-4'
			type='search' 
			placeholder='Search bots...'
			onChange={searchChange}
			/>
		</div>
		);
}

export default SearchBox;