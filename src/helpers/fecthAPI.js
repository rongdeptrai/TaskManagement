// api.js
const API_BASE_URL = process.env.API_BASE_URL;

const headers = {
  "Content-Type": "application/json",
};

function getAuthHeaders() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}

export async function callApi(endpoint, method, data = null) {
  const url = `${API_BASE_URL}/${endpoint}`;
  const requestOptions = {
    method: method,
    headers: { ...headers, ...getAuthHeaders() },
  };
  if (data) {
    requestOptions.body = JSON.stringify(data);
  }

  const response = await fetch(url, requestOptions);
  const json = await response.json();

  if (!response.ok) {
    const error = json.message || response.statusText;
    throw new Error(error);
  }

  return json;
}
