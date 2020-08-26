import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ title, url }) => {
  return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-3 mx-3">
      <img className="object-cover h-48 w-full" src={url} alt={title}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-0">{title}</div>
      </div>
    </div>

  );
};

GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GifGridItem;
