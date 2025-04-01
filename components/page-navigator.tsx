import { useState, useEffect } from "react";

export function PageNavigator({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const [inputPage, setInputPage] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onPageChange((currentPage - 1 + totalPages) % totalPages);
      } else if (e.key === "ArrowRight" || e.key === "Enter") {
        onPageChange((currentPage + 1) % totalPages);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, totalPages, onPageChange]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const page = parseInt(inputPage);

    if (!isNaN(page) && page >= 0 && page < totalPages) {
      onPageChange(page);
    }
    setInputPage("");
  };

  return (
    <div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 
        bg-black/40 p-2 rounded-full backdrop-blur-md border border-white/30 z-50"
    >
      <button
        className="text-white hover:text-gray-300 transition-colors"
        onClick={() =>
          onPageChange((currentPage - 1 + totalPages) % totalPages)
        }
      >
        ◀
      </button>

      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          className="w-16 bg-black/30 text-white border border-white/30 rounded-md px-2 py-1 
              text-center focus:outline-none focus:border-white/50"
          placeholder={`${currentPage}`}
          type="text"
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
        />
        <span className="text-white/70">/ {totalPages - 1}</span>
      </form>

      <button
        className="text-white hover:text-gray-300 transition-colors"
        onClick={() => onPageChange((currentPage + 1) % totalPages)}
      >
        ▶
      </button>
    </div>
  );
}
