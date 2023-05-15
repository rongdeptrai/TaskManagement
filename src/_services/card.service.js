import { authHeader } from "../_helpers";
const API_BASE_URL = process.env.REACT_APP_API_URL;
export const cardService = {
  getAllCard,
};

function getAllCard() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  console.log(authHeader());
  return fetch(`${API_BASE_URL}/TaskLists/GetAllListTask`, requestOptions).then(
    handleResponse,
  );
}

function handleResponse(response) {
  const { location } = window;
  let data; // declare data variable here
  return response.text().then((text) => {
    data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
