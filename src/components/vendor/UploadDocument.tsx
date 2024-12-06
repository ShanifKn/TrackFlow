import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Replace with your actual Button component path
import { Input } from "@/components/ui/input"; // Replace with your Input component path
import { Label } from "@/components/ui/label"; // Replace with your Label component path

const UploadDocument = () => {
  const [documents, setDocuments] = useState<File[]>([]); // State to hold uploaded documents
  const [previewURLs, setPreviewURLs] = useState<string[]>([]); // State for document preview URLs

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files); // Convert FileList to an array
    setDocuments((prevDocs) => [...prevDocs, ...fileArray]);

    // Generate preview URLs for supported document types
    const urls = fileArray.map((file) => URL.createObjectURL(file));
    setPreviewURLs((prevURLs) => [...prevURLs, ...urls]);
  };

  const handleRemoveDocument = (index: number) => {
    setDocuments((prevDocs) => prevDocs.filter((_, i) => i !== index));
    setPreviewURLs((prevURLs) => prevURLs.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-2 flex flex-col gap-6">
      <h1 className="font-semibold text-black text-lg tracking-wide">Supporting Documents Upload</h1>

      {/* Upload Section */}
      <div className="grid w-full gap-2">
        <Label htmlFor="document-upload">Upload Documents</Label>
        <Input
          type="file"
          id="document-upload"
          className=" w-[500px]"
          onChange={handleFileChange}
          multiple // Allow multiple file uploads
        />
      </div>

      {/* Uploaded Documents */}
      {documents.length > 0 && (
        <div className="mt-4">
          <h2 className="font-medium text-black text-md mb-2">Uploaded Documents</h2>
          <div className="flex flex-wrap gap-4">
            {documents.map((document, index) => (
              <div
                key={index}
                className="p-2 border rounded-md shadow-md w-64 bg-gray-50">
                <div className="truncate">{document.name}</div>
                {previewURLs[index] &&
                  (document.type.startsWith("image/") ? (
                    <img
                      src={previewURLs[index]}
                      alt="Document Preview"
                      className="mt-2 rounded-md w-full h-32 object-cover"
                    />
                  ) : (
                    <a
                      href={previewURLs[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 mt-2 text-sm">
                      View Document
                    </a>
                  ))}
                <Button
                  variant="destructive"
                  className="mt-2 w-full"
                  onClick={() => handleRemoveDocument(index)}>
                  Remove
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadDocument;
