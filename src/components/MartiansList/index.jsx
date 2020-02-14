import React from "react";
import { toLongDateFormat } from "../../utilities/Date";
import { toEuroCurrency } from "../../utilities/Number";

import "./styles.scss";

const MartiansList = ({ onItemClick, martians = [] }) => {
	const renderListItem = item => {
		return (
			<div key={item.id} className="martians-list-item">
				<h3>{item.name}</h3>
				<p>{toEuroCurrency(item.budget)}</p>
				<p>{toEuroCurrency(item.budget_spent)}</p>
				<p>{toLongDateFormat(item.date_of_first_purchase)}</p>
				{onItemClick && <button onClick={() => onItemClick(item)}>View</button>}
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
