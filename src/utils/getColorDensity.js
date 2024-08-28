import styles from '../components/Day/Day.module.css';

export const getColorByValue = (dayActivity, max) => {
	const firstQuartile = max / 4;
	const secondQuartile = max / 4 + firstQuartile;
	const thirdQuartile = max / 4 + secondQuartile;
	const fourthQuartile = max;

	switch (true) {
		case dayActivity == 0:
			return styles.bgLightest;
		case dayActivity <= firstQuartile:
			return styles.bgLighter;
		case dayActivity <= secondQuartile:
			return styles.bgBase;
		case dayActivity <= thirdQuartile:
			return styles.bgDarker;
		case dayActivity <= fourthQuartile:
			return styles.bgDarkest;
		default:
			return styles.bgLightest;
	}
};
