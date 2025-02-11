import { Client, Account, Databases, ID } from "appwrite";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // ✅ Ensure correct endpoint
  .setProject("679e6a020024b4e3be09"); // ✅ Replace with your actual Appwrite project ID

// Initialize services
export const account = new Account(client);
export const database = new Databases(client);

// ✅ Generate a Unique ID using Appwrite's built-in method
export const uniqueId = () => ID.unique();

export default client;
