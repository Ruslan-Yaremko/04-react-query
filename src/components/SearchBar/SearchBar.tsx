import { useState } from "react";
import { toast } from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(formData: FormData) {
    const query = formData.get("query");

    if (typeof query !== "string" || !query.trim()) {
      toast.error("Please enter a search query!");
      return;
    }

    onSubmit(query.trim());
  }

  return (
    <form className={styles.form} action={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="query"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Search movies..."
      />

      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
}
