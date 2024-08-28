import { getMonthName } from '../../utils/getWeek';
import DayWeek from '../DayWeek/DayWeek';
import Week from '../Week/Week';
import styles from './Grid.module.css';
const Grid = ({ data }) => {
	let currentMonth = null;
	return (
		<div>
			<div className={styles.grid}>
				<DayWeek />
				{data &&
					data.map(week => {
						const monthName = getMonthName(week.week);

						const shouldShowMonthName = currentMonth !== monthName;
						currentMonth = monthName;

						return (
							<div key={week.week} className={styles.gridColumn}>
								<div className={styles.monthNameContainer}>
									{shouldShowMonthName && <div className={styles.monthName}>{monthName}</div>}
								</div>
								<Week week={week} data={data} />
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Grid;
