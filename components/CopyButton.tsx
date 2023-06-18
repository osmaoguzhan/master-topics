"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CopyButton() {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        navigator.clipboard
          .writeText(document.querySelector("article")?.textContent || "")
          .then(() => {
            toast.success("Successfully copied to clipboard!");
          });
      }}
    >
      <ToastContainer autoClose={2000} />
      Copy
    </button>
  );
}
