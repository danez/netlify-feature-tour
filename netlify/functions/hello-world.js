exports.handler = async () => {
  const mySecret = process.env.MY_SECRET;
  return {
    statusCode: 200,
    body: `hello worddld! I have a ${mySecret}`,
  };
};
