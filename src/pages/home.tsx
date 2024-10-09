import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-10 sm:flex-row">
      <div className="p-8 border rounded-xl group hover:border-green-300 border-slate-200">
        <Link to={"/posts"}>
          <p className="text-4xl font-bold uppercase group-hover:text-green-500">
            Posts
          </p>
        </Link>
      </div>
      <div className="p-8 border rounded-xl group hover:border-green-300 border-slate-200">
        <Link to={"/users"}>
          <p className="text-4xl font-bold uppercase group-hover:text-green-500">
            Users
          </p>
        </Link>
      </div>
    </div>
  );
}
