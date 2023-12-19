import axios from "axios";

export const updateEq = (
	path: string,
	data: { perkId: number; perkType: string }
) => {
	return axios.put(`http://localhost:3000/${path}`, data).catch((error) => {
		console.error(error);
		throw error;
	});
};
