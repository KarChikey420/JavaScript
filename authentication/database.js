// Database connection configuration
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://<user>:sUQLhMU8scKGjpRg@cluster0.d7dxcbn.mongodb.net";

async function connect() {
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB");
  await client.close();
}

connect().catch(console.error);
