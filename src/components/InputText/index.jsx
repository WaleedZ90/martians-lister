import React from "react";
import classNames from "classnames";
import "./styles.scss";

const InputText = ({
	id,
	className,
	disabled = false,
	hasError = false,
	errorMessage,
	onChange,
	onBlur,
	type = "text",
	value,
	name,
	autoComplete = "off"
}) => {
	return (
		<div
			id={id}
			className={classNames("input", hasError && "input--error", className)}
		>
			<input
				name={name}
				id={`${id}__input`}
				type={type}
				onChange={onChange}
				onBlur={onBlur}
				value={value || ""}
				disabled={disabled}
				autoComplete={autoComplete}
			/>

			{hasError && errorMessage && (
				<span className="error-text">{errorMessage}</span>
			)}
		</div>
	);
};

export default InputText;
