import React, { useState } from "react";
import { Formik, Form } from "formik";
import { object, number, ref } from "yup";
import "./styles.scss";
import InputText from "../InputText";
import Button from "../Button";
import { toEuroCurrency } from "../../utilities/Number";

const validationSchema = object().shape({
	budget: number("Value entered must be a number")
		.min(ref("budget_spent"), "value cannot be less than budget spent")
		.required("This field is required")
});

const MartianForm = ({ item, onItemEdit, onCancel }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = (values, actions) => {
		const editedItem = {
			...item,
			budget: values.budget
		};
		onItemEdit(editedItem);
	};

	return (
		<Formik
			enableReinitialize
			validationSchema={validationSchema}
			initialValues={item}
			onSubmit={onSubmit}
		>
			{({ values, errors, touched, handleChange, handleBlur }) => (
				<Form className="martian-form">
					{!isSubmitting && (
						<React.Fragment>
							<p>{item.name}</p>
							<InputText
								id="martianFormId"
								name="budget"
								value={values.budget}
								hasError={errors.budget != null && touched.budget}
								errorMessage={errors.budget}
								onChange={handleChange}
								onBlur={handleBlur}
								label={"Budget"}
							/>
						</React.Fragment>
					)}

					{isSubmitting && (
						<aside className="martian-form-confirmation">
							<p>
								Are you sure you want to change the total budget to{" "}
								<strong>{toEuroCurrency(values.budget)}</strong>?
							</p>
						</aside>
					)}

					<div className="martian-form-buttons">
						{!isSubmitting && (
							<React.Fragment>
								<Button
									id="saveButton"
									type="button"
									onClick={() => errors.budget == null && setIsSubmitting(true)}
								>
									Save
								</Button>
								<Button onClick={onCancel}>Cancel</Button>
							</React.Fragment>
						)}
						{isSubmitting && (
							<React.Fragment>
								<Button id="submitButton" type="submit">
									Confirm
								</Button>
								<Button onClick={() => setIsSubmitting(false)}>Cancel</Button>
							</React.Fragment>
						)}
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default MartianForm;
