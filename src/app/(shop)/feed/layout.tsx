export default function FeedLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="p-4">
      <h1>Photo Feed</h1>
      <div className="grid grid-cols-3  gap-4 mb-4">
        {children}
        {modal}
      </div>
    </div>
  );
}
