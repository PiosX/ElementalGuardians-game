import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const getDataById = <T,>(
	path: string,
	setData: Dispatch<SetStateAction<T[]>>,
	params?: Record<string, unknown>
) => {
	axios
		.get(`http://localhost:3000/${path}`, { params })
		.then((response) => {
			setData(response.data);
		})
		.catch((err) => {
			console.error("Error fetching data:", err);
		});
};
