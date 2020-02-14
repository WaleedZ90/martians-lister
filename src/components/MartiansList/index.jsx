import React from "react";
import "./styles.scss";

const martians = [
	{
		id: 1,
		name: "Martian Firma",
		budget: 10000.0,
		budget_spent: 4500.0,
		date_of_first_purchase: "2119-07-07"
	},
	{
		id: 2,
		name: "Solar Firma",
		budget: 1123.22,
		budget_spent: 451.3754,
		date_of_first_purchase: "2120-01-14"
	}
];

const MartiansList = () => {
	const renderListItem = item => {
		return (
			<div className="martians-list-item">
				<h3>{item.name}</h3>
			</div>
		);
	};

	return (
		<article className="martians-list">
			{martians.map((martian, index) => renderListItem(martian))}
		</article>
	);
};

export default MartiansList;
