class HttpError extends Error {
  constructor(message, code, errors) {
    super(message);
    this.code = code;
    this.errors = errors;
  }
}

export const get = async (url) => {
  let response;
  try {
    response = await fetch(url);
  } catch (error) {
    throw new Error();
  }

  const json = await response.json();
  if (response.status !== 200) {
    throw new HttpError(json.code, json.message, json.errors);
  }

  return json;
};

export const post = async (url, body) => {
  let response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    throw new Error();
  }

  const json = await response.json();
  if (response.status !== 200) {
    throw new HttpError(json.code, json.message, json.errors);
  }

  return json;
};
