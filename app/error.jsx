"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="max-w-6xl mx-auto flex justify-center flex-col">
      <h1 className="text-2xl p-10 bg-red-200 rounded-lg mt-20 text-red-400 my-10">
        Something wet wrong...!
      </h1>
      <button
        onClick={() => reset()}
        className="py-1 px-2 self-end hover:text-amber-600"
      >
        Try Again
      </button>
    </div>
  );
}
