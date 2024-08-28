import { getColorByValue } from '../../utils/getColorDensity';
import { getHighestActivity } from '../../utils/getHighestActivity';
import styles from './Day.module.css';
function Day({ day, data }) {
	return (
		<div className={`${getColorByValue(day, getHighestActivity(data))} ${styles.dayItem}`}></div>
	);
}

export default Day;
