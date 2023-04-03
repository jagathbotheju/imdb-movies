"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <div className="mx-4 my-3">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between items-center"
      >
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className={`w-full rounded-md placeholder-gray-300 outline-none bg-transparent border p-1 border-amber-500 mr-2 ${
            !search && "border-gray-200"
          }`}
          type="text"
          placeholder="Search Movies..."
        />
        <button
          className="text-amber-500 border rounded-md py-1 px-2 border-amber-500 disabled:text-gray-400 disabled:border-gray-200"
          type="submit"
          disabled={!search}
        >
          Search
        </button>
      </form>
    </div>
  );
}
