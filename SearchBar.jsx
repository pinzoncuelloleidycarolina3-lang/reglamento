export default function SearchBar({ search, setSearch }) {
  return (
    <div>
      <label htmlFor="search" className="block font-medium">Buscar:</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full rounded"
      />
    </div>
  );
}
