export default function ProgressBar({ completed, total }) {
  const percent = Math.round((completed / total) * 100);

  return (
    <div>
      <p className="font-medium">Progreso: {percent}%</p>
      <div className="w-full bg-gray-200 rounded h-3">
        <div
          className="bg-green-600 h-3 rounded"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
