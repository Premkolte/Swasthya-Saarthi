import React, { useEffect, useState } from "react";
import { getUserDocuments } from "./docVaultConfig";

const DocumentList = ({ userId }) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      const docs = await getUserDocuments(userId);
      setDocuments(docs);
    };
    fetchDocs();
  }, [userId]);

  return (
    <div>
      <h2>Your Documents</h2>
      {documents.length > 0 ? (
        documents.map((doc) => (
          <div key={doc.$id} className="p-2 border-b">
            <p>{doc.name}</p>
            <a href={doc.href} target="_blank" rel="noopener noreferrer">View</a>
          </div>
        ))
      ) : (
        <p>No documents uploaded.</p>
      )}
    </div>
  );
};

export default DocumentList;
