import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Grid from './components/Grid/Grid';

function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const request = await fetch(
					'https://api.github.com/repos/facebook/react/stats/commit_activity',
					{
						headers: {
							'Content-Type': 'application/json',
						},
						method: 'GET',
					},
				);

				const response = await request.json();
				console.log(response);
				setData(response);
			} catch (e) {
				console.error('No se ha podido obtener la data: ', e);
			}
		};
		fetchData();
	}, []);

	if (!data) {
		return <div className={styles.appPage}>Cargando...</div>;
	}

	return (
		<div className={styles.appPage}>
			<Grid data={data} />
		</div>
	);
}

export default App;
