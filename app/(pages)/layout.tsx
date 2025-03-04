export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="overflow-x-hidden">
        <main>{children}</main>
      </body>
    </html>
  );
}
