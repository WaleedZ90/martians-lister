import React from "react";
import { Formik, Form } from "formik";
import { object, number } from "yup";
import "./styles.scss";
import InputText from "../InputText";
import Button from "../Button";

const validationSchema = object().shape({
	budget: number("Value entered must be a number").required(
		"This field is required"
	)
});

const MartianForm = ({ item, onItemEdit, onCancel }) => {
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
			{({
				values,
				errors,
				touched,
				isSubmitting,
				setFieldValue,
				setFieldTouched,
				handleChange,
				handleBlur
			}) => (
				<Form>
					<InputText
						id="martianFormId"
						name="budget"
						value={values.budget}
						hasError={errors.budget != null && touched.budget}
						errorMessage={errors.budget}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					<Button type="submit">Save changes</Button>
					<Button onClick={onCancel}>Cancel</Button>
				</Form>
			)}
		</Formik>
	);
};

export default MartianForm;
