import axios from "axios";

export const deleteItemById = (path: string, itemId: number) => {
	return axios
		.delete(`http://localhost:3000/${path}/${itemId}`)
		.catch((err) => {
			console.error("Error deleting item:", err);
		});
};
