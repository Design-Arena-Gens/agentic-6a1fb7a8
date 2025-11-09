"use client";

export default function Filters({ options, active, onChange }) {
  return (
    <div className="card">
      <div className="card-title">Filter by Category</div>
      <div className="filters">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`pill ${active === option ? "active" : ""}`}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
