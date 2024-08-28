import React from 'react';
import Day from '../Day/Day';
import styles from './Week.module.css';
import { getWeekNumber } from '../../utils/getWeek';
function Week({ week, data }) {
	if (!week || !data) {
		return <div>...</div>;
	}

	return (
		<div className={styles.weekGrid}>
			{week.days.map((day, idx) => {
				return <Day day={day} data={data} />;
			})}
		</div>
	);
}

export default Week;
