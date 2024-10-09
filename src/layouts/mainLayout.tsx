import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="w-full min-h-screen bg-white text-slate-800">
      <div className="mx-auto max-w-7xl">
        <div className="mx-4 xl:mx-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
