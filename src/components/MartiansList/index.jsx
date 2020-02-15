import React from "react";
import { toLongDateFormat } from "../../utilities/Date";
import { toEuroCurrency } from "../../utilities/Number";
import Button from "../Button";

import "./styles.scss";

const MartiansList = ({ onItemClick, martians = [] }) => {
	const renderListItem = item => {
		return (
			<div key={item.id} className="martians-list-item">
				<h3>{item.name}</h3>
				<p>
					<i>Budget</i>
					<span>{toEuroCurrency(item.budget)}</span>
				</p>
				<p>
					<i>Budget Spent</i>
					<span>{toEuroCurrency(item.budget_spent)}</span>
				</p>
				<p>
					<i>Date of Purchase</i>
					<span>{toLongDateFormat(item.date_of_first_purchase)}</span>
				</p>
				{onItemClick && <Button onClick={() => onItemClick(item)}>View</Button>}
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
