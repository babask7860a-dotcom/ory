import * as React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between p-4 shadow bg-white">
      <img src="/logo.png" alt="Logo" className="scale-[0.65]" />
      <Link
        to="/proceed"
        className="hover:underline bg-[#8F1920] px-4 py-1 rounded-md text-white"
      >
        Login
      </Link>
    </nav>
  );
}
