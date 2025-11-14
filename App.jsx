import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import RuleList from "./components/RuleList";
import ProgressBar from "./components/ProgressBar";
import Footer from "./components/Footer";
import rules from "./data/rules";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [completed, setCompleted] = useState(0);

  const handleCompliant = (isAdding) => {
    setCompleted((prev) => prev + (isAdding ? 1 : -1));
  };

  const filtered = rules.filter((rule) => {
    const matchesText =
      rule.title.toLowerCase().includes(search.toLowerCase()) ||
      rule.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "all" || rule.category === category;

    return matchesText && matchesCategory;
  });

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <ProgressBar completed={completed} total={rules.length} />
      <RuleList rules={filtered} onCompliant={handleCompliant} />
      <Footer />
    </div>
  );
}
