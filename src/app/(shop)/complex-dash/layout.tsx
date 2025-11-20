import "../../globals.css";
export default function ComplexDashLayout({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-6 flex flex-col gap-6">
        {children}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="col-span-1">
            {users}
            {revenue}
          </section>
          {/* <section className="col-span-1"></section> */}
          <section className="col-span-1">{notifications}</section>
        </div>
      </main>
    </div>
  );
}
