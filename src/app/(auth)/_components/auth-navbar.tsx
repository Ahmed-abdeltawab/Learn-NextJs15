"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const AuthNavbar = () => {
  const authLinks = [
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
    { name: "Forgot Password", path: "/forgot-password" },
  ];
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);
  return (
    <nav className="  p-4 border-b mb-8 shadow-sm bg-blue-600 text-white">
      <ul className="flex  gap-2">
        {authLinks.map((link) => {
          const isActive =
            pathname === link.path || pathname.startsWith(link.path + "/");
          return (
            <li key={link.name}>
              <Link
                href={link.path}
                className={isActive ? "font-bold underline" : "hover:underline"}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default AuthNavbar;
