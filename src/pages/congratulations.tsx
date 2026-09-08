import * as React from "react";
import { Link } from "react-router-dom";

export default function Congratulations() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="fixed top-0 left-0 bg-white flex items-center justify-between p-4 shadow w-full z-10">
        <img src="/logo.png" alt="Logo" className="scale-[0.65]" />
      </nav>

      <div className="grow flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded shadow-md w-96 text-center">
          <img
            src="/check.png"
            alt="Congrats"
            className="w-14 mx-auto mb-3"
          />
          <h2 className="text-2xl font-semibold mb-6">Congratulations</h2>
          <p className="text-gray-700 mb-6">
            You have unlocked 6,500 complementary points!
          </p>
          <Link
            to="/claim-verify"
            className="bg-red-900 text-white py-2 px-6 rounded-md inline-block hover:bg-red-800 transition"
          >
            Claim Points
          </Link>
        </div>
      </div>
    </div>
  );
}
