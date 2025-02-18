import { Client, Account, Databases, ID } from "appwrite";

// Initialize the client
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('679e6a020024b4e3be09');

// Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);

// ✅ Generate a Unique ID using Appwrite's built-in method
export const uniqueId = () => ID.unique();

export default client;
