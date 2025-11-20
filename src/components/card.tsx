export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white shadow rounded-lg p-6 mb-6 ${className}`}>
      <div>{children}</div>
    </div>
  );
}
