import React from 'react';

const Categories = ({ filterItems}) => {
    return (
        //the manual way:
			<div className="btn-container">
				<button className="filter-btn" onClick={() => filterItems('all')}>
					All
				</button>
				<button className="filter-btn" onClick={() => filterItems('breakfast')}>
					Breakfast
				</button>
				<button className="filter-btn" onClick={() => filterItems('lunch')}>
					Lunch
				</button>
			</div>
		);
};

export default Categories;
