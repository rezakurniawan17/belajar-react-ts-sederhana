import { useState, useEffect } from "react";
import { getUsers } from "../hooks/getUsers";
import { IUsers } from "../types";
import CardUsers from "../components/cardUsers";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.users);
    });
  });
  return (
    <div className="my-10">
      <Link to="/">
        <span className="text-slate-500 hover:text-red-500 text-lg inline-flex items-center gap-0.5">
          <ArrowLeft size="18" />
          Back
        </span>
      </Link>
      <h1 className="mt-3 text-5xl font-bold">All Users</h1>
      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
        {users ? (
          users.map((user: IUsers) => <CardUsers key={user.id} user={user} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
