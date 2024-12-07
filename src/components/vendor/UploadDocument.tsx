import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Replace with your actual Button component path
import { Input } from "@/components/ui/input"; // Replace with your Input component path
import { Label } from "@/components/ui/label"; // Replace with your Label component path
import { Trash2 } from "lucide-react";

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
        <section className="mt-4">
          <h2 className="text-lg font-bold mb-4">Uploaded Documents</h2>
          <ul className="flex flex-wrap gap-4">
            {documents.map((document, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-4 bg-white drop-shadow-lg rounded-lg w-fit gap-10">
                <div className=" text-sm font-medium">{document.name}</div>
                <div className="flex  gap-2  w-full items-center justify-end">
                  <div className="flex justify-between gap-2">
                    <a
                      href={previewURLs[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm">
                      View
                    </a>
                    <a
                      href={previewURLs[index]}
                      download
                      className="text-green-500 hover:underline text-sm">
                      Download
                    </a>
                  </div>
                  {/* Remove Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    className=" text-red-600"
                    onClick={() => handleRemoveDocument(index)}>
                    <Trash2 />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default UploadDocument;
