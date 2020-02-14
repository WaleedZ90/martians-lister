import React from "react";
import classNames from "classnames";
import "./styles.scss";

const Button = ({
	id,
	type = "button",
	onClick,
	className,
	children,
	disabled = false
}) => {
	return (
		<button
			id={id}
			type={type}
			className={classNames("button", className)}
			onClick={onClick}
			disabled={disabled}
		>
			<div>{children}</div>
		</button>
	);
};

export default Button;
