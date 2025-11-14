import RuleCard from "./RuleCard";

export default function RuleList({ rules, onCompliant }) {
  if (rules.length === 0) return <p>No se encontraron normas.</p>;

  return (
    <div className="grid gap-4">
      {rules.map((rule) => (
        <RuleCard key={rule.id} rule={rule} onCompliant={onCompliant} />
      ))}
    </div>
  );
}
