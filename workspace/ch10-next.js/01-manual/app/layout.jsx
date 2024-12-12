import { Children } from "react";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next.js App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
