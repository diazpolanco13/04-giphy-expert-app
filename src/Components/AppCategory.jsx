import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AppCategory = ({ categories, setCategories }) => {
	const [imputValue, setImputValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!imputValue.trim()) {
			console.log('Ingrese un valor');
		} else {
			setCategories([imputValue, ...categories]);
			setImputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit} >
			<input
				className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
				type="text"
				placeholder="Busque un Gifs"
				value={imputValue}
				onChange={(e) => setImputValue(e.target.value)}
			/>
		</form>
	);
};

AppCategory.propTypes = {
	categories: PropTypes.array.isRequired,
	setCategories: PropTypes.func.isRequired,
};
export default AppCategory;
