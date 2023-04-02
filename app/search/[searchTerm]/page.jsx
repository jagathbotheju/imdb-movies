import Results from "@/app/components/Results";
import React from "react";

export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US`
  );

  if (!res.ok) throw new Error("No movies found...");
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center p-6">No Movies Found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}
