export const checkTokenValidity = (token: string) => {
  if (!token) {
    return true;
  }

  return (
    Date.now() >=
    JSON.parse(Buffer.from(token.split(".")[1], "base64").toString()).exp * 1000
  );
};
