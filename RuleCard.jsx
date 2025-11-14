import { useState } from "react";

export default function RuleCard({ rule, onCompliant }) {
  const [done, setDone] = useState(false);

  const toggle = () => {
    setDone(!done);
    onCompliant(!done);
  };

  return (
    <div className="border rounded p-4 shadow">
      <h3 className="font-bold">{rule.title}</h3>
      <p className="text-sm text-gray-600">Categoría: {rule.category}</p>
      <p className="mt-2">{rule.description}</p>
      <button
        onClick={toggle}
        aria-pressed={done}
        className={`mt-3 px-3 py-1 rounded text-white ${
          done ? "bg-green-600" : "bg-blue-600"
        }`}
      >
        {done ? "Compliant ✅" : "Marcar como cumplida"}
      </button>
    </div>
  );
}
