import "./globals.css";

export const metadata = {
  title: "The Green Giraffe Dispensary",
  description: "Minimal, clean, nature-inspired dispensary website."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
