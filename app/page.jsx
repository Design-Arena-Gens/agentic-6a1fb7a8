"use client";

import { useMemo, useState } from "react";
import SummaryCard from "./components/SummaryCard";
import ExpenseChart from "./components/ExpenseChart";
import ExpenseTable from "./components/ExpenseTable";
import Filters from "./components/Filters";
import { expenses, monthlyTrend, summary } from "./data";

export default function HomePage() {
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const unique = new Set(["All"]);
    expenses.forEach((expense) => unique.add(expense.category));
    return Array.from(unique);
  }, []);

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>Expense Pulse</h1>
        <p>
          Stay on top of your monthly spending with a snapshot of key metrics,
          trends, and recent transactions. Use the quick filters to drill down
          by category.
        </p>
      </header>

      <section className="grid dashboard">
        {summary.map((item) => (
          <SummaryCard key={item.title} {...item} />
        ))}
      </section>

      <section className="grid" style={{ gridTemplateColumns: "2fr 1fr" }}>
        <ExpenseChart data={monthlyTrend} />
        <Filters options={categories} active={category} onChange={setCategory} />
      </section>

      <ExpenseTable items={expenses} filter={category} />
    </main>
  );
}
