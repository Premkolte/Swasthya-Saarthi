import { Client, Storage, ID } from "appwrite";

// Initialize Appwrite client
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("679e6a020024b4e3be09");

const storage = new Storage(client);

export const uploadDocument = async (file, userId) => {
  try {
    const response = await storage.createFile("docvault", ID.unique(), file, [`user:${userId}`]);
    return response;
  } catch (error) {
    console.error("Error uploading document:", error);
    throw error;
  }
};

export const getUserDocuments = async (userId) => {
  try {
    const files = await storage.listFiles("docvault");
    return files.files.filter(file => file.permissions.includes(`user:${userId}`));
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};
