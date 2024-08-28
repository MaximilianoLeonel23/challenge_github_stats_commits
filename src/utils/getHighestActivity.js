export const getHighestActivity = data => {
	let days = [];
	data.map(week => {
		days = [...days, ...week.days];
	});

	let highestActivity;
	for (let i = 0; i < days.length; i++) {
		if (i == 0) {
			highestActivity = days[i];
		} else if (days[i] > highestActivity) {
			highestActivity = days[i];
		}
	}
	return highestActivity;
};
