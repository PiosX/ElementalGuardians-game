import axios from "axios";

export const updateData = (path: string, data: { enemyId: number }) => {
	return axios.post(`http://localhost:3000/${path}`, data).catch((error) => {
		console.error(error);
		throw error;
	});
};
