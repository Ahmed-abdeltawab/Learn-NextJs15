"use client";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({}) => {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      {status.pending ? "Adding..." : "Add Product"}
    </button>
  );
};
