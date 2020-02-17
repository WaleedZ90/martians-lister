import React from "react";
import { fireEvent, render, waitForElement } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import MartianForm from "./index";
import { Form } from "formik";
import { act } from "react-dom/test-utils";

describe("<MartianForm />", () => {
	test("renders without crashing", () => {
		const martianObj = {
			id: 1,
			name: "Martian Firma",
			budget: "3445",
			budget_spent: 451.3754,
			date_of_first_purchase: "2120-02-20"
		};

		mount(<MartianForm item={martianObj} />);
	});

	test("should update budget input when its changed", () => {
		const martianObj = {
			id: 1,
			name: "Martian Firma",
			budget: 3445,
			budget_spent: 451.3754,
			date_of_first_purchase: "2120-02-20"
		};
		const tree = mount(<MartianForm item={martianObj} />);

		tree
			.find("#martianForm")
			.find("input")
			.simulate("change", {
				// you must add this next line as (Formik calls e.persist() internally)
				persist: () => {},
				// simulate changing e.target.name and e.target.value
				target: {
					name: "budget",
					value: "555"
				}
			});

		const newValue = tree
			.find("#martianForm")
			.find("input")
			.props().value;

		expect(newValue).toEqual("555");
	});

	test("it shows confirmation", () => {
		const martianObj = {
			id: 1,
			name: "Martian Firma",
			budget: "3445",
			budget_spent: 451.3754,
			date_of_first_purchase: "2120-02-20"
		};

		const tree = shallow(<MartianForm item={martianObj} />);
		const saveButton = tree.dive().find("#saveButton");

		act(() => {
			saveButton.simulate("click");
		});

		expect(tree.dive().find(".martian-form-confirmation")).toBeTruthy();
	});
});
