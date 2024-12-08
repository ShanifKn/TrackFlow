import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

interface CheckboxListProps {
  title: string;
  labels: string[];
}

export default function CheckboxList({ title, labels }: CheckboxListProps) {
  const [checkedStates, setCheckedStates] = useState<boolean[]>(new Array(labels.length).fill(false));

  // Handle checkbox toggle
  const handleCheckboxChange = (index: number) => {
    if (index === 0) {
      // Toggle all checkboxes
      const newState = !checkedStates[0];
      setCheckedStates(new Array(labels.length).fill(newState));
    } else {
      // Toggle individual checkbox
      const updatedStates = [...checkedStates];
      updatedStates[index] = !updatedStates[index];
      // Ensure the "All" checkbox is consistent with the state of others
      updatedStates[0] = updatedStates.slice(1).every((state) => state);
      setCheckedStates(updatedStates);
    }
  };

  return (
    <div className="space-y-4">
      {/* Title */}
      <div className="font-semibold text-lg">{title}:</div>

      {/* Checkbox list */}
      <div className="flex flex-wrap gap-10">
        {labels.map((label, index) => (
          <label
            key={index}
            className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={checkedStates[index]}
              onChange={() => handleCheckboxChange(index)}
              className="form-checkbox"
            />
            <span className="text-sm">{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
