import React, { useState } from "react";
import { Trash2 } from "lucide-react"; // Replace with your trash icon component or import
import { Button } from "@/components/ui/button"; // Replace with your button component or implementation

const UploadedDocuments = () => {
  const [documents, setDocuments] = useState([{ name: "Invoice_July_2024.pdf" }, { name: "Company_Policy_Handbook.pdf" }, { name: "Asset_Depreciation_Schedule.docx" }]);

  const previewURLs = ["https://example.com/files/invoice_july_2024.pdf", "https://example.com/files/company_policy_handbook.pdf", "https://example.com/files/asset_depreciation_schedule.docx"];

  const handleRemoveDocument = (index: number) => {
    const updatedDocuments = [...documents];
    updatedDocuments.splice(index, 1);
    setDocuments(updatedDocuments);
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      {/* Uploaded Documents */}
      {documents.length > 0 && (
        <section className="mt-4">
          <h2 className="text-lg font-bold mb-4">Uploaded Documents</h2>
          <ul className="flex flex-wrap gap-4">
            {documents.map((document, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-4 bg-white drop-shadow-lg rounded-lg w-fit gap-10">
                {/* Document Name */}
                <div className="text-sm font-medium">{document.name}</div>
                {/* Actions */}
                <div className="flex gap-2 items-center justify-end">
                  <div className="flex gap-2">
                    {/* View Button */}
                    <a
                      href={previewURLs[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm">
                      View
                    </a>
                    {/* Download Button */}
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
                    className="text-red-600"
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

export default UploadedDocuments;
