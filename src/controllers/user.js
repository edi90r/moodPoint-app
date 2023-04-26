const { REACT_APP_hostURL, REACT_APP_localhost, REACT_APP_nodeEnv } =
  process.env;

const hostUrl =
  REACT_APP_nodeEnv === "development" ? REACT_APP_localhost : REACT_APP_hostURL;

export const loginUser = async (data) => {
  let response = await fetch(`${hostUrl}/users/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });

  return response.text().then((text) => {
    let data = text && JSON.parse(text);

    data = { ...data, status: response.status };
    return data;
  });
};

export const isUserAuth = async () => {
  let response = await fetch(`${hostUrl}/users/isAuth`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });

  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export const indicateTheMood = async (data) => {
  let response = await fetch(`${hostUrl}/users/moods`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });

  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};

export const isMoodExists = async (id, date) => {
  let response = await fetch(
    `${hostUrl}/users/${id}/moods/exists/?date=${date}`,
    {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }
  );

  return response.json();
};

export const sendContactRequest = async (data) => {
  let response = await fetch(`${hostUrl}/users/contactRequests`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });

  return response.json();
};

export const isWithin = async (id) => {
  let response = await fetch(
    `${hostUrl}/users/${id}/contactRequests/isWithin`,
    {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }
  );

  return response.json();
};
