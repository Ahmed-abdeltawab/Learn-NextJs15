import Card from "@/components/card";
import Link from "next/link";

// create simple page component
export default function ArchivePage() {
  return (
    <Card className="bg-green-400">
      <h1 className="text-2xl font-bold mb-4">Archived Notifications</h1>
      <Link href="/complex-dash" className="text-blue-500 hover:underline">
        Back to default Notifications
      </Link>
    </Card>
  );
}
