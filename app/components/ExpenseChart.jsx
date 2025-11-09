"use client";

const barHeights = (items) => {
  const max = Math.max(...items.map((item) => item.amount), 1);
  return items.map((item) => ({
    ...item,
    height: Math.round((item.amount / max) * 100)
  }));
};

export default function ExpenseChart({ data }) {
  const chartData = barHeights(data);

  return (
    <div className="card">
      <div className="card-title">Spending Trend</div>
      <div className="chart">
        {chartData.map((item) => (
          <div className="chart-bar" key={item.label}>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{ height: `${item.height}%` }}
                aria-label={`${item.label} spending ${item.amount}`}
              />
            </div>
            <div className="chart-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
