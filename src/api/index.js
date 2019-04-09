import path from '../../config/config';

class TaskApi {
	async fetchData(URL) {
		console.log("124124124");
		const result = await axios({
			method: 'GET',
			url:`${path}/`${URL},
		});

		return result;
	}
}
