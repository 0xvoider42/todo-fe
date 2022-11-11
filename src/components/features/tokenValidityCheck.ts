export const checkTokenValidity = (token) => {
  if (!token) {
    return "token has expired";
  }

  return (
    Date.now() >=
    JSON.parse(Buffer.from(token.split(".")[1], "base64").toString()).exp * 1000
  );
};
