import axios from "axios";

export const updateValue = (path: string, data: { essence: number }) => {
	return axios.put(`http://localhost:3000/${path}`, data).catch((error) => {
		console.error(error);
		throw error;
	});
};
