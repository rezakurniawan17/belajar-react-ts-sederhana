import { IUsers } from "../types";

export default function CardUsers({ user: user }: { user: IUsers }) {
  return (
    <div
      className="p-3 border rounded-lg group hover:bg-green-50 hover:border-green-400 border-slate-300 h-fit"
      key={user.id}
    >
      <div className="flex flex-col gap-2">
        <img
          className="w-20 h-20 rounded-full"
          src={`${user.image}`}
          alt={`${user.username} image`}
        />
        <p className="text-lg font-semibold group-hover:text-green-500">
          {user.firstName} {user.lastName}
        </p>
        <p className="text-sm text-slate-500">@{user.username}</p>
        <p className="inline-flex flex-row">{user.email}</p>
        <p>{user.phone}</p>
      </div>
    </div>
  );
}
