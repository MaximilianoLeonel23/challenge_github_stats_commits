export function getMonthName(timestamp) {
	const date = new Date(timestamp * 1000);
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const month = date.getUTCMonth();

	return monthNames[month];
}
