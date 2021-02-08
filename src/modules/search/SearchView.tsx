import React, { useState } from 'react';
import './SearchView.scss';

const SearchView = () => {

	const [books, setBooks] = useState(['Book1', 'Book2', 'Book3'])

	return (
		<div>
			{books.map((book, index) => {
				return (
					<div key={index}>
						Book: {book}
					</div>
				)
			})}
		</div>
	);
}

export default SearchView;