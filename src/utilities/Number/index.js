/**
 * Takes a number a parses it to Germany's default currency format (1.000,00 €)
 *
 * @param {number} number number input
 * @returns {string} number in string format 1.000,00 €
 */
export const toEuroCurrency = (number, widthDecimals = true) => {
	if (number == null || isNaN(number)) throw new Error("Invalid number");
	const formatter = new Intl.NumberFormat("de", {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: widthDecimals ? 2 : 0
	});

	return formatter.format(number);
};
