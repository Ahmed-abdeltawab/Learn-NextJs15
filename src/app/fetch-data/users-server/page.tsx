import { fetchLogged } from "@/utils/fetchLogged";

type User = {
  id: number;
  name: string;
  username: string;
  phone: string;
  email: string;
};
const UsersServer = async () => {
await new Promise(resolve => setTimeout(resolve, 2000));
const users: User[] = await fetchLogged(
    "https://jsonplaceholder.typicode.com/users"
);
  console.log(
    "[USERS SERVER] Users fetched:",
    users.length,
    "users at",
    new Date().toISOString()
  );
  return (
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
export default UsersServer;
