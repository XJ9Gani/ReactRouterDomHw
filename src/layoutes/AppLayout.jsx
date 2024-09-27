import { NavLink, Outlet } from "react-router-dom";
import { useCallback } from "react";

export default function Applayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
