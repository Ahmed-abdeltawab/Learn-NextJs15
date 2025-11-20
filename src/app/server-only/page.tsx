import { serverSideFunction } from "@/utils/serverSideFunction";
const Page = () => {
  const message = serverSideFunction();
  console.log(message);
  return <div>server only page</div>;
};

export default Page;
