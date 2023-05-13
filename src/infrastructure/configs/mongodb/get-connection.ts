export const getMongoDbConnection = () => {
  const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_DATABASE } =
    process.env;

  return `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_DATABASE}.${MONGO_HOST}/?retryWrites=true&w=majority`;
};
