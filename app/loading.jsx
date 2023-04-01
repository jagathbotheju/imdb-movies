import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center mt-20 items-center">
      <img className="w-40" src="spinner.svg" alt="loading" />
    </div>
  );
}
