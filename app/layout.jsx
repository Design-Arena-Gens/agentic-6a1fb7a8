import "./globals.css";

export const metadata = {
  title: "Expense Dashboard",
  description: "Minimal dashboard to keep track of expenses"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
