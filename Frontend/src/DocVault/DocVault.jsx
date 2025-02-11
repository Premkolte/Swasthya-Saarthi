import React from "react";
import UploadDocument from "./UploadDocument";
import DocumentList from "./DocumentList";
import { useAuth } from "../context/AuthContext"; 

const DocVault = () => {
  const { user } = useAuth();

  if (!user) return <p>Please log in to view your documents.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Document Vault</h1>
      <UploadDocument userId={user.$id} />
      <DocumentList userId={user.$id} />
    </div>
  );
};

export default DocVault;
