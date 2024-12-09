import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Replace with your actual Button component path
import { Input } from "@/components/ui/input"; // Replace with your Input component path
import { Label } from "@/components/ui/label"; // Replace with your Label component path
import { Trash2 } from "lucide-react";

const UploadDocument = () => {
  // State for different categories of uploads
  const [documents, setDocuments] = useState({
    receipt: { files: [] as File[], previewURLs: [] as string[], mandatory: true },
    purchaseOrder: { files: [] as File[], previewURLs: [] as string[], mandatory: false },
    assetPhoto: { files: [] as File[], previewURLs: [] as string[], mandatory: true },
    invoice: { files: [] as File[], previewURLs: [] as string[], mandatory: true },
  });

  // Handle file changes for a specific category
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, category: keyof typeof documents) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    setDocuments((prevDocs) => {
      const updatedCategory = {
        files: [...prevDocs[category].files, ...fileArray],
        previewURLs: [...prevDocs[category].previewURLs, ...fileArray.map((file) => URL.createObjectURL(file))],
        mandatory: prevDocs[category].mandatory,
      };

      return { ...prevDocs, [category]: updatedCategory };
    });
  };

  // Handle removing a document for a specific category
  const handleRemoveDocument = (index: number, category: keyof typeof documents) => {
    setDocuments((prevDocs) => {
      const updatedCategory = {
        ...prevDocs[category],
        files: prevDocs[category].files.filter((_, i) => i !== index),
        previewURLs: prevDocs[category].previewURLs.filter((_, i) => i !== index),
      };

      return { ...prevDocs, [category]: updatedCategory };
    });
  };

  return (
    <div className="mt-2 flex flex-col gap-6">
      <h1 className="font-semibold text-black text-lg tracking-wide">Supporting Documents Upload</h1>

      <div className="grid grid-cols-2">
        {/* Loop through categories */}
        {Object.entries(documents).map(([category, data]) => (
          <div
            key={category}
            className="mb-6">
            <h2 className="font-bold text-md mb-5 capitalize">
              {category.replace(/([A-Z])/g, " $1")} {data.mandatory && <span className="text-red-500">*</span>}
            </h2>

            {/* Conditionally render the input based on uploaded files */}
            {data.files.length === 0 && (
              <div className="grid w-full gap-2">
                <Label htmlFor={`${category}-upload`}>Upload {category.replace(/([A-Z])/g, " $1")}</Label>
                <Input
                  type="file"
                  id={`${category}-upload`}
                  className="w-[500px]"
                  onChange={(e) => handleFileChange(e, category as keyof typeof documents)}
                  multiple
                />
              </div>
            )}

            {/* Display uploaded documents */}
            {data.files.length > 0 && (
              <section className="mt-4">
                <ul className="flex flex-wrap gap-4">
                  {data.files.map((file, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between p-4 bg-white drop-shadow-lg rounded-lg w-fit gap-10">
                      <div className="text-sm font-medium">{file.name}</div>
                      <div className="flex gap-2 w-full items-center justify-end">
                        <div className="flex justify-between gap-2">
                          <a
                            href={data.previewURLs[index]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline text-sm">
                            View
                          </a>
                          <a
                            href={data.previewURLs[index]}
                            download
                            className="text-green-500 hover:underline text-sm">
                            Download
                          </a>
                        </div>
                        {/* Remove Button */}
                        <Button
                          variant="outline"
                          size="icon"
                          className="text-red-600"
                          onClick={() => handleRemoveDocument(index, category as keyof typeof documents)}>
                          <Trash2 />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadDocument;
