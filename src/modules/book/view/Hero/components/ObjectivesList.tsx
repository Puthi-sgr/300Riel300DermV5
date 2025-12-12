import React from "react";
import { CheckCircle } from "lucide-react";

type ObjectivesListProps = {
  items: string[];
  className?: string;
};

const ObjectivesList: React.FC<ObjectivesListProps> = ({ items, className }) => (
  <ul className={`space-y-3 ${className ?? ""}`}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-earth-800">
        <CheckCircle className="w-5 h-5 text-eco-600 mt-0.5" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default ObjectivesList;
