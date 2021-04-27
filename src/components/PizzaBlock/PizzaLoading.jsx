import React from 'react';
import ContentLoader from 'react-content-loader';


const PizzaLoading = () => {
	return (
	    <ContentLoader
		    className="pizza-block"
	        speed={2}
	        width={280}
	        height={460}
	        viewBox="0 0 280 460"
	        backgroundColor="#ededed"
	        foregroundColor="#f5f5f5">
	        <circle cx="129" cy="131" r="111"/>
	        <rect x="-2" y="258" rx="2" ry="2" width="280" height="30"/>
	        <rect x="0" y="309" rx="6" ry="6" width="281" height="84"/>
	        <rect x="6" y="414" rx="0" ry="0" width="90" height="27"/>
	        <rect x="130" y="407" rx="13" ry="13" width="150" height="40"/>
	    </ContentLoader>
	)
};

export default PizzaLoading;
