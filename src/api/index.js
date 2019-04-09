import config from '../../config/config';
import axios from 'axios';

class TaskApi {
	async fetchData(URL) {
		const result = await axios({
			method: 'POST',
			url:`${config.path}/api/getData`,
			data: {
				url: URL
			}
		});

		return result;
	}
}


export default {
	task: new TaskApi(),
};
