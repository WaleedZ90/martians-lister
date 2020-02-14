import axios from "axios";

const baseUrl = "http://localhost:4000";

export const getMartiansList = async () => {
	return await axios({
		method: "GET",
		url: `${baseUrl}/martians_list`
	})
		.then(response => response)
		.catch(error => error);
};

export const editMartian = async editedMartian => {
	// if (!editMartian) throw new Error("A Martian should be provided");

	return await axios({
		method: "PUT",
		url: `${baseUrl}/martians_list/${editedMartian.id}`,
		data: editedMartian
	})
		.then(response => response.data)
		.catch(error => error);
};
