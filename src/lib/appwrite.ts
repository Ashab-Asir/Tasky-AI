import { Client, ID, Query, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6861f7cf0030d8b32a58");

const database = new Databases(client);

export { database, ID, Query };
