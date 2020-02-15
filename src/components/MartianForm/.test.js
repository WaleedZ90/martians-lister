import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import MartianForm from "./index";
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

	test("shows required error when textbox is empty", done => {
		const martianObj = {
			id: 1,
			name: "Martian Firma",
			budget: "3445",
			budget_spent: 451.3754,
			date_of_first_purchase: "2120-02-20"
		};

		const martianForm = mount(<MartianForm item={martianObj} />);

		const budgetInput = martianForm.find('input[name="budget"]');

		act(() => {
			budgetInput.simulate("change", {
				persist: () => {},
				target: {
					name: "budget",
					value: ""
				}
			});
		});

		const errorMessage = martianForm
			.update()
			.containsAnyMatchingElements(
				<span className="error-text">This field is required</span>
			);

		expect(errorMessage).toBeTruthy();
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
