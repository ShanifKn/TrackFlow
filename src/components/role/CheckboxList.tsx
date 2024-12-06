
import { Checkbox } from "../ui/checkbox";

interface CheckboxListProps {
  title: string;
  labels: string[];
}

export default function CheckboxList({ title, labels }: CheckboxListProps) {
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
            <Checkbox />
            <span className="text-sm">{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
