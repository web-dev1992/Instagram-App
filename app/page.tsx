import { Header } from "../components/Header";
import { Feed } from "../components/Feed";
export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* header */}
      <Header />
      {/* feed */}
      <Feed />
      {/* modal */}
    </div>
  );
}
