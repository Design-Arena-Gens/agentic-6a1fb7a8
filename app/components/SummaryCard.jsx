"use client";

export default function SummaryCard({ title, value, delta, deltaLabel }) {
  const deltaClass = delta >= 0 ? "positive" : "negative";
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);

  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-value">{formattedValue}</div>
      {typeof delta === "number" && (
        <div className={`delta ${deltaClass}`}>
          {delta >= 0 ? "▲" : "▼"} {Math.abs(delta)}% {deltaLabel}
        </div>
      )}
    </div>
  );
}
