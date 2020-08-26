import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<h3 className="text-xl py-3 animate__animated animate__zoomIn">{category}</h3>
			{loading && <p>Loading....</p>}
			<div className="flex mb-4">
				{images.map((imagen) => {
					return <GifGridItem key={imagen.id} {...imagen} />;
				})}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};

export default GifGrid;
