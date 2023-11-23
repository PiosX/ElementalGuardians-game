import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const getData = <T,>(
	path: string,
	setData: Dispatch<SetStateAction<T[]>>
) => {
	axios
		.get(`http://localhost:3000/${path}`)
		.then((response) => setData(response.data))
		.catch((err) => {
			console.error(err);
		});
};
