import moment from "moment";

/**
 * Takes a date and parses it to long date format
 *
 * @param {Date} date date input format (yyyy-MM-DD)
 * @returns {string} Date parsed to format (MMM DD, yyyy)
 */
export const toLongDateFormat = date => {
	const parsedDate = moment(date, "yyyy-MM-DD")
		.format("MMM DD, YYYY")
		.toString();
	return parsedDate;
};
