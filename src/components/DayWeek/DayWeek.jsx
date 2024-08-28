import styles from './DayWeek.module.css';
function DayWeek() {
	const weekDays = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
	return (
		<div className={styles.dayWeekColumn}>
			{weekDays.map(day => {
				return <p className={styles.dayWeekItem}>{day ? day : <br />}</p>;
			})}
		</div>
	);
}

export default DayWeek;
