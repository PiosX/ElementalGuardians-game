import axios from "axios";

export const updateData = (path: string) => {
	return axios.post(`http://localhost:3000/${path}`).catch((error) => {
		console.error("Błąd aktualizacji danych:", error);
		throw error;
	});
};
