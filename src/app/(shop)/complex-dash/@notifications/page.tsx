import Card from "@/components/card";
import Link from "next/link";

export default function NotificationsPage() {
  return (
    <Card>
      <div>
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <p className="text-gray-700">
          Manage and view notifications for users.{" "}
          <Link
            href="complex-dash/archieve"
            className="text-blue-500 hover:underline"
          >
            View Archived Notifications
          </Link>
        </p>
      </div>
    </Card>
  );
}
