"use client";

export default function SearchBox() {
  return (
    <input
      type="text"
      placeholder="Search"
      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2 w-full outline-none border border-gray-400"
      onChange={(e) => {
        const value = e.target.value;
        const cards = document.querySelectorAll("#card");
        cards.forEach((card) => {
          if (card.textContent?.toLowerCase().includes(value.toLowerCase())) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      }}
    />
  );
}
