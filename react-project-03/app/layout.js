import "./globals.css";

export const metadata = {
  title: "My React App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning >{children}</body>
    </html>
  );
}
