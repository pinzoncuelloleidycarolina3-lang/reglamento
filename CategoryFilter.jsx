export default function CategoryFilter({ category, setCategory }) {
  return (
    <div>
      <label htmlFor="category" className="block font-medium">Filtrar por categoría:</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full rounded"
      >
        <option value="all">Todas</option>
        <option value="Uniforme">Uniforme</option>
        <option value="Puntualidad">Puntualidad</option>
        <option value="Seguridad">Seguridad</option>
        <option value="Convivencia">Convivencia</option>
      </select>
    </div>
  );
}
