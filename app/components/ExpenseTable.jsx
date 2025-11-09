"use client";

import { useMemo } from "react";

export default function ExpenseTable({ items, filter }) {
  const filtered = useMemo(() => {
    if (filter === "All") {
      return items;
    }
    return items.filter((item) => item.category === filter);
  }, [items, filter]);

  if (!filtered.length) {
    return <div className="empty-state">No expenses found for this view.</div>;
  }

  return (
    <div className="card">
      <div className="card-title">Recent Expenses</div>
      <table className="table">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Category</th>
            <th>Method</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <span className="badge">{item.category}</span>
              </td>
              <td>{item.method}</td>
              <td>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD"
                }).format(item.amount)}
              </td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
